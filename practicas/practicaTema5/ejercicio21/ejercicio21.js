let matrixHandler = {};
matrixHandler.nColumns = 10;
matrixHandler.nRows = 10;
matrixHandler.startMatrix = function (value) {
    this.content = [];
    for (let i = 0; i < this.nRows; i++) {
        this.content.push([])
        for (let j = 0; j < this.nColumns; j++) {
            this.content[i].push(value);
        }
    }
}
matrixHandler.randMatrix = function () {
    this.content = [];
    for (let i = 0; i < this.nRows; i++) {
        this.content.push([])
        for (let j = 0; j < this.nColumns; j++) {
            this.content[i].push(Math.floor(Math.random() * 100) + 1);
        }
    }
}
matrixHandler.seeMatrix = function () {
    console.table(this.content)
}

matrixHandler.startMatrix(4);
matrixHandler.seeMatrix()

matrixHandler.randMatrix()
matrixHandler.seeMatrix()