document.getElementById("divBtn").addEventListener('click', ()=>{
alert('Hola! soy el div')
})

document.getElementById("Btn").addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hola!')
})
