public with sharing class dynamicPicklistController {

    @AuraEnabled(cacheable =true)
    public static Map<string, List<String>> getdynamicPicklists() {

        Map<string, List<String>> picklistData =new Map<string, List<String>>();
        try{
        //perform Describe outside loop
        Schema.DescribeFieldResult countryFieldDescribe = Schema.sObjectType.Address.Fields.CountryCode;
        Schema.DescribeFieldResult stateFieldDescribe = Schema.sObjectType.Address.Fields.StateCode;

        //Fetch Country Code
        List<Schema.PicklistEntry> countryEntries =  countryFieldDescribe.getPicklistValues();
        List<String> countryList =new List<String>();

        for(Schema.picklistEntry country : countryEntries){
            if(country.isActive()){
                countryList.add(country.getValue());
            }
        }
        picklistData.put('countries', countryList);

        //fetch state code
        List<String> stateList =new List<String>();
                for(String countryCode : countryList){
            List<Schema.PicklistEntry> stateEntries = stateFieldDescribe.getPicklistValues();
        
         for(Schema.picklistEntry state : stateEntries){
            if(state.isActive()){
                stateList.add(state.getValue());
            }
         }
         picklistData.put('states', stateList);
        }
    }

    catch (exception e){
        throw new AuraHandledException('error fetching picklist values'+ e.getMessage());
    }
    return picklistData;
}
}