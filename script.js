// References
const search = document.getElementById('search-btn');
const input = document.getElementById('ip');
const region = document.getElementById('region');
const city = document.getElementById('city');
const country = document.getElementById('country');

const temp = document.getElementById('temperature');
const localtime = document.getElementById('localtime');
const statuss = document.getElementById('statuss');
const imageContainer = document.querySelector('.img'); // Assuming one element with class 'img'




// Function to fetch data through API  
async function data(location) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=d69e554818a2444f810160129252409&q=${location}&aqi=yes`);
    return await promise.json();
}

// Image array
const images = [
    'img1.webp',
    'img2.webp',
    'img3.webp',
    'img4.webp'
];

let count = 0;




//'click' event
search.addEventListener("click", async () => {


    //print api respond to the console also
    const val = input.value;
    const result = await data(val);
    console.log(result);


    //print api respond to the document (DOM)
    city.innerText = '('+result.location.name+')';
    region.innerText = result.location.region;
    country.innerText = result.location.country;

    localtime.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c + "°C";

    const tempval = result.current.temp_c;
    if (tempval <= 20) {
        statuss.innerText = 'Heavy Rain';
    } else if (tempval > 20 && tempval <= 30) {
        statuss.innerText = 'Moderate Rain';
    } else {
        statuss.innerText = 'Sunny / Hot';
    }


    // Cycle through images
    imageContainer.style.backgroundImage = `url('${images[count % images.length]}')`;
    count++;

    //input clear
    input.value = "";


});





// All operations
function all() {
    alert("Welcome to my Weather_App...");
}
