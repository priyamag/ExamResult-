const total=document.getElementById("total");
const ob=document.getElementById("ob");
let result;
const h3=document.getElementById("h3i");
const myimage=document.getElementById("myimage");
const btn=document.getElementById("btn")

myimage.style.visibility="hidden"
function show(){    
     
    result=(ob.value/total.value)*100
    if(result>0 && result<=100)
    {
        if(result>=80)
        {
            h3.innerHTML="congratulation"+result+"%";
            myimage.src="c.gif";
            myimage.style.visibility="visible";
        }
        if(result<80 && result>=60)
        {
            h3.innerHTML="verygood"+result+"%";
            myimage.src="gp.gif";
            myimage.style.visibility="visible";
        }
        if(result<60)
        {
            
            h3.innerHTML="tryhard"+result+"%";
            myimage.src="blnt.gif";
            myimage.style.visibility="visible";
        }
    }


    else
    h3.innerHTML="invaild entry"
}