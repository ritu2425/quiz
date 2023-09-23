import React, { useState } from 'react'
import { QuizeData } from '../data/quizedata';
import Quizresult from './quizresult';

 
 function Quiz() {
  const [currentqs,setCurrentqs]=useState(0);
  const [score,setScore]=useState(0);
  const [clickedop,setClickedop]=useState(0);
 const [show,setShow]=useState(0); 
 
  const ChangeQs=()=>{
      UpdateScore();
    if(currentqs<QuizeData.length-1){
      setCurrentqs(currentqs+1);
      setClickedop(0);
    }else{
      setShow(true)

  
    }

  }
  const UpdateScore=()=>{
    if(clickedop===QuizeData[currentqs].answer){
      setScore(score+1);
    }
  }
  const reset=()=>{
    setShow(false);
    setCurrentqs(0);
    setClickedop(0);
    setScore(0);
  }
  return (
    <div>
        <p className='headingtext'>QUIZ APP</p>
        <div className='container'>
          {show ?(
            <Quizresult score={score} totalScore={QuizeData.length} tryagain={reset}></Quizresult>
          ):(
            <>
            
         
            <div className='question'>
                <span id='questionno'>{currentqs+1}</span>
                <span id='questiontext'>{QuizeData[currentqs].question}</span>
            </div>
            <div className='optioncontainer'>
              {QuizeData[currentqs].options.map((option,i)=>{
                  return(
                     <button //className='optionbtn'
                     className={`optionbtn ${ clickedop ==i+1?"checked":null}`}
                   
                   key={i} onClick={()=>setClickedop(i+1)}>
                      
                        {option}
                    </button>
                  )
              }) }
            </div>
            <input type='button' value="next" id="nextbtn" onClick={ChangeQs}/>
            </>
             )}
        </div>
    </div>
  )
}
export default Quiz;
