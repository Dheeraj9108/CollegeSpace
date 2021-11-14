const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// paths 

const partials_path = path.join(__dirname,"../templates/partials");
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



//5th Sem
app.get("/CollegeSpace",(req,res)=>{
    res.render('index');
});

app.get("/CollegeSpace/sem",(req,res)=>{
    res.render('sem');
});
app.get("/cycle",(req,res)=>{
    res.render('cycle');
});


// Phy/Chemcycle

app.get("/ccycle",(req,res)=>{
    res.render('ccycle/ccycle');
});
app.get("/pcycle",(req,res)=>{
    res.render('pcycle/pcycle');
});




app.get("/adp",(req,res)=>{
    res.render('5thSem/ADP');
});
app.get("/atc",(req,res)=>{
    res.render('5thSem/ATC');
});
app.get("/up",(req,res)=>{
    res.render('5thSem/UP');
});
app.get("/dbms",(req,res)=>{
    res.render('5thSem/DBMS');
});
app.get("/me",(req,res)=>{
    res.render('5thSem/ME');
});
app.get("/cns",(req,res)=>{
    res.render('5thSem/cns');
});
app.get("/cs5",(req,res)=>{
    res.render('5thSem/cs');
});



// 4th Sem
app.get("/daa",(req,res)=>{
    res.render('4thSem/DAA');
});
app.get("/dc",(req,res)=>{
    res.render('4thSem/DC');
});
app.get("/em-iv",(req,res)=>{
    res.render('4thSem/EM-IV');
});
app.get("/ooc",(req,res)=>{
    res.render('4thSem/OOC');
});
app.get("/m&m",(req,res)=>{
    res.render('4thSem/m&m');
});
app.get("/os",(req,res)=>{
    res.render('4thSem/OS');
});
app.get("/cs4",(req,res)=>{
    res.render('4thSem/CS');
});



//3rd Sem

app.get("/ade",(req,res)=>{
    res.render('3rdSem/ADE');
});
app.get("/co",(req,res)=>{
    res.render('3rdSem/CO');
});
app.get("/dms",(req,res)=>{
    res.render('3rdSem/DMS');
});
app.get("/dsa",(req,res)=>{
    res.render('3rdSem/DSA');
});
app.get("/em-iii",(req,res)=>{
    res.render('3rdSem/EM-III');
});
app.get("/se",(req,res)=>{
    res.render('3rdSem/SE');
});

app.get("/cs3",(req,res)=>{
    res.render('3rdSem/CS');
});

app.listen(port,()=>{
    console.log(`Listening at ${port}`);
});
