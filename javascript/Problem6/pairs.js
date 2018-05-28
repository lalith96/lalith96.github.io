var arr=new Array();
var length;
function cal()
{
    var i,j;
    var n=parseInt(document.getElementById("sum").value);
    if(n<=0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]==n)
            {
                document.getElementById("res").innerHTML+="\""+arr[i]+","+arr[j]+"\""+"<br>";
            }
        }
    }
}
function add()
{
    var m=parseInt(document.getElementById("num").value);
    if(m<=0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    else
    {
        length=arr.push(m);
    }
    document.getElementById("ar").innerHTML+=m+" ";
    document.getElementById("num").value=" ";
}