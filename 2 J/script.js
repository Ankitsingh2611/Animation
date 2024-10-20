const names = ["Ankit", "Arpit", "Ayush"];


names.forEach(function(value){
    console.log(value);
});


const names2 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
let newarr2 = names2.map(function(value){
    return 1;
});


const names3 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
let newarr3 = names3.map(function(value){
    return value + " kumar";
});


const names4 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
let newarr4 = names4.filter(function(value){
    return true;
});


const names5 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
let newarr5 = names5.filter(function(value){
    if(value==='Ankit')
    return true;
});


const names6 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
let newarr6 = names6.filter(function(value){
    return value.startsWith("A");
});






const names7 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
const copyName = names7;

const names8 = ["Ankit", "Arpit", "Ayush", "Ankita", "Arpita", "Ayushi"];
const copyName1 = [...names8];








function abc(...rest){
    console.log(rest);
}
abc(1,2,3,4,5,6);



//Merge two array
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr = [...arr1, ...arr2];
console.log(arr); 

//Filter
const product = [
    { name: "laptop", type: "electronics"},
    { name: "mobile", type: "electronics" },
    { name: "tablet", type: "electronics"},
    { name: "shirt", type: "clothing"},
    { name: "shoes", type: "clothing"},
];
let newPr = product.filter(function(product){
    return product.type === "clothing";
})
console.log(newPr);

//Mapping
const userss =[
    {name: "Ankit", age: 22},
    {name: "Arpit", age: 21},
    {name: "Ayush", age: 20},
];
const newUsers = userss.map(function(user){
    return user.name;  
});




//grouping
const users2 =[
    {name: "Ankit", age: 22, role: "admin"},
    {name: "Arpit", age: 21, role: "user"},
    {name: "Ayush", age: 20, role: "user"},
];
let obj ={};
users2.forEach(function(user){
    if(!obj[user.role]){
        obj[user.role].push(user);
    } else {
        obj[user.role] = [];
        obj[user.role].push(user);
    }
});
console.log(obj);




//Remove & update
const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
  ];

  let newUse = users.filter(function(user){
    return user.id !== 2;
  })
  console.log(newUse);
