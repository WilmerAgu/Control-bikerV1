
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var cesde = {lat:6.3372655, lng: -75.5460845};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: cesde
    });
    var marker = new google.maps.Marker({
      position: cesde,
      map: map
    });
 }
 //boton ver mas pag ppal

 let hideText_btn = document.getElementById('hideText_btn');

 let hideText = document.getElementById('hideText')

 hideText_btn.addEventListener('click', toggleText);

 function toggleText(){
    hideText.classList.toggle('show');

    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Ver Menos'
    }
    else{
        hideText_btn.innerHTML = 'Ver Mas'
    }
 }

 // sesion quienes somos
 const hideParagraphButton = document.getElementById('hideParagraphButton');
const toggleTextButton = document.getElementById('toggleTextButton');
const aboutParagraph1 = document.getElementById('aboutParagraph1');
const aboutParagraph2 = document.getElementById('aboutParagraph2');

hideParagraphButton.addEventListener('click', function() {
    if (aboutParagraph1.style.display !== 'none') {
        aboutParagraph1.style.display = 'none';
        aboutParagraph2.style.display = 'none';
        toggleTextButton.style.display = 'none'; // Ocultar el segundo botón
    } else {
        aboutParagraph1.style.display = 'block';
        toggleTextButton.style.display = 'block'; // Mostrar el segundo botón
    }
});

toggleTextButton.addEventListener('click', function() {
    if (aboutParagraph1.style.display !== 'none') {
        aboutParagraph1.style.display = 'none';
        aboutParagraph2.style.display = 'block';
    } else {
        aboutParagraph1.style.display = 'block';
        aboutParagraph2.style.display = 'none';
    }
});


