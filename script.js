$(document).ready(function(){
    let name = document.getElementById("username");
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let pwd = document.getElementById("pwd");
    

    function callback() {
        $("#form").attr('action','todolist.html')
    }

     $("#btn1").click(function(callback){
         validate(callback);
     })
     
    function validate(callback){
        if(name.value==""){
       }
        else{
            if(name.value==="admin"){
                error1.innerHTML = "valid";
                error1.style.color= "green";
                if(pwd.value==""){
                    }
                else{
                        if(pwd.value==="12345"){
                            error2.innerHTML = "password correct";
                            error2.style.color= "green";
                            $("#form").attr('action','todolist.html')
                            callback();
                        }
                         else{
                            error2.innerHTML = "password incorrect";
                            error2.style.color = "red";
                            return false;
                        }
                    }
                }
            else{
                 error1.innerHTML = "Invalid Username"; 
                error1.style.color = "red";
                return false;
                }
            }
        };
})   
