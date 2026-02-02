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

const head = document.createElement("p");

head.textContent=`Your movie name is ${store} and theater is ${value.index}`

const div  = document.createElement("div");

const body = document.querySelector("body");

body.appendChild(head);
body.appendChild(div);

const pTag = document.createElement("p");

pTag.textContent="select your ticket below";

div.appendChild(pTag);

for(let i=0;i<value.total;i++){
    const input = document.createElement("input");
    const label = document.createElement("p");
    label.textContent = `${'A'+i}`;
    input.type="checkbox";
    input.classList.add("checkbox");
    label.style.display="inline";
    label.style.marginLeft="10px";
    div.appendChild(label);
    div.appendChild(input); 
}
div.classList.add("ticket-container");
const applyButton = document.createElement("button");

applyButton.textContent="Book Now"
body.appendChild(applyButton);

const divChildren = document.querySelector("div").childNodes;

for(let i=0;i<=2*value.seats;i+=2){
    divChildren[i].checked=true;
    divChildren[i].disabled = true;
}


applyButton.addEventListener("click",()=>{

    
    const divChildren = document.querySelector("div").childNodes;
    let count=0;

    for(let i=0;i<divChildren.length;i++){


        if(!divChildren[i].disabled && divChildren[i].checked){
            count++;
        }
        if(count>3){
            alert("You cannot book more three tickets");
            return ;
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

    alert(`${store} total price for this is ${count*200}`)
    window.location.href = 'home.html';
})
let count=0;
document.querySelectorAll("checkbox").forEach((element)=>{

    element.addEventListener("click",()=>{
        if(!element.disabled){
            count++;
        }
    })

})

setInterval(() => {
    
    document.querySelector("dynamic-price").textContent = `${count*200}`
}, 1000);