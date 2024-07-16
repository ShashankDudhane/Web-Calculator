let inputBox = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let btnArray = Array.from(buttons);
let result = " ";

btnArray.forEach((button)=>{
   button.addEventListener('click',(evt)=>{
     evt.preventDefault();
     if(evt.target.innerHTML==="=")
        {

             result = eval(result);
             inputBox.value = result;
        }
     else{
        if(evt.target.innerHTML==="AC")
            {
                result = " ";
                inputBox.value=result;
                inputBox.value="0";
            }
        else if(evt.target.innerHTML==="DEL")
        {
            
            result = result.substring(0,result.length-1);
            inputBox.value =result;
        }
        else{
            result += evt.target.innerHTML;
            inputBox.value = result;
        }
     }
   })
})