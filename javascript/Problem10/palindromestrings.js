var arr=new Array();
var res=new Array();
var length;
function check(string)
{
    var i,n,flag=0;
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
        return 1;
    else    
        return 0;
}
function getStrings()
{
    for(var i=0;i<arr.length;i++)
    {
        if(check(arr[i]))
        {
            res.push(arr[i]);
        }
    }
    document.getElementById("res").innerHTML=res;
}
function add()
{
    var m=document.getElementById("string").value;
    length=arr.push(m);
    document.getElementById("ar").innerHTML+="\""+m+"\""+" ";
    document.getElementById("string").value=" ";
}