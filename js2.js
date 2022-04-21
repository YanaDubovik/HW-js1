// console.log("1--" +true || true)
// console.log("2--" +true || false)
// console.log(false || true)

// console.log(true && false)

let item_1 = 0;
let item_2 = 20;
let item_3 = 50;

// if (item_1> 3 && item_2< 15 && item_3==50) {
//     console.log('Idi kushat')
// }else{
//     console.log("Hodi golodniy")
// }

// while(true) {
//     console.log(item_1+'Idi kushat')
// item_1++
// }

// for(let i=0; i<10; i++) {
//     console.log(i , "=FOR")
// }

let names = ['Kate' ,
              'Alex',
              "Ivan",
              'Ignat',
              " Andrey",
             "Vika"]

 for( item_1 of names) {
     if(item_1== "Ignat"){
         break;
     }
     console.log(item_1)
 }           
