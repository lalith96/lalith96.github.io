var arr=new Array();
var length,flag;
function cal()
{
    var i,j;
    for(i=0;i<arr.length;i++)
    {
        flag=0;
        if(arr[i]==-999)
            continue;
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                if(flag==0)
                    document.getElementById("res").innerHTML+="\""+arr[i]+"\""+"<br>";
                arr[j]=-999;
                flag=1;
            }
        }
    }
}

function add()
{
    var m=parseInt(document.getElementById("num").value);
    length=arr.push(m);
    document.getElementById("ar").innerHTML+=m+" ";
    document.getElementById("num").value=" ";
}