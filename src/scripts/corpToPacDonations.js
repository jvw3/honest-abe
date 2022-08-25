import { getCorporations, getCommittees, getCorpToPacDonations} from "./dataAccess.js"




// function to create a html representation of corp donations to PACs
// for each company, We need to iterate through companies and find company name
// iterate though pac donations to find the matching pac address, 
// and the donation amounts that were made by each company 




//We need to find coporation.company and donation.amount
// We need to filter through corporations to find the corps 
//donation from company = 
// How to list all donations made to a PAC.
// filter all donations made to one PAC. 
const findDonorInfo = (committee) => {
    let donations = getCorpToPacDonations()
    let corporations = getCorporations()
    let html = `<ul>`

    let filtDonations = donations.filter( d => {
        return d.pacId === committee.id
    })  

    filtDonations.forEach( filt => {
        corporations.forEach( corp => {
            if (corp.id === filt.corporationId) {
            html += `<li>${corp.company} ($${filt.amount.toLocaleString('en-US')})</li>` }
        })
    })
    
    html += `</ul>`

    return html
}

//for each donation, we're going to 
export const donationsToPacHtml = () => {
    const committees = getCommittees()
    let html = '<h1>Donations</h1>'

    committees.forEach(committee => {
        html += `<article>
            <section>
                <header>
                <h2>${committee.registeredName}</h1>
                </header>
                <div class="pac_info">
                    <div>${committee.address}</div>
                </div>
                <div>
                <h3>Donors</h3>
                ${findDonorInfo(committee)}
                </div>
            </section>
        </article>`
    })

    return html


}

