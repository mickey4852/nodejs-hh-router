import {Router} from "express";
const accountRouter = Router();

app.get("/accounts", function (req, res) {
    res.send("View all accounts");
  });
  
app.get("/accounts/:id", function (req, res) {
    res.send("View an account by id");
  });
  
 app.post("/accounts", function (req, res) {
    res.send("Create an account");
  }); 
  
app.put("/accounts/:id", function (req, res) {
    res.send("Update an account by id");
  });
    
app.delete("/accounts/:id", function (req, res) {
    res.send("Delete an account by id");
  });    

  export default accountRouter;