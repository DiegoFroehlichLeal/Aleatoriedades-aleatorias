//o nome é autoexplicativo...

const fibonacci = [];

fibonacci[1]=1;
fibonacci[2]=1;

for (let index = 3; index < 20; index++) {
    fibonacci[index] = fibonacci[index-1]+fibonacci[index-2];
    
}

for (let index = 1; index < fibonacci.length; index++) {
    console.log(fibonacci[index])
}


// for (const index of fibonacci) {
//     console.log(index);
// }