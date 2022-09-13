const stars = document.getElementById('stars') ;
const moon = document.getElementById('moon') ;
const mountain3 = document.getElementById('mountains3') ;
const mountain4 = document.getElementById('mountains4') ;
const river = document.getElementById('river') ;
const boat = document.getElementById('boat') ;
const novel = document.querySelector('.novel') ;
const main = document.querySelector('.main');

window.onscroll = ()=>{
    let value = scrollY;
    stars.style.left = `${value}px`;
    moon.style.top = `${value * 4}px`;
    mountain3.style.top = `${value * 2}px`;
    mountain4.style.top = `${value * 1.5}px`;
    river.style.top = `${value}px`;
    boat.style.top = `${value}px`;
    boat.style.left = `${value * 3}px`;
    novel.style.fontSize = `${value}px`;
    if(scrollY >= 80 ) {
        novel.style.fontSize = `80px`;        
        novel.style.position = `fixed`;        
        if(scrollY>= 600){
            novel.style.display = 'none';
        }else {

            novel.style.display = 'block';
        }
        if(scrollY >= 150){
            main.style.background = `linear-gradient(360deg, #6bb2fb, black)`;
        } else {
            main.style.background = ``;

        }
    }

} 
