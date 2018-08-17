
//preload the three (4-6) images first
var block = 0;
//down
var pos = 90;
var spos = 90;
//right
var pos1=80;
var spos1 =80;
//up
var pos2 = 690;
var spos2 = 690;
//right2
var pos3 = 485;
var spos3 = 485;

var spos4 = 90;
var pos4 = 90;

total_spin_value = "";
var num = 0;
var face0=new Image()
face0.src="dice4.gif"
var face1=new Image()
face1.src="dice5.gif"
var face2=new Image()
face2.src="dice6.gif"




/*
if (startgame()) {
  d1();
}
*/
/*
function throwdice1(){
	document.getElementById("dice").style.visibility='visible';
	var randomdice=Math.round(Math.random()*2)
	document.images["mydice"].src=eval("face"+randomdice+".src")
	num += 1


	if (randomdice == 0 && num > 1) {
	total_spin_value += 4;
	}

	else if (randomdice == 1 && num > 1) {
	total_spin_value += 5;
	}

	else if (randomdice == 2 && num > 1) {
	total_spin_value += 6;
	}

}
*/
function sum(str){
	var total = 0;
	for (var i = 0; i<str.length; i++){
			 total = total + parseInt(str.charAt(i));
	 }
	return total;
}


function throwdice() {
document.getElementById("dice").style.visibility='visible';
var randomdice=Math.round(Math.random()*2);
document.images["mydice"].src=eval("face"+randomdice+".src");
num += 1;

if (num == 1) {
  background();
}

if (randomdice == 0 && num > 1) {
	total_spin_value = total_spin_value+"4";
}

if (randomdice == 1 && num > 1) {
	total_spin_value = total_spin_value+"5";
}

if (randomdice == 2 && num > 1) {
	total_spin_value = total_spin_value+"6";
}
//////////4:
if (total_spin_value == "4") {
  fails1_();
}
if (total_spin_value == "44"){
  fails2_();
}
if (total_spin_value == "45") {
  fails2_5();
}
if (total_spin_value == "454") {
  fails2_();
}
if (total_spin_value == "455") {
  fails2_();
}
if (total_spin_value == "456") {
  fails2_();
}
if (total_spin_value == "46") {
  fails2_5();
}
if (total_spin_value == "464") {
  fails2_();
}
if (total_spin_value == "465") {
  fails2_();
}
if (total_spin_value == "466") {
  fails2_();
}
////////5:
if (total_spin_value == "5") {
  fails1_5();
}

if (total_spin_value == "54"){
  fails2_();
}
if (total_spin_value == "55") {
  fails2_();
}
if (total_spin_value == "56") {
  fails2_();
}


if (total_spin_value == "6") {
  succeed1();
}
if (total_spin_value == "64") {
    succeed_2();
}
if (total_spin_value == "644") {
    succeed3_2();
}
if (total_spin_value == "6444") {
        succeed4();
}
if (total_spin_value == "64444") {
          succeed_5();
}
if (total_spin_value == "64445") {
       succeed_5();
}

if (total_spin_value == "6445") {
        succeed4();
}
if (total_spin_value == "64454") {
        succeed_5();
}
if (total_spin_value == "6446") {
      succeed4();
}
if (total_spin_value == "645") {
    succeed3_2();
}
if (total_spin_value == "6454") {
      succeed4();
}
if (total_spin_value == "64544") {
      succeed_5();
}
if (total_spin_value == "6455") {
    succeed4();
}
if (total_spin_value == "6456") {
    succeed4();
}
if (total_spin_value == "646") {
    succeed3_2();
}
if (total_spin_value == "6464") {
    succeed4();
}
if (total_spin_value == "6465") {
    succeed4();
}
if (total_spin_value == "6466") {
    succeed4();
}
//11
if (total_spin_value == "65") {
    succeed_2();
}
//15
if (total_spin_value == "654") {
    succeed3_2();
}
//19
if (total_spin_value == "6544") {
    succeed4();
}
//23
if (total_spin_value == "65444") {
    succeed_5();
}
//20
if (total_spin_value == "6545") {
    succeed4();
}
//21
if (total_spin_value == "6546") {
    succeed4();
}
//16
if (total_spin_value == "655") {
      succeed3_2();
}
//20
if (total_spin_value == "6554") {
    succeed4();
}
//21--below
if (total_spin_value == "6555") {
    succeed4();
}
//22
if (total_spin_value == "6556") {
    succeed4();
}
//656 --17
if (total_spin_value == "656") {
      succeed3_2();
}
//21
if (total_spin_value == "6564") {
      succeed4();
}
//22
if (total_spin_value == "6565") {
      succeed4();
}
//23
if (total_spin_value == "6566") {
      succeed4();
}
//66 == 666 666 66 remember 6!
if (total_spin_value == "66") {
  succeed3_1();
}
if (total_spin_value == "664") {
    fail2_();
}
	//yas: makes sense above
	//17
if (total_spin_value == "665") {
    succeed4();
}
	//21
if (total_spin_value == "6654") {
      succeed_5();
}
	//>21 √
if (total_spin_value == "6655") {
		succeed_5();
}
//>21 √
if (total_spin_value == "6656") {
	succeed_5();
}
//18
if (total_spin_value == "666") {
    succeed4();
}
	//22
if (total_spin_value == "6664") {
      succeed_5();
}
	//>23√
if (total_spin_value == "6665") {
      succeed_5();
}
//don't need 6 (6666) b/c ==24 which satisfies below!!
if (sum(total_spin_value) >= 24) {
  succeed6();
}

//background:
function background() {
  window.alert("You have just fled your home country, Mexico, due to drug cartels who work with the police and politicians. They are pushing you and your family for money. You want to immigrate to the United States to get a new start. Roll to see if you get across the border without being caught.")
}

//success
function succeed1() {
  window.alert("You got across without getting caught! You have made your plea to apply for asylum. You are waiting to see if you can get a second court hearing and a work permit.");
}
//fails1
function fails1_() {
    window.alert("You were caught, but your family escaped. You plea for asylum. Roll to see if you are granted a second hearing and if your family can gain working permits.");
  }
	function fails1_5() {
	    window.alert("You and your family were caught! You plea for asylum. Roll to see if you are granted a second hearing.");
	  }
//fails2
function fails2_() {
    window.alert("You were all denied asylum because you broke the law and your case is believed to be insignificant. Due to the new policy that the Trump Administration enacted, many cases are denied on the basis that they are not significant. You end up being deported with your family. You lose: please reload the tab to try again.");
  }

	///if not fails2_ // if get fails1_ first /if 4 5 is start
	function fails2_5() {
	    window.alert("You are detained in jail while awaiting a decision about whether or not your case is important enough to receive another court hearing. Meanwhile, your family is denied work permits, so they end up working illegally and eventually are arrested too.");
	}

function succeed_2() {
    window.alert("Congratulations, you got the work permit. And now you have a very low paying job, but unfortunately you got back home and your pipes are broken. No insurance, so you can't pay to fix it. Roll the dice to see if you are granted a second court hearing.");
}
function succeed3_1() {
    window.alert("You got the work permit! Now you have a low paying job and you were granted a court hearing. Roll to see what happens next.");
}
function succeed3_2() {
    window.alert("Now you have a very low paying job and you were granted a court hearing. Roll to see what happens next.");
}
//fail2
function fail2() {
    window.alert("You were denied work because your record shows that you have been to jail in Mexico for standing up against the government’s corruption. Now you must work illegally and you end up getting caught and deported because you broke the law. You have lost: please reload the page to try again.");
  }

function succeed4() {
  window.alert("You were granted a judge hearing even though through Trump’s new policy that the majority of people get denied.");
}
//fail3
function fail3() {
  window.alert("You were denied your first judge hearing because Donald Trump just passed a new policy making it harder for immigrants to be granted asylum. They invalidated your case.");
  }

function succeed_5() {
  window.alert("You were fired and need to pay rent, but hardly have the money to do so.");
}
function succeed6() {
  window.alert("You have received asylum, so now you can stay in the country without being deported! But you still live in a neighborhood with gang activity and in labor all day without much income.");
}
/*
console.log(total_spin_value);
*/

//movement:
block = sum(total_spin_value);

for (var i=1;i<=randomdice+4;i++){
	if((block-(randomdice+4)+i) <=6 && num > 1) {
		spos += 100;
		blockdown();
	}

	else if((block-(randomdice+4)+i) >6 && (block-(randomdice+4)+i) <10)	{
			/*(6- ((block) -(randomdice+4)))*blockdown();
			if (block>=7) {
				(6- ((block) -(randomdice+4)))*blockdown();
			}*/

			spos1 += 135;
			blockright();
		}
console.log(spos1);

 if ((block-(randomdice+4)+i) >= 10 && (block-(randomdice+4)+i) < 16)	{
		/*(6- ((block) -(randomdice+4)))*blockdown();
		if (block>=7) {
			(6- ((block) -(randomdice+4)))*blockdown();
		}*/

		spos2 -= 100;
		blockup();
	}

	if ((block-(randomdice+4)+i) >= 16 && (block-(randomdice+4)+i) < 19)	{
		 /*(6- ((block) -(randomdice+4)))*blockdown();
		 if (block>=7) {
			 (6- ((block) -(randomdice+4)))*blockdown();
		 }*/

		 spos3 += 135;
		 blockright2();
	 }

	 if ((block-(randomdice+4)+i) >= 19)	{
 		 spos4 += 100;
 		 blockdown2();
 	 }


if ((block-(randomdice+4)+i) >= 24) {
	clearInterval(id);
}

}




}

