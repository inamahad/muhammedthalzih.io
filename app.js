let userName=document.getElementById("txtUserName");
let rollno=document.getElementById("txtrollno");
let email=document.getElementById("txtEmail");
let phoneno= document.getElementById("txtphoneno");
let dob=document.getElementById("txtdob");

let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
       return false;
    }else{
        onSuccess(userName);
    }
     /*if(dob.value.trim()===""){
       onError(dob,"Date of birth cannot be empty");
       return false;
    }else{
        onSuccess(dob);
    }*/
     if(rollno.value.trim()==="")
    {
         onError(rollno,"Roll Number cannot be empty");
       return false;
    }
    else{
        let x=rollno.value.length;
        if(x!=9)
        {

            onError(rollno,"Invalid size ");
       return false;
        }
        else
        {
        let letter = rollno.value.charAt(0);
        if(letter!='B' && letter !='M' && letter !='P')
           {onError(rollno,"Invalid input");
            return false;
        }
        let result =rollno.value.substr(1,6);
        let isnum=/^\d+$/.test(result);
        if(isnum==0)
        {
          onError(rollno,"Invalid input");
            return false;  
        }
        let la =rollno.value.substr(7,8);
        let chk =/^[a-zA-Z]+$/.test(la);
        if(chk==0)
        {
            onError(rollno,"Invalid input");
            return false;
        }
    }
     onSuccess(rollno);
}
   
    if(phoneno.value.trim()==="")
    {
         onError(phoneno,"Phone No  cannot be empty");
         return false;
    }
    else
    {
        if(phoneno.value.length!=10)
        {
            onError(phoneno,"Invalid input try again :)");
            return false;
        }
    }
 if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
        return false;
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
            return false;
        }else{
            onSuccess(email);
        }
    }
    //password
   
     alert("Registration_successful");
     return true;
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}