
const button = document.getElementById('buttonMaxMax');
const contPrincipal = document.getElementById('contMaxMax');
const contenedor = document.getElementById('contenido');
const descripcion = document.getElementById('descripcion');
const resultado = document.getElementById('resultado');


let filas='';
let columnas='';

// Elementos html
const startTable = '<table class="tabla">\n';
const endTable = '</table>';
const startRow = '<tr class="tabla__tr">\n';
const endRow = '</tr>\n';
const caption = '<caption tabla__caption>'+'Inserte valores a la  matriz'+'</caption>';
// funcionalidad
let lista = [];
let maximax=[];


//funciones para el primer addEventListaner
function getTable(){
    let table = '';
    table += caption;
    table += startTable;
    table += startRow;
    for(let i=1;i<=columnas;i++){
        if(i==1){
            table+= '<td></td>';
        }
        table += '<th class="tabla_th">'+'&Theta;<sub>'+i+'</sub></th>\n';
    }
    table += endRow;
    for(let i=1;i<=filas;i++){
        table+=startRow;
        for(let j=1;j<=columnas;j++){
            if(j==1){
                table+= '<td tabla__a>'+'&alpha;<sub>'+i+'</sub></td>';
            }
            table += '<td class="tabla__td">'+'<input class="tabla__input" type="number">'+'</td>\n';
        }
        table+=endRow;
    }
    table += endTable;
    table += '<button class="cont_resolver" id="resolver">Resolver Ejercicio</button>';
    return table;
}

function getMaxPosition(){
    let maxVal = maximax[0];
    let pos = 0;
    maximax.forEach((element,index) => {
        if(element >= maxVal){
            maxVal = element;
            pos=index;
        }
    });
    return pos;
}

function createMat(n, m) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
      matriz[i] = [];
      for (let j = 0; j < m; j++) {
        matriz[i][j] = 0; 
      }
    }
    return matriz;
}
//funciones para el segundo addEventListener
function getMatrixMaxiMax(){
    let pos = 0;
    let max = lista[0];
    let table2 = '';
    const matVal = createMat(filas,columnas);
    let x=0;
    for (let i = 0; i < lista.length; i++) {
        pos++;
        if (lista[i]>=max) {
            max = lista[i];
        } 
        if(pos == columnas){
            maximax.push(max);
            max = lista[i];
            pos = 0;
        }  
    }
    table2 += '<table class="tabla">\n<tr>\n'
    for (let i = 1; i <= columnas; i++) {
        table2 +='<th class="tabla__th">'+'&Theta;<sub>'+i+'<sub></th>\n';
    }
    table2 += '</tr>'
    for (let i = 0; i < filas; i++) {  
        table2 += '<tr class="tabla__tr">'
        for (let j = 0; j < columnas; j++) {
            matVal[i][j] = lista[x];
            table2 += '<td class="tabla__td">'+matVal[i][j]+'</td>';
            x++;
        }
        table2 += '</tr\n>'
    }
    table2 += '</table>';
    resultado.innerHTML = table2;
}


button.addEventListener('click',()=>{
    filas = parseInt(document.getElementById('elemento1').value);
    columnas = parseInt(document.getElementById('elemento2').value);
    contenedor.innerHTML = getTable(); 
    const resolver = document.getElementById('resolver');
    //el otro boton
    resolver.addEventListener('click',()=>{
        const values = contPrincipal.getElementsByClassName('tabla__input');
        let elem = '';
        let table = '';
        lista = [];
        maximax = [];
    
        for (const element of values) {
            elem = element.value;
            if(elem.length>0){
                lista.push(parseInt(elem));
            }else{
                lista.push(0);
            }
        }
    
        getMatrixMaxiMax(); 
    
        table +=startTable;
        table += startRow+'<th class="tabla__th">'+'maximax'+'</th>'+endRow;
        for (let i = 0; i < maximax.length; i++) {
            table += startRow;
            table += '<td class = "tabla__results">'+maximax[i]+'</td>\n';
            table += endRow;
        }   
        table += endTable;
        resultado.insertAdjacentHTML('beforeend',table);
    
        const estrategia = document.getElementsByClassName('tabla__results');
        for (const element of estrategia){
            element.classList.remove('result');
        }
        let posMax = getMaxPosition();
        estrategia[posMax].classList.add('result');

        posMax++;
        descripcion.innerHTML = '<p cont_p>Por lo tanto aplicando el criterio a la matriz ingresa por teclado, Se concluye que la estrategia a tomar mas viable es: '+'&alpha;<sub>'+posMax+'</sub>'+'<p>'

    })
});




