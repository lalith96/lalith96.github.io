function sum()
{
    var n=parseInt(document.getElementById("num").value);
    if(n<0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    else
    {
        m=(n*(n+1)/2);
        document.getElementById("res").innerHTML="Sum of "+n+" natural numbers is ="+m;
    }
}