import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Components/ProfileCard'
import ProfileForm from './Components/ProfileForm'

function App() {
  const [profileData, setProfileData] = useState({
    name: "Usuario Ejemplo",
    bio: "Este es mi perfil.",
    themeColor: "#007bff",
    showBadges: true
    });
  const onUpdateProfile = (profileUpdate) =>{
    setProfileData(
      profileUpdate
    )
  }
  return (
    <>
      <ProfileCard name={profileData.name} bio={profileData.bio} themeColor={profileData.themeColor} showBadges={profileData.showBadges}/>
      <ProfileForm onUpdateProfile={onUpdateProfile}/>
    </>
  )
}

export default App
