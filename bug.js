```javascript
const query = { $and: [{ field1: { $exists: true } }, { field2: { $exists: true } }] };
const result = await collection.find(query).toArray();
//Error: Unexpected token } in JSON at position 123 
```