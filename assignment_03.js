

// const arraySize = parseInt(prompt('Enter array size: '));
// console.log(`The array size ${arraySize} `);

let array1 = [10,20,30,40,'rahim',50,60,'1:"a"'];







function test(array1){

    // let array1 = [];
   
    // let arrayElement = [];
    // var array1 = [];
    let sum = 0;

    for(var i=0;i<array1.length;i++){

       if(typeof array1[i] == 'number'){
        sum += array1[i];

        
       }

        console.log(array1[i]);

        

        console.log(`The sum of the array ${sum}`);

      

    }
    
    return sum;
}


let x = test(array1);
console.log(x);




