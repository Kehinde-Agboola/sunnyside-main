
const hambugger = document.querySelector('.hambugger')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const mobilemenu = document.querySelector('.header__mobilemenu')


const header__image = document.querySelector('.header__content > img')

const hambuggerBtn = document.querySelector('.hambugger > img')
console.log(hambuggerBtn)






hambugger.addEventListener('click',() => {

    if(overlay.classList.contains('has-fade')){
        overlay.classList.remove('has-fade')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
  


        mobilemenu.classList.add('mobile-fadeIn') 
        mobilemenu.classList.remove('mobile-fadeOut')
        header__image.classList.add('has-fade')
        hambuggerBtn.src ='/images/icon-close.svg'
        body.classList.add('noscroll')
    }

    else{
       overlay.classList.remove('fade-in')
       overlay.classList.add('fade-out')
       overlay.classList.add('has-fade')



       mobilemenu.classList.remove('mobile-fadeIn')
       mobilemenu.classList.add('mobile-fadeOut')

       
       header__image.classList.remove('has-fade')
       hambuggerBtn.src ='/images/icon-hamburger.svg'
       body.classList.remove('noscroll')
    }
})