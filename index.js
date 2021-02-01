const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000; 
const data = [
    { id: "1", name: "Mike", age: 22, company: "Nascetur Mus Company", Address:[{street:"Avenue 2", number:"548"}] },
    { id: "2", name: "Eleanor", age: 42, company: "Hendrerit Donec LLP", Address:[{street:"Avenue 4", number:"388"}] },
    { id: "3", name: "Dylan", age: 51, company: "Nisi Incorporated", Address:[{street:"Avenue 9", number:"7428"}]},
    { id: "4", name: "Leila", age: 30, company: "Eros Non Limited" },
    { id: "5", name: "Jason", age: 31, company: "Accumsan Interdum Associates" },
];


const findItem = id => {
    return data.find(item => item.id == id);
    
}
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const result = data;
    return res.json(result)
})
app.get('/:id', (req, res) =>{
    const id = req.params.id;
    const item  = data.find(item => item.id === id);
    return res.json(item);

})
app.post('/', (req, res) =>{
    const name = req.body.name; 
    const models = req.body.models;
    const type = req.body.type
    return res.json([name, models, type]);
})
app.put('/:id', (req, res) =>{
    const name =req.params.name;
    const item = findItem(req.params.id)
    item ={...item, name: name};
    return res.json(item);
})
app.delete('/', (req, res) =>{
    const item = findItem(req.params.id);
    return res.json(item);

})

app.listen(port , ()=> console.log(`Listen on port ${port}`))