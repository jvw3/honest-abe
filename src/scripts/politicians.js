import { getPoliticians } from "./dataAccess.js";



// create function to display html representation for politicians.

export const politiciansHtml = () => {
    let html = "<h1>Politicians</h1>"
    let politicians = getPoliticians()

    politicians.forEach( politician => {
        html += `<article class="politicians">
        <section class="politician">
            <header class="politician
            _name">
            <h2>${politician.name.first} ${politician.name.last}</h2>
            </header>
            <div class="politician_info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district} </div>
            </div>
        </section>
        </article>`
    })
    return html
}