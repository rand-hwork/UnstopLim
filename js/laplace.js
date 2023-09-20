const buttonCrear = document.querySelector('.buttonCrear');
const buttonResolverIngresos = document.querySelector('.buttonResolverIngresos');



buttonCrear.addEventListener('click', () => {
    generarTablaNew();
});

buttonResolverIngresos.addEventListener('click', () => {
    ingresosNew();
});

let numFilas = 0;
let numColumnas = 0;

function generarTablaNew() {
    numFilas = document.getElementById("filasNew").value;
    numColumnas = document.getElementById("columnaNew").value;
    var contenedorTablasNew = document.getElementById("contenedorTablaNew");
    contenedorTablasNew.innerHTML = "";

    var tabla = "<table class='tabla' border='1'>";
    var num = 1;

    tabla += '<tr class="tabla__tr">\n';
    for (let i = 1; i <= numColumnas; i++) {
        tabla += '<th class="tabla__th">' + 'Θ<sub>' + i + '</sub></th>\n';
    }
    tabla += '</tr>';

    for (let i = 1; i <= numFilas; i++) {
        tabla += "<tr class='tabla__tr'>";
        for (let j = 1; j <= numColumnas; j++) {
            tabla += "<td class='tabla__td'><input type='text' id='filasNew" + num + "' size='4'></td>";
            num++;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTablasNew.innerHTML = tabla;
}

function ingresosNew() {
    
    const matriz = [];
    var m = 1;
    for (let i = 0; i < numFilas; i++) {
        matriz[i] = [];
    }
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            matriz[i][j] = parseInt(document.getElementById(`filasNew${m}`).value);
            m++;
        }
    }
// agarara valor caso ingreso
    var array = Array(numFilas);
    var suma = 0;
    var cont14 = 0;
    
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            suma+= matriz[i][j];
        }
        array[cont14] = suma;
        suma=0;
        cont14++;
    }

    var tabla9 = '<table class="tabla" border="1" >';
    tabla9 += "<tr class='tabla__tr'>";
    for (let i = 0; i < numFilas; i++) {
        tabla9 += '<td class="tabla__td">' + array[i] + '</td>';
    }
    tabla9 += "</tr>";
    tabla9 += "</table>";
 
   vectorNew.innerHTML =" la suma de cada fila = "+ tabla9 + " dividimos entre el tamaño de la columna  /"+numColumnas;

    // dividir la suma
    for (let i = 0; i < numFilas; i++) 
    {
        array[i]=array[i]/numColumnas;
    }
    //Number(array);


    var tabla3 = '<table class="tabla" border="1" >';
    tabla3 += "<tr class='tabla__tr'>";
    for (let i = 0; i < numFilas; i++) {
        tabla3 += '<td class="tabla__td">' + array[i] + '</td>';
    }
    tabla3 += "</tr>";
    tabla3 += "</table>";
    agarrar2New.innerHTML = tabla3;

    var max = array[0];
    for (let i = 0; i < numFilas; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    
    
    agarrar3New.innerHTML = "Alternativa escojida = " + max;
}