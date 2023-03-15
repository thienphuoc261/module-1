function findMin (arr){
    if (arr.length == 0)
        return -1;
    min = arr[0];
    for(let i = 0; i < min.length; i++){
        if (arr[i] < arr[0]){
            min = arr[0];
        }
    }
    return min;
}
let arr1 = [];
let min = findMin(arr1);
alert(min);