#!/usr/bin/env node

import * as express from "express";
import { DBHandlerMw } from "./Middleware/middleware";
import { EmployeeController } from "./Controllers/EmployeeController";

const app = (module.exports = express());
const cors = require('cors');

app.use("/", express.json());
app.use("/", DBHandlerMw() as express.RequestHandler);
app.use(cors());

app.post('/employees', EmployeeController.employeePost);
app.put('/employees/:id', EmployeeController.employeeUpdate);
app.delete('/employees/:id', EmployeeController.employeeRemove);
app.get('/employees', EmployeeController.employeesGet);
app.get('/employee/:id', EmployeeController.employeeGet);

app.listen(5000);
console.log("Server listening on port 5000");
