const fileInput = document.querySelector(".file-input"),
previewImg = document.querySelector(".preview-img img"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");


const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.height = 1280;
    previewImg.width = 960;
    previewImg.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable");
    });
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // alert('Haha');
}else{
    // alert('huhu');
}

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    // canvas.width = 960;
    // canvas.height = 1280;
    const x = (canvas.width / 2) - 3.5;
    const y = (-canvas.height / 2) + 35;
    canvas.style.letterSpacing = '1px';
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.font = "19pt Verdana";
    ctx.fillStyle = "white";
    ctx.textAlign = "end";
    ctx.fillText('Network: 22 thg8, 2022 20:00:45 GMT+07:00',x,y);
    ctx.font = "20pt Verdana";
    ctx.fillText('Việt Yên',x,y + 35);
    ctx.fillText('Bắc Giang',x,y + 74);
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}

saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());