function blockdown () {
	console.log("down");
 var elem = document.getElementById("animate");
 var id = setInterval(frame, 20);
 /*pos++;
 elem.style.top = pos + 'px';
 elem.style.left = pos - 'px'; */
 function frame() {
 	if (pos == spos) {
 		clearInterval(id);
 	}
		else {
 		pos++;
 		elem.style.top = pos + 'px';
 		elem.style.left = pos - 'px';
		console.log(elem.style.top);

 	}
 }
}

function blockright () {
		console.log("spos");
 var elem = document.getElementById("animate");
 var id = setInterval(frame, 20);
 function frame() {
  if (pos1 == spos1) {
 		clearInterval(id);
 	}
	else if (pos >= 690){
 		pos1++;
 		elem.style.top = pos1 -'px';
 		elem.style.left = pos1 + 'px';
		console.log(elem.style.top);

 	}
 }
}



function blockup () {
		console.log("up");
 var elem = document.getElementById("animate");
 var id = setInterval(frame, 20);
 function frame() {
 	if (pos2 == spos2) {
 		clearInterval(id);
 	}
	else if (pos1 >= 485){
 		pos2--;
 		elem.style.top = pos2 + 'px';
 	//	elem.style.left = pos - 'px';
	}
 	}
}


function blockright2 () {
	console.log("blockright2");
 var elem = document.getElementById("animate");
 var id = setInterval(frame, 20);
 function frame() {
  if (pos3 == spos3) {
 		clearInterval(id);
 	}
	else if (pos1 >= 485 && pos2 <=90){
 		pos3++;
 		elem.style.top = pos3 -'px';
 		elem.style.left = pos3 + 'px';
		console.log(elem.style.top);

 	}
 }
 console.log(id);

}


