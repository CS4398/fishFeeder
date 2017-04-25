// Require
var express = require('express');
var app = express();
var list = require('./feedings.json');

var feedings = list.feedings;

// Configure app
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))

// Serve homepage
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    showContent: false,
    showSplash: true
  });
});

// Serve view
app.get('/schedule', (req, res) => {
    res.render('schedule', {
      title: 'Feeding Schedule',
      showContent: true,
      showSplash: false,
      feedData: feedings
    });
});

// Serve feeder
app.get('/feeder', (req, res) => {
  res.render('feeder', {
    title: 'Feeder',
    showContent: true,
    showSplash: false
  });
});

// Serve about
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    showContent: true,
    showSplash: false
  });
});

// adds a feeding if 6am or 6pm
function addFeeding() {
  var now = new Date();
  var curHr = now.getHours();
  var curMin = now.getMinutes();
  if (curMin === 0) {
    if (curHr === 6 || curHr === 18) {
      // keep array length @ 10
      if (feedings.length === 10) { removeOldest(feedings); }
      
      // update list of feedings
      feedings.push(now);
      console.log('posted time' + now);
    }
  }
}

function removeOldest (arr) {
  // remove 1 element from 0 index
  arr.splice(0, 1);
}

// checks addFeeding every minute
setInterval(addFeeding, 60000);

server = app.listen(8088, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = server;
