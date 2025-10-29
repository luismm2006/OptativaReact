function Bienvenida({ isLoggedIn }) {

    if (isLoggedIn) {
        return "Bienvenido de nuevo";
    }else{
        return "Por favor, inicia sesión";
    }

}
export default Bienvenida;
