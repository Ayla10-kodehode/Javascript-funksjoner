const unit = document.getElementById("units-dropdown");
const input = document.getElementById("input");
const resultTxt = document.getElementById("result_txt");

function convertUnit() {
    let result = 0;

    if (unit.value === "lbs2kg"){
        result = `${(input.value / 2.2).toFixed(2)}kg`
    }   
    else if (unit.value === "kg2lbs"){
        result = `${(input.value * 2.2).toFixed(2)}lbs`
    }    
    else if (unit.value === "inch2cm"){
        result = `${(input.value * 2.54).toFixed(2)}cm`
    }    
    else if (unit.value === "cm2inch"){
        result = `${(input.value / 2.54).toFixed(2)}inch`
    }    
    else if (unit.value === "miles2km"){
        result = `${(input.value * 1.6).toFixed(2)}km`
    }
    else { 
        result = `${(input.value / 1.6).toFixed(2)}miles`
    }
    resultTxt.textContent = result
    }


