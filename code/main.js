const { app, BrowserWindow } = require('electron')
const fs = require("fs");
const exec = require('child_process').exec;

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

//////////////////////////////////////

function add_person(person) {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores[person] = scores[person] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function add_papa() {
    add_person("papa");
}

function add_mama() {
    add_person("mama");
}

function add_liana() {
    add_person("liana");
}

function add_jannis() {
    add_person("jannis");
}

function add_marisa() {
    add_person("marisa");
}

function show() {
    exec("python3 show.py");
}


function reset() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    var persons = ["papa", "mama", "liana", "jannis", "marisa"];
    for (index = 0; index < 5; index++) {
        scores[persons[index]] = 0;
    }

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}
