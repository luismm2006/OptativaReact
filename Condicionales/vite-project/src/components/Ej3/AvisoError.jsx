function AvisoError({ hasError }) {
return (
    <div>
        {hasError && "Ocurrio un error"}
    </div>
);
}
export default AvisoError;