function generar_matriz(){

    let filas = document.getElementById("filas1").value;
    let columnas = document.getElementById("columnas1").value;
    let coeficiente = document.getElementById("coeficiente").value;

    let contenedorT = document.getElementById('contenedorT1');
    let contenedor2 = document.getElementById('contenedor22');
    let contenedor3 = document.getElementById('contenedor33'); 
    let contenedor4 = document.getElementById('contenedor4'); 
    let contenedor5 = document.getElementById('contenedor5'); 

    let imagen2 = document.getElementById('imagen1');
    let imagen22 = document.getElementById('imagen22');

     //boton
    let resolver= document.getElementById('res_ganancias');
    let resolver_costos= document.getElementById('res_costos');

    
    let variable =1;
    contenedorT.innerHTML= "";
    let tabla="<table  class='table'>"; 
    let subindice=0;
    
    
   
    tabla += '<tr class="table__tr" >\n';
    for (let i = 0; i <= columnas; i++) {
       if (i==0){
        tabla +='<th class="table__th" ></th>\n';
       }else{
        tabla +='<th class="table__th" >'+'θ<sub>'+i+'</sub></th>\n';
       }
    }
    tabla+='</tr >';
  

    for(let i=0;i<filas;i++){
        tabla+="<tr class='table__tr'>";
        for(let j=0;j<=columnas;j++){
            if(j==0){
                tabla+=`<td>A<sub>${i}</sub></td>`;     
            }else{
                tabla+="<td class='table__td'> <input style=' max-width: 60px;'' type='number' class='table_input' id='v' ></td>";     
            } 
        }

        tabla+="</tr>";
        subindice++;
    }
    tabla+="</table>";
    contenedorT.innerHTML=tabla;


    //boton para la resolucion por ganancias


    resolver.addEventListener('click', ()=>{

    var vector1= new Array(filas*columnas);  
    var matriz = new Array();
    const vari = document.getElementsByClassName('table_input'); 
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
//es para sacar los menores valores
    var VM= new Array(filas);
    let contX=0;
    let mayorVM=0;

    for(let x=0;x<filas;x++){
        mayorVM=matriz[x][0];
        for(let y=0;y<columnas;y++){ 
           if(mayorVM<matriz[x][y]){
            mayorVM=matriz[x][y];
           }  
        }
        VM[contX]=mayorVM;
        contX++;
    
    }
    console.log("este es el vector con valores maximos: "+VM);

   

     //-------------------------------------------------



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





     //-------------------------------------------------
     
     let coeficiente2= 1-coeficiente;
     console.log("este es el coeficiente 2:  "+coeficiente2);
 
     //------- para realizar la multiplicacion
 
     let ganancias= new Array(filas);
 
     for(let indice=0;indice<filas;indice++){
         ganancias[indice]=coeficiente*VM[indice]+coeficiente2*Vm[indice];
     }

     console.log("este es el de ganancias: "+ganancias);

    

    //para mostrar en una tabla

    contenedor2.innerHTML= "";
    let tabla2="<table border='1' class='table' style=' max-width: 60px;'>";   
    
    for (let i = 0; i <= columnas; i++) {
        if (i==0){
         tabla2 +='<th class="table__th" ><b>ALTERNATIVA</b></th>\n';
        }else{
         tabla2 +='<th class="table__th" >'+'θ<sub>'+i+'</sub></th>\n';
        }
     }
    for(let i=0;i<filas;i++){
        tabla2+="<tr class='table__tr'>";
        for(let j=0;j<columnas;j++){
            if (j==0){
                tabla2+=`<td style="background: yellow; text-align: center;">A<sub>${i+1}</sub></td>`;
            }
            tabla2+=`<td class='table__td'>${matriz[i][j]}</td>`;
            
        }
        tabla2+="</tr>";
    }
    tabla2+="</table>";
    contenedor2.innerHTML=tabla2;

    //imagen de la flecha
    let imagen1=`<img  src='aseets/img/flecha.png' alt='fallo al cargar la imagen' width='60px' height='60px'></img>`;
    imagen2.innerHTML=imagen1;


     //dandole valor al label1
    let coe1=document.getElementById('coeficiente1');
    coe1.innerText=`    ${coeficiente} * `;


     //para mostrar el vector de mayores valores
     let tabla4="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
    
     tabla4+="<td class='table__td' border='1'><strong>(max)</strong></td>";
     for(let i=0;i<filas;i++){
         tabla4+="<tr class='table__tr'>";
         
         for(let j=0;j<1;j++){
             
             tabla4+=`<td>${VM[i]}</td>`;
             
         }
         tabla4+="</tr>";
     }
     tabla4+="</table>";
     contenedor4.innerHTML=tabla4;



     //dandole valor al label2
     let coe2=document.getElementById('coeficiente2');
    coe2.innerText=`+ ${coeficiente2} * `;
    
    //para mostrar el vector de menores valores

    let tabla3="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
    
    tabla3+="<td class='table__td' border='1'><strong>(min)</strong></td>";
    for(let i=0;i<filas;i++){
        tabla3+="<tr class='table__tr'>";
        
        for(let j=0;j<1;j++){
            
            tabla3+=`<td>${Vm[i]}</td>`;
            
        }
        tabla3+="</tr>";
    }
    tabla3+="</table>";
    contenedor3.innerHTML=tabla3;

    //dandole valor al label3
    
    let imagen3=`<img  src='aseets/img/flecha.png' alt='fallo al cargar la imagen' width='60px' height='60px'></img>`;
    imagen22.innerHTML=imagen3;

    //para motrar el vector de resultados1
    let tabla5="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  

    tabla5+="<td class='table__td' border='1'><strong>(RESULTADOS)</strong></td>";
    for(let i=0;i<filas;i++){
        tabla5+="<tr class='table__tr'>";
        
        for(let j=0;j<1;j++){
            
            tabla5+=`<td>${ganancias[i]}</td>`;
            
        }
        tabla5+="</tr>";
    }
    tabla5+="</table>";
    contenedor5.innerHTML=tabla5;


    //para sacar el valor mayor deL VECTOR GANANCIAS

    let mayor=ganancias[0];
    let mayor_valor=0;

    for (let x=0;x<filas;x++){
        if(mayor<=ganancias[x]){
         mayor_valor=ganancias[x];
        }
    }


    //para poner la letra del resultado
    let res=document.getElementById('respuesta1');
    res.innerText=`COMO ES UN CASO DE GANANCIAS, LA RESPUESTA ES:  ${mayor_valor}`;

    });


    //boton para la resolucion por costos


    resolver_costos.addEventListener('click', ()=>{

        var vector1= new Array(filas*columnas);  
        var matriz = new Array();
        const vari = document.getElementsByClassName('table_input'); 
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
    //es para sacar los menores valores
        var VM= new Array(filas);
        let contX=0;
        let mayorVM=0;
    
        for(let x=0;x<filas;x++){
            mayorVM=matriz[x][0];
            for(let y=0;y<columnas;y++){ 
               if(mayorVM<matriz[x][y]){
                mayorVM=matriz[x][y];
               }  
            }
            VM[contX]=mayorVM;
            contX++;
        
        }
        
    
       
    
         //-------------------------------------------------
    
    
    
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
    
    
    
    
    
         //-------------------------------------------------
         
         let coeficiente2= 1-coeficiente;
         
     
         //------- para realizar la multiplicacion
     
         let costos= new Array(filas);
     
         for(let indice=0;indice<filas;indice++){
             costos[indice]=coeficiente*Vm[indice]+coeficiente2*VM[indice];
         }
    
         
    
        
    
       //para mostrar en una tabla

    contenedor2.innerHTML= "";
    let tabla2="<table border='1' class='table' style=' max-width: 60px;'>";   
    
    for (let i = 0; i <= columnas; i++) {
        if (i==0){
         tabla2 +='<th class="table__th" ><b>ALTERNATIVA</b></th>\n';
        }else{
         tabla2 +='<th class="table__th" >'+'θ<sub>'+i+'</sub></th>\n';
        }
     }
    for(let i=0;i<filas;i++){
        tabla2+="<tr class='table__tr'>";
        for(let j=0;j<columnas;j++){
            if (j==0){
                tabla2+=`<td style="background: yellow; text-align: center;">A<sub>${i+1}</sub></td>`;
            }
            tabla2+=`<td class='table__td'>${matriz[i][j]}</td>`;
            
        }
        tabla2+="</tr>";
    }
    tabla2+="</table>";
    contenedor2.innerHTML=tabla2;
    
        //imagen de la flecha
        let imagen1=`<img  src='aseets/img/flecha.png' alt='fallo al cargar la imagen' width='60px' height='60px'></img>`;
        imagen2.innerHTML=imagen1;
    
    
         //dandole valor al label1
        let coe1=document.getElementById('coeficiente1');
        coe1.innerText=`    ${coeficiente} * `;
    
    
         //para mostrar el vector de mayores valores
         let tabla4="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
        
         tabla4+="<td class='table__td' border='1'><strong>(max)</strong></td>";
         for(let i=0;i<filas;i++){
             tabla4+="<tr class='table__tr'>";
             
             for(let j=0;j<1;j++){
                 
                 tabla4+=`<td>${VM[i]}</td>`;
                 
             }
             tabla4+="</tr>";
         }
         tabla4+="</table>";
         contenedor3.innerHTML=tabla4;
    
    
    
         //dandole valor al label2
         let coe2=document.getElementById('coeficiente2');
        coe2.innerText=`+ ${coeficiente2} * `;
        
        //para mostrar el vector de menores valores
    
        let tabla3="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
        
        tabla3+="<td class='table__td border='1'><strong>(min)</strong></td>";
        for(let i=0;i<filas;i++){
            tabla3+="<tr class='table__tr'>";
            
            for(let j=0;j<1;j++){
                
                tabla3+=`<td>${Vm[i]}</td>`;
                
            }
            tabla3+="</tr>";
        }
        tabla3+="</table>";
        contenedor4.innerHTML=tabla3;
    
        //dandole valor al label3
        
        let imagen3=`<img  src='aseets/img/flecha.png' alt='fallo al cargar la imagen' width='60px' height='60px'></img>`;
        imagen22.innerHTML=imagen3;
    
        //para motrar el vector de resultados1
        let tabla5="<table border='1' class='table' style=' max-width: 60px; min-width: 60px; text-align:center; '>";  
    
        tabla5+="<td class='table__td' border='1'><strong>(RESULTADOS)</strong></td>";
        for(let i=0;i<filas;i++){
            tabla5+="<tr class='table__tr'>";
            
            for(let j=0;j<1;j++){
                
                tabla5+=`<td>${costos[i]}</td>`;////////////////////7
                
            }
            tabla5+="</tr>";
        }
        tabla5+="</table>";
        contenedor5.innerHTML=tabla5;
    
    
        //para sacar el valor mayor deL VECTOR GANANCIAS
    
        
        let mayor=costos[0];
        let mayor_valor=0;
    
        for (let x=0;x<filas;x++){
            if(mayor>=costos[x]){
             mayor_valor=costos[x];
            }
        }
    
    
        //para poner la letra del resultado
        let res=document.getElementById('respuesta1');
        res.innerText=`COMO ES UN CASO DE COSTOS, LA RESPUESTA ES:  ${mayor_valor}`;
    
        });


}

let  generar =document.getElementById('generar22');

generar.addEventListener( 'click', ()=>{
    generar_matriz();
});