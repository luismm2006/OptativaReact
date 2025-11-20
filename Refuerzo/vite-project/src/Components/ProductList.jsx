import ProductItem from "./ProductItem";

export default function ProductList({product, deleteProduct, toggleFavorite}){

    return(
        <>
            Productos de la lista
            {product.map((p)=>{
                return(
                <ProductItem key={p.id} id={p.id} nombre={p.name} categoria={p.category} favorite={p.favorite} deleteProduct={deleteProduct} toggleFavorite={toggleFavorite}/>
                );
            })}
        </>
    );
}