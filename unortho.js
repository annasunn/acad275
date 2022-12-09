var tab = "distance";
var normfirst = true;

var clearAns = function(){
    $('#answer').html('<h1 id="answertext" style="color:white;">Answer:');
}

var distance = function () {
    clearAns();
    
    $('.types').empty();
    tab = "distance";
    console.log(2);
    if(normfirst){
        $('#unitselect').append('<option value="meter">Meter</option>');
        $('#unitselect').append('<option value="mile">Mile</option>');
        $('#unitselect').append('<option value="yard">Yard</option>');
        $('#unitselect').append('<option value="Foot">Foot</option>');
        
        $('#unitselect2').append('<option value="duck">Duck</option>');
        $('#unitselect2').append('<option value="goldengate">Golden Gate Bridge</option>');
        $('#unitselect2').append('<option value="toothpick">Toothpick</option>');
        $('#unitselect2').append('<option value="exitsign">Exit Sign</option>');

    }
    else{
        $('#unitselect').append('<option value="duck">Duck</option>');
        $('#unitselect').append('<option value="goldengate">Golden Gate Bridge</option>');
        $('#unitselect').append('<option value="toothpick">Toothpick</option>');
        $('#unitselect').append('<option value="exitsign">Exit Sign</option>');

        $('#unitselect2').append('<option value="meter">Meter</option>');
        $('#unitselect2').append('<option value="mile">Mile</option>');
        $('#unitselect2').append('<option value="yard">Yard</option>');
        $('#unitselect2').append('<option value="Foot">Foot</option>');
  
    }

}

var volume = function () {
    clearAns();
    $('.types').empty();
    tab = 'volume';
    console.log(1);
    if(normfirst){
        $('#unitselect').append('<option value="cmeter">Cubic Meter</option>');
        $('#unitselect').append('<option value="liter">Liter</option>');
        $('#unitselect').append('<option value="gallon">Gallon</option>');
        $('#unitselect').append('<option value="cup">Cup</option>');
        $('#unitselect').append('<option value="fluidoz">Fluid Ounce</option>');
    
        $('#unitselect2').append('<option value="drop">Water Droplet</option>');
        $('#unitselect2').append('<option value="cheese">Slice of Cheese</option>');
        $('#unitselect2').append('<option value="iphone">iPhone</option>');
        $('#unitselect2').append('<option value="coffee">Coffee Bean</option>');
        $('#unitselect').append('<option value="camry">Toyota Camry</option>');

    }
    else{
        $('#unitselect2').append('<option value="cmeter">Cubic Meter</option>');
        $('#unitselect2').append('<option value="liter">Liter</option>');
        $('#unitselect2').append('<option value="gallon">Gallon</option>');
        $('#unitselect2').append('<option value="cup">Cup</option>');
        $('#unitselect2').append('<option value="fluidoz">Fluid Ounce</option>');
    
        $('#unitselect').append('<option value="drop">Water Droplet</option>');
        $('#unitselect').append('<option value="cheese">Slice of Cheese</option>');
        $('#unitselect').append('<option value="iphone">iPhone</option>');
        $('#unitselect2').append('<option value="coffee">Coffee Bean</option>');
        $('#unitselect').append('<option value="camry">Toyota Camry</option>');

    }

}

var weight = function () {
    clearAns();
    $('.types').empty();
    tab = 'weight';
    console.log(3);
    if(normfirst){
        $('#unitselect').append('<option value="gram">Gram</option>');
        $('#unitselect').append('<option value="ton">Ton</option>');
        $('#unitselect').append('<option value="pound">Pound</option>');
        $('#unitselect').append('<option value="oz">Ounce</option>');
    
        $('#unitselect2').append('<option value="elephant">Elephant</option>');
        $('#unitselect2').append('<option value="arcade">Arcade Machine</option>');
        $('#unitselect2').append('<option value="bus">Bus</option>');
        $('#unitselect2').append('<option value="crow">Crow</option>');

    }
    else{
        $('#unitselect2').append('<option value="gram">Gram</option>');
        $('#unitselect2').append('<option value="ton">Ton</option>');
        $('#unitselect2').append('<option value="pound">Pound</option>');
        $('#unitselect2').append('<option value="oz">Ounce</option>');
    
        $('#unitselect').append('<option value="elephant">Elephant</option>');
        $('#unitselect').append('<option value="arcade">Arcade Machine</option>');
        $('#unitselect').append('<option value="bus">Bus</option>');
        $('#unitselect').append('<option value="crow">Crow</option>');

    }
}



