let struct = []
for (let i = 0; i < 10; i++) {
    struct.push((Math.floor(Math.random()*21))*5)
}
while (struct[0] < 50){
    struct[0] = (Math.floor(Math.random()*21))*5
}
while (struct[9] > 50 ){
    struct[9] = (Math.floor(Math.random()*21))*5
}

console.log(struct)