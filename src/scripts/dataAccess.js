// STATE OBJECT THAT HOLDS OUR APPLICATION STATE DATA.
const state = {
    politicians: [],
    interests: [],
    committees: [],
    corporations: [],
    bills: [],
    politicianBills: [],
    pacToPolDonations: [],
    corporateInterests: [],
    corpToPacDonations: []
}

// API ADDRESS
const API = 'http://localhost:8299'

// HTTP GET REQUESTS TO FETCH DATA FROM OUR API AND STORE IT IN OUR APPLICATION STATE. 
export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
    .then( res => res.json())
    .then(
        (allPoliticians) =>
        { state.politicians = allPoliticians }
        )
}

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
    .then( res => res.json())
    .then(
        (allInterests) =>
        { state.interests = allInterests}
        )
}

export const fetchCommittees = () => {
    return fetch(`${API}/committees`)
    .then( res => res.json())
    .then(
        (allCommittees) =>
        { state.committees = allCommittees}
        )
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
    .then( res => res.json())
    .then(
        (allCorporations) =>
        { state.corporations = allCorporations}
        )
}

export const fetchBills = () => {
    return fetch(`${API}/bills`)
    .then( res => res.json())
    .then(
        (allBills) =>
        { state.bills = allBills}
        )
}

export const fetchpoliticianBills = () => {
    return fetch(`${API}/politicianBills`)
    .then( res => res.json())
    .then(
        (allPoliticianBills) =>
        { state.politicianBills = allPoliticianBills}
        )
}

export const fetchpacToPolDonations = () => {
    return fetch(`${API}/pacToPolDonations`)
    .then( res => res.json())
    .then(
        (allDonations) =>
        { state.pacToPolDonations = allDonations}
        )
}

export const fetchCorpToPacDonations = () => {
    return fetch(`${API}/corpToPacDonations`)
    .then( res => res.json())
    .then(
        (allDonations) =>
        { state.corpToPacDonations = allDonations}
        )
}

export const fetchcorporateInterests = () => {
    return fetch(`${API}/corporateInterests`)
    .then( res => res.json())
    .then(
        (allCorporateInterests) =>
        { state.corporateInterests = allCorporateInterests}
        )
}


// GETTER FUNCTIONS: TO EXPORT OUR DATA FROM DATA ACCESS MODULE TO OTHER MODULES AS NEEDED. 

export const getPoliticians = () => {
    return state.politicians.map(politician => ({...politician}))
}

export const getInterests = () => {
    return state.interests.map(interest => ({...interest}))
}
export const getInterests = () => {
    return state.interests.map(interest => ({...interest}))
}
















