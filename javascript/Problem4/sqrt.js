function getSqrt()
{
    var m=parseInt(document.getElementById("num").value);
    var number=Math.sqrt(m);
    number=Math.ceil(number);
    for(var i=number;i>0;i--)
    {
        if(Math.pow(2,i)<=m)
        {
            var res=i;
            break;
        }
    }
    document.getElementById("res").innerHTML=res;
}