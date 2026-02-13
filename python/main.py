import subprocess
import json
from simple_salesforce import Salesforce

# Get fresh org info from CLI
result = subprocess.run(
    ["sf", "org", "display", "--json"],
    capture_output=True,
    text=True
)

org_info = json.loads(result.stdout)
access_token = org_info["result"]["accessToken"]
instance_url = org_info["result"]["instanceUrl"]

# Connect using fresh token
sf = Salesforce(instance_url=instance_url, session_id=access_token)
print("Connected successfully!")

data = sf.query("SELECT Id, Name FROM Account LIMIT 1")
print(data)

# Update existing contact
try:
    sf.Contact.upsert("External_ID__c/123", {
    "FirstName": "Dan",
    "LastName": "Smith",
    "Email": "dan.smith@example.com"
    })
    print("✅ Contact upserted successfully!")

    results = sf.query("SELECT Name FROM Account LIMIT 100")
    for record in results['records']:
        print (record['Name'])

except Exception as e:
    print(f"❌ Update failed: {str(e)}")