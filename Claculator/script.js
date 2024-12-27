const disp=document.getElementById("display");

function append(input)
{
    disp.value+=input;      //+= means concatenate the new input value to whatever is already in the display.
}                           //disp.value accesses the current content of the input field

function cleardisp()
{
    disp.value=" ";
}

function calculate(){
try{
    disp.value=eval(disp.value);   
}     //eval is like a built in calculator, perform operations of disp.values given 
catch(error)
{
    disp.value="error";
}
}