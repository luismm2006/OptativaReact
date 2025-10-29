function EstadoConexion({ status }) {
    return (
    <div>
        {status == "online" ? "En linea" : status == "offline" ? "Desconectado" : status == "away" ? "Ausente" : null}
    </div>
    );
}
export default EstadoConexion;