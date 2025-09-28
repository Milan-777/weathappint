// References
const search = document.getElementById("search-btn");
const input = document.getElementById("ip");
const region = document.getElementById("region");
const city = document.getElementById("city");
const country = document.getElementById("country");

const temp = document.getElementById("temperature");
const localtime = document.getElementById("time");
const humidity = document.getElementById('humid');
const iscloud = document.getElementById('iscloud');
const w_speed = document.getElementById('w-speed');
const day = document.getElementById('isday');
const info4 = document.querySelector('.info4');
// const statuss = document.getElementById("statuss");



const imageContainer = document.querySelector(".img");

const imglocation = document.querySelector(".imglocation");
const info = document.querySelector(".info");








// Function to fetch data through API
async function data(location) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=d69e554818a2444f810160129252409&q=${location}&aqi=yes`
    );
    return await promise.json();
}

// Image array
const images = ["img1.webp", "img2.webp", "img3.webp", "img4.webp"];
let count = 0;


//enter action
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search.click();
        input.blur();
    }
});









//'click' event
search.addEventListener("click", async () => {


    //print api respond to the console also
    const val = input.value;
    const result = await data(val);
    console.log(result);



    //print api respond to the document (DOM)
    city.innerText = "(" + result.location.name + ")";
    region.innerText = result.location.region;
    country.innerText = result.location.country;
    localtime.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c + "°C";
    humidity.innerText = result.current.humidity + " %";
    iscloud.innerText = result.current.cloud + " %";
    w_speed.innerText = result.current.wind_kph + ' Kph';
    if (result.current.is_day == 1) {
        day.innerText = 'day';
    } else {
        day.innerText = 'night';
    }
    // const tempval = result.current.temp_c;
    // if (tempval <= 20) {
    //     statuss.innerText = "Heavy Rain";
    // } else if (tempval > 20 && tempval <= 30) {
    //     statuss.innerText = "Moderate Rain";
    // } else {
    //     statuss.innerText = "Sunny / Hot";
    // }





    // Cycle through images
    imageContainer.style.backgroundImage = `url('${images[count % images.length]
        }')`;
    count++;



    //input clear
    input.value = "";




    info4.style.transform = "scaleX(0)";
    setTimeout(() => {
        info4.style.transform = "scaleX(1)";
    }, 600);

});







// All operations
function all() {
    alert("Welcome to my Weather_App...");
}






