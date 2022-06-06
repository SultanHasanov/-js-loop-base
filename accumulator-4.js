const arr = ['Якуб', 'Адам', 'Сахруддин', 'Адлан', 'Султан', 'Турпал', 'Умар', 'Руслан'];
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === 'А'){
        accumulator.push(arr[i])
    }
}
console.log(accumulator)