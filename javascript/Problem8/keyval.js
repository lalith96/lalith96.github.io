var amount=[];
var length;
function cal()
{
    var sum=0,i;
    for(i=0;i<amount.length;i++)
    {
        sum=sum+amount[i].price;
    }
    document.getElementById("res").innerHTML="Total sum paid by all together is:"+sum;
}
function add()
{
    var name=document.getElementById("name").value;
    var price=parseInt(document.getElementById("price").value);
    length=amount.push({name:name,price:price});
    document.getElementById("ar").innerHTML+="\""+name+"\""+":"+price+" ";
    document.getElementById("price").value=" ";
    document.getElementById("name").value=" ";
}