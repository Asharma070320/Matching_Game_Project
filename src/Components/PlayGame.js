import { useEffect, useRef, useState } from "react";
import "./PlayGame.css";
import { useNavigate } from "react-router-dom";
import Card from "./Cards";
import apple from '../Bright Champs Images/apple-card.png'
import orange from '../Bright Champs Images/orange-card.png'
import cherries from '../Bright Champs Images/cherries.png'
import lemon from '../Bright Champs Images/lemon.png'
import grapes from '../Bright Champs Images/grapes.png'
import watermelon from '../Bright Champs Images/watermelon.png'

import a from '../alphabet/a-card.png'
import c from '../alphabet/c-card.png'
import g from '../alphabet/g-card.png'
import l from '../alphabet/l-card.png'
import o from '../alphabet/o-card.png'
import w from '../alphabet/w-card.png'

const PlayGame = () => {

    const navi = useNavigate();

  const pCards = [
    { src: apple, id:0, matched: false, type: "pink" },
    { src: orange, id:1, matched: false, type: "pink" },
    { src: cherries, id:2, matched: false, type: "pink" },
    { src: lemon, id:3, matched: false, type: "pink" },
    { src: grapes, id:4, matched: false, type: "pink" },
    { src: watermelon, id:5, matched: false, type: "pink" },
  ];
  const bCards = [
    { src: a, id:0, matched: false, type: "blue" },
    { src: o, id:1, matched: false, type: "blue" },
    { src: c, id:2, matched: false, type: "blue" },
    { src: l, id:3, matched: false, type: "blue" },
    { src: g, id:4, matched: false, type: "blue" },
    { src: w, id:5, matched: false, type: "blue" },
  ];

  const [pinkCards, setPinkCards] = useState([]);
  const [blueCards, setBlueCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [filled, setFilled] = useState(0);
  const [life,setLife] = useState(5);
  const overlayRef = useRef(null);

  const shufflePinkCards = () => {
    const shuffledPinkCards = [...pCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setPinkCards(shuffledPinkCards);
  };

  const shuffleBlueCards = () => {
    const shuffledBlueCards = [...bCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setBlueCards(shuffledBlueCards);
  };

  const handleChoice = (card) => {
    // console.log(card);
    if (card.type === "pink" && choiceOne === null) {
      setChoiceOne(card);
    }
    if (card.type === "blue" && choiceOne !== null) {
      setChoiceTwo(card);
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const goToFinal = () =>{
    setTimeout(() => {
       navi("/display")
    }, 1000);
}

useEffect(()=>{
    if (choiceOne && choiceTwo) {
        // console.log(choiceOne.src.charAt(14));
        // console.log(choiceTwo.src.charAt(14));
        if (choiceOne.src.charAt(14) === choiceTwo.src.charAt(14)) {
            setPinkCards((prev) => {
                return prev.map((card) => {
                    if (card.src === choiceOne.src) {
                        return { ...card, matched: true };
                    } else {
                        return card;
                    }
                })
            });
            setBlueCards((prev) => {
                return prev.map((card) => {
                    if (card.src === choiceTwo.src) {
                        return { ...card, matched: true };
                    } else {
                        return card;
                    }
                })
            });
            setFilled((prev)=>{
                if(prev+17 > 100) goToFinal();
                return prev+17
            });
            overlayRef.current.style.display = 'flex';
            setTimeout(()=>{resetTurn()},1000);
        } else {
            setTimeout(()=>{resetTurn()},1000);
            if(life==1){
                navi("/display")
            }else{
                setLife((prev) => prev-1);
            }
        }
    }
},[choiceOne,choiceTwo])

useEffect(() => {
    shufflePinkCards();
    shuffleBlueCards();
    setFilled(0);
}, []);
 

  const backBtn = () => {
    navi("/intructions");
  };

  return (
    <div className='instructions'>
    {choiceOne && choiceTwo && (<div className='overlay lay' ref={overlayRef}>
        <h1>It’s a match !</h1>
        <div style={{transform:"rotate(-10deg)"}}>
            <img src={choiceOne.src} alt='apple card' style={{width:"10rem"}}/>
        </div>
        <div style={{transform:"rotate(10deg)"}}>
            <img src={choiceTwo.src} alt='apple card' style={{width:"10rem"}}/>
        </div>
    </div>)}
    <div className="chances_left">
        <h2>Chance :-{life}</h2>
    </div>
<div className='cards-container'>
<img src='https://matching-game-projectt.netlify.app/banana.png' alt='banana' className='banana ana'/>
    <div className='progress-bar'>
        <div style={{
            height:"100%",
            width: `${filled}%`,
            background : 'linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25)',
            transition: "width 0.5s"                      
        }}></div>
    </div>
    <div className='pink-card-grid'>
        {pinkCards.map((card) => (
            <Card key={card.id}
                card={card} handleChoice={handleChoice}
                flipped= {card === choiceOne || card.matched} />
        ))}
    </div>
    <div className='blue-card-grid'>
        {blueCards.map((card) => (
            <Card key={card.id}
                card={card} handleChoice={handleChoice} 
                flipped= {card === choiceTwo || card.matched}/>
        ))}
    </div>
</div>
<div className="backBtn" onClick={backBtn}>
        <img
          src="https://maching-game-ts.vercel.app/back.png"
          alt="backBtn.png"
        />
      </div>
</div>
  );
};

export default PlayGame;
