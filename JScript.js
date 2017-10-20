function iniciar() {
  var imagenes = document.querySelectorAll('.box-images > img');
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragstart', arrastrado, false);
  }
  cajas = document.querySelectorAll('#cajaSoltar');
  for (i = 0; i<cajas.length; i++){
    //soltar[i] = document.getElementById('cajaSoltar');
    cajas[i].addEventListener('dragenter', function(e) {
      e.preventDefault();
    }, false);
    cajas[i].addEventListener('dragover', function(e) {
      e.preventDefault();
    }, false);
    cajas[i].addEventListener('drop', soltado, false);

  }
}

function arrastrado(e) {
  elemento = e.target;
  e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltado(e) {
  e.preventDefault();
  var clase = e.dataTransfer.getData('Text');
  if (clase != "imagen4") {
    var src = document.getElementById(clase).src;
    console.log("src=" + src);
    this.innerHTML = '<img src="' + src + '" class="img-box">';
  } else {
    this.innerHTML = 'la imagen no es admitida';
  }
}
window.addEventListener('load', iniciar, false);
