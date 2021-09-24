function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&& this.status==200){
          var response = JSON.parse(this.responseText);
          var todo = '<table>'
          for(i = 0; i <1 ; i++){
            todo+= '<tr>';
            todo+= '<td >' + "Done?" + '</td>'
            todo+= '<th id="head">' + "THINGS TO DO" + '</th>'
            '</tr>'
          }
         for(i = 0;i < response.length; i++){
              todo+= '<tr >';
              todo+= '<td><input type="checkbox" class="check" name="chk" onchange="post()" class="form-check-input" ></td>';
              todo+= '<td class="itemName">' + response[i].title + '</td>';
              todo+= '</tr>';
            }
            todo+='</table>';
          document.getElementById('demo').innerHTML = todo;
          diabling(response,todo)
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }
    
  function diabling(x ,y){
      for( var i=0 ;i<x.length;){
        if(x[i].completed == true){
          document.getElementsByClassName("check")[i].checked = true;
          document.getElementsByClassName("check")[i].disabled = true;
          i++;
        }
        else{
          i++;

        }
      } 
    }

  function post (){
      var promise= new Promise(function(resolve){
      var a = document.getElementsByName("chk")
      var newvar = 0;
        for (let i= 0; i < a.length; i++) {
            if(a[i].checked==true && a[i].disabled !=true){
              newvar = + newvar+1;
            }
          }
         if(newvar==5){
            resolve();
           }
        })
        promise
        .then(function(){
           alert("Kudos :)... You have succeccfully completed 5 tasks...")  
        })
    }
    
      
     
   
 
     