
let form = document.querySelector('form');
const valuesPorMoneda = JSON.parse('{"Dolar": 4.047, "Peso Mexicano": 194 , "Peso Colombiano": 1, "Euro": 4.552, "Libra Esterlina": 5.355}')

//{"Dolar": 4.047.55, "Peso Mexicano": 194.23, "Peso Colombiano": 1.00, "Euro": 4.552.03, "Libra Esterlina": 5.355.14}

llenarSelect();
llenarSelectDos();
mensajeConfirmacion();

const moneda_para_convertir = document.getElementById("monedaUno");


function llenarSelect(){
    let monedas = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
    let select =document.getElementById("monedaUno");

        for(let i=0; i < monedas.length; i++){
            let option = document.createElement("option"); 
            option.innerHTML = monedas[i]; //metemos el texto en la opcion
            select.appendChild (option); //meter la opcion en el selec
    }
}

function llenarSelectDos(){
    monedas = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina']; //creamos la variable array
    let select =document.getElementById("monedaDos"); //seleccionamos el selec por su id

        for(let i=0; i < monedas.length; i++){
            let option = document.createElement("option"); // creamos la opcion
            option.innerHTML = monedas[i]; //metemos el texto en la opcion
            select.appendChild (option); //meter la opcion en el selec
    }
}



function pregunta(){
    let monedaUno = document.getElementById("monedaUno").value;
    let monedaDos = document.getElementById("monedaDos").value;
    if (monedaUno===monedaDos){
        alert("Verifique el cambio que desea realizar");
    }
    else if(monedaUno === ('Elige tu Moneda') || monedaDos === ('Elige tu Moneda')){
        alert("Elija un tipo de moneda");
    }else if (confirm('¿Realizar este cambio?') == true){
        const valor = parseFloat(document.querySelector('#dinero').value);
        const valorMonedaUno = parseFloat(valuesPorMoneda[monedaUno])
        const valorMonedaDos = parseFloat(valuesPorMoneda[monedaDos]);
        const resultado = (valorMonedaUno/valorMonedaDos)*valor;
        alert("RESULTADO: " + resultado);
    }else{
            alert("Confirma el cambio que quieres hacer");
    }
}

