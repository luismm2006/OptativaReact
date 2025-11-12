function Stop({timeoutRef, setIsRunning, stopTimer}) {
    const stopTimer = () => {
        setIsRunning(false);
        clearTimeout(timeoutRef.current);
      };
  return(
        <button onClick={stopTimer}>Stop</button>
  )
}
export default Stop;