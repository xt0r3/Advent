const express = require('express')
const app = express()
const port = 3000

till = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
items = [
    {
        id: 0,
        name: 'Narancsos cukokra',
        price: 10000
    }
]

function check(x, squeeze){
    if(squeeze){
        return !isNaN(x) && (x >= 0 && x < items.length);
    }
    else{
        return !isNaN(x) && x > 0;
    }
}

app.get('/items/order/:id/:db/:amt', (req, res) => {
    //CHECKING
    if(!(check(req.params.amt, false) && check(req.params.db, false) && check(req.params.id, true))){
        res.status(400);
        res.send();
        return;
    }

    let ans = {}
    let amt = req.params.amt  - items[req.params.id]['price'] * req.params.db;

    ans['Befizetve'] = req.params.amt;
    ans['Sütik ára'] = items[req.params.id]['price'] * req.params.db;
    let dex = 0;
    while (amt > 0) {
        while (till[dex] > amt) {
            dex++;
        }
        ans[till[dex].toString()] = Math.floor(amt / till[dex])
        amt = amt % till[dex]
    }

    if(amt < 0){
        res.send('Not enough money')
        req.status(400)
    }
    else{
        res.send(JSON.stringify(ans))
    }

})

app.get('/items', (req, res) => {
    res.send(items);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})