function check()
{
    var i,n,flag=0;
    var string=document.getElementById("str").value;
    n=string.length;
    for(i=0;i<n;i++)
    {
        if(string.charAt(i)!=string.charAt(n-i-1))
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
        document.getElementById("res").innerHTML="True";
    else    
        document.getElementById("res").innerHTML="False";
}