function blockdown2 () {
	console.log("down");
 var elem = document.getElementById("animate");
 var id = setInterval(frame, 20);
 /*pos++;
 elem.style.top = pos + 'px';
 elem.style.left = pos - 'px'; */
 function frame() {
 	if (pos4 == spos4) {
 		clearInterval(id);
 	}
		else if (pos3 >= 890) {
 		pos4++;
 		elem.style.top = pos4 + 'px';
 		//elem.style.left = pos4 - 'px';
		console.log(elem.style.top);

 	}
 }
}




/*

function move6() {
  var elem = document.getElementById("animate");
 var pos = 90;
 var id = setInterval(frame, 1000);
 function frame() {
   if (pos == 700) {
     document.getElementById("animate").style.display = "block";
     clearInterval(id);
   } else {
     pos++;
     elem.style.top = pos + 'px';
     elem.style.left = pos - 'px';
     document.getElementById("animate").style.display = "none";

   }
 }
}

function move64() {
  var elem = document.getElementById("animate");
 var pos = 25;
 var id = setInterval(frame, 1000);
 function frame() {
   if (pos == 500) {
     document.getElementById("animate").style.display = "block";
     clearInterval(id);
   } else {
     pos++;
     elem.style.top = pos + 'px';
     elem.style.left = pos - 'px';
     document.getElementById("animate").style.display = "none";

   }
 }
}

function move644() {
  var elem = document.getElementById("animate");
 var pos = 25;
 var id = setInterval(frame, 1000);
 function frame() {
   if (pos == 500) {
     document.getElementById("animate").style.display = "block";
     clearInterval(id);
   } else {
     pos++;
     elem.style.top = pos + 'px';
     elem.style.left = pos - 'px';
     document.getElementById("animate").style.display = "none";
	 }
   }
 }



*/

function d1() {
throwdice();
total_spin_value = "";
}

window.onload = d1;
