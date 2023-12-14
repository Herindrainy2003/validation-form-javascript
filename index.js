let form = document.querySelector('#myForm');
let username = document.getElementById('utilisateur');
let  email = document.getElementById('email');
let password = document.getElementById('mdp');
let confirmPassword = document.getElementById('mdpconf');
let sign_up = document.querySelector('#sign_up')

let message_alerte = document.querySelectorAll('.message-alerte') 
let icone_verif = document.querySelectorAll('.icone-verif')
let icone_verif_error = document.querySelectorAll('.icone-verif-error')
let l1_password = document.querySelector('.l1')
let l2_password = document.querySelector('.l2')
let l3_password = document.querySelector('.l3')
    
let usernameRegex = /^[a-zA-Z_-][a-zA-Z0-9_-]{3,23}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
let passwordRegex1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/;
let passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

sign_up.addEventListener(('click') , ()=>{alert('votre compte a ete creer')})
sign_up.disabled = true ;

let validity = 0 //pour stocker la valeur du champ valider

function displayError(input , valid ){
     let index = Array.from(form.elements).indexOf(input);
 if(input.value === ''){
    message_alerte[index].style.display = 'none'
    icone_verif_error[index].style.display = 'none'
    icone_verif[index].style.display = 'none'
    l1_password.style.display = 'none'
    l2_password.style.display = 'none'
    l3_password.style.display = 'none'

 }else if(valid === false){
         message_alerte[index].style.display = 'block'
         icone_verif_error[index].style.display = 'block'
       
     }else if(valid === true){
        message_alerte[index].style.display = 'none'
        icone_verif[index].style.display = 'block'
        icone_verif_error[index].style.display = 'none'
        validity++
        console.log(validity)
        validate()
     }            
}
    

username.addEventListener('input' , (event) => {
let username_value = event.target.value
if(!usernameRegex.test(username_value)){
     displayError(username , false )
    }else{
        displayError(username  , true)
    }
})
    
    
email.addEventListener(('input') ,(email_event) => {
    let email_value = email_event.target.value
    if(!emailRegex.test(email_value)){
        displayError(email ,false)
    }else{
        displayError(email ,true)
    }        
})
    

let tab_password = []
password.addEventListener(('input') ,(password_event) => {
    let password_value = password_event.target.value
    if(!passwordRegex.test(password_value)){
        l1_password.style.display = 'block'
        displayError(password , false)
    }else if(!passwordRegex1.test(password_value)){
        l2_password.style.display = 'block'
    }else if(!passwordRegex2.test(password_value)){
        l3_password.style.display = 'block'
        displayError(password , true)
        tab_password.push(password_value)
    }
  
})


confirmPassword.addEventListener(('input') ,(password_confirm_event) =>{
    if(tab_password.join('') === password_confirm_event.target.value){
        displayError(confirmPassword , true)
    }else{
        displayError(confirmPassword , false)
    }
    
})


function validate(){
    if(validity === 4){
        sign_up.disabled = false   
    }
}





       

        

    