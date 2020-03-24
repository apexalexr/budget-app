const random = require('random')
const seasonEpisode = [1,17,2,23,3,23,4,24,5,24,6,24,7,24,8,24,9,24,10,24,11,24,12,24]

for (let index = 0; index < 3; index++) {
    let tempSeason = random.int(1,seasonEpisode.length/2);
    let tempEpisode = random.int(1,seasonEpisode[tempSeason*2-1])
    console.log("Season  ",tempSeason,"Episode ", tempEpisode)
}

// let f = function (bigList) {
//     var largest = bigList[0];
//     var larger;
//     var smallest = bigList[0];
//     var smaller;
//     bigList.forEach((element) => {
//         if(element > largest) {
//             larger = largest
//             largest = element
//             return;
//         }
//         if(element > larger && element < largest) {
//             larger = element
//             return;
//         }
//         if(element < smallest){
//             smaller = smallest
//             smallest = element
//             return;
//         }
//         if(element < smaller && element > smallest) {
//             smaller = element;
//             return;
//         }
//         if(!smaller && element > smallest) {
//             smaller = element
//             return;
//         }
//         if(!larger && element < largest) {
//             larger = element
//             return;
//         }
//     })
    
//     return [smallest,smaller,larger,largest]
// }

let f = function (bigList) {
    var largest = Number.MIN_VALUE;
    var larger;
    var smallest = Number.MAX_VALUE;
    var smaller;
    
    bigList.forEach((element) => {
        if(element > largest) {
            larger = largest
            largest = element
            return;
        }
        if(element < smallest){
            smaller = smallest
            smallest = element
            return;
        }
        if(element > larger && element < largest) {
            larger = element
            return;
        }
        if(element < smaller && element < smallest) {
            smaller = element
            return;
        }
    });
    f
    return [smaller,larger]
}


let bigList = [10,9,8,7,6,5,4,3,2,1,5,4,3,2,1,2,3,4,3,2,3,4,3,5,6,7,2,34,5,1,2,3,4,21,2,3,4,32,500000,49999]
console.log(f(bigList))