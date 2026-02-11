import { LightningElement, track,wire } from 'lwc';
import getdynamicPicklists from '@salesforce/apex/dynamicPicklistController.getdynamicPicklists';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class DynamicPicklistComponent extends LightningElement {
//track properties for reactivity
@track selectedCountry;
@track selectedState;
@track countryOptions =[];
@track stateOptions= [];
@track error;
@track isLoading =true;

//store all states value
allStatesData ={};

//wire adapters to fetch picklist
@wire(getdynamicPicklists)
wiredpicklists({error, data}){
    this.isLoading= true;

    if(data){
        try{
            //countries
            if(data.countries){
                this.countryOptions =data.countries.map(country => ({
                    label: country,
                    value: country
                }));
            }
            //store state data
            if(data.states){
                this.allStatesData = data.states;
            }

            this.error =undefined;
        }
        catch(e){
            this.error ='Error processing checklist data' + e.message;
            this.showErrorToast(this.error);
        } finally {
            this.isLoading = false;
        }
    }
}
}