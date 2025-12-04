const URL = "http://localhost:3000/creatures";

const handleResponse = (response) => {
    if(!response.ok){
        throw new Error("Error HTTP " + response.status);
    }
    return response.json();
}
const handleError = (error) => {
    console.error(error);
    throw error;
}

export async function getAllCreatures(){
    try {
        const res = await fetch(URL);
        const data = await handleResponse(res);
        return data;
    } catch (error) {
        handleError(error);
    }
}
export async function PostCreatures(creature){
    try {
        const res = await fetch(URL, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(creature)
            }
        );
        return await handleResponse(res);
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function getById(id) {
    try {
        const res = await fetch(URL + "/" + id);
        const data = await handleResponse(res);
        return data;
    } catch (error) {
        handleError(error);
    }
}


export async function putCreatures(id, happiness){
    try {
        const creature = await getById(id);
        creature.happiness = happiness;
        const res = await fetch(URL + "/" + id, 
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(creature)
            }
        );
        return await handleResponse(res);
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function deleteById(id) {
    try {
        const res = await fetch(URL + "/" + id, {
            method: "DELETE"
        })
        return await handleResponse(res);
    } catch (error) {
        handleError(error);
        throw error;
    }
}