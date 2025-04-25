function secCheck(){
	var sec = document.getElementById('inputSec').value;

	switch(sec){
	  case "F":
	    document.getElementById('secResult').innerHTML="Fantasy";
	    break;
	  case "N":
	    document.getElementById('secResult').innerHTML="Non-Fantasy";
	   break;
	  case "R":
	    document.getElementById('secResult').innerHTML="Reference";
	    break;
	  default:
	    document.getElementById('secResult').innerHTML="Invalid Entry. Please Try Again.";

	}
}

function classCheck(){
	var classSec = document.getElementById('inputClass').value;

	switch(classSec){
	  case "1":
	    document.getElementById('classResult').innerHTML="Emerald";
	    break;
	  case "2":
	    document.getElementById('classResult').innerHTML="Ruby";
	   break;
	  case "3":
	    document.getElementById('classResult').innerHTML="Sapphire";
	    break;
	   case "4":
	    document.getElementById('classResult').innerHTML="Topaz";
	    break;
	  default:
	    document.getElementById('classResult').innerHTML="Invalid Entry. Please Try Again.";

	}
}

window.alert("LOADING")