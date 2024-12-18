const wform=document.querySelector(".wform"); //as using class
const city1=document.getElementById("weather");
const card=document.querySelector(".card");         //when using a class

const apikey="d1e9fc54e3354bd99bbe4352ccc9f7a7";

wform.addEventListener("submit", async event=>{

    event.preventDefault();                 //to prevent defULT loading refreshing of form
    const cityval=city1.value;

    if(cityval)
    {

        try{
           const data= await getdata(cityval);
           weatherinfo(data);
        }

        catch(error)
        {
            console.error(error);
            errors(error);
        }
    }
    else{
        errors("Please enter a city");
    }

});

async function getdata(cityval)
{
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${apikey}`;
    const response= await fetch(api_url);
    console.log(response);

    /*await fetch(api_url): Sends a GET request to the API.
        await pauses the execution until the API response is received.
            response stores the entire HTTP response object, including status and data.
                console.log(response) displays the raw response in the browser's console. */

    if(!response.ok)
    {
        throw new Error("could not fetch data");
    }

    return await response.json();
    /*Converts the response data to JSON format using response.json().
        await ensures that the function waits until the JSON conversion completes.
 */
}

function weatherinfo(data)
{
    const{                                  //OBJECT DESTRUCTURING- all json doc values are extracted
        name:city,
        main:{temp,humidity},
        weather:[{description,id}]
    }= data;

    card.textContent="";
    card.style.display="flex";

    const city_show=document.createElement("h1");
    const temp1=document.createElement("p");
    const humidity1=document.createElement("p");
    const desc=document.createElement("p");
    const weather1=document.createElement("p");

    city_show.textContent=city;
    temp1.textContent=`${((temp-273.15)*(9/5)+32).toFixed(1)}C`;
    humidity1.textContent=`Humidity : ${humidity}%`;
    desc.textContent=description;
    weather1.textContent=emoji(id);

    city_show.classList.add("city");
    temp1.classList.add("degrees");
    humidity1.classList.add("humidity");
    desc.classList.add("desc");
    weather1.classList.add("emoji");

    card.appendChild(city_show);
    card.appendChild(temp1);
    card.appendChild(humidity1);
    card.appendChild(desc);
    card.appendChild(weather1);

}

function emoji(weatherid)                   //based on the default chart in weather api
{
    switch(true)
    {
        case(weatherid>=200  && weatherid<300):
            return "⛈️";

        case(weatherid>=300  && weatherid<400):
            return "🌧️";

        case(weatherid>=500  && weatherid<600):
            return "🌦️";

        case(weatherid>=600  && weatherid<700):
            return "❄️";

        case(weatherid>=700  && weatherid<800):
            return "💨";

        case(weatherid===800):
            return "☀️";

        case(weatherid>=801  && weatherid<810):
            return "☁️";
        default:
            return "🥀";
    }
}

function errors(message)
{
    const errdisp=document.createElement("p");
    errdisp.textContent=message;
    errdisp.classList.add("error");           //add js to css class

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errdisp);


}