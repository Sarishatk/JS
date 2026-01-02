// how many times each word apperas


let text = "javascripts is easy and javascript is powerful"
let count = new Map()

let words = text.split(" ")

for(let i of words){

count.set(i, (count.get(i) || 0) + 1)
}

console.log(count);
