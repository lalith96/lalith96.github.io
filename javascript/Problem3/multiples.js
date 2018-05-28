function mul()
{
    var n=parseInt(document.getElementById("num").value);
    if(n<=0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    else
    {
        var i,sum=0;
        for(i=1;i<n;i++)
        if(i%3==0 || i%5==0)
             sum=sum+i;
        document.getElementById("res").innerHTML="Sum of multiple of 3 and 5 is ="+sum;
    }
}