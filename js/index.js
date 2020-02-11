// Your code goes here

const destination = document.querySelector('.content-destination img');
destination.addEventListener('mouseover', () =>{
    destination.style.transform = 'scale(1.5)';
    destination.style.transition = '0.5s';
})
destination.addEventListener('wheel', () =>{
    destination.style.transform = 'scale(1)';    
})

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseout', () =>{
    funBus.style.transform = 'rotate(0deg)';
})
funBus.addEventListener('dblclick', () =>{
    funBus.style.transform = 'rotate(-20deg)';
})

const background = document.querySelector('html');
background.addEventListener('keydown', () =>{
    background.style.backgroundColor = 'lightskyblue';
})
background.addEventListener('keyup', () =>{
    background.style.backgroundColor = 'white';
})

const titles = document.querySelector('h2');
titles.addEventListener('copy', () =>{
    titles.style.fontWeight = '1000';
})
titles.addEventListener('mousemove', () =>{
    titles.style.fontWeight = '500';
})
