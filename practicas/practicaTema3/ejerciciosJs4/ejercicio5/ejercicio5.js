function toStr(arr){
    let str = ""
    for (const element of arr) {
        str += `${element} `
    }
    return str
}

console.log(toStr([123,1,41,31,23," qeq2312", 312,"ds"]))