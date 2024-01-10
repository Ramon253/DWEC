//Usare una clase que he llamado arbol para usar variables y mostrar el scope
class Tree {
    leave = 15;
    constructor(leave) {
        console.log(`Esta es la variable "leave" que es pasada al constructor ${leave}`)
        console.log(`Esta es la variable "leave" que es propiedad de la clase y se accede con el operador "this" ${this.leave}`)
    }
}
let tree = new Tree(10);