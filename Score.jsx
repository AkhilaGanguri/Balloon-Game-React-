import React, { useState, useEffect } from 'react';

function Score({ score }) { // Receive score as a prop
    const [time, setTime] = useState(30);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        if (time === 0) {
            clearInterval(timer);
            setShowPopup(true); // Display popup when time reaches 0
        }

        return () => clearInterval(timer);
    }, [time]);

    const handlePlayAgain = () => {
        window.location.reload();
    };

    return (
        <>
            <ul>
                <li>Time: {time}</li>
                <li>Score: {score}</li>
                <li><button onClick={handlePlayAgain}>Restart</button></li>
            </ul>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1 id="gameover">Game Over!</h1>
                        <p id="game-over">Your score is: {score}</p>
                        <button onClick={handlePlayAgain}>Play Again</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Score;
