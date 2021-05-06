const header = document.getElementById('header')
const onBtn = document.querySelector('#header .on')
const offBtn = document.querySelector('#header .off')


onBtn.addEventListener('click', function(){
    this.classList.remove('active')
    offBtn.classList.add('active')
    header.classList.add('on')
})

offBtn.addEventListener('click', function(){
    this.classList.remove('active')
    onBtn.classList.add('active')
    header.classList.remove('on')
})

let newsLi = document.querySelectorAll('.article2 .news li')

for ( let i = 0; i < newsLi.length; i ++ ) {
newsLi[i].addEventListener('mouseover', function(){
    this.classList.add('on')
})
newsLi[i].addEventListener('mouseout', function(){
    this.classList.remove('on')
})
}