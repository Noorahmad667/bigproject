const navbar=document.querySelector('.navbar');
window.addEventListener("scroll",()=>{
    if(window.scrollY>navbar.offsetHeight + 150)
{
   navbar.classList.add('active')

}
else{navbar.classList.remove('active')

}})

const menutoggle=document.querySelector('.menu-toggle').onclick =()=>
{
document.querySelector('nav ul').classList.toggle('on')
}

const buttons=document.querySelectorAll('.ripple');
buttons.forEach(button => {
    button.addEventListener("click",function(e)
{  
  const x=e.clientX;
  const y=e.clientY;

    const buttonTop=e.target.offsetTop;
    const buttonLeft=e.target.offsetLeft;
    
    const xInside=x-buttonLeft;
    const yInside=y-buttonTop;
    const circle=document.createElement('span');
    circle.classList.add('circle')
    circle.style.top=yInside+"px"
    circle.style.left=xInside+"px"
    this.appendChild(circle)

    setTimeout(()=>
        {circle.remove()},500)
})
    
});
const btons=document.querySelectorAll('.social-button')
btons.forEach(bton=>{
    bton.addEventListener("click",function(){
        bton.classList.toggle("active")
     
    })
})
