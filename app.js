const express = require('express');
const app = express();
const port = 3000;
const router = require('./app/router');

app.use('home', router)

app.get('/', async (req, res) => { 
    res.send('Loading....');
// want to set function here to wait to render home page until components load
    res.redirect('home')
});

app.listen(port, async () => {
    const chalk = (await import('chalk')).default;
    console.log(chalk.green(" ````` Listening on port " + port + " ``````````" + "`http://localhost:3000`" ));

})

