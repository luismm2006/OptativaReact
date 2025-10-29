function Notificacion({ isCompleted }) {
return (
    <div>
        {isCompleted ? "✔️ " : "❌"}
    </div>
);
}
export default Notificacion;