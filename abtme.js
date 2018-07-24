var state=0;

function changeword() {
    if(state==0){
    document.getElementById("demo").innerHTML = "Hola chicas";
    state =1;
  }
   else if(state==1){
    document.getElementById("demo").innerHTML = "ni hao";
    state=2;
  }
    else if(state==2){
     document.getElementById("demo").innerHTML = "ciao";
     state=0;}
}
