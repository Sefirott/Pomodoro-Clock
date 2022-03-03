import React, { useEffect, useState } from "react";



   function App() {
   
   const [session, setSession] = useState(24);
   const [length, setLength] = useState(25);
   const [gap, setGap] = useState(4);
   const [gaplength, setGaplength] = useState(5);
   const [counter, setCounter] = useState(59);
   const [timer, setTimer] = useState(false);
   const [gapcount, setGapcount] = useState(59);
  
 
   
   const gapPlus = () => {
     if(gap < 60) {
       setGap(gap + 1); 
       setGaplength(gaplength + 1);
     }
   }
   const gapMinus = () => {
     if(gap > 0) {
       setGap(gap - 1);
       setGaplength(gaplength - 1);
     }
   }
   const sessionPlus = () => {
     if(session < 60) {
       setSession(session + 1);
       setLength(length + 1)
     }
   }
   const sessionMinus = () => {
     if(session > 0) {
       setSession(session - 1)
       setLength(length - 1)
     }
   }
  
   const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");
   
   
   useEffect(() => {
   let myInterval = setInterval(() => {
   if(timer == true) {
     if(counter > 0) {
       setCounter(counter - 1)
     }
       if(session == 0 && counter == 0) {
         if(gap == gaplength - 1 && gapcount > 58)
            {
           audio.play();
         }
         if(gapcount > 0) {
           setGapcount(gapcount - 1);
         }
         if(gap > 0 && gapcount == 0) {
          setGap(gap - 1);
         setGapcount(59)
         }
     if(gap == 0 && gapcount == 0) {
       audio.play();
       setSession(length);
       setCounter(59);
       setGap(gaplength);
       setGapcount(59);
     }
       }
     if(counter == 0) {
       if(session == 0) {
         clearInterval(myInterval)
         
       }
       
       else {
         setSession(session - 1);
         setCounter(59);
       }
     }
   }
   }, 1000)
   
   return () => {
            clearInterval(myInterval);
          };
   
   });
     
   return (
     <>
       
       <section> 
       <div className="vertical">

         <h3 className="break">Break Length</h3>

         <h3 className="session">Session Length</h3>

         <p className="gap">{gaplength}</p>

         <button className="btn gapPlus" onClick={() => gapPlus()}>+</button>

         <button className="btn gapMinus" onClick={() => gapMinus()}>-</button>

         <p className="set">{length}</p>

          <button className="btn plus" onClick={() => sessionPlus()}>+</button>

         <button className="btn minus" onClick={() => sessionMinus()}>-</button>

         <h3 className="sess">Session</h3>

         <h3 className="titleb">Break</h3>

         <p className="gapp">{gap}:{gapcount}</p>

         <p className="timer">{session}:{counter}</p>

         <button className="btn startBtn" onClick={() => setTimer(true)}>Start</button>
         
         <button className="btn pauseBtn" onClick={() => setTimer(false)}>Pause</button>
         
         </div>
    
 
       </section>
       
       
     </>  
   )
 }

export default App;
