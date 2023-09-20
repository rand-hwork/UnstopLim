
const principal = document.querySelector('.cont__maximin');
function generar_matriz(){

    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;
    let contenedorT = document.getElementById('contenedorMaxmin');
    let contenedor2= document.getElementById('contenedor2');
    let contenedor3 = document.getElementById('contenedor3');
    let imagen2 = document.getElementById('imagen');
     //boton
    let resolver= document.getElementById('res');
    
    let variable =1;
    contenedorT.innerHTML= "";
    let tabla="<table  class='tabla'>"; 
    let subindice=0;
    
    
   
    tabla += '<tr class="tabla__tr" >\n';
    for (let i = 0; i <= columnas; i++) {
       if (i==0){
        tabla +='<th class="tabla__th" ></th>\n';
       }else{
        tabla +='<th class="tabla__th" >'+'θ<sub>'+i+'</sub></th>\n';
       }
    }
    tabla+='</tr >';
  

    for(let i=0;i<filas;i++){
        tabla+="<tr class='tabla__tr'>";
        for(let j=0;j<=columnas;j++){
            if(j==0){
                tabla+=`<td>A<sub>${i}</sub></td>`;     
            }else{
                tabla+="<td class='tabla__td'> <input style=' max-width: 60px;'' type='number' class='tabla__input' id='v' ></td>";     
            } 
        }

        tabla+="</tr>";
        subindice++;
    }
    tabla+="</table>";
    contenedorT.innerHTML=tabla;


    //boton para la resolucion

    resolver.addEventListener('click', ()=>{

    var vector1= new Array(filas*columnas);  
    var matriz = new Array();
    const vari = principal.getElementsByClassName('tabla__input'); 
    let size=vector1.length;
    let cont=0;
    for (const element of vari){
        let val=(element.value);
        vector1[cont]=parseInt(val);
        cont++;
    }


    //operaciones 
    //para pasar los valores del vector a la matriz
    cont=0;
    for(let x=0;x<filas;x++){
        matriz[x]= new Array();
        for(let y=0;y<columnas;y++){
            matriz[x][y]=parseInt(vector1[cont]);
            cont++;
        }
    }


    //para el proceso
    var Vm=new Array(filas);
    cont=0;
    let menor=0;

    for(let x=0;x<filas;x++){
        menor=matriz[x][0];
        for(let y=0;y<columnas;y++){ 
           if(menor>matriz[x][y]){
            menor=matriz[x][y];
           }  
        }
        Vm[cont]=menor;
        cont++;
    
    }

    //para sacar el valor mayor de los menores

    let mayor=Vm[0];
    let mayor_valor=0;

    for (let x=0;x<filas;x++){
        if(mayor<=Vm[x]){
         mayor_valor=Vm[x];
        }
    }

    //para mostrar en una tabla

    contenedor2.innerHTML= "";
    let tabla2="<table border='1' class='tabla' style=' max-width: 60px;'>";   
    
    for (let i = 0; i <= columnas; i++) {
        if (i==0){
         tabla2 +='<th class="tabla__th" ><b>ALTERNATIVA</b></th>\n';
        }else{
         tabla2 +='<th class="tabla__th" >'+'θ<sub>'+i+'</sub></th>\n';
        }
     }
    for(let i=0;i<filas;i++){
        tabla2+="<tr class='tabla__tr'>";
        for(let j=0;j<columnas;j++){
            if (j==0){
                tabla2+=`<td class="tabla__td" >A<sub>${i}</sub></td>`;
            }
            tabla2+=`<td class='tabla__td'>${matriz[i][j]}</td>`;
            
        }
        tabla2+="</tr>";
    }
    tabla2+="</table>";
    contenedor2.innerHTML=tabla2;

    //imagen de la flecha
    let imagen1=`<img  src='aseets/img/flecha.png' alt='fallo al cargar la imagen' width='60px' height='60px'></img>`;
    imagen2.innerHTML=imagen1;



    
    //para mostrar el vector de menores valores

    

    let tabla3="<table border='1' class='tabla' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
    
    tabla3+="<td class='tabla__tr' border='1'><strong>Si</strong></td>";
    for(let i=0;i<filas;i++){
        tabla3+="<tr class='tabla__tr'>";
        
        for(let j=0;j<1;j++){
            if(Vm[i]==mayor_valor){
            tabla3+=`<td style="background: orange;">${Vm[i]}</td>`;
            }else{
            tabla3+=`<td class="tabla__td">${Vm[i]}</td>`;
            }
        }
        tabla3+="</tr>";
    }
    tabla3+="</table>";
    contenedor3.innerHTML=tabla3;

    //para poner la letra del resultado
    let res=document.getElementById('respuesta');
    res.innerText=`El mayor valor de (Si) es: ${mayor_valor}`;

    });


}
const button = document.getElementById('buttonGenerar');


button.addEventListener('click',()=>{
    generar_matriz();
});