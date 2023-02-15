
document.addEventListener("DOMContentLoaded", function codigo(){
    const menu=document.getElementById('bt_menu')
    const icono_menu_lateral=document.getElementById("icono_menu_lateral");
    function abrir(){
        document.getElementById("menu1").style.top="40px";
        icono_menu_lateral.style.rotate="90deg"
    }
    function cerrar(){
        document.getElementById("menu1").style.top="-1000px";
        icono_menu_lateral.style.rotate="0deg"
    }
    
    function boton_menu(){
        if(document.getElementById("menu1").style.top == '40px'){
            cerrar();
        } else{
            abrir();
        }
    }
    menu.addEventListener("click",boton_menu)
    function desplegar(){
        const redes = document.getElementsByClassName("redes");
        let cadena;
        let suma;
        if(redes[0].style.top == "0px"){
            for(let i = 0; i < document.getElementsByClassName("redes").length; i++){
                if(i < 1){
                  redes[i].style.display = "inline-block";
                  suma = 60;
                  cadena = suma + "px";
                  redes[i].style.top = cadena;
                  
                } else {
                  redes[i].style.display = "inline-block";
                  suma = parseInt(redes[i-1].style.top) + 60;
                  cadena = suma + "px";
                  redes[i].style.top = cadena;
                }
              }
        } else{
            for(let i = 0; i < document.getElementsByClassName("redes").length; i++){
                redes[i].style.top="0px"
                redes[i].style.display="none"
              }
        }
        
      }
      
    document.getElementById("boton_redes").addEventListener("click",desplegar)

    const boton= document.getElementById("boton");
    const barra= document.getElementById("menu");
    const icono =document.getElementById("icono")
    function abrir_lateral(){
        boton.style.left="17%";
        barra.style.left="0px";
        icono.style.rotate="180deg"
    };
    function cerrar_lateral(){
        barra.style.left="-400px";
        boton.style.left="0px";
        icono.style.rotate="-180deg"
    };
    function menu_lateral(){
        if(barra.style.left == "0px"){
            cerrar_lateral();
        } else{
            abrir_lateral();
        }
    };
    boton.addEventListener("click",menu_lateral);

document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll >= 5) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 15));

    }
}
buttonUp = document.getElementById("button-up");
window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 300) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 200) {
        buttonUp.style.transform = "scale(0)";
    }

};
});
