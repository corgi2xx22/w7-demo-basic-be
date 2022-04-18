# Simple Full-stack Application

This is a template for a basic fullstack web using as exercise during the Full stack Web Development bootcamp of CoderSchool.vn

## Overview

#### Stack : HTML CSS JS Node JS and Express JS

#### API :

Build 2 endpoints for GET methods

- /students : return all student, allow search by age or name
- /students/:id : return single student with the match id

### Database :

Using data from given `db.json` file

#### Front-end :

Build a simple layout to display server response also UI for making search request.

## Instruction :

1. Clone this codebase
2. check gitignore
3. npm i
4. Import data from `db.json`
5. In `routes/index.js` , identify the callback of `route.get("/students")`
6. Ignore the commented code for now
7. Add a function that sending a list of all students
8. Uncommented the commented code, save and :

   1. Try on your browser : "http://localhost:5000/students?age=3"
   2. Check the console log
   3. Try on your browser : "http://localhost:5000/students?name=tuan"
   4. Check the console log
   5. Guess what was happening ? then
   6. Refactor the code so that when this route is called, it return a list of student that match accordingly to `name` or `age` query. **And** also send a list of all students if there is no query eg "http://localhost:5000/students"

9. In `routes/index.js` , identify the callback of `ruote.get("/students/:id")`
10. Add a function that send back to client the correct info of the student id requested
11. Test on browser : "http://localhost:5000/students/(input an id here)" to see if we success

12. Create a simple front-end website HTML CSS and JS that using your newly created api to :
    1. Display a list of student, everylist is clickable
    2. Make an age search box to input age then **make call to correct api endpoint**
    3. Display a list of students that match the search in your UI of choice
    4. Make an name search box to input age then **make call to correct api endpoint**
    5. Display a list of students that match the search in your UI of choice

**Bounus**: Fullstack Web Application

- Turn every student listing into a clickable element
- When click , make a call to http://localhost:5000/students\studentIDofTheClicked"
- Display the result in your UI of choice
- Beautify your first **Full-stack Web Application**
