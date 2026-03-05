import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

//mock database
let students = [
    { id:1, username:"jburns", course:"information technology", module:"A001" },
    { id:2, username:"rsmith", course:"political sciences", module:"C001" },
    { id:3, username:"brown", course:"business administration", module:"D001" },
    { id:4, username:"sjane", course:"information technology", module:"A001" }
];

// Root route
app.get("/", (req,res)=>{
    res.send("Student API running");
});

app.listen(PORT, ()=>{
    console.log(`Server running on https://localhost:${PORT}`);
});

