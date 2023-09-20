
const buttonTabla = document.getElementById('buttonTabla');
const buttonIngreso = document.querySelector('.buttonIngreso');
const buttonCostos = document.querySelector('.buttonCostos');


buttonTabla.addEventListener('click',()=>{
    generarTabla();
})
buttonIngreso.addEventListener('click',()=>{
    ingresos();
})
buttonCostos.addEventListener('click',()=>{
    costos();
})

let numFilas = 0;
let numColumna = 0;

function generarTabla() {
    numFilas = document.getElementById("numfilas").value;
    numColumna = document.getElementById("numcolumnas").value;
    var contenedorTablas = document.getElementById("contenedorTabla");
    contenedorTablas.innerHTML = "";

    var tabla = "<table class='tabla' border='1'>";
    var num = 1;
    var lim=0;

    tabla += '<tr class="tabla__tr">\n';
    for (let i = 1; i <= numColumna; i++) {
        tabla +='<th class="tabla__th">'+'Θ<sub>'+i+'<sub></th>\n';
    }
    tabla += '</tr>';

    for (let i = 1; i <= numFilas; i++) {

        tabla += "<tr class='tabla__tr'>";
        for (let j = 1; j <= numColumna; j++) {      
            tabla += "<td class='tabla__td'><input type='text' id='filas" + num + "' size='4' '></td>";
            num++;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTablas.innerHTML = tabla;


}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ingresos() {
    
    const matriz = [];
    var m = 1;
    for (let i = 0; i < numFilas; i++) {
        matriz[i] = [];
    }
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumna; j++) {
            matriz[i][j] = parseInt(document.getElementById(`filas${m}`).value);
            m++;
        }
    }
// agarara valor caso ingreso
    var array = Array(numColumna);
    var max2 = 0;
    var cont14 = 0;
    
    for (let j = 0; j < numColumna; j++) {
        max2 = matriz[0][j];
        for (let i = 0; i < numFilas; i++) {
            if (matriz[i][j] > max2) {
                max2 = matriz[i][j];
            }
        }
        array[cont14] = max2;
        cont14++;
    }

    vector.innerHTML=array







    let cont12 = 0;

    for (let j = 0; j < numColumna; j++) {

        for (let i = 0; i < numFilas; i++) {

            matriz[i][j] = Math.abs(matriz[i][j] - array[cont12]);

        }
        cont12++;
    }

    // Imprimir matriz
    let matrizHTML = '<table class="tabla" border="1" >';
    matrizHTML +='<caption>Matriz de deploración</caption>';
    for (let i = 0; i < numFilas; i++) {
        
        matrizHTML += '<tr class="tabla__tr">';
        for (let j = 0; j < numColumna; j++) {
            matrizHTML += '<td class="tabla__td">' + matriz[i][j] + '</td>';
        }
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table>';

    agarrar.innerHTML = matrizHTML;

    // Hallar los valores máximos
    var array2 = Array(numFilas);
    var max=0;
    var cont13 = 0;
    for (let i = 0; i < numFilas; i++) {
         max = matriz[i][0];
        for (let j = 0; j < numColumna; j++) {
            if (matriz[i][j] > max) {
                max = matriz[i][j];
            }
        }
        array2[cont13] = max;
        cont13++;
    }

    var tabla3 = '<table class="tabla" border="1" >';
    tabla3 += "<tr class='tabla__tr'>";
    for (let i = 0; i < numFilas; i++) {
        tabla3 += '<td class="tabla__td">' + array2[i] + '</td>';
    }
    tabla3 += "</tr>";
    tabla3 += "</table>";
    agarrar2.innerHTML = tabla3;

    var max3 = array2[0];
    for (let i = 0; i < numFilas; i++) {
        if (array2[i] > max3) {
            max3 = array2[i];
        }
    }
    
    
    agarrar3.innerHTML = "Máximo valor = " + max3;
    console.log(max3)
    }
    


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function costos()
{
    const matriz = [];
    var m = 1;
    for (let i = 0; i < numFilas; i++) {
        matriz[i] = [];
    }
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumna; j++) {
            matriz[i][j] = parseInt(document.getElementById(`filas${m}`).value);
            m++;
        }
    }
// agarara valor caso ingreso
    var array = Array(numColumna);
    var max2=0;
    var cont14 = 0;
    
    for (let j = 0; j < numColumna; j++) {
        max2 = matriz[0][j];
        for (let i = 0; i < numFilas; i++) {
            if (matriz[i][j] < max2) {
                max2 = matriz[i][j];
            }
        }
        array[cont14] = max2;
        cont14++;
    }

    vector.innerHTML=" Costos "+array







    let cont12 = 0;

    for (let j = 0; j < numColumna; j++) {

        for (let i = 0; i < numFilas; i++) {

            matriz[i][j] = Math.abs(matriz[i][j] - array[cont12]);

        }
        cont12++;
    }

    // Imprimir matriz
    let matrizHTML = '<table class="tabla" border="1" >';
    matrizHTML +='<caption>Matriz de deploración</caption>';
    for (let i = 0; i < numFilas; i++) {
        
        matrizHTML += '<tr class="tabla__tr">';
        for (let j = 0; j < numColumna; j++) {
            matrizHTML += '<td class="tabla__td">' + matriz[i][j] + '</td>';
        }
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table>';

    agarrar.innerHTML =" min V<sub>ij</sub>-min<sub>ij</sub>  "+ matrizHTML;

    // Hallar los valores máximos
    var array2 = Array(numFilas);
    var max = 0;
    var cont13 = 0;
    for (let i = 0; i < numFilas; i++) {
        max = matriz[i][0];
        for (let j = 0; j < numColumna; j++) {
            if (matriz[i][j] > max) {
                max = matriz[i][j];
            }
        }
        array2[cont13] = max;
        cont13++;
    }

    var tabla3 = '<table class="tabla" border="1" >';
    tabla3 += "<tr class='tabla__tr'>";
    for (i = 0; i < numFilas; i++) {
        tabla3 += '<td class="tabla__td">' + array2[i] + '</td>';
    }
    tabla3 += "</tr>";
    tabla3 += "</table>";
    agarrar2.innerHTML = tabla3;

    var max3 = array2[0];
    for (let i = 0; i < numFilas; i++) {
        if (array2[i] < max3) {
            max3 = array2[i];
        }
    }
    
    
    agarrar3.innerHTML = "Minimo valor = " + max3;

}