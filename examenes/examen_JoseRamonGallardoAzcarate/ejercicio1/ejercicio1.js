const form = document.getElementById("input")
const output = document.getElementById("output")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let size = document.getElementById('size').value
    let out =``
    for (let i = 0; i < size; i++) {
         out += ``.padStart(i,' ') + ''.padStart(size-i,'*') + '\n'
    }
    output.innerText = out
    console.log(out)
})