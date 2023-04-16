const cotizar = () => {
    const brand = document.getElementById("marca").value;
    const year = document.getElementById("anio").value;
    let value;
    switch (year) {
        case "2022":
        case "2021":
        case "2020":
            value = 100000;
            break;
        case "2019":
        case "2018":
        case "2017":
            value = 50000;
            break;
        case "2016":
        case "2015":
        case "2014":
            value = 25000;
            break;
        default:
            value = "No se encontró valor para este año";
            break;
    }
    switch (brand) {
        case "Audi":
            value *= 1.5;
            break;
        case "Peugeot":
            value *= 1.7;
            break;
        case "Renault":
            value *= 0.8;
            break;
        case "Toyota":
            value *= 1.2;
            break;
        case "Honda":
            value *= 1.3;
            break;
        default:
            value = "No se encontró valor para esta marca";
            break;
    }
    const message = `El valor del auto marca ${brand} del año ${year} es de : $ ${value}`;
    document.getElementById("cotizacion").textContent = message;
};