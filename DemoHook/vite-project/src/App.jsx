import { UserProvider } from "./Components/UserContext";
import Content from "./Components/Content";
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <UserProvider>
      <Header />
      <Content />
      <Footer />
    </UserProvider>
  )
}

export default App