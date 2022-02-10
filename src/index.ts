import express from "express";

// setup express class
const app = express();
// setup express json parser
app.use(express.json());
// setup express static
app.use(express.static('public'));
// setup express pug
app.set('view engine', 'pug');
// setup express routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from pug',
        message: 'Hello from pug'
    });
});
// setup express server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});