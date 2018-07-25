var state=1;

function changesmile() {
    if(state==0){
    document.getElementById("myImage").src = "firstpicproject.jpg";
    state =1;
  }
   else if(state==1){
    document.getElementById("myImage").src = "secondpicproject.jpg";
    state=0;
  }

}
