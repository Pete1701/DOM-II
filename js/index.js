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
funBus.addEventListener('mousemove', () =>{
    funBus.style.transform = 'rotate(0deg)';
})
funBus.addEventListener('dblclick', () =>{
    funBus.style.transform = 'rotate(-20deg)';
})
