function calc(){
    var massa = window.document.getElementById('massa').value;
    var m = Number(massa);
    var c = 299792458;
    var vel_luz = Number(c);
    var energia = m * (vel_luz) ** 2;
    var energiaFormatada = energia.toExponential(2)
    window.document.getElementById("resultado").innerHTML = `Energia = ${energiaFormatada} joules`;
};



