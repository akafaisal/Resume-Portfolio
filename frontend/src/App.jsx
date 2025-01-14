import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal"; // Import Fade from react-awesome-reveal
import { FaPlay } from "react-icons/fa"; // Import the play icon from react-icons
import Mainpage from "./Mainpage"; // Your Mainpage component

const App = () => {
  // State to control the visibility of the welcome screen
  const [showWelcome, setShowWelcome] = useState(true);

  // Reference to the audio element
  const audioRef = useRef(new Audio("/path/to/your/audio/file.mp3")); // Update the path to your audio file

  // Function to handle the play button click
  const handlePlayButtonClick = () => {
    setShowWelcome(false); // Hide the welcome screen
    audioRef.current.play(); // Play the audio
  };

  return (
    <>
      {showWelcome && (
        <Fade duration={2000} triggerOnce>
          <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex justify-center items-center z-50">
            <div className="text-4xl text-center flex flex-col justify-center items-center">
              Welcome to Home
              <button
                onClick={handlePlayButtonClick}
                className="mt-6 p-7   text-3xl bg-transparent border-4 border-white rounded-full cursor-pointer text-white flex justify-center items-center"
              >
                <FaPlay size={40} />
              </button>
            </div>
          </div>
        </Fade>
      )}

      {/* Mainpage component, shown after the welcome screen is hidden */}
      {!showWelcome && <Mainpage />}
    </>
  );
};

export default App;
