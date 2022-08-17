function convertToAbs(inputData) {
    let array = [];
    
    for (let key in inputData) {
            let a = Math.abs(inputData[key]);
            array.push(a);
        }
        return array;
    }
