import React from 'react'
import './DisplayScreen.css'
import { useNavigate } from 'react-router-dom';

const DisplayScreen = () => {

    const navi = useNavigate();

    const restartBtn = () => {
        navi("/intructions")
    }

  return (
    <div className="display">
        <div className="monkeyBox">
            <img className='logo' src="https://maching-game-ts.vercel.app/topDesign.png" alt="earnedBanana.png" />
            

            <div className="monkey_smile">
                <img src="https://maching-game-ts.vercel.app/happyMonkey2.png" alt="happyMonkey.png" />
            </div>

            <div className="restartBtn" onClick={restartBtn}>
        <img
          src="https://maching-game-ts.vercel.app/restart.png"
          alt="restart.png"
        />
      </div>
      <h2 className='earned_Banana'>Earned Bananas 🍌</h2>
        </div>
    </div>
  )
}

export default DisplayScreen
