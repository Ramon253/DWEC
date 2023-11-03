const modules =new Map()
function addModule(name,duration,numStudents){
    let module = new Map()

    module.set("name",name)
    module.set("duration",duration)
    module.set("numStudents", numStudents)

    modules.set(name,module)
}

addModule("DAW", "400","30")
addModule("DiW", "600","22")
console.table(modules)
console.log(modules.get("DAW"))

