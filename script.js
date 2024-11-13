function startChaos() {
  // Check if pop-ups are allowed by opening and immediately closing a test window
  const testPopup = window.open('', '', 'width=100,height=100');
  if (testPopup === null || typeof testPopup === 'undefined') {
      alert("Please enable pop-ups for ur browser update!");
      return; // Stop execution if pop-ups are blocked
  } else {
      testPopup.close();
  }

  // Directly play sound in the main window to ensure it starts after the button click
  const audio = new Audio('annoying-sound.mp3');
  audio.volume = 1.0; // Maximum volume
  audio.loop = true;  // Loop the sound
  audio.play().catch(error => console.log("Autoplay prevented:", error));

  // Start a loop to continuously open pop-up windows
  setInterval(createMovingPopup, 500); // Opens a new window every 500ms
}

function createMovingPopup() {
  // Specify the window size and features
  const width = 500;
  const height = 250;
  const left = Math.random() * (window.screen.width - width);
  const top = Math.random() * (window.screen.height - height);

  // Open a new window with random initial position
  const popup = window.open('', '', `width=${width},height=${height},left=${left},top=${top}`);
  if (popup) {
      popup.document.write(`
          <body style="background-color:#000000; display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">
              <img src="prank-image.jpg" alt="Prank Image" style="max-width: 100%; max-height: 100%;">
          </body>
      `);

      // Function to move the window around randomly
      function movePopup() {
          const newLeft = Math.random() * (window.screen.width - width);
          const newTop = Math.random() * (window.screen.height - height);
          popup.moveTo(newLeft, newTop);
      }

      // Move the pop-up every 700 milliseconds
      setInterval(movePopup, 500);
  }
}
