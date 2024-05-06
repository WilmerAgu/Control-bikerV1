/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
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



