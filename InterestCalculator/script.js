function calculatefunc()
{
    const totalAmt=document.getElementById("total-amt");        //These references are used to access or update values from the corresponding form fields.
    const P=document.getElementById("principal");
    const R=document.getElementById("rate");
    const N=document.getElementById("years");

    let principal= Number(P.value);         //This block retrieves the current values entered by the user:
    let rate=R.value/100;
     let year=N.value;

//if condition for pnr being 0
     
     const result=principal*Math.pow((1+rate/1),1*year);

     totalAmt.textContent=result;

    totalAmt.textContent=result.toLocaleString(undefined,
                                                    {style:"currency",
                                                        currency:"USD"
                                                    }); 

}

