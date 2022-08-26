import { politiciansHtml } from "./politicians.js"; 
import { corporationsHtml} from './corporations.js';
import { donationsToPacHtml } from "./corpToPacDonations.js";
import { corpInfluenceHtml } from "./finalList.js";



export const htmlCreation = () => {
    return `${politiciansHtml()}
            ${corporationsHtml()}
            ${donationsToPacHtml()}
            ${corpInfluenceHtml()}`
}