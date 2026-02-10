import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class SearchResults extends NavigationMixin(LightningElement) {
    @api results = [];

    navigateToRecord(event){
                debugger;
        const recordId =event.currentTarget.dataset.Id;
    
        
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }

        });
    }

}