// Balloon.jsx
import React, { useState } from 'react';
import balloon1 from './balloon1.gif';
import poppedBalloon from './aqua.png'; // Import the new image

function Balloon({ setScore }) {
    const [balloons, setBalloons] = useState(Array.from({ length: 90 }, () => balloon1));
    const handleClick = (index) => {
        const newBalloons = [...balloons];
        if (newBalloons[index] !== poppedBalloon) {
            // Increment score only if the balloon is not already popped
            setScore((prevScore) => prevScore + 1);
            
        }
        newBalloons[index] = poppedBalloon; // Replace the clicked balloon image with the new image
        setBalloons(newBalloons);
    };

    return (
        <>
            {balloons.map((balloon, index) => (
                <img
                    key={index}
                    onClick={() => handleClick(index)} // Call handleClick with the index
                    src={balloon}
                    alt="balloon"
                />
            ))}
        </>
    );
}

export default Balloon;
