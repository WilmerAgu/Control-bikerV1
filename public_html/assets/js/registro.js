
document.getElementById('submitButton').addEventListener('click', function() {
    const marca = document.getElementById('dropdown1');
    const modelo = document.getElementById('dropdown2');
    const linea = document.getElementById('dropdown3');

    const selectedMarca = marca.options[marca.selectedIndex].text;
    const selectedModelo = modelo.options[modelo.selectedIndex].text;
    const selectedLinea = linea.options[linea.selectedIndex].text;

    alert(`Marca de Moto: ${selectedMarca}\nModelo: ${selectedModelo}\nLínea: ${selectedLinea}`);

    setTimeout(function() {
        alert('Su registro ha sido guardado con éxito.');
        const quiereOtroRegistro = confirm('¿Quiere hacer otro registro?');
        if (!quiereOtroRegistro) {
            window.location.href = 'index.html'; 
        }
    }, 0);
});
