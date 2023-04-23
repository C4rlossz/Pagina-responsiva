const menuu = document.querySelector('.menu')
const menu = document.querySelector('.menuu')

menu.addEventListener('click', () => {
    menuu.classList.toggle('ativo');
    menu.classList.toggle('ativo');
})