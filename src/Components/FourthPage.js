import React from "react";
import "./FourthPage.css";
import { useNavigate } from "react-router-dom";

const FourthPage = () => {
  const navi = useNavigate();

  const backBtn = () => {
    navi("/thirdpage");
  };

  const playBtn = () =>{
    navi("/gamestart")
  }

  return (
    <div className="fourthPage_container">
      {/* Back Button */}
      <div className="backBtn" onClick={backBtn}>
        <img
          src="https://maching-game-ts.vercel.app/back.png"
          alt="backBtn.png"
        />
      </div>

      {/* progress Bar */}
      {/* <div className="bar"></div> */}

      {/* instructions */}
      {/* <div className="instruction"> */}
        <ul className="threeCards">
            <li className="setCard">
                <div className="img">
                    <img className="pinkCard" src="https://maching-game-ts.vercel.app/pinkCard.png" alt="pinkCard.png" />
                    <img className="appleCard" src="https://maching-game-ts.vercel.app/applePink.png" alt="appleCard.png" />
                </div>
                <div className="cardContent">
                    <div className="numberImg">
                        <img className="number" src="https://maching-game-ts.vercel.app/1.png" alt="number.png" />
                    </div>
                    <div className="context">
                        <h1>Select a <br />pink card.</h1>
                        <h2>It has images.</h2>
                    </div>
                </div>
            </li>
            <li className="setCard">
            <div className="img">
                    <img className="pinkCard" src="https://maching-game-ts.vercel.app/blueCard.png" alt="pinkCard.png" />
                </div>
                <div className="cardContent">
                    <div className="numberImg">
                        <img className="number" src="https://maching-game-ts.vercel.app/2.png" alt="number.png" />
                    </div>
                    <div className="context">
                        <h1>Select a <br />blue card.</h1>
                        <h2>It has alphabets.</h2>
                    </div>
                </div>
            </li>
            <li className="setCard">
            <div className="setimg">
                    <img className="setwidth" src="https://maching-game-ts.vercel.app/groupCard.png" alt="pinkCard.png" />
                </div>
                <div className="cardContent">
                    <div className="numberImg">
                        <img className="number" src="https://maching-game-ts.vercel.app/3.png" alt="number.png" />
                    </div>
                    <div className="context1">
                        <h2>If they’re the <br /> same</h2>
                        <h1>It's a match!</h1>
                        <h2>Otherwise retry :(</h2>
                    </div>
                </div>
            </li>
        </ul>
      {/* </div> */}

      {/* Play Button */}
      <div className="start_btn" onClick={playBtn}>
        <img
          src="https://maching-game-ts.vercel.app/play.png"
          alt="start.png"
        />
      </div>
    </div>
  );
};

export default FourthPage;