var findMult = function () {
    var convertfrom = $('#unitselect').val();
    var convertto = $('#unitselect2').val();
    if (tab == 'distance') {
        if (convertfrom == 'meter') {
            if (convertto == 'duck') {
                return 1/0.55;
            }
            else if (convertto == 'goldengate') {
                return 1/1280.16;
            }
            else if(convertto =='toothpick'){
                return 1/0.063499898399695192674;
            }
            else {
                return 1/0.1905;
            }
        }
        else if (convertfrom == 'mile') {
            if (convertto == 'duck') {
                return 1/0.000341754;
            }
            else if (convertto == 'goldengate') {
                return 1/0.7954545;
            }
            else if(convertto =='toothpick'){
                return 1/2.5/63360;
            }
            else {
                return 1/0.000118371;
            }
        }
        else if (convertfrom == 'yard') {
            if (convertto == 'duck') {
                return 1/0.6014870400000001;
            }
            else if (convertto == 'goldengate') {
                return 1/1399.99992;
            }
            else if(convertto =='toothpick'){
                return 1/0.069444333333;
            }
            else {
                return 1/0.20833296;
            }
        }
        else if(convertfrom == 'Foot'){
            if (convertto == 'duck') {
                return 1/1.8044611200000000295;
            }
            else if (convertto == 'goldengate') {
                return 1/4200;
            }
            else if(convertto =='toothpick'){
                return 1/0.208333;
            }
            else {
                return 1/0.62499888;
            }
        }
        else if(convertfrom == 'duck'){
            if (convertto == 'meter') {
                return 0.55;
            }
            else if (convertto == 'mile') {
                return 0.000341754;
            }
            else if(convertto =='yard'){
                return 0.6014870400000001;
            }
            else {
                return 1.8044611200000000295;
            }
        }
        else if(convertfrom == 'goldengate'){
            if (convertto == 'meter') {
                return 1280.16;
            }
            else if (convertto == 'mile') {
                return 0.7954545;
            }
            else if(convertto =='yard'){
                return 1399.99992
            }
            else {
                return 4200;
            }
        }
        else if(convertfrom == 'toothpick'){
            if (convertto == 'meter') {
                return 0.063499898399695192674;
            }
            else if (convertto == 'mile') {
                return 2.5/63360;
            }
            else if(convertto =='yard'){
                return 0.069444333333;
            }
            else {
                return 0.208333;
            }
        }
        else if(convertfrom == 'exitsign'){
            if (convertto == 'meter') {
                return 0.1905;
            }
            else if (convertto == 'mile') {
                return 0.000118371;
            }
            else if(convertto =='yard'){
                return 0.20833296;
            }
            else {
                return 0.62499888;
            }
        }
    }
    else if(tab == 'volume'){
        if (convertfrom == 'cmeter') {
            if (convertto == 'drop') {
                return 1/0.00000005;
            }
            else if (convertto == 'cheese') {
                return 1/0.000021;
            }
            else if (convertto == 'iphone'){
                return 1/0.00008181459;
            }
            else if (convertto == 'coffee'){
                return 1/0.0000003599985753599999743;
            }
            else{
                return 1/0.4275844;
            }
        }
        else if (convertfrom == 'liter') {
            if (convertto == 'drop') {
                return 1/0.00005;
            }
            else if (convertto == 'cheese') {
                return 1/0.021;
            }
            else if (convertto == 'iphone'){
                return 1/0.08181459;
            }
            else if (convertto == 'coffee'){
                return 1/0.00035999857535999997766;
            }
            else{
                return 1/427.5843999997829;
            }
        }
        else if (convertfrom == 'gallon') {
            if (convertto == 'drop') {
                return 1/0.0000132086;
            }
            else if (convertto == 'cheese') {
                return 1/0.00461935;
            }
            else if (convertto == 'iphone'){
                return 1/0.017996693862;
            }
            else if (convertto == 'coffee'){
                return 1/0.00009510156249886074584;
            }
            else{
                return 1/94.055419052368705479;
            }
        }
        else if(convertfrom == 'cup'){
            if (convertto == 'drop') {
                return 1/0.000175975379244615;
            }
            else if (convertto == 'cheese') {
                return 1/0.07390960650313623;
            }
            else if (convertto == 'iphone'){
                return 1/0.28794712712780523578;
            }
            else if (convertto == 'coffee'){
                return 1/0.001499994064;
            }
            else{
                return 1/1781.601666665761968;
            }
        }
        else if(convertfrom == 'fluidoz'){
            if (convertto == 'drop') {
                return 1/0.001690700799995184956;
            }
            else if (convertto == 'cheese') {
                return 1/0.71009382891274885896;
            }
            else if (convertto == 'iphone'){
                return 1/2.7664804035715300223;
            }
            else if (convertto == 'coffee'){
                return 1/0.012173;
            }
            else{
                return 1/14458.348608546573814;
            }
        }
        else if(convertfrom == 'drop'){
            if (convertto == 'cmeter') {
                return 0.00000005;
            }
            else if (convertto == 'liter') {
                return 0.00005;
            }
            else if (convertto == 'gallon'){
                return 0.0000132086;
            }
            else if (convertto == 'cup'){
                return 0.000175975379244615;
            }
            else{
                return 0.001690700799995184956;
            }
        }
        else if(convertfrom == 'cheese'){
            if (convertto == 'cmeter') {
                return 0.000021;
            }
            else if (convertto == 'liter') {
                return 0.021;
            }
            else if (convertto == 'gallon'){
                return 0.00461935;
            }
            else if (convertto == 'cup'){
                return 0.07390960650313623;
            }
            else{
                return 0.71009382891274885896;
            }
        }
        else if(convertfrom == 'iphone'){
            if (convertto == 'cmeter') {
                return 0.00008181459;
            }
            else if (convertto == 'liter') {
                return 0.08181459;
            }
            else if (convertto == 'gallon'){
                return 0.017996693862;
            }
            else if (convertto == 'cup'){
                return 0.28794712712780523578;
            }
            else{
                return 2.7664804035715300223;
            }
        }
        else if(convertfrom == 'coffee'){
            if (convertto == 'cmeter') {
                return 0.0000003599985753599999743;
            }
            else if (convertto == 'liter') {
                return 0.00035999857535999997766;
            }
            else if (convertto == 'gallon'){
                return 0.00009510156249886074584;
            }
            else if (convertto == 'cup'){
                return 0.001499994064;
            }
            else{
                return 0.012173;
            }
        }
        else {
            if (convertto == 'cmeter') {
                return 0.4275844;
            }
            else if (convertto == 'liter') {
                return 427.5843999997829;
            }
            else if (convertto == 'gallon'){
                return 94.055419052368705479;
            }
            else if (convertto == 'cup'){
                return 1781.601666665761968;
            }
            else{
                return 14458.348608546573814;
            }
        }
    }
    else{
        if (convertfrom == 'gram') {
            if (convertto == 'elephant') {
                return 1/3991612.9997888;
            }
            else if (convertto == 'arcade') {
                return 1/147418;
            }
            else if (convertto == 'bus') {
                return 1/6372972.8;
            }
            else {
                return 1/468;
            }
        }
        else if (convertfrom == 'ton') {
            if (convertto == 'elephant') {
                return 1/4.4000001585000196869;
            }
            else if (convertto == 'arcade') {
                return 1/0.1625;
            }
            else if (convertto == 'bus') {
                return 1/7.02500000165;
            }
            else {
                return 1/0.000515882;
            }
        }
        else if (convertfrom == 'pound') {
            if (convertto == 'elephant') {
                return 1/8800;
            }
            else if (convertto == 'arcade') {
                return 1/325;
            }
            else if (convertto == 'bus') {
                return 1/14050;
            }
            else {
                return 1/1.0317639999999999;
            }
        }
        else if (convertfrom == 'oz') {
            if (convertto == 'elephant') {
                return 1/140800.00507200064021;
            }
            else if (convertto == 'arcade') {
                return 1/5200;
            }
            else if (convertto == 'bus') {
                return 1/224800.0000528;
            }
            else {
                return 1/16.508223999999998455;
            }
        }
        else if (convertfrom == 'elephant'){
            if (convertto == 'gram') {
                return 3991612.9997888;
            }
            else if (convertto == 'ton') {
                return 4.4000001585000196869;
            }
            else if (convertto == 'pound') {
                return 8800;
            }
            else {
                return 140800.00507200064021;
            }
        }
        else if (convertfrom == 'arcade'){
            if (convertto == 'gram') {
                return 147418;
            }
            else if (convertto == 'ton') {
                return 0.1625;
            }
            else if (convertto == 'pound') {
                return 325;
            }
            else {
                return 5200;
            }
        }
        else if (convertfrom == 'bus'){
            if (convertto == 'gram') {
                return 6372972.8;
            }
            else if (convertto == 'ton') {
                return 7.02500000165;
            }
            else if (convertto == 'pound') {
                return 14050;
            }
            else {
                return 224800.0000528;
            }
        }
        else {
            if (convertto == 'gram') {
                return 468;
            }
            else if (convertto == 'ton') {
                return 0.000515882;
            }
            else if (convertto == 'pound') {
                return 1.0317639999999999;
            }
            else {
                return 16.508223999999998455;
            }
        }
    }

}

var answer = function () {
    clearAns();
    var input = $('#u1val').val();
    var ans = input * findMult();
    $('#answer').html('<span style="color: white">' + ans.toFixed(4) + '</h1>');
}


jQuery(document).ready(function () {
    document.querySelector("#distance").addEventListener("click", distance);
    document.querySelector("#volume").addEventListener("click", volume);
    document.querySelector("#weight").addEventListener("click", weight);
    distance();
    document.querySelector('#flip').addEventListener('click', function(){
        if(normfirst){
            normfirst = false;
            if(tab == 'distance'){
                distance();
            }
            else if(tab == 'volume'){
                volume()
            }
            else{
                weight();
            }
        }
        else if(!normfirst){
            normfirst = true;
            if(tab == 'distance'){
                distance();
            }
            else if(tab == 'volume'){
                volume()
            }
            else{
                weight();
            }
        }
    })
    document.querySelector('#submit').addEventListener('click', answer);

})
