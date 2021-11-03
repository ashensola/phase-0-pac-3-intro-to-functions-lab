function shout(string){

    return string.toUpperCase();
}


function whisper(string){

    return string.toLowerCase();
}

function logShout(string){

    console.log(string.toUpperCase());
}

function logWhisper(string){

    console.log(string.toLowerCase());
}

//say hi to grandma//
function sayHiToGrandma(string){
    let string1="I love you, Grandma.";

  if(string === string.toLowerCase()){

   return "I can't hear you!"; 
 }

  else if(string === string.toUpperCase()){

     return "YES INDEED!";
  }

  else if (string === string1){
      
    return "I love you, too.";

  }

}

sayHiToGrandma("I love you, Grandma.");