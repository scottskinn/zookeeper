const path = require('path');
const router = require("express").Router();

// using res.sendFile(), and all we have to do is tell them where to find the file we want our server to read and send back to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;