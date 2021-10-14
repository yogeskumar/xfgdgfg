setInterval(showTime);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour>=21 && hour<=5) {
        document.getElementById("right-container").style.backgroundImage = "url('./nap_time.png')";
    }
    if (hour>5 && hour<=9) {
        document.getElementById("right-container").style.backgroundImage = "url('./wake_up_time.png')";
    }
    if (hour>9 && hour<=14) {
        document.getElementById("right-container").style.backgroundImage = "url('./lunch_time.png')";
    }

    if (hour >= 4 && hour <= 10) {
        document.getElementById("wish").innerText = "GOOD MORNING !!";
    }
    else if (hour >= 10 && hour <= 16) {
        document.getElementById("wish").innerText = "GOOD AFTERNOON !!";
    }
    else if (hour >= 16 && hour <= 21) {
        document.getElementById("wish").innerText = "GOOD EVENING !!";
    }
    else if (hour >= 21 && hour <= 4) {
        document.getElementById("wish").innerText = "GOOD NIGHT !!";
    }

    if (hour > 11) {
        am_pm = "PM"
    }
        
    if (hour >= 13) {
        hour = hour - 12
        am_pm = "PM"
    }
        
    document.getElementById("thr").innerText = hour + "\n" + "hours";
    document.getElementById("tmin").innerText = min + "\n" + "mins";
    document.getElementById("tsec").innerText = sec + "\n" + "secs";
    document.getElementById("inner-am-pm").innerText = am_pm;

    if ((document.getElementById("wake-up-time-text-btn").innerText).slice(0, 4) == ((hour) + " " + am_pm)) {
        document.getElementById("right-container").style.backgroundImage = "url('./wake_up_time.png')";
    }
    else if ((document.getElementById("lunch-time-text-btn").innerText).slice(0, 4) == ((hour) + " " + am_pm)) {
        document.getElementById("right-container").style.backgroundImage = "url('./lunch_time.png')";
    }
    else if ((document.getElementById("nap-time-text-btn").innerText).slice(0, 4) == ((hour) + " " +  am_pm)) {
        document.getElementById("right-container").style.backgroundImage = "url('./nap_time.png')";
    }
    }
showTime()

function wakeUp(p1) {
    if (p1 === "5 AM - 6 AM") {
        document.getElementById("wake-up-time-text-btn").innerText = "5 AM - 6 AM";
    }
    if (p1 === "6 AM - 7 AM") {
        document.getElementById("wake-up-time-text-btn").innerText = "6 AM - 7 AM";
    }
    if (p1 === "7 AM - 8 AM") {
        document.getElementById("wake-up-time-text-btn").innerText = "7 AM - 8 AM";
    }
    if (p1 === "8 AM - 9 AM") {
        document.getElementById("wake-up-time-text-btn").innerText = "8 AM - 9 AM";
    }
}

function lunch(p2) {
    if (p2 === "11 AM - 12 AM") {
        document.getElementById("lunch-time-text-btn").innerText = "11 AM - 12 AM";
    }
    if (p2 === "12 AM - 1 PM") {
        document.getElementById("lunch-time-text-btn").innerText = "12 AM - 1 PM";
    }
    if (p2 === "1 PM - 2 PM") {
        document.getElementById("lunch-time-text-btn").innerText = "1 PM - 2 PM";
    }  
}
function nap(p3) {
    if (p3 === "9 PM - 10 PM") {
        document.getElementById("nap-time-text-btn").innerText = "9 PM - 10 PM";
    }
    if (p3 === "10 PM - 11 PM") {
        document.getElementById("nap-time-text-btn").innerText = "10 PM - 11 PM";
    }
    if (p3 === "11 PM - 12 PM") {
        document.getElementById("nap-time-text-btn").innerText = "11 PM - 12 PM";
    }    
}