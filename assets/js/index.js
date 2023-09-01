const precio = 400000;
let cantidad = document.querySelector(".cantidad");
let total = document.querySelector(".valor-total");


function aumentaCantidad(){
    
    cantidad.innerHTML++;
    total.innerHTML = precio * cantidad.innerHTML;
}

function disminuyeCantidad(){

    cantidad.innerHTML--;
    total.innerHTML = precio * cantidad.innerHTML;

    if(cantidad.innerHTML < 0){
        alert('Cantidad no puede ser menor a cero.');
        cantidad.innerHTML = 0;
        total.innerHTML = 0;
        return false;
    }

}