const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&&units=metric&appid=8a9288c01cb0a45f5429dd847bf8b647`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        
        const tempMood = arrData[0].weather[0].main;

        if (tempMood == 'Clear'){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'>"
        }else if (tempMood == 'Clouds') {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'>"
        }else if (tempMood == 'Rain') {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'>"
        }else if (tempMood == 'Thunderstorm') {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'>"
        }else {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'>"
        }

        datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz write the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

// for day and date

const getCurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tueday";
    weekday[3] = "Wedday";
    weekday[4] = "Thuday";
    weekday[5] = "Friday";
    weekday[6] = "Satday";

    let currentTime = new Date();
    days = weekday[currentTime.getDay()];
    let day = document.getElementById('day');

    day.innerText = days;
};

getCurrentDay();

const getCurrentTime = () =>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var now = new Date();
    month = months[now.getMonth()];
    date = now.getDate();

    let todaydate = document.getElementById('today_date');
    
    todaydate.innerText = `${month} ${date}`;
    // return `${month} ${date}`;
};

getCurrentTime();

submitBtn.addEventListener('click', getInfo);