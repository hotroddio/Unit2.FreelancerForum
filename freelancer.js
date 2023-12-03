const names = ["Alice","Bob","Carol","Bilbo","Smeagol","Gollum"];
const jobs = ["Writer", "Teacher", "Programmer","Night Crawler", "Thief", "Barber"];
const price = [30,50,70,90,25,56];
const peoples = [
{
    name: names[0],
    job: jobs[0],
    price: price[0],
},
{
    name: names[1],
    job: jobs[1],
    price: price[1],
},
{
    name: names[2],
    job: jobs[2],
    price: price[2],
},
];

function randomPerson () {
    const table = document.getElementById("division");
    const rand1 = Math.floor(Math.random()*names.length);
    console.log(rand1);
    const people = {
        name:names[rand1],
        price:price[rand1],
        job:jobs[rand1],
    };
    peoples.push(people);
    console.log(table);
    render();
}

function render() {    
    const table = document.getElementById("division");
        const tableElements = peoples.map((people => {
            const element = document.createElement("li");
            element.innerHTML= `${people.name} who is a ${people.job} is available for $${people.price} an hour.`
        return element;
    }))
        table.replaceChildren(...tableElements);
    let peoplesAvg = average();
    console.log("render", peoplesAvg);
    firstAvg(peoplesAvg);
};
render();
setInterval(randomPerson, 3000 );
// setTimeout(render, 3000);

function average () {
    let priceTotal = 0
    for (i=0; i< peoples.length; i++) {
        console.log(peoples[i]);
        priceTotal+=peoples[i].price;
        console.log(peoples[i].price);

    }
    console.log(priceTotal);
    const avg = priceTotal/ peoples.length;
    console.log(avg.toFixed(2));
    return avg.toFixed(2); 
}

function firstAvg (average) {
    const table = document.getElementById("table");
    const element = document.createElement("tr");
        element.innerHTML= `The average price is $${average}!`
        table.replaceChildren(element);
        console.log(division);
}