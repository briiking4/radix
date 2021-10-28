import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 5000;
import mysql from 'mysql';

const db = mysql.createPool({
  host: 'bking17.lmu.build',
  port: 3306,
  user: 'bkinglmu_miso',
  database: 'bkinglmu_miso',
  password: 'Bribrik1!'
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile({ root:'build'},'index.html'));
  });
}

var members;
var events;
function setMembersValue(value) {
  members = value;
}

function setEventsValue(value) {
  events = value;
}

app.get('/api', (req, res) => {

  db.query('SELECT * FROM members', (err, results) => {
    if(err){
      return reject(err);
    }
    setMembersValue(results);
  });

    db.query('SELECT * FROM events', (err, results) => {
      if(err){
        return reject(err);
      }
      setEventsValue(results);
  });
  res.json({ members: members, events: events});

});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`app listening at http://localhost:${port}`)
});
