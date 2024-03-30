var min =  0;
var sec = 0;
var milli = 0;

var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMsec = document.getElementById("msec");
var interval;

function start() {   
    interval = setInterval(function() {
    milli++;
    document.getElementById("msec").innerHTML = milli;
    if(milli >= 100){
        sec++;
        document.getElementById("sec").innerHTML = sec; 
        milli = 0
    }
    else if(sec >= 60) {
        min++;
        document.getElementById("min").innerHTML = min;
        sec = 0;
    }
}, 10);
    document.getElementById("ss").disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("ss").disabled = false;   
}

function reset() {
    min = 0;
    sec = 0;
    milli = 0;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("msec").innerHTML = milli;
}