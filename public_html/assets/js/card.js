let items = document.querySelectorAll('.slider-card .item-card');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : 0; // Volver al primer ítem si llegamos al final
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : items.length - 1; // Volver al último ítem si estamos en el primero
    loadShow();
}

// Función para moverse automáticamente al siguiente ítem cada 3 segundos
let autoSlide = setInterval(function() {
    next.onclick();
}, 8000);

next.onclick = function() {
    clearInterval(autoSlide);  // Detener el desplazamiento automático
    active = active + 1 < items.length ? active + 1 : 0; // Volver al primer ítem si llegamos al final
    loadShow();
    autoSlide = setInterval(function() { // Reiniciar el intervalo automático
        next.onclick();
    }, 5000);
}

prev.onclick = function() {
    clearInterval(autoSlide);  // Detener el desplazamiento automático
    active = active - 1 >= 0 ? active - 1 : items.length - 1; // Volver al último ítem si estamos en el primero
    loadShow();
    autoSlide = setInterval(function() { // Reiniciar el intervalo automático
        next.onclick();
    }, 5000);
}
