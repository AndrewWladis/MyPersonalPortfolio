let text = ['javascript', 'front end', 'react', 'node.js'];
let pace = 125;
let i = 0;
let x = 0;

for (let i = 0; i < text.length; i++) {
        //document.getElementById("demo").innerHTML += text[i].charAt(i);
        console.log('if statement works')
        for (let x = 0; x < text[i].length; x++) {
            document.getElementById("demo").innerHTML += text[i].charAt(x);
            console.log(text[i].charAt(x))
        }
    }

// setInterval(function myFunction(){
//     console.log('set interval works')
//     // if (i < text[x].length && x < text.length) {
//     //     document.getElementById("demo").innerHTML += text[x].charAt(i);
//     //     console.log('if statement works')
//     //     setTimeout(myFunction, pace);
//     //     i++
//     // }
//     for (let i = 0; i < text.length; i++) {
//         //document.getElementById("demo").innerHTML += text[i].charAt(i);
//         console.log('if statement works')
//         for (let x = 0; x < text[i].length; x++) {
//             document.getElementById("demo").innerHTML += text[i].charAt(x);
//             console.log(text[i].charAt(x))
//         }
//     }
//     setTimeout(myFunction, pace);
// }, 1000);