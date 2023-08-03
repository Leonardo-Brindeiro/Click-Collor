const colors = ['Red', 'Blue', 'Yellow', 'Purple']
const btn = document.getElementById('btn')


btn.addEventListener('click', function () {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]

})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}