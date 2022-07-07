/* icono con estrella */ 
let icon = document.createElement('button');
let content_icon = document.createTextNode('');
let imagen = document.querySelector('.card__icon');
icon.appendChild(content_icon);
imagen.appendChild(icon);

/* Generar botones para calificar */ 
let opcion = document.createElement("ul");

for (let i = 1; i < 6; i++) {
  let items = document.createElement("li");
  let butt = document.createElement("button");
  butt.classList.toggle('.card__item--circle')
  butt.setAttribute('onclick','Send()')
  butt.setAttribute('value',`${i}`)
  let content = document.createTextNode(i);
  butt.appendChild(content)
  items.appendChild(butt)
  opcion.appendChild(items)
}

/* Agregarmos botones al div */ 
let divQualification = document.querySelector('.card__item');
divQualification.appendChild(opcion);

/* Notificación al presionar botón submit */
function submit() {
  alert('Enviado')
}

/* Envia notificacion al calificar */
function Send() {
  let valor = document.querySelector('.card__item--circle')
  alert(`Su calificación es de: ${valor}`)
}
