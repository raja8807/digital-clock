let hourOut = document.getElementById("hour")
let minOut = document.getElementById("min")
let secOut = document.getElementById("sec")
let ampm = document.getElementById("ampm")

let dateOut = document.getElementById("date")
let monthOut = document.getElementById("month")
let yearOut = document.getElementById("year")
let dayOut = document.getElementById("day")

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]

let format = document.getElementById("format")



function renderTime() {
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    minOut.innerText = minute;

    if(format.value == "standard"){
        if (hour > 12) {
            hour = hour - 12;
            hourOut.innerText = hour;
            ampm.innerText = "PM"
        }else if(hour == 00){
            hourOut.innerText = 12;
            ampm.innerText = "AM"
        }
        else{
            hourOut.innerText = hour;
            ampm.innerText = "AM"
        }
    }else{
        hourOut.innerText = hour;
        ampm.innerText = ""
    }

    if (second.toString().length === 2) {
        secOut.innerText = second;

    } else {
        secOut.innerText = "0" + second;
    }

    let date = time.getUTCDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day = time.getDay();
    // console.log(day);
    
    dateOut.innerText = date;
    monthOut.innerText = months[month];
    yearOut.innerText = year;
    dayOut.innerText = days[day]
}

setInterval(renderTime, 1000)
