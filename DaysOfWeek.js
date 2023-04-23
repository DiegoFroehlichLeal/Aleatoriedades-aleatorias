//Assim fica uma bosta, não faça assim...
// let daysOfWeek = new Array();

// daysOfWeek=new Array(7);
// daysOfWeek=new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');


//Faz assim...
//let daysOfWeek = [];

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//agora acessar os elementos e fazer uma iteração usando for... pq sim...
for (let i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

//Mesma coisa com o for of
for (const i of daysOfWeek) {
    console.log(i)
    
}

//Denovo só que com forEach...
daysOfWeek.forEach(element => {
    console.log(element)
});

//forEach é mais legal =)