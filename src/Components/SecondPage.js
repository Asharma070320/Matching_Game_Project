import React from 'react'
import './SecondPage.css'
import { useNavigate } from 'react-router-dom'

const SecondPage = () => {

    const navi = useNavigate();

    const backBtn =() =>{
        navi("/")
    }

    const nextBtn =() =>{
      navi('/thirdpage')
    }

  return (
    <div className='secondPage_container'>
      <div className="monkeyImg">
        <img src="https://maching-game-ts.vercel.app/happyMonkey.png" alt="monkey.png" />
      </div>
      <div className="msg_Box">
        <img src="https://maching-game-ts.vercel.app/messagebox.png" alt="messageBox.png" />
        <h2 className='love_bananas'>Hi, I am Mizo and I love bananas 🍌</h2>
      </div>
      <div className="start_btn" onClick={nextBtn}>
        <img src="https://maching-game-ts.vercel.app/next.png" alt="start.png" />
      </div>
      <div className="backBtn" onClick={backBtn}>
        <img src="https://maching-game-ts.vercel.app/back.png" alt="backBtn.png" />
      </div>
    </div>
  )
}

export default SecondPage
