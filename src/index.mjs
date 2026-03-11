import express from "express"; 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 

const mockStudents = [ 
    { id: 1, username: "jburns", course: "information technology", module: "A001" }, 
    { id: 2, username: "rsmith", course: "political sciences", module: "C001" }, 
    { id: 3, username: "brown", course: "business administration", module: "D001" }, 
    { id: 4, username: "sjane", course: "information technology", module: "A001" }, 
    { id: 5, username: "miller", course: "education", module: "F003" }, 
    { id: 6, username: "afoxy", course: "mechatronics", module: "E002" }, 
    { id: 7, username: "pmcdonald", course: "architecture", module: "B101" }, 
    { id: 8, username: "sfraser", course: "art", module: "A611" } 
]; 

app.get("/", (req, res) => { 
    res.send("Student API Running"); 
}); 

/* GET ALL STUDENTS */ 
app.get("/students", (req, res) => {
     res.status(200).json(mockStudents); 
}); 

/* GET STUDENT BY ID */ 
app.get("/students/:id", (req, res) => {
     const id = Number(req.params.id); 
     
     const student = mockStudents.find(s => s.id === id); 
     
     if (!student) {
         return res.status(404).json({ error: "Student not found" }); 
    } 
    
    res.status(200).json(student); 
}); 

/* CREATE STUDENT */ 
app.post("/students", (req, res) => { 
    const { username, course, module } = req.body || {}; 
    
    if (!username || !course || !module) { 
        return res.status(400).json({ error: "Missing required fields" }); 
    } 
    
    const newStudent = { 
        id: mockStudents.length + 1, 
        username, 
        course, 
        module 
    }; 
    
    mockStudents.push(newStudent); 
    
    res.status(201).json(newStudent); 
}); 
  
/* UPDATE STUDENT */
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const { username, course, module } = req.body || {};

  const student = mockStudents.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  if (!username || !course || !module) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  student.username = username;
  student.course = course;
  student.module = module;

  res.status(200).json(student);
});

/* PARTIAL UPDATE */
app.patch("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = mockStudents.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { username, course, module } = req.body;

  if (username) student.username = username;
  if (course) student.course = course;
  if (module) student.module = module;

  res.status(200).json(student);
});

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`); 
}); 