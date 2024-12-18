function updateclock()
{
    const now=new Date();

   let H=now.getHours(); /* convert to string then , for the first two characterspad them with 0 */
   const meridian=H>=12?"PM":"AM";
   
    H=H%12||12;
    H=H.toString().padStart(2,0);
    
    const M=now.getMinutes().toString().padStart(2,0);
    const S=now.getSeconds().toString().padStart(2,0);

    const timeString=`${H}:${M}:${S} ${meridian}`;
    document.getElementById("clock").textContent=timeString;
}
updateclock();
setInterval(updateclock,1000); //call this code for each second to make clock run 

//---------------------------------------------------------------------------------------
