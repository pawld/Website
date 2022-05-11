let counter = document.querySelector('h1');
let count = 0;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 3) location.replace('https://discord.gg/9CPANrfVvH')
    
},1000)
