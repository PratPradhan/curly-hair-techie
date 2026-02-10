import { LightningElement, track,wire } from 'lwc';
import getdynamicPicklists from '@salesforce/apex/dynamicPicklistController.getdynamicPicklists';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class DynamicPicklistComponent extends LightningElement {}