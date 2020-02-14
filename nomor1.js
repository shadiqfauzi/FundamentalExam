const lelangArr = (time) => {
    let priceBaju = 10000
    for(i=0; i<time ; i++){
        priceBaju = Math.ceil(priceBaju + (priceBaju*0.1))
    }

    let priceCelana = 20000
    for(i=0; i<time ; i++){
        priceCelana = Math.ceil(priceCelana + (priceCelana*0.2))
    }

    let priceKacamata = 30000
    for(i=0; i<time ; i++){
        priceKacamata = Math.ceil(priceKacamata + (priceKacamata*0.3))
    }
    return(
    `Di Menit ${time} Product Info
Nama Barang = Baju, Harga = Rp.${priceBaju.toLocaleString()}
Nama Barang = Celana, Harga = Rp.${priceCelana.toLocaleString()}
Nama Barang = Kacamata, Harga = Rp.${priceKacamata.toLocaleString()}
`) 
}
console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))