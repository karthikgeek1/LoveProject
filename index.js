let loveScreen=document.getElementById('display')
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let btn3=document.getElementById('btn3')
loveScreen.style.color='green'
loveScreen.style.fontSize='15px'
loveScreen.style.padding='10px 10px'
btn1.addEventListener('click',myLove)
function myLove(){
  loveScreen.innerText='I love you'
}
btn2.addEventListener('click', myKiss)
function myKiss(){
    loveScreen.innerText='I will kiss you'
}
btn3.addEventListener('click',myMarriage)
function myMarriage(){
    loveScreen.innerText='I will marry you'
}