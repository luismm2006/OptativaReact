import { useState } from "react";
export default function ProfileForm({onUpdateProfile}){
    const [inpName, setInpName] = useState("");
    const [inpBio, setBio] = useState("");
    const [inpTheme, setInpTheme] = useState("");
    const [inpShowBadges, setInpShowBadges] = useState(false);
    const onUpdate = ()=>{
        onUpdateProfile({
            name: inpName,
            bio: inpBio, 
            themeColor: inpTheme, 
            showBadges: inpShowBadges
        });
        setInpName("");
        setBio("");
        setInpTheme("");
        setInpShowBadges("");
    }
    return(
        <>
            <input type="text" name="name" id="name" onChange={(e)=> {setInpName(e.target.value)}}/>
            <textarea name="bio" id="bio" onChange={(e) => {setBio(e.target.value)}}></textarea>
            <input type="color" name="theme" id="theme" onChange={(e) => {setInpTheme(e.target.value)}}/>
            <input type="checkbox" name="showBadges" id="showBadges" onChange={(e) => {setInpShowBadges(e.target.checked)}} />
            <button onClick={onUpdate}>Actualizar</button>
        </>
    );
}