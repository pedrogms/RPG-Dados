function d4(){

    var contador;
    for(contador = 1; contador <=4; contador++){
        document.getElementById("resultado").innerHTML = contador;
        contador = Math.round(Math.random()*4);
    }
}
function d8(){

    var contador;
    for(contador = 1; contador <=8; contador++){
        document.getElementById("resultado").innerHTML = contador;
        contador = Math.round(Math.random()*8);
    }
}
function d6(){

    var contador;
    for(contador = 1; contador <=6; contador++){
        document.getElementById("resultado").innerHTML = contador;
        contador = Math.round(Math.random()*6);
    }
}
function d20()
{
    var contador;
    for(contador = 1; contador <=20; contador++)
    {
         document.getElementById("resultado").innerHTML = contador;
         contador = Math.round(Math.random()*20);
    }
}
function d12()
{
    var contador;
    for(contador = 1; contador <=12; contador++)
    {
         document.getElementById("resultado").innerHTML = contador;
         contador = Math.round(Math.random()*12);
    }
}
function d100()
{
    var contador;
    for(contador = 1; contador <=100; contador++)
    {
         document.getElementById("resultado").innerHTML = contador;
         contador = Math.round(Math.random()*100);
    }

}