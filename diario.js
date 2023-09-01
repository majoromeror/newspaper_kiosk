let diario=["https://www.abc.com.py/","https://www.5dias.com.py/","https://cnnespanol.cnn.com/","https://www.ultimahora.com/","https://www.lanacion.com.py/","https://elpais.com/america/"]
pos=0;
const periodico=document.getElementById("abc");
const ant=document.getElementById("ant");
const sig=document.getElementById("sig");
function myFunction1(){
    pos=pos-1;
    if (pos<0){pos=diario.length-1};
    periodico.src = diario[pos];
}
function myFunction2() {
    pos=pos+1
    if (pos>diario.length-1){pos=0;}
    periodico.src= diario[pos];
}