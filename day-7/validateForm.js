function validateMinMax(obj, min, max){
    let val = obj.value;
    if(val.length < min || val.length > max){
        obj.setCustomValidity("Kérem adjon meg legalább " + min.toString() + " és legfeljebb " + max.toString() + " karaktert!\nÖn jelenleg " + val.length.toString() + " karaktert adott meg.");
    }
    else{
        obj.setCustomValidity('');
    }
}

function validateMin(obj, min){
    let val = obj.value;
    if(val.length < min){
        obj.setCustomValidity("Kérem adjon meg legalább " + min.toString() + " karaktert!\nÖn jelenleg " + val.length.toString() + " karaktert adott meg.");
    }
    else{
        obj.setCustomValidity('');
    }
}

function nonEmpty(obj){
    let val = obj.value;
    if(val.length === 0){
        obj.setCustomValidity("Kérem töltse ki ezt a mezőt!");
    }
}