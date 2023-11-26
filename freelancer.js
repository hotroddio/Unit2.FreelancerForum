const names = ["Alice", "Bob", "Carol"];
const jobs = ["Writer", "Teacher", "Programmer",];
const price = [30,50,70];

const greetings = [
    {
        header: "Freelancer Forum"
    }
]

const availFree = [
    {
        title: "Available Freelancers"
    }
]

const peoples = [
{
    name: "Alice",
    job: "Writer",
    price: 30,
},
{
    name: "Bob",
    job: "Teacher",
    price: 50,
},
{
    name: "Carol",
    job: "Programmer",
    price: 70,
},
];

const prices = peoples.reduce ((acc, cur) => acc=cur.price,0);
const firstTwoPrices = price.slice(0,2);
const firstTwoAvg = firstTwoPrices.reduce((acc, cur)=> acc + cur, 0)/ firstTwoPrices.length;
console.log(firstTwoAvg);
const randomPrices = (price2) => {
    for (let i = price2.length -1; i>0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = price2[i];
        price2[i] = price2[j];
        price2[j] = temp;
    }
}
const price2 = price.slice();
randomPrices(price2);
console.log(price2);


console.log (prices);
const pricesAvg = price.reduce((a,b) => a+b,0)/ price.length;
console.log (pricesAvg);

function openHeader() {
    const table = document.getElementById("header");
    const tableElements = greetings.map((greet) => {
        const element = document.createElement("h1");
            element.innerHTML=`${greet.header}`
        return element;
    })
    console.log (tableElements);
    console.log (table);
    table.replaceChildren(...tableElements);
}
setTimeout(openHeader, 2000);

function rendered() {
    const table = document.getElementById("table");
    peoples.filter((people, index) => index < 2).forEach((people) => {
        const element = document.createElement("tr");
            element.innerHTML=`${people.name} | ${people.job} | $${people.price}`
            table.appendChild(element);
    })
    console.log (table);
}
setTimeout(rendered, 4000);

function renderedTwo() {
    const table = document.getElementById("table");
    peoples.filter((people, index) => index === 2).forEach((people) => {
        const element = document.createElement("tr");
            element.innerHTML=`${people.name} | ${people.job} | $${people.price}`
            table.appendChild(element);
            let oldChild = table.children[2];
            let newChild = document.createElement("tr");
            table.replaceChild(newChild,oldChild);
    })
    console.log (table);
    console.log (peoples);
}
setTimeout(renderedTwo, 9000);

function displayAvg() {
    const element = document.createElement("tr");
    element.innerHTML= `The average price is $${firstTwoAvg}`
    table.appendChild(element);
}
setTimeout(displayAvg, 5000);

function displayAvg2() {
    const element = document.createElement("tr");
    element.innerHTML= `The new average price is $${pricesAvg}`
    table.appendChild(element);
}
setTimeout(displayAvg2, 12000);


try {
    for (let i = peoples.length - 1; i>0; i--) {
      let j = Math.floor (Math.random () * (i+1));
      [peoples[i], peoples[j]] = [peoples[j], peoples[i]];
    }
  } catch (error) {
    console.error (error);
  }
  
function shuffleArray(arrays) {
    for (let i = arrays.length - 1; i>0; i--) {
        let j = Math.floor (Math.random () * (i+1));
        [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
       }
       const table = document.getElementById("table");
       peoples.filter((people, index) => index === 2).forEach((people) => {
       const element = document.createElement("tr");
    element.innerHTML= `${people.name} | ${people.job} | $${people.price}`
    table.replaceChild(element)});
}
const shuffledPeoples = shuffleArray(peoples);
console.log (shuffledPeoples);
shuffleArray();