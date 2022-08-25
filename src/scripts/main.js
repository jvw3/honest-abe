import { htmlCreation } from "./htmlassembly.js"
import { fetchPoliticians } from "./dataAccess.js"
import { fetchCorporations } from "./dataAccess.js"
import { fetchCorpToPacDonations } from "./dataAccess.js"
import { fetchCommittees } from "./dataAccess.js"


const mainContainer = document.querySelector('#container')

const render = () => {
    fetchPoliticians()
    .then(() => fetchCorporations())
    .then(() => fetchCommittees())
    .then(() => fetchCorpToPacDonations())
    .then(
        () =>
        mainContainer.innerHTML = htmlCreation()
    )
}

render()