//Install express server

const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(src + '/dist/breath-vegan-front'));
app.get('/*', function(req,res) {
    res.sendFile(path.join('index.html, {root: 'dist/breath-vegan-front/’}'));
});

// Start the app by listening on the default Heroku port.
app.listen(process.env.PORT || 8080);
