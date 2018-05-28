function mul()
{
    var m=parseInt(document.getElementById("num").value);
    if(m<=0)
    {
        document.getElementById("res").innerHTML="<span style='color:red;'>Please enter positive numbers</span>"
    }
    else
    {
        for(var i=1;i<=m;i++)
        {
        if(i%3==0 && i%5==0)
        {
            document.getElementById("res").innerHTML+="FizzBuzz"
        }
        else if(i%3==0)
        {
            document.getElementById("res").innerHTML+="Fizz";
        }
        else if(i%5==0)
        {
            document.getElementById("res").innerHTML+="Buzz";
        } 
        else
            document.getElementById("res").innerHTML+=i;
        if(i!=m)    
            document.getElementById("res").innerHTML+=',';
    }
    }
}