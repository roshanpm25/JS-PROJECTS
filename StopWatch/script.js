const display=document.getElementById("display-time");

let timer=null;
let starttime=0;
let stoptime=0;
let isrunning=false;

function start()
{
    if(!isrunning)
{
    starttime=Date.now()-stoptime;
    timer=setInterval(update,10);
    isrunning=true;
}
    }



function update()
{
    const curentime=Date.now();
    stoptime=curentime-starttime;

    let hours=Math.floor(stoptime/(1000*60*60));
    let mins=Math.floor(stoptime/(1000*60) %60 );              /* convert ms to sec*/
    let sec=Math.floor(stoptime/1000%60);
    let msec=Math.floor(stoptime%1000/10);

    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    msec=String(msec).padStart(3,"0");


    display.textContent=`${hours}:${mins}:${sec}:${msec}`

}    

function stop(){
    if(isrunning){
        clearInterval(timer);  /*is called to stop the interval timer that is repeatedly calling the update() */
       /* stoptime=Date.now()-starttime;          /* on at 10.00 stop at 10.05 display 05 */
        isrunning=false;
    }
}


function reset()
{
    clearInterval(timer);
   
    let starttime=0;
    let stoptime=0;
    let isrunning=false;
    display.textContent="00:00:00:00";
}
/*Unix epoch time is a common way of representing time in computing, which counts the number of milliseconds that have elapsed since January 1, 1970. */
//starttime: This variable stores the exact time when the stopwatch was started. In your case, starttime is 1733850741073.

//
