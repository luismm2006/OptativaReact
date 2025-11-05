import { useState } from "react";

function FormList(){
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [textArray, setTextArray] = useState([]);
    function handleAdd(){
        if(userName.trim() !== "" && fullName.trim() !== "" && age.trim() !== ""){
            const person = {userName, fullName, age};
            setTextArray([...textArray, person]);
            setUserName("");
            setFullName("");
            setAge("");

        }
    }

    return(
        <>
                ---------------------------------------------
                
            <div>
                <label htmlFor="userName">Username: </label>
                <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="fullName">FullName: </label>
                <input type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <button type="button" onClick={handleAdd}>Submit</button>
            </div>
            <p>Request Sent to DB with below request data</p>
            
                {textArray.map((textArray, index) => (
                    <ul key={index}>
                        <li>
                            UserName: {textArray.userName} 
                        </li>
                        <li>
                            FullName: {textArray.fullName}
                        </li>
                        <li>
                            Age: {textArray.age}
                        </li>
                    </ul>
                ))}
        </>
    )
}
export default FormList;