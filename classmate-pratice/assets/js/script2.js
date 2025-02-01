
function calculateImc() {
    let weight = parseFloat(document.getElementById("userWeight").value);
    let height = parseFloat(document.getElementById("userHeight").value);
    const calculateIMC = weight / (height ** 2);


    const outputResultImc = document.getElementById("outputResultImc");

    if(weight==isNaN || height==isNaN){
        window.alert(`Por favo insira valores válidos para peso e altura.`);
    }
    
    if (calculateIMC < 18.5) {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h2><mark>Obesidade grau III (mórbida) </mark></h2> <h2>IMC: ${calculateIMC.toFixed(2)}</h2> `;
    }

    else if (calculateIMC > 18.5 && calculateIMC <= 24.9) {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h3> <mark>Peso normal:</mark> ${calculateIMC.toFixed(2)}</h3> `;
    }

    else if (calculateIMC >= 25 && calculateIMC <= 29.9) {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h3> <mark>Sobrepeso IMC:</mark> ${calculateIMC.toFixed(2)}</h3> `;
    }

    else if (calculateIMC >= 30 && calculateIMC <= 34.9) {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h3> <mark>Obesidade grau I IMC:</mark> ${calculateIMC.toFixed(2)}</h3> `;
    }

    else if (calculateIMC >= 35 && calculateIMC <= 39.9) {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h3><mark>Obesidade grau II IMC:</mark> ${calculateIMC.toFixed(2)}</h3> `;
    }
    else {
        outputResultImc.innerHTML = `<h2>Massa: ${weight}kg</h2>  <h2>Altura: ${height}M</h2>   
    <h3><mark>Obesidade grau III (mórbida) IMC:</mark> ${calculateIMC.toFixed(2)}</h3> `;
    }




}