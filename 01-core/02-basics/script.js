const fruits = ["banana", "apple", "orange", "pineapple", "kiwi"];

console.log(fruits.find((fruit) => fruit === "apple"));

const numbers = [1, 4, 5, 7, 2, 9, 3];

console.log(numbers.filter((num) => num > 5));

const nums = [1, 2, 3, 4, 5];

console.log(nums.map((num) => num * 10));

const persons = [
  {
    name: "Kim",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Lee",
    skills: ["Java", "Python", "SQL"],
  },
  {
    name: "Park",
    skills: ["Java", "JavaScript", "CSS"],
  },
];

console.log(persons.filter((person) => person.skills.includes("Java")));

const people = [
  { name: "John", age: 28 },
  { name: "Jane", age: 24 },
  { name: "Mike", age: 30 },
];

console.log(people.map((person) => person.name));

const words = ["javascript", "python", "java", "c", "ruby", "rust"];

console.log(words.filter((word) => word.length > 5));

const people1 = [
  { name: "John", age: 28 },
  { name: "Jane", age: 24 },
  { name: "Mike", age: 30 },
];

console.log(people1.filter((person) => person.age > 25));

const chars = ["a", "b", "c", "a", "d", "e", "f", "a"];

console.log(chars.filter((char) => char !== "a"));

const nums1 = [1, 2, 3, 4, 5];

console.log(nums1.map((num) => num + 5));

const names = ["Jane", "John", "Jim", "Jill", "Jack"];

console.log(names.indexOf("John"));
