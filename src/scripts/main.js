import { htmlCreation } from "./htmlassembly.js"
import { fetchBills, fetchInterests, fetchpoliticianBills, fetchPoliticians } from "./dataAccess.js"
import { fetchCorporations } from "./dataAccess.js"
import { fetchCorpToPacDonations } from "./dataAccess.js"
import { fetchCommittees } from "./dataAccess.js"


const mainContainer = document.querySelector('#container')

const render = () => {
    fetchPoliticians()
    .then(() => fetchCorporations())
    .then(() => fetchCommittees())
    .then(() => fetchCorpToPacDonations())
    .then(() => fetchInterests())
    .then(()    => fetchpoliticianBills())
    .then(() => fetchBills())
    .then(
        () =>
        mainContainer.innerHTML = htmlCreation()
    )
}
console.log('hello')
render()