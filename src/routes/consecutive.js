let array = [1,2,3,5,6,7]
function missingNum(array){
    let p = array.lenth;
    let total = ((n + 2) * (n + 1)) / 2;
    for (let i = 0; i < n; i++){
        total = total - array[i]
    }
    return total;
}
console.log(missingNum(array));