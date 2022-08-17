
let a = {
    id: 1,
    firstName:"Adnan",
    lastName:"Nuruddin",
    address:{
        road: 135,
        house: "186/B",
        thana: "Badda",
        district: "Dhaka",
        owner:{
            name: "Abdul karim",
            Age: 23,
            ApartmentId: [1,4,5]
        }
    },
    dateOfBirth:"1-1-2000"
    }



function traverseObject(obj){
    for( const key in obj ){
        console.log(key, typeof obj[key]);
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            traverseObject(obj[key]);
        }    
        
    }
}


traverseObject(a);
