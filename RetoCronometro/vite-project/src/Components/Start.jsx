function Start({isRunning, setIsRunning}) {
    const startTimer = () => {
        if (!isRunning) {
        setIsRunning(true);
        }
    };
  return(
    <button onClick={startTimer} disabled={isRunning}>Start</button>
  )
}
export default Start;