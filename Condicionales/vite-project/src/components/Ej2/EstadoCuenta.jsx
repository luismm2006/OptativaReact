function EstadoDeCuenta({ isPositive }) {
return (
    <div>
        {isPositive ? "Saldo positivo" : "Saldo negativo"}
    </div>
    );
}
export default EstadoDeCuenta;