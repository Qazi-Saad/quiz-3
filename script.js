/******************************** Section 2 **************************/ 

/************  Q#1: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.                                  [Marks: 15] *****************/

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        let a = document.createTextNode("\n You have already read " + book);
        document.getElementById("box1").appendChild(a);
    } else
    {
        let b = document.createTextNode("\n You still need to read " + book);
        document.getElementById("box1").appendChild(b);
    }
   }

/****** Q#2: Create a program that creates 3 Employee objects from an Employee class with ID, Name, Department and Salary properties. Values of properties should be assigned through getter and setter methods (ES6). Display all the properties of all 3 employees.                                                [Marks: 15] ****/    

class employee {
    setValues(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }
    getValues() {
        let a =  document.createTextNode(`\n Employee id is: ${this.id}`);
        let b =  document.createTextNode(`\n Employee name is: ${this.name}`);
        let c =  document.createTextNode(`\n Employee dept is: ${this.dept}`);
        let d =  document.createTextNode(`\n Employee salary is: ${this.salary} \n`);
        document.getElementById("box2").appendChild(a);
        document.getElementById("box2").appendChild(b);
        document.getElementById("box2").appendChild(c);
        document.getElementById("box2").appendChild(d);
    }
}
const object1 = new employee();
object1.setValues(6789, 'Amjad', 'Media', 60000);
object1.getValues();
const object2 = new employee();
object2.setValues(1234, 'Zubair', 'Design', 45000);
object2.getValues();
const object3 = new employee();
object3.setValues(5942, 'Jawad', 'Development', 70000);
object3.getValues();

/*** Q#3: At times, when we access a JavaScript object, we receive raw JSON string and we need to convert it to an object ourselves to use it in our program. Similarly, we also may require an object in JSON string form. Write a program that parses JSON string in ‘member’ array from following link to an object and display its contents. You are also required to stringify the last object in ‘member’ array.  
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json                  [Marks: 15] 
 ****/ 

