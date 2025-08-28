
const resultStickers = document.getElementById('stickers-result');
const maxStickers = 10;
const minStickers = 0;
function OnClickValidate() {
    const s1 = parseInt(document.getElementById('sticker1').value) || 0;
    const s2 = parseInt(document.getElementById('sticker2').value) || 0;
    const s3 = parseInt(document.getElementById('sticker3').value) || 0;
    const total = s1 + s2 + s3;
    if (total <= maxStickers && total >= minStickers) {
        resultStickers.textContent = `Llevas ${total} stickers`;
    } else if (total < minStickers) {
        resultStickers.textContent = 'No te me pases de listo';
    } else {
        resultStickers.textContent = 'Llevas demasiados stickers';
    }
}