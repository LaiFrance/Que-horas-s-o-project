function carregar() {
  const msg = window.document.getElementById("msg");
  const img = window.document.getElementById("imagem");
  const data = new Date();
  const hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA!!!
    img.src = "manha.jpg";
    document.body.style.background = "rgb(250, 211, 85)";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE !!!
    img.src = "tarde.jpg";
    document.body.style.background = "rgb(221, 115, 73)";
  } else {
    //BOA NOITE!!!
    img.src = "noite.jpg";
    document.body.style.background = "rgb(10, 29, 80)";
  }
}
