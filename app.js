import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./rounter/assignment.mjs";
import commentRouter from "./rounter/comment.mjs";
import accountRouter from "./rounter/account.mjs";

const app = express();
const port = 4000;

app.use(bodyParser.json());


app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.use("/assignments", assignmentRouter);
app.use("/assignments/:id/comments", commentRouter);
app.use("/accounts", accountRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
