let ubicacionPrincipal = window.pageYOffset;
window.onscroll= function(){
    let Desplazamiento_Actual = window.pageXOffset; 
    if (ubicacionPrincipal>=Desplazamiento_Actual){
        document.getElementById('site').style.top='0';

    }else{
        document.getElementById('site').style.top='-100px';  
      }
      ubicacionPrincipal=Desplazamiento_Actual;
}
