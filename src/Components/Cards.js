import React from 'react'

function Card({card, handleChoice, flipped}) {
    function handleClick(){
        handleChoice(card);
    }
    return (
        <div className={card.matched ? 'pcard vanish' :'pcard'}>
            <div className={flipped ? 'img-container flipped' : 'img-container'}>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src={(card.type === 'pink') ?'https://maching-game-ts.vercel.app/pinkCard.png': 'https://maching-game-ts.vercel.app/blueCard.png'}
                onClick={handleClick}
                 alt='card back'  />
            </div>
        </div>
    )
}

export default Card