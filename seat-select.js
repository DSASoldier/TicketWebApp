const data2 = {
    CaptainAmerica:[
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        }
    ],
    Titanic:[
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
    ],
    Avengers:[
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        }
    ],
    Avatar:[
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        },
        {
            seats:50,
            noSeats:10
        }
    ]
}

const store = localStorage.getItem("movie");

console.log(store);

const value = JSON.parse(localStorage.getItem(store));
const seats = value.seats;

console.log(value);

const div  = document.createElement("div");

const body = document.querySelector("body");

body.appendChild(div);

const pTag = document.createElement("p");

pTag.textContent="select your ticket below";

div.appendChild(pTag);

for(let i=0;i<value.total-value.seats;i++){
    const input = document.createElement("input");
    input.type="checkbox";
    div.appendChild(input); 
}

const applyButton = document.createElement("button");

applyButton.textContent="Apply"
body.appendChild(applyButton);


applyButton.addEventListener("click",()=>{
    const divChildren = document.querySelector("div").childNodes;
    let count=0;

    for(let i=1;i<divChildren.length;i++){
        if(divChildren[i].checked){
            count++;
        }
    }
    value.seats=seats+count;
    
    console.log(value);
    localStorage.setItem(store,JSON.stringify(value));

    const data = JSON.parse(localStorage.getItem("data")) || data2;

    console.log("after",data,store);

    console.log(value.index);

    data[store.replaceAll(' ', '')][value.index] = {
        seats:value.seats,
        noSeats:60-value.seats,
    }
    

    localStorage.setItem("data",JSON.stringify(data));
})


