var bangla1 = document.querySelector("#bangla");
var english2= document.querySelector("#englisg");
var fisics3 = document.querySelector("#fisics");
var math4   = document.querySelector("#math");
var input  = document.querySelector(".inputss");
var btn     = document.querySelector("#addBtn");



input.addEventListener("change", function() {
  if (input.value > 100) {
    input.classList.add("red");
  } else {
    input.classList.remove("red");
  }
  
});


var input2 = document.querySelector(".inputss2");
input2.addEventListener("change", function() {
    if (input2.value > 100) {
      input2.classList.add("red");
    } else {
      input2.classList.remove("red");
    }
    
  });

  var input3= document.querySelector(".inputss3");
input3.addEventListener("change", function() {
    if (input3.value > 100) {
      input3.classList.add("red");
    } else {
      input3.classList.remove("red");
    }
    
  });


  var input4 = document.querySelector(".inputss4");

input4.addEventListener("change", function() {
    if (input4.value > 100) {
      input4.classList.add("red");
    } else {
      input4.classList.remove("red");
    }
    
  });


//click btn===================================//
btn.addEventListener("click",function(){
    // number cheek condition //
    if(bangla1.value == '' || english2.value == 0 || fisics3.value == ''|| math4.value == ''){
        alert("Please type your number")
    }else{
      var newBangla = parseInt(bangla1.value);
      var newEnglisg = parseInt(english2.value);
      var newFisics = parseInt(fisics3.value);
      var newMath = parseInt(math4.value);
      // total mark add//
      var totalMark = newBangla+newEnglisg+newFisics+newMath
      console .log(totalMark);
      var newTotalMard = document.querySelector("#totalMardA");
      newTotalMard.innerHTML=totalMark;
      newTotalMard.style.background="red"

      var avg = totalMark/4;
      var avgShow = document.querySelector("#avgra");
      avgShow.innerHTML=avg;

      var sGrade = document.querySelector("#sGrade");
      if(avg>80 && avg<100){
        sGrade.innerHTML="A+"
      }else if(avg>70 && avg<80){
        sGrade.innerHTML="A"
      }
       else if(avg>60 && avg<70){
        sGrade.innerHTML="B"
      }
      else if(avg>50 && avg<60){
        sGrade.innerHTML="C"
      }else if(avg>40 && avg<50){
        sGrade.innerHTML="D"
      }else{
        sGrade.innerHTML="F"
      }

      var fail = document.querySelector("#pass");
      if(avg>=33){
        fail.innerHTML="Pass"

      }else{
        fail.innerHTML="Fail"
      }


        
    }
   
})
