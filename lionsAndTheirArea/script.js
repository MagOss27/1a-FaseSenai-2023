function calcularArea() {
    
    let totalIndividuos = 14;
    let totalCasais = Number(document.getElementById("inputCasais").value);
    let areaSolo = 320;
    let areaCasais = 400;
    let totalSolo = totalIndividuos - (totalCasais * 2);
    let areaTotal = (totalSolo * areaSolo) + (totalCasais * areaCasais);

    document.getElementById("resultado").innerText = `Total de área ocupada: ${areaTotal}m²`;
}
