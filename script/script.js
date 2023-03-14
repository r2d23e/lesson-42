let n = 0
// while (n < 100) {
//     n = n + 3
//     document.write(n + "<br>")
// }



// do {
//     n = n + 5
//     document.write(n + '<br>')
// } while( n <= 100)


// let zv1 = "*******"



// do {
//     zv1 = zv1.replace(/ */,"")

// } while (zv1.length < 1);


//дз начало
let star1 = ""
let star2 = "*"

while (star1.length <= 7) {
    star1 += star2
    document.write(star1 + "<br>")
    console.log(star1)
}


let stars = "********"
console.log(stars);
do {
    stars = stars.replace("*", "")
    document.write(stars + "<br>")
    console.log(stars);
} while (stars.length >= 1)




while (star1.length <= 10) {
    star1 += star2
     document.write(star1 + "<br>")
    console.log(star1);
}