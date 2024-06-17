let messageYes = 0;

function yes(){
  
  const message1 = ["VOCÊ DISSE SIM🎉 VAMOS NOS CASAR!", "RECEBAAA", "SIUUUUUUUUUUUUU"];
  
  document.getElementById("texto").innerText = message1[messageYes];
  
  document.getElementById("texto").style.backgroundColor = "blue";
  
  messageYes = (messageYes + 1) % message1.length;
}

let messageIndex = 0;

function no(x){
  marginX = Math.floor(Math.random()*100)
        marginY = Math.floor(Math.random()*150)

        x.style.margin = marginY.toString() + 'px ' + marginX.toString() + 'px'

  const messages = ["OPS, não quebre my heart :(", "POR FAVOR DIGA SIM", "NÃO ME DEIXE ASSIM VAGABUNDA","Aceita ai po", "NEVER SAY NEVER", "Amo Lana del rey", "vlw"]
  
  document.getElementById("texto").innerText = messages[messageIndex];
  
  document.getElementById("texto").style.backgroundColor = "red"
  
  messageIndex = (messageIndex + 1) % messages.length;
  
}