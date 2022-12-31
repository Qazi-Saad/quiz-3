/******************************** Section 2 **************************/ 

/************  Q#1: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.                       [Marks: 15] *****************/

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

/****** Q#2: Create a program that creates 3 Employee objects from an Employee class with ID, Name, Department and Salary properties. Values of properties should be assigned through getter and setter methods (ES6). Display all the properties of all 3 employees.                       [Marks: 15] ****/    

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
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json           [Marks: 15] 
 ****/ 




/******************************** Section 3 **************************/ 

/**** Q#3: Write a program that takes a number of greater than 5 digits from input field and shows sum of all odd numbers. For example, if the input is 196783, the sum would 
            be 1 + 9 + 7 + 3 = 20.                                     [Marks: 5]  ******/


    const oddBtn = document.getElementById("odd-btn");

    oddBtn.addEventListener('click', sumOfOdd);

    function sumOfOdd () {
        var n = document.getElementById("odd").value;
        var numLength = n.length;
        console.log(numLength);
        if(numLength < 5 || numLength > 10) {
            alert("Enter a number which has only 5-10 DIGITS !!!")
            return false;
        }
        else {
            let arr = Array.from(n);
            console.log(arr);
            let sum = 0;

            for(var i=0; i < arr.length; i++) {
                if(arr[i]%2 !== 0) {
                    sum += parseInt(arr[i]);
                }
            }
            document.getElementById("odd-text").innerHTML = `The sum of all the odd digits is: ${sum}`;

        }
    }


/**** Q#4: Given an integer N, the task is to find the sum of interior angles of an N-sided 
            polygon.      	 	 	 	 	 	  [Marks: 5]  ****/ 


    const polyBtn = document.getElementById("poly-btn");
    polyBtn.addEventListener('click',sum);

            function sum()
            {
                var n = document.getElementById("polygon").value;
                if(n < 3) {
                    alert('A Polygon has 3 or more sides');
                    return false;
                } else {
                   var total = (n - 2) * 180;
                }

                document.getElementById('polygon-text').innerHTML = `The sum of the interior angles of the polygon is: ${total}`
               
            }
             
                
/*** Q#5: Create a age calculator that takes date of birth of user and shows age in years, 
months and days.                                 [Marks: 5]  ***/ 


var form = document.getElementById("form"),
bdate = document.getElementById("date"),
bmonth = document.getElementById("month"),
byear = document.getElementById("year"),
date = document.getElementById("date2"),
month = document.getElementById("month2"),
year = document.getElementById("year2"),
age = document.getElementById("age"),
days = document.getElementById("days"),
mons = document.getElementById("months"),
today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener('submit', function(event) {
event.preventDefault();

var by = Number.parseFloat(byear.value),
    bm = Number.parseFloat(bmonth.value),
    bd = Number.parseFloat(bdate.value),
    ty = Number.parseFloat(year.value),
    tm = Number.parseFloat(month.value),
    td = Number.parseFloat(date.value);

if (td < bd) {
    days.innerHTML = (td - bd + 30) + ' days';
    tm = tm - 1;
} else {
    days.innerHTML = (td - bd) + ' days'
}

if (tm < bm) {
    months.innerHTML = (tm - bm + 12) + ' months';
    ty = ty - 1;
} else {
    months.innerHTML = (tm - bm) + ' months'
}

age.innerHTML = "Age: " + (ty - by) + ' years';

});