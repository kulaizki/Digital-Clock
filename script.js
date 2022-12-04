const hourEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    ampm.textContent = "AM";

    if (h > 12) {
        h = h - 12;
        ampm.textContent = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourEl.innerText = h;
    minsEl.innerText = m;
    secsEl.innerText = s;

    setTimeout(()=>{updateClock()}, 1000)
}

updateClock();