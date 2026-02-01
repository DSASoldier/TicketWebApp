const data2 = {
    CaptainAmerica: [
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        }
    ],
    Titanic: [
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
    ],
    Avengers: [
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        }
    ],
    Avatar: [
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        },
        {
            seats: 50,
            noSeats: 10
        }
    ]
}

console.log(document.querySelector(".movie").value);

const movieSelector = document.querySelector(".movie");

movieSelector.addEventListener("change", () => {

    const data = JSON.parse(localStorage.getItem("data")) || data2;

    console.log("data--->", data);

    const movieData = data[movieSelector.value.replaceAll(' ', '')];
    const theater = document.querySelector(".movie-theater");
    const n = theater.children.length;

    for (let i = 0; i < n; i++) {
        console.log(theater.children[0]);
        theater.removeChild(theater.children[0]);
    }
    for (let i = 0; i < movieData.length; i++) {
        const div = document.createElement("div")
        const ptag = document.createElement("p");
        const ptag2 = document.createElement("p");
        const ptag3 = document.createElement("p");

        ptag2.textContent = `seats ${movieData[i].seats}`;
        ptag3.textContent = `total seats ${movieData[i].seats + movieData[i].noSeats}`;

        ptag.style.textAlign = "center";
        ptag2.style.textAlign = "center";
        ptag3.style.textAlign = "center";

        ptag.textContent = `this is theater ${i + 1}`;
        div.style.width = "20%";
        div.style.height = "100px";
        div.style.borderStyle = "solid"
        div.appendChild(ptag);
        div.appendChild(ptag2);
        div.appendChild(ptag3);

        div.classList.add("theater")

        div.style.marginTop = "10px"
        document.querySelector(".movie-theater").appendChild(div);

        document.querySelector(".movie-theater").style.justifyItems = "center"
    }


    document.querySelectorAll(".theater").forEach((element,i) => {

        console.log(element);

        element.addEventListener("click", () => {

            console.log(movieData[i].seats, movieData[i].noSeats, i);

            const obj = {
                index: i,
                seats: movieData[i].seats,
                total: movieData[i].seats + movieData[i].noSeats
            }

            const store = JSON.stringify(obj);

            localStorage.setItem("movie", movieSelector.value);

            localStorage.setItem(movieSelector.value, store);
            window.location.href = 'seatSelect.html';


        })

    })
})
