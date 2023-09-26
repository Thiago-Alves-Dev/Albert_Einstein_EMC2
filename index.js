function calc(){
    var massa = window.document.getElementById('massa').value;
    var m = Number(massa);
    var c = 299792458;
    var vel_luz = Number(c);
    var energia = m * (vel_luz) ** 2;
    var energiaFormatada = energia.toExponential(2)
    window.document.getElementById("resultado").innerHTML = `Energia = ${energiaFormatada} joules`;
};

var button = window.document.getElementById("b1")
button.addEventListener("mouseenter", enter)
button.addEventListener("mouseleave", out)
button.addEventListener("mouseup", click_out)
button.addEventListener("mousedown", click_on)

function enter() {
    this.style.backgroundColor = "orangered" 
}

function out() {
    this.style.backgroundColor = "orange"
}

function click_out() {
    this.style.backgroundColor = "orangered"
} 

function click_on() {
    this.style.backgroundColor = "white"
}