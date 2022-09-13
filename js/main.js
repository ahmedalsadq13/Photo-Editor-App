const saturate = document.getElementById('saturate');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const grayscale = document.getElementById('grayscale');
const blur = document.getElementById('blur');
const hueRotate = document.getElementById('hue-rotate');

const upload = document.getElementById('upload');
const download = document.getElementById('download');
const img = document.getElementById('img');

const reset = document.querySelector('.reset');
const imgBox = document.querySelector('.img-box');

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d')


resetValue = ()=>{
    img.style.filter = `none`;
    ctx.filter = `none`;
    saturate.value = '100';
    brightness.value = '100';
    contrast.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

window.onload = ()=>{
    [download, reset, imgBox].map(item=>item.style.display = `none`)
}

upload.onchange = ()=>{
    resetValue();
    [download, reset, imgBox].map(item=>item.style.display = `block`);

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = _=>img.src = file.result;

    img.onload = ()=>{
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0, canvas.width, canvas.height);
        img.style.display = `none`
    }
    
}

let filters = document.querySelectorAll('ul li input');

filters.forEach(filter=>{
    filter.addEventListener('input', ()=>{
       /*  img.style.filter =`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        ` */

        ctx.filter =`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0, canvas.width, canvas.height);
    })
});


download.onclick = ()=>{
    download.href = canvas.toDataURL('image/jpeg');
}