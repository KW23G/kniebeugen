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

function add_papa() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores["papa"] = scores["papa"] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function add_mama() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores["mama"] = scores["mama"] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function add_liana() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores["liana"] = scores["liana"] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function add_jannis() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores["jannis"] = scores["jannis"] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function add_marisa() {
    var data = fs.readFileSync("scores.json");
    var scores = JSON.parse(data);

    scores["marisa"] = scores["marisa"] + 1;

    var data = JSON.stringify(scores, null, 4);
    fs.writeFile("scores.json", data, finished);

    function finished(err) {}
}

function test() {
    alert("test");
}

function show() {
    exec("python3 show.py");
}
