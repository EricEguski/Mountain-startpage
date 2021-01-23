
// Coger hora
var hoy = new Date();
var hora = hoy.getHours();

// Nombre
var nombre = 'Eric';

// Dialogos
var dialogo1 = 'Vete a dormir! ';
var dialogo2 = 'Buenos dias! ';
var dialogo3 = 'Buenas tardes, ';
var dialogo4 = 'Buenas noches, ';

if (hora >= 23 || hora < 5) {
    $('.tituloBuscar').text(dialogo1+" "+ nombre);              // Madrugada
} else if (hora >= 6 && hora < 12) {
    $('.tituloBuscar').text(dialogo2+" "+ nombre);              // Mañana
} else if (hora >= 12 && hora < 21) {
    $('.tituloBuscar').text(dialogo3+" "+ nombre);              // Tarde
} else if (hora >= 21 && hora < 23) {
    $('.tituloBuscar').text(dialogo4+ " " + nombre);            // Noche
}
