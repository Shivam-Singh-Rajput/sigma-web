// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Draco", "Neville", "Severus", "Luna", "Albus", "Rubeus", "Frederick", "Gilderoy", "Mundung", "Ramlakhan", "sankracharya"];

let houses = []

for (const student of students) {   
    if (student.length < 6) { 	
        houses.push("You are in Gryffindor"); 
    } else if (student.length < 8) {
        houses.push(" You are in Hufflepuff"); 
    } else if (student.length < 12){
        houses.push(" You are in Ravenclaw");
    }else{
        houses.push(" You are in Slytherin");
    }
}
console.log(houses)