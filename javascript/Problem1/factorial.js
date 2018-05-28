function fact()
{
    var n=document.getElementById("num").value;
    if(n<0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    else
    {
        var m=1;
        for(var i=1;i<=n;i++)
        {
            m=m*i;
        }
        document.getElementById("res").innerHTML="Factorial of "+n+"="+m;
    }
}