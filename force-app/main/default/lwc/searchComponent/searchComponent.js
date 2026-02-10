import { LightningElement, track } from 'lwc';
import searchAccounts from '@salesforce/apex/recordSearchController.searchAccounts';

export default class searchComponent extends LightningElement {
    @track searchKey = '';
    @track industry = '';
    @track results = [];
    @track history = [];
    @track isLoading = false;

    delayTimeout;

    handleSearchChange(event){
        //debugger;
        window.clearTimeout(this.delayTimeOut);

        const value =event.detail;
        this.searchKey = value;

        this.delayTimeout =setTimeout(() => {
            this.performSearch();
        },400);
    }
    handleFilterChange(event){
        this.industry = event.detail;
        this.performSearch();
    }

    performSearch(){
        if(!this.searchKey){
            this.results = [];
            return;
        }
        this.isLoading =true;

        searchAccounts({
           searchTerm: this.searchKey,
           industry: this.industry
        }).then (data => {
            this.results = data;
            debugger;
            this.updateHistory(this.searchKey);
            
        })
        .finally(() => {
            this.isLoading =false;
        });
        //console.log('***industry'+ industry);
        //    console.log('*****data'+data);
    }
    updateHistory(term) {
        if(this.history.includes(term)) {
            this.history =[term, ...this.history].slice(0,5);
        }
    }

}