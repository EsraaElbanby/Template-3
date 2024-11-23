let skills =document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");
let stats =document.querySelector(".stats");
let spnState =document.querySelectorAll(".number");
let start =false;


window.addEventListener('scroll',(e)=>{
    if(window.scrollY >= skills.offsetTop - 320){
        console.log('reached section');
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

});

window.addEventListener('scroll',(e)=>{
    if(window.scrollY >= stats.offsetTop - 150){
        if(!start){
            spnState.forEach((span)=>{
                startCount(span);
            
            })
            
        }

        start = true;
    }

})



function startCount (el){
    let goal = el.dataset.goal;
    let counter =  setInterval(()=>{
        el.textContent++;
        if(goal == el.textContent){
            clearInterval(counter)
        }
    },2000/goal)
}

