document.getElementById("block3").onmouseover = function () {
    changeFontColor();
}
document.getElementById("block3").onmouseout = function () {
    revertColor();
}
document.getElementById("block4").ondblclick = function () {
    hide();
}
document.getElementById('input1').onkeypress = function () {
    var keynumber = event.which;
    if (keynumber >= 48 && keynumber <= 57)
        return true;
    else
        return false;
}
document.getElementById('inputBox1').onchange=function(){
    var x=document.getElementById('inputBox1');
    var y=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
    y.value=x.value.toUpperCase();
}

document.getElementById('inputBox3').onchange=function(){
    var str=document.getElementById('inputBox3').value;
    var i;
    str.charAt(0).toUpperCase();
    for(i=1;i<str.length;i++){
        if(str[i]=' ')
        {
            if(str.charAt(i+1)>='a' && str.charAt(i+1)<='z')
            {
                str.charAt(i+1).toUpperCase();
                i++;
            }
        }
    }
    //str = str.replace(/\s/g,''); 
    document.getElementById('inputBox3').value=str;
}

document.getElementById('p4').onfocus=function(){
    document.getElementById('p4').style.backgroundColor="yellow";
}
document.getElementById('browsers').onchange=function(){
    console.log(document.getElementById('browsers').value)
}
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    document.getElementById('block1').style = "background-color:blue;"
}

function increaseFont() {
    document.getElementById('block2').style = "font-size:25px;"
}

function changeFontColor(a) {
    document.getElementById("block3").style.color = "green";
}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
    document.getElementById("block4").style.display = "none";
}

function changeBackColorForAllBox() {
    var i;
    for (i = 0; i < 3; i++) {
        document.querySelectorAll(".box1")[i].style.backgroundColor = "green";
    }
}
function changeBackColor(color, id) {
    var i;
    for (i = 0; i < 3; i++) {
        document.querySelectorAll("." + id)[i].style.backgroundColor = color;
    }
}
function addAdjacent() {
    var element = document.createElement("p");
    var data = document.createTextNode("This is the newly added paragraph!!!");
    element.appendChild(data);
    var parent = document.getElementById("para2");
    parent.appendChild(element);
}

function removePara() {
    var element = document.getElementById("para4");
    element.remove();
}

function animatePara() {
    var elem = document.getElementById("box5");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 650) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
