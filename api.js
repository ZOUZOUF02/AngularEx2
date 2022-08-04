const express = require('express')
const app = express()
const ExcelJS = require('exceljs');
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors())
const excelToJson = require('convert-excel-to-json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const travel = excelToJson({
    sourceFile: 'travel.xlsx'
})
const workbook = new ExcelJS.Workbook('travel');
app.use(express.static("public"))
app.get('/GetServices', (req, res)=> {
    res.send(travel.services)
})
app.get('/GetGuides', (req, res)=> {
    res.send(travel.guides)
})
app.get('/GetTrips', (req, res)=> {
    res.send(travel.trips)
})
app.get('/GetGroups', (req, res)=> {
    res.send(travel.groups)
})
app.post('/Contact',async function(req,res){
    console.log('body:' + req.body);
    var workbook = new ExcelJS.Workbook();   
    await workbook.xlsx.readFile('./travel.xlsx')
      .then(async function() {
          var worksheet = workbook.getWorksheet('groups');
          var data = [];
          data.push(req.body.name);        
          data.push(req.body.email);
          data.push(req.body.phone);
          data.push(req.body.trip);
          data.push(req.body.nb);
          data.push(req.body.guide);
          data.push(req.body.msg);
          data.push(worksheet.rowCount)
          await worksheet.insertRow(worksheet.rowCount +1, data);
          await workbook.xlsx.writeFile('./travel.xlsx') 
          c++
          //console.log(req.body.B)       
      });  
    res.send(travel)
  })
  app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));