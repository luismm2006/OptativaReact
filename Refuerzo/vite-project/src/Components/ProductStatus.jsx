export default function ProductStatus({isInStock}){
    return (
        isInStock ? "Disponible" : "Agotado"
    );
}