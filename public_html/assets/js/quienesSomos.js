
    // Espera a que el documento esté completamente cargado
    document.addEventListener("DOMContentLoaded", function() {
        // Obtén todos los botones con la clase btn-toggle
        var buttons = document.querySelectorAll(".btn-toggle");

        // Itera sobre cada botón
        buttons.forEach(function(button) {
            // Añade un evento de clic a cada botón
            button.addEventListener("click", function() {
                // Obtiene el atributo data-target para saber qué sección mostrar
                var targetId = button.getAttribute("data-target");
                // Verifica si el texto está visible
                if (isTextVisible(targetId)) {
                    // Si está visible, ocúltalo
                    hideText(targetId);
                } else {
                    // Si no está visible, oculta todos los textos y muestra el correspondiente
                    hideAllTexts();
                    showText(targetId);
                }
            });
        });

        // Función para verificar si el texto está visible
        function isTextVisible(targetId) {
            return document.querySelector(".texto-" + targetId).style.display === "block";
        }

        // Función para ocultar todos los textos
        function hideAllTexts() {
            var texts = document.querySelectorAll(".btn-toggle");
            texts.forEach(function(text) {
                var targetId = text.getAttribute("data-target");
                hideText(targetId);
            });
        }

        // Función para ocultar un texto específico
        function hideText(targetId) {
            document.querySelector(".texto-" + targetId).style.display = "none";
        }

        // Función para mostrar el texto de la sección seleccionada
        function showText(targetId) {
            document.querySelector(".texto-" + targetId).style.display = "block";
        }
    });

    