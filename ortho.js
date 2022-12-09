var tab = "distance";

var distance = function () {
    $('.types').empty();
    tab = "distance";
    console.log(2);
    $('.types').append('<option value="meter">Meter</option>');
    $('.types').append('<option value="mile">Mile</option>');
    $('.types').append('<option value="yard">Yard</option>');
    $('.types').append('<option value="Foot">Foot</option>');

}

var volume = function () {
    $('.types').empty();
    tab = 'volume';
    console.log(1);
    $('.types').append('<option value="cmeter">Cubic Meter</option>');
    $('.types').append('<option value="liter">Liter</option>');
    $('.types').append('<option value="gallon">Gallon</option>');
    $('.types').append('<option value="cup">Cup</option>');
    $('.types').append('<option value="fluidoz">Fluid Ounce</option>');

}

var weight = function () {
    $('.types').empty();
    tab = 'weight';
    console.log(3);
    $('.types').append('<option value="gram">Gram</option>');
    $('.types').append('<option value="ton">Ton</option>');
    $('.types').append('<option value="pound">Pound</option>');
    $('.types').append('<option value="oz">Ounce</option>');
}



var findMult = function () {
    var convertfrom = $('#unitselect').val();
    var convertto = $('#unitselect2').val();
    if (convertfrom == convertto) {
        return 1;
    }
    else if (tab == 'distance') {
        if (convertfrom == 'meter') {
            if (convertto == 'mile') {
                return 0.000621371;
            }
            else if (convertto == 'yard') {
                return 1.09361;
            }
            else {
                return 3.28084;
            }
        }
        else if (convertfrom == 'mile') {
            if (convertto == 'meter') {
                return 1609.34;
            }
            else if (convertto == 'yard') {
                return 1760;
            }
            else {
                return 5280;
            }
        }
        else if (convertfrom == 'yard') {
            if (convertto == 'meter') {
                return 0.9144;
            }
            else if (convertto == 'mile') {
                return 0.000568182;
            }
            else {
                return 3;
            }
        }
        else {
            if (convertto == 'meter') {
                return 0.3048;
            }
            else if (convertto == 'mile') {
                return 0.000189394;
            }
            else {
                return 0.333333;
            }
        }
    }
    else if(tab == 'volume'){
        if (convertfrom == 'cmeter') {
            if (convertto == 'liter') {
                return 1000;
            }
            else if (convertto == 'gallon') {
                return 264.172;
            }
            else if (convertto == 'cup'){
                return 4226.75
            }
            else {
                return 33814;
            }
        }
        else if (convertfrom == 'liter') {
            if (convertto == 'cmeter') {
                return 0.001;
            }
            else if (convertto == 'gallon') {
                return 0.264172;
            }
            else if(convertto == 'cup'){
                return 4.22675;
            }
            else {
                return 33.814;
            }
        }
        else if (convertfrom == 'gallon') {
            if (convertto == 'cmeter') {
                return 0.00378541;
            }
            else if (convertto == 'liter') {
                return 3.78541;
            }
            else if(convertto == 'cup'){
                return 16;
            }
            else {
                return 128;
            }
        }
        else if(convertfrom == 'cup'){
            if (convertto == 'cmeter') {
                return 0.000236588;
            }
            else if (convertto == 'liter') {
                return 0.236588;
            }
            else if (convertto == 'gallon'){
                return 0.0625;
            }
            else {
                return 8;
            }
        }
        else{
            if (convertto == 'cmeter') {
                return 1/33814;
            }
            else if (convertto == 'liter') {
                return 0.0295735;
            }
            else if (convertto == 'gallon'){
                return 0.0078125;
            }
            else {
                return 0.125;
            }
        }
    }
    else{
        if (convertfrom == 'gram') {
            if (convertto == 'ton') {
                return 1/907185;
            }
            else if (convertto == 'pound') {
                return 0.00220462;
            }
            else {
                return 0.035274;
            }
        }
        else if (convertfrom == 'ton') {
            if (convertto == 'gram') {
                return 907185;
            }
            else if (convertto == 'pound') {
                return 2000;
            }
            else {
                return 32000;
            }
        }
        else if (convertfrom == 'pound') {
            if (convertto == 'gram') {
                return 453.592;
            }
            else if (convertto == 'ton') {
                return 0.0005;
            }
            else {
                return 16;
            }
        }
        else {
            if (convertto == 'gram') {
                return 28.3495;
            }
            else if (convertto == 'ton') {
                return 1/32000;
            }
            else {
                return 0.0625;
            }
        }
    }

}

var answer = function () {
    var input = $('#u1val').val();
    var ans = input * findMult();
    $('#answer').html('<h1 id="answertext" style="color:white;">Answer:</h1><span style="color: white">' + ans.toFixed(4) + "</span>");
}


jQuery(document).ready(function () {
    document.querySelector("#distance").addEventListener("click", distance);
    document.querySelector("#volume").addEventListener("click", volume);
    document.querySelector("#weight").addEventListener("click", weight);
    distance();
    document.querySelector('#submit').addEventListener('click', answer);
})
