let numero_aleatorio = Math.floor(Math.random() * 6) + 1;

alert(numero_aleatorio);

//let img_dado = "img/" + numero_aleatorio + ".png";
let img_dado = `img/${numero_aleatorio}.png`;


document.querySelector('.dado_img').setAttribute('src', img_dado);
