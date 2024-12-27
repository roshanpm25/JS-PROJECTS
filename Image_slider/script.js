
const slides=document.querySelectorAll(".slides img");
let i=0;
let interval=null;


document.addEventListener("DOMContentLoaded",initial);   

function initial()
    {
       if(slides.length>0)
       {
        slides[i].classList.add("display");
        interval=setInterval(next,2000);
       }

    }

    function show(ind)
    {

        if(ind>=slides.length)
        {
            i=0;
        }

        else if(ind<0)
        {
            i=slides.length-1;
        }

    else{
        i=ind;
    }

        slides.forEach(slide =>{
            slide.classList.remove("display");
        });    //remove the slide from display so that it wont have display block

        slides[i].classList.add("display");
    }

        function prev()
        {
            clearInterval(interval);        //on clicking previous button image stops
                i--;
                show(i);
        }
        function next()
        {
            i++;
            show(i);
        }
   // after all content is loaded the call the initial function