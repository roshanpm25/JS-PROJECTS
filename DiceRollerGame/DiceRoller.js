function roll1(){

    const input=document.getElementById("number").value;
    const result=document.getElementById("DiceNumber");
    const diceimages=document.getElementById("diceimage");

    const values=[];
    const images=[];

    for(let i=0;i<input;i++)
    {
          const dicevalue=Math.floor(Math.random()*6)+1;
          
          values.push(dicevalue);       //push the generated dice no to array

          images.push(`<img src="dice_images/${dicevalue}.png" alt="Dice ${dicevalue}" style="width: 150px; margin: 5px;">`);

          //1.png,2.png
    }

    result.textContent=`dice: ${values.join(', ')}`;  // dice :1, 2
    diceimages.innerHTML=images.join('');               //view the images with a gap from the images array, changes the content in diceimage to actual images
}