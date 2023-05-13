/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if(element.marks>50){
            console.log(element);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
       arr.forEach(function(element){
        if(element.marks>50){
            console.log(element);
        }
       });
  }
  
  function addData() {
    //Write your code here, just console.log
        let arr1 = {id:4,name:"susan",age:"20",marks:45};
        arr.push(arr1);
        console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr=arr.filter(function(element){
        if(element.marks>50){
          return element;
        }
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let addStudents = [
        {id:5,name:"Naman",age:"20",marks:55},
        {id:6,name:"Aruj",age:"26",marks:100},
        {id:7,name:"Vipin",age:"27",marks:10}
      ];
      arr=arr.concat(addStudents);
      console.log(arr);
  }