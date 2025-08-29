// quien llame esta funcion, sera modificado
function toggleBorder(img) {
    if (img.style.border === '2px solid red') {
        img.style.border = '';
    } else {
        img.style.border = '2px solid red';
    }
}