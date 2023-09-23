import React from 'react'

function Quizresult(props) {
  return (
    <>
    <div className='show'>Your score:{props.score}<br/>
    Total Score:{props.totalScore}
    </div>
    <button id="nextbtn" onClick={props.tryagain}>Try Again</button>
    </>
  )
}

export default Quizresult