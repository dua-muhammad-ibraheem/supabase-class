import supabase from "./config.js"; 
 
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
   
 let btn = document.querySelector('.btn');
 
 async function signUppg(){
    const { data, error } = await supabase.auth.signUp(
        {
          email: email.value,
          password: password.value,
          options: {
            data: {
              username: name.value,
              
            }
          }
        }
      )
      if(data){
        console.log(data);
      }else{
        console.log(error);
      }
 }

 btn.addEventListener('click', function(){
     console.log(signUppg)
 })
