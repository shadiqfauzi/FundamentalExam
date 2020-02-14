const cekkoin = (num) => {
    let koin = [25,10,5,1]
    let count = 0
    while(num > 0){
        if(num >= koin[0]){
            num -= koin[0]
            count++
        }else if(num >= koin[1]){
            num -= koin[1]
            count++
        }else if(num >= koin[2]){
            num -= koin[2]
            count++
        }else if(num >= koin[3]){
            num -= koin[3]
            count++
        }
    }
    return count
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))
console.log(cekkoin(10))
console.log(cekkoin(5))
console.log(cekkoin(128))
console.log(cekkoin(13))