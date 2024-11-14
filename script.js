function startChaos() {
    // Check if pop-ups are allowed
    const testPopup = window.open('', '', 'width=100,height=100');
    if (testPopup === null || typeof testPopup === 'undefined') {
        alert("Please enable pop-ups to start the browser Update");
        return;
    } else {
        testPopup.close();
    }

    // Play sound in main window
    const audio = new Audio('annoying-sound.mp3');
    audio.volume = 1.0;
    audio.loop = true;
    audio.play().catch(error => console.log("Autoplay prevented:", error));

    // Start pop-ups for chaos and ads
    setInterval(createMovingPopup, 500); // Prank pop-up every 500ms
    setInterval(createAdPopup, 2000);    // Ad pop-up every 2 seconds
}

// Function to create prank pop-ups
function createMovingPopup() {
    const width = 200;
    const height = 200;
    const left = Math.random() * (window.screen.width - width);
    const top = Math.random() * (window.screen.height - height);

    const popup = window.open('', '', `width=${width},height=${height},left=${left},top=${top}`);
    if (popup) {
        popup.document.write(`
            <style>html, body { margin: 0; height: 100%; overflow: hidden; } img { width: 100%; height: 100%; }</style>
            <img src="prank-image.jpg" alt="Prank Image">
            <audio autoplay loop><source src="annoying-sound.mp3" type="audio/mpeg"></audio>
        `);
        
        // Make the pop-up move around
        setInterval(() => {
            const newLeft = Math.random() * (window.screen.width - width);
            const newTop = Math.random() * (window.screen.height - height);
            popup.moveTo(newLeft, newTop);
        }, 700);
    }
}

// Function to create ad pop-ups
function createAdPopup() {
    const width = 250;
    const height = 150;
    const left = Math.random() * (window.screen.width - width);
    const top = Math.random() * (window.screen.height - height);

    const popup = window.open('', '', `width=${width},height=${height},left=${left},top=${top}`);
    if (popup) {
        // Random ad content
        const ads = [
            `<div style="text-align:center; font-family:Arial, sans-serif; color:black;">
                <h3>Got eliPhobia?</h3>
                <p>Afraid of Eli? Get help now!</p>
                <button onclick="window.close()">Click Here!</button>
             </div>`,
            `<div style="text-align:center; font-family:Arial, sans-serif; color:red;">
                <h3>Is Eli haunting you?</h3>
                <p>You may be suffering from eliPhobia!</p>
                <button onclick="window.close()">Get Help Now!</button>
             </div>`,
            `<div style="text-align:center; font-family:Comic Sans MS; color:blue;">
                <h3>Scared of Eli?</h3>
                <p>Maybe it's eliPhobia!</p>
                <button onclick="window.close()">Free Diagnosis!</button>
             </div>`
        ];

        // Select a random ad from the list
        const randomAd = ads[Math.floor(Math.random() * ads.length)];
        
        popup.document.write(`
            <style>html, body { margin: 0; padding: 10px; background-color: yellow; } button { font-size: 14px; padding: 5px; }</style>
            ${randomAd}
        `);
    }
}
