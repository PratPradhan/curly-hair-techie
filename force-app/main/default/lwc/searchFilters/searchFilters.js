import { LightningElement } from 'lwc';

export default class SearchFilters extends LightningElement {



industryOptions =[
    {label: "All", value: ''},
    { label: 'Banking', value: 'Banking' },
    { label: 'Healthcare', value: 'Healthcare' },
    { label: 'Technology', value: 'Technology' },
    { label: 'Retail', value: 'Retail' },
    { label: 'Consulting', value: 'Consulting' }
]

handleChange(event){
    this.dispatchEvent(
        new CustomEvent('filterchange',{
            detail: event.target.value
        })
    );
    debugger;
}
}