


//==========================1

// let str = 'AABCDS'

// for(let i = 0; i < str.length; i++){
//     if (str[i] === str[i + 1])
//     console.log(str[i]);
// }

//=============================2

var students = [
    {
        name: 'David',
        age: 12
    },
    {
        name: 'Daniel',
        age: 13
    },
    {
        name: 'Alex',
        age: 10
    }
];

var name = students.find(search)
function search(item) {
    return item.name  === 'David';
}


console.log(name);






//=====================================2


 
// var students = [
//     {
//         name: 'David',
//         age: 12
//     },
//     {
//         name: 'Daniel',
//         age: 13
//     },
//     {
//         name: 'Alex',
//         age: 10
//     }
// ];

// let filtered = []

// let name = (index) => {
// for (let i of students ) {
//     if (i.name.includes (index))
//     {
//         filtered.push(i);
//     }
// } 

// }

// name("c")
// console.log(filtered);