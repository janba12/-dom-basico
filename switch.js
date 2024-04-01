const seleccion = "papel";

switch (seleccion) {
    case "papel":
        console.log("soy piedra");
        console.log("Ganaste");
        break;
    case "piedra":
        console.log("soy un Tijera");
        console.log("Perdiste");
        break;
    case "tijera":
        console.log("Soy piedra");
        console.log("Perdiste");
        break;
    default:
        console.log("No elegiste nada");
        break;
}