import React from 'react'
import './FirstPage.css'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {

    const navi = useNavigate()

    const startBtn = () =>{
        navi("/secondpage")
    }

  return (
    <div className='firstPage_container'>
      <div className="monkeyImg">
        <img src="https://maching-game-ts.vercel.app/happyMonkey.png" alt="monkey.png" />
      </div>
      <div className="msg_Box">
        <img src="https://maching-game-ts.vercel.app/messagebox.png" alt="messageBox.png" />
        <h2 className='welcome_kiddo'>Welcome Kiddo!</h2>
      </div>
      <div className="start_btn" onClick={startBtn}>
        <img src="https://maching-game-ts.vercel.app/start.png" alt="start.png" />
      </div>
    </div>
  )
}

export default FirstPage
