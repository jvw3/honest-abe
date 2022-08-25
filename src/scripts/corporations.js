import { getCorporations } from "./dataAccess.js"




export const corporationsHtml = () => {
    let html = "<h1>Companies</h1>"
    let corporations = getCorporations()

    corporations.forEach( corporation => {
        html += `<article class="corporations">
        <section class="corporation">
            <header class="corporation
            _name">
            <h2>${corporation.company}</h2>
            </header>
            <div class="corporation_info">
                <div>Age: ${corporation.address}</div>
            </div>
        </section>
        </article>`
    })
    return html
}