import React, { useState } from 'react';
import Balloon from './Balloon';
import Score from './Score.jsx';

function App() {
  const [score, setScore] = useState(0); // Define score state in App component

  return (
    <>
      <nav>
        <h1>Ballooon Blast</h1>      
      </nav>
      <Score score={score}/> {/* Pass score as a prop */}
      <Balloon setScore={setScore} /> {/* Pass setScore as a prop */}
    </>
  );
}

export default App;
