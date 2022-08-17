function myVowel(Eunoia){
    let value = 0;

    for(let i=0;i<Eunoia.length;i++){
            if(Eunoia[i].toLowerCase() === 'a' || Eunoia[i].toLowerCase() === 'e' || Eunoia[i].toLowerCase() === 'i' || Eunoia[i].toLowerCase() === 'o' || Eunoia[i].toLowerCase() === 'u' ){
                value += 1;
            }
    }
return value;
}

function myVowelShort(Eunoia){
    let value = 0;
    let vowelArray = ['a','e','i','o','u'];

    for(let i=0;i<Eunoia.length;i++){
            if(vowelArray.indexOf(Eunoia[i]) != -1){
                value += 1;
            }
    }
    return value;
}
