var c1= document.getElementById("c1");
var c2= document.getElementById("c2");
var body= document.getElementById("body");
var text=document.getElementById("text");
var copyButton= document.getElementById("copy");

function asign_color() {
	// body...
	body.style.background = "linear-gradient(to right, " + c1.value +" , "+ c2.value + ")";
	text.innerHTML= "background: linear-gradient(to right, " + c1.value +" , "+ c2.value + ');';
}

function copy(){
	
  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  console.log(text.value);
}

c1.addEventListener("input", asign_color);

c2.addEventListener("input", asign_color);

copyButton.addEventListener("click", copy);

