var changeType = function(){
    var type = document.getElementById('type').value;
    $('.types').empty();
    if(type == 'volume'){
        console.log(1);
        $('.types').append('<option value="cmeter">Cubic Meter</option>');
        $('.types').append('<option value="liter">Liter</option>');
        $('.types').append('<option value="gallon">Gallon</option>');
        $('.types').append('<option value="cup">Cup</option>');
        $('.types').append('<option value="fluidoz">Fluid Ounce</option>');
    }
    else if(type == 'distance'){
        console.log(2);
        $('.types').append('<option value="meter">Meter</option>');
        $('.types').append('<option value="mile">Mile</option>');
        $('.types').append('<option value="yard">Yard</option>');
        $('.types').append('<option value="Foot">Foot</option>');
    }
    else if(type == 'weight'){
        console.log(3);
        $('.types').append('<option value="gram">Gram</option>');
        $('.types').append('<option value="ton">Ton</option>');
        $('.types').append('<option value="pound">Pound</option>');
        $('.types').append('<option value="oz">Ounce</option>');
    }
}

var u1 = new Object;

var u2 = new Object;

var ans;

var clearBYO = function(){
    $("#buildyourown").html('');
}

var isValidURL = function(url){
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}


var submitUnits = function(){
    u1.name = $('#u1name').val();
    u1.img = $('#u1img').val();
    u1.val = $('#u1val').val();
    u1.unit = $('#unitselect').val();

    u2.name = document.getElementById('u2name').value;
    u2.img = document.getElementById('u2img').value;
    u2.val = document.getElementById('u2val').value;
    u2.unit = $('#unitselect').val();

    if(u1.name != "" && u1.val != null && u2.name != "" && u2.val != null){
        clearBYO();
        $("#buildyourown").append('<div id="byobody"><br><p><h1 style="color:white;"><b>Build Your Own (2/2)</b></h1></p><br>')
        if(u1.img != ""){
            $("#buildyourown").append('<img style="width:100px" src="' + u1.img + '">')
        }
        $("#buildyourown").append('<h2 style="color: white;">Unit 1 is <span style="font-weight: bold">' + u1.name + '</span> and is<span style="font-weight: bold"> ' + u1.val + ' ' + u1.unit + 's</span></h2>');    
        if(u2.img != ""){
            $("#buildyourown").append('<img style="width:100px" src="' + u2.img + '">')
        }
        $("#buildyourown").append('<h2 style="color: white;">Unit 2 is <span style="font-weight: bold">' + u2.name + '</span> and is<span style="font-weight: bold"> ' + u2.val + ' ' + u2.unit + 's</span></h2>');    
        $("#buildyourown").css("padding", "50px");
        $("#buildyourown").append('<h2 style="color: white; padding: 50px 0;">How many <select id="u1convert"><option class="convertu1" value="' + u1.name + '">' + u1.name + '</option><option class="convertu2 value="' + u2.name + '">' + u2.name + '</option></select> in <input id="valueconvert" style="width:50px" type="number" placeholder="0.00" /><select id="u2convert"><option class="convertu1" value="' + u1.name + '">' + u1.name + '</option><option class="convertu2" value="' + u2.name + '">' + u2.name + '</option></select>?');
        $("#buildyourown").append('<button onclick="convert()" id="submit2" style="text-align: center">Convert</button>');
    }
    else{
        alert("Please fill out required fields");
    }

    

}

var visRep = function(un1, un2, amt1, amt2){

}

var func = function(){
    $(".unittype").html($('#unitselect').val());
}

var convert = function(){
    var convertto;
    var convertfrom;
    if($('#u1convert').val() == u1.name){
        convertto = u1;
    }
    else {
        convertto = u2;
    }
    if($('#u2convert').val() == u1.name){
        convertfrom = u1;
    }
    else {
        convertfrom = u2;
    }
    var convertfromamt = $('#valueconvert').val();
    var left = convertfromamt * convertfrom.val;
    var right = convertto.val;
    ans = left/right; 
    ans = ans.toFixed(2);
    $("#answer").append(ans);
    $('#imgs').append('<h1>' + ans + '</h1><img style="width:20%" src="' + convertto.img + '"><h1>=' + convertfromamt.toFixed(2) + '</h1><img style="width:20%" src="' + convertfrom.img + '">')
    $('#imgs').css('display', 'flex');
}

jQuery(document).ready(function(){
    document.getElementById('type').addEventListener("change", changeType);
    changeType();
    document.querySelector("#unitselect").addEventListener("change", func);
    func();
    $('#submit').on('click', submitUnits);
    $('#submit2').on('click', convert);
})