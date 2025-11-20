import { useState } from "react";
export default function ProductCounter({items, updateItem}){

    return(
        <>
            {items.map((i)=>{
                const handleAddQuantity = () => {
                    if((i.quantity +1)>i.max){
                        updateItem(i.id, i.quantity=i.max);
                    }else{
                        updateItem(i.id, i.quantity +1);
                    }
                }
            
                const handleDegreeQuantity = () => {
                    if((i.quantity -1)<0){
                        updateItem(i.id, i.quantity=0);
                    }else{
                        updateItem(i.id, i.quantity -1);
                    }
                    
                }
                return(
                    <>
                        <div key={i.id}>
                            <button type="button" onClick={handleAddQuantity}>+</button>
                            <p>Nombre: {i.name} Cantidad: {i.quantity}</p>
                            <button type="button" onClick={handleDegreeQuantity}>-</button>
                        </div>
                        --------------------------------------
                    </>
                );
            })}
        </>
    );
}