/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let brr = [
    { id: 4, name: "Raj", age: "28", profession: "Engineer" },
    { id: 5, name: "Rani", age: "22", profession: "Accountant" },
    { id: 6, name: "Kratik", age: "25", profession: "Painter" },
  ];


function PrintDeveloperswithMap() {
  //Write your code here
  let p = arr.map(d => {
        if (d.profession === "developer") {
            return d.name;

        }
    })
    console.log(p);
}

function PrintDeveloperbyForEach() {
  //Write your code here
  
}

function addData() {
  //Write your code here
  let b = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    }
    arr.push(b);
    console.log(arr);
    let b1 = arr.find(b1 => b1.id === 4);
    console.log(b1);
  
}

function removeAdmin() {
  //Write your code here
  let trim = arr.findIndex(item => item.profession === "admin");
    arr.splice(trim, 1);
    console.log(arr);
}

function concatenateArray() {
  //Write your code here
  let concatenate = arr.concat(brr);
    console.log(concatenate);
}
