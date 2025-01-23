```javascript
//Check for potential issues before aggregation
async function checkFields(collection) {
  const check = await collection.aggregate([ 
    {$project:{field1:1,field2:1,isValid:{ $cond: { if: {$and: [{$exists: ['$field1']},{$exists: ['$field2']}]}, then: 1, else: 0 } } } }       
]).toArray();
  return check.filter(el => el.isValid == 0);
}
const invalidDocs = await checkFields(collection);
console.log(invalidDocs);


const query = { $and: [{ field1: { $exists: true } }, { field2: { $exists: true } }] };
const result = await collection.find(query).toArray();
console.log(result);
```