export default function ProductItem({id, nombre, categoria, favorite, deleteProduct, toggleFavorite}){
    const handleFav = () => {
        toggleFavorite(id);
    }
    const handleDelete = () => {
        deleteProduct(id);
    }
    return(
        <>
            <br />
            Nombre: {nombre}
            <br />
            Categoria: {categoria}
            <br />
            {favorite ? "⭐" : ""}
            <button onClick={handleFav}>Añadir a favoritos</button>
            <button onClick={handleDelete}>Eliminar</button>
        </>
    );
}