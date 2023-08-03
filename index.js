const colors = ['Red', 'Blue', 'Yellow', 'Purple']
const btn = document.getElementById('btn')


// trabalhar no click 
btn.addEventListener('click', function () {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]

})

//gerar numeros randomicos 
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}