import React from 'react'
import './ThirdPage.css'
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {

    const navi = useNavigate();

    const backBtn =() =>{
        navi("/secondpage")
    }

    const yesBtn = () =>{
        navi("/intructions")
    }

  return (
    <div className='thirdPage_container'>
        {/* <div className="bar"></div> */}
      <div className="monkeyImg">
        <img src="https://maching-game-ts.vercel.app/happyMonkey.png" alt="monkey.png" />
      </div>
      <div className="msg_Box">
        <img src="https://maching-game-ts.vercel.app/messagebox.png" alt="messageBox.png" />
        <h2 className='love_bananas'>Can you help me get some? 🤔</h2>
      </div>
      <div className="start_btn" onClick={yesBtn}>
        <img src="https://maching-game-ts.vercel.app/yes.png" alt="start.png" />
      </div>
      <div className="backBtn" onClick={backBtn}>
        <img src="https://maching-game-ts.vercel.app/back.png" alt="backBtn.png" />
      </div>
    </div>
  )
}

export default ThirdPage
