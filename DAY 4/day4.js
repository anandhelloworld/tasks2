console.log("1.COMPARING TWO JSON data having same properties without orded;")
//COMPARING TWO JSON data having same properties without orded;
//var obj1={name:"person",age:"5"};
//var obj2={age:"5",name:"person"};
// In this case we can simply go for shallow equality
function shallowCompare(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  // console.log(keys1);
  const keys2 = Object.keys(obj2);
  // console.log(keys2);
  if (obj1.lenght != obj2.lenght) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}

var a = { name: "person", age: "5" };
var b = { age: "6", name: "person" };
let c = shallowCompare(a, b);
// let d=deepCompare(a,b)
console.log(c);
// console.log(d);
//but if there is onject inside the object json then we need to go for deep equality;

// function deepCompare(obj1,obj2){
//     const keys1=Object.keys(obj1);
//     // console.log(keys1);
//     const keys2=Object.keys(obj2);

//     if (obj1.lenght != obj2.lenght) {
//         return false;
//       }

//       for(const key of keys1){
//         const val1=obj1[key];
//         const val2=obj2[key];
//         const areObject=isObject(val1) && isObject(val2);
//         if(areObject && !deepEqual(val1,val2)||areObject&&val1!==val2){
//             return false;

//         }

//       }
//       return true;
// }

// function isObject(object){
//     return object!=null && typeof(object)=='object';
// }

console.log("2.se the Rest Countries api url`https://restcountries.com/v3.1/all`and display")
//all the country flags, countriexs name  region sub region and population
// in console")
//api changed due to not working of given api version;
//Use the Rest Countries api url`https://restcountries.eu/rest/v2/all`and display
//all the country flags, countriexs name  region sub region and population
// in console;(using async await)
//ANS:

//function to fetch data;
async function getData() {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    let countries = await data.json();
    for (let index in countries) {
      console.log(countries[index]);
      console.log(countries[index].flags);
      console.log(countries[index].name);
      console.log(countries[index].region);
      console.log(countries[index].subregion);
      console.log(countries[index].population);
    }
  } catch (error) {
    console.log(error);
  }
}
getData();





