
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then( resultado =>  console.log(`El resultado es ${resultado}`));
});



if(Notification.permission == 'granted') {
    new  Notification('Esta es una notificación', {
        // icon: 'img/RULETA_GENDERBEND_PAISANO.png',
        // body: 'Dibujo hecho por la gugus bomnita <3',
        icon: 'img/PAISANO_CON_CHUPETIN_BIBUJO_BOMNITO_UWU.png',
        body: 'Dibujo hecho por la mentita bomnita <3',
    })
}