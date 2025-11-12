function Reset({setTime, stopTimer}) {
    const resetTimer = () => {
      stopTimer();
      setTime(0);
    };
  return(
        <button onClick={resetTimer}>Reset</button>
  )
}
export default Reset;