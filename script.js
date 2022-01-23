function Timer() {

  const [session, setSession] = React.useState(24);
  const [length, setLength] = React.useState(25);
  const [gap, setGap] = React.useState(4);
  const [gaplength, setGaplength] = React.useState(5);
  const [counter, setCounter] = React.useState(59);
  const [timer, setTimer] = React.useState(false);
  const [gapTrue, setGapTrue] = React.useState(false);
  const [gapcount, setGapcount] = React.useState(59);
  const ref = React.useRef();
  //60 min session, 60 min break length.

  const gapPlus = () => {
    if (gap < 60) {
      setGap(gap + 1);
      setGaplength(gaplength + 1);
    }
  };
  const gapMinus = () => {
    if (gap > 0) {
      setGap(gap - 1);
      setGaplength(gaplength - 1);
    }
  };
  const sessionPlus = () => {
    if (session < 60) {
      setSession(session + 1);
      setLength(length + 1);
    }
  };
  const sessionMinus = () => {
    if (session > 0) {
      setSession(session - 1);
      setLength(length - 1);
    }
  };

  const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");


  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer == true) {
        if (counter > 0) {
          setCounter(counter - 1);
        }
        if (session == 0 && counter == 0) {
          if (gap == gaplength - 1 && gapcount > 58)
          {
            audio.play();
          }
          if (gapcount > 0) {
            setGapcount(gapcount - 1);
          }
          if (gap > 0 && gapcount == 0) {
            setGap(gap - 1);
            setGapcount(59);
          }
          if (gap == 0 && gapcount == 0) {
            audio.play();
            setSession(length);
            setCounter(59);
            setGap(gaplength);
            setGapcount(59);
          }
        }
        if (counter == 0) {
          if (session == 0) {
            clearInterval(myInterval);

          } else

          {
            setSession(session - 1);
            setCounter(59);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };

  });

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/

    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", { className: "vertical" }, /*#__PURE__*/
    React.createElement("h3", { className: "break" }, "Break Length"), /*#__PURE__*/
    React.createElement("h3", { className: "session" }, "Session Length"), /*#__PURE__*/
    React.createElement("p", { className: "gap" }, gaplength), /*#__PURE__*/
    React.createElement("button", { className: "btn gapPlus", onClick: () => gapPlus() }, "+"), /*#__PURE__*/
    React.createElement("button", { className: "btn gapMinus", onClick: () => gapMinus() }, "-"), /*#__PURE__*/
    React.createElement("p", { className: "set" }, length), /*#__PURE__*/
    React.createElement("button", { className: "btn plus", onClick: () => sessionPlus() }, "+"), /*#__PURE__*/
    React.createElement("button", { className: "btn minus", onClick: () => sessionMinus() }, "-"), /*#__PURE__*/
    React.createElement("h3", { className: "sess" }, "Session"), /*#__PURE__*/
    React.createElement("h3", { className: "titleb" }, "Break"), /*#__PURE__*/
    React.createElement("p", { className: "gapp" }, gap, ":", gapcount), /*#__PURE__*/
    React.createElement("p", { className: "timer" }, session, ":", counter), /*#__PURE__*/
    React.createElement("button", { className: "btn startBtn", onClick: () => setTimer(true) }, "Start"), /*#__PURE__*/
    React.createElement("button", { className: "btn pauseBtn", onClick: () => setTimer(false) }, "Pause")))));









}


ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(Timer, null)),

document.getElementById("root"));