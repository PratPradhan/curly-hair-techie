import { LightningElement, api } from 'lwc';

export default class SearchInput extends LightningElement {
    @api history =[];

    handleChange(event){
        this.dispatchEvent(
            new CustomEvent('searchchange', {
                detail: event.target.value
            })
        );
    }

    handleHistoryClick(event){
        this.dispatchEvent(
            new CustomEvent('searchchange', {
            detail: event.target.dataset.value
        })
    );
    }
}