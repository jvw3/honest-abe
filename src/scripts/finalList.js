import { getPoliticians, getPacToPolDonations, getPoliticianBills, getBills, getInterests } from './dataAccess.js'


// List all politicians along with:
// Bills the politician has sponsored.
// PACs that have donated to the politician's campaign.
// Corporate influencers. Influencing corporations share the same interests as the politician's legislation, and have contributed to PACs that have contributed to the politician.





// create function to display info for politician name, age, and district. input is politician

// create function to display politician sponsored bills. input is politician

// create function to display Politician funders. (PACs) input is politician

// create function to display 
// What is an influential company?
// corps that have same interest as bill, and corps that have contributed to the politician.

// *Function to find corps that share same interests as political bills.

// if our input is a politician, we can find the right politician bill, and then the right bill. 
// The foundBill will have an interestId. If this interestId === corpinterest.interestid. then we can then return the corporation.company.

// *Function to find which corps hav contributed to Pacs that have contributed to the politician.
// if input is politician, we can iterate through the politician donations and filter donations made to the politician. Then we can iterate through the filtered donations and find which committees made the donations. 

//USing the found Committee names, we can iterate through corpdonations to filter the donations for these specified committees. Then we can iterate through coporations to find which corporations donated to the committees.

//Create a function that creates an html representation of the politician data. 
// no parameters. 



const findCorpBillInfluence = (politician) => {
    const politicianBills = getPoliticianBills()
    
    politicianBills.filter( pbill => {
        return pbill.politicianId === politician.id
    })
}



// Function to find politician bills
const politicianBills = (politician) => {
    let politicianBills = getPoliticianBills()
    let bills = getBills()
    let interests = getInterests()
    let html = ``
        //filter through politicianBills to find bills that a politician sponsored.
    let filteredpolBills = politicianBills.filter(bill => {
        return bill.politicianId === politician.id
    })

    let billName = []
    //iterate through the filtered politician bills and then iterate through all bills. If bill.Id === filt.billId, we now have access to properties of filtered bills.


billName = filteredpolBills.forEach(filt => {
        bills.forEach(bill => {
            if (bill.id === filt.billId) {
                html += `<div>${bill.name}<div>`
                
            }

            })
        })



    html += `</div>`

    return html



}


// Function to find politician funders 


// Function to find politician name and info
const politicianNameAndInfo = (politician) => {

    return `<header class="politician_name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician_info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>`
}


export const corpInfluenceHtml = () => {
    const politicians = getPoliticians()
    let html = `<article class ="politicians">
    <section>`

    politicians.forEach(politician => {
        html += `${politicianNameAndInfo(politician)}
        <div class="politician_bills">
        ${politicianBills(politician)}
        </div>`
    })
    
html += `</section>
        </article>`

return html
}