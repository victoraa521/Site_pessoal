
var width = window.innerWidth;
if(width < 930){
    var botao = document.getElementById("bot1");

    botao.addEventListener('click', function(){
        document.getElementById("uul").style.left = "-100%";
        document.getElementById("uul").style.transition=".3s"
    })

    var botao2 = document.getElementById("bot2");

    botao2.addEventListener('click', function(){
        document.getElementById("uul").style.left = "-100%";
        document.getElementById("uul").style.transition=".3s"
    })

    var botao3 = document.getElementById("bot3");

    botao3.addEventListener('click', function(){
        document.getElementById("uul").style.left = "-100%";
        document.getElementById("uul").style.transition=".3s"
    })

    var menu_lateral = document.getElementById("menu_lateral")
    menu_lateral.addEventListener('click', function(){
        if (document.getElementById("uul").style.left < "0px"){
            document.getElementById("uul").style.left = "0";
            document.getElementById("uul").style.transition=".5s"
        }else{
            document.getElementById("uul").style.left = "-100%";
            document.getElementById("uul").style.transition=".5s"
        }
    })
}

