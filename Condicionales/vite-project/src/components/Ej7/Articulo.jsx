function Articulo({ isPublished }) {
let estado;
 estado = isPublished ? "Publicado" : "En borrador";
// Asigna el texto correcto a la variable estado
    return (
        <div>
            {estado}
        </div>
    );
}
export default Articulo;