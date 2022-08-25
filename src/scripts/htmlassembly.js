import { politiciansHtml } from "./politicians.js"; 
import { corporationsHtml} from './corporations.js';
import { donationsToPacHtml } from "./corpToPacDonations.js";



export const htmlCreation = () => {
    return `${politiciansHtml()}
            ${corporationsHtml()}
            ${donationsToPacHtml()}`
}