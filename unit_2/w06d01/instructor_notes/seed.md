# Creating a Seed Route

## Begin With The End In Mind
1. Create a Seed Route

## Create a Seed Route

Sometimes you might need to add data to your database for testing purposes.  You can do so like this:

```javascript
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});
```
