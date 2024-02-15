let endPoint = "https://jsonplaceholder.typicode.com/users";
// endpoint da cui prendere i dati

// casella di testo
let inText = document.getElementById("inputText");
console.log(inText);

// form con dropdown
let form = document.getElementById("floatingSelect");
console.log(form);

// tabella
let tab = document.getElementById("resBody");
console.log(tab);
console.log(tab.children);

// bottone
let btn = document.getElementById("btn");
console.log(btn);

// messaggio di errore
let err = document.getElementById("err");
console.log(err);

let error = "no fra";
// cerca i risultati nell'endpoint
// se per caso il fenomeno non ha inserito parametri da un mesaggio
async function search() {
    if (!inText.value || form.value === "null") {

        console.log(inText.value, "testo non valido");
        console.log(form.value, "form non valido");
        err.innerText = "Inserire un parametro di ricerca!";
        
    } else { //se invece ha inserito i parametri corretti
        err.innerText = "";
        try {
            let res = await fetch(endPoint)
            let raw = await res.json()
            console.log(raw);     
            createTable(raw)       
        } catch (error) {
            console.log(error);
        }   
    }
}
// crea la tabella
function createTable(raw) {
    console.log(inText.value, "| ok valore testo preso");
    console.log(form.value, "| ok valore form preso");
    console.log(raw, "ok get presa dalla funzione");

    emptyTab() //svuota la tabella così da resettare i risultati
    // le salvo in una variabile per semplicità
    let Fcurrent = form.value;
    let txt = inText.value;
    // controlla se effettivamente c'è un risultato in base al dopdown (non è case sensitive)
    raw.forEach(user => {
        // cerca con l'user
        if (Fcurrent === "user") {
            console.log("ok l'if user va");
            temp = user.username.toLowerCase()
            if (temp.includes(txt.toLowerCase())) {
                console.log("Trovato!");

                // il formato è:
                // <tbody id="resBody"> (tab) <tr> <td> Username </td> </tr>
                //crea gli elementi e li appende nella tabella

                let usP = document.createElement("tr") // base
                let us = document.createElement("td") // username
                let na = document.createElement("td") // name
                let em = document.createElement("td") // email

                us.innerText = user.username;
                na.innerText = user.name;
                em.innerText = user.email;

                tab.appendChild(usP)
                tab.appendChild(us)
                tab.appendChild(na)
                tab.appendChild(em)

                console.log(tab.children);

            }
            // cerca con name
        } else if (Fcurrent === "name"){
            console.log("ok l'else nam");
            
            temp = user.name.toLowerCase()
            if (temp.includes(txt.toLowerCase())) {
                console.log("Trovato!");
                // il formato è:
                // <tbody id="resBody"> (tab) <tr> <td> Username </td> </tr>
                //crea gli elementi e li appende nella tabella

                let usP = document.createElement("tr") // base
                let us = document.createElement("td") // username
                let na = document.createElement("td") // name
                let em = document.createElement("td") // email

                us.innerText = user.username;
                na.innerText = user.name;
                em.innerText = user.email;

                tab.appendChild(usP)
                tab.appendChild(us)
                tab.appendChild(na)
                tab.appendChild(em)

                console.log(tab);

            }
            // cerca con email
        } else if (Fcurrent === "email") {
            console.log("ok l'else email");
            
            temp = user.email.toLowerCase()
            if (temp.includes(txt.toLowerCase())) {
                console.log("Trovato!");
                // il formato è:
                // <tbody id="resBody"> (tab) <tr> <td> Username </td> </tr>
                //crea gli elementi e li appende nella tabella

                let usP = document.createElement("tr") // base
                let us = document.createElement("td") // username
                let na = document.createElement("td") // name
                let em = document.createElement("td") // email

                us.innerText = user.username;
                na.innerText = user.name;
                em.innerText = user.email;

                tab.appendChild(usP)
                tab.appendChild(us)
                tab.appendChild(na)
                tab.appendChild(em)

                console.log(tab);

            }
        }
    });
    // se per caso non trova niente da errore
    if (tab.children.length < 1) {
        err.innerText = "Nessun risultato trovato";
    }
}
// svuota la tabella
function emptyTab() {
    tab.innerHTML = "";
}