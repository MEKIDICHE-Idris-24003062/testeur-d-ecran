document.getElementById("toggleBg").addEventListener("click", function() {
    let isBlue = true;
    let rouge = Math.floor(Math.random() * 256);
    let vert = Math.floor(Math.random() * 256);
    let bleu = Math.floor(Math.random() * 256);
   document.body.style.backgroundColor = `rgb(${rouge}, ${vert}, ${bleu})`;
});