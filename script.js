let pantalla = document.querySelector('#pantalla-resultado');

function pikarle(ref) { 
    let value = ref.value; 
    pantalla.value += value; 
}

function clear() {
    pantalla.value = ''; 
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value); 
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}