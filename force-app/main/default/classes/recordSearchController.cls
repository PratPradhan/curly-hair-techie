public with sharing class recordSearchController {

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(
        string searchTerm,
        string industry)
        {
            if(string.isBlank(searchTerm)){
                return new List<Account>();
            }

            string key= '%' +searchTerm + '%';
            string baseQuery ='SELECT id, Name,Industry, Type ' + 'FROM Account WHERE name LIKE :key';

            if(!string.isBlank(Industry)){
                baseQuery += ' AND Industry =:Industry';
            }
            baseQuery += ' ORDER BY Name ASC LIMIT 10';
            system.debug('query**'+baseQuery);
            return Database.query(baseQuery);


    }
}