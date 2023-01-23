import * as express from 'express';
import { Employee } from '../Classes/Employee';
import { ErrorHandler } from '../ErrorHandler';
import { Request } from '../Middleware/middleware';

export class EmployeeController {

    public static employeePost(req: Request, res: express.Response) {
        try {
            const employee: Employee = new Employee(ErrorHandler.employeeHandler(req.body, req.db.employees), req.db.id++);
            req.db.addEmployee(employee);
        }
        catch(err) {
            res.status(400).json("Erro ao adicionar servidor: " + err.message);
        }
        res.json("Servidor adicionado com sucesso");
    }

    public static employeeUpdate(req: Request, res: express.Response) {
        try {
            const employeeId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(employeeId, req.db.employees);

            const employee: Employee = new Employee(ErrorHandler.employeeHandler(req.body, req.db.employees), employeeId);
            req.db.updateEmployee(employeeId, employee);
        } catch (err) {
            res.status(400).json({ msg: "Erro ao atualizar servidor: " + err.message });
        }
        res.json("Servidor atualizado com sucesso.");
    }

    public static employeeRemove(req: Request, res: express.Response) {
        try {
            const employeeId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(employeeId, req.db.employees);
            req.db.deleteEmployee(employeeId);
        } catch (err) {
            res.status(400).json("Erro ao remover servidor: " + err.message);
        }
        res.json("Servidor removido com sucesso.");
    }

    public static employeesGet(req: Request, res: express.Response) {
        let employees;
        try {
            employees = req.db.getEmployees();
        } catch (err) {
            res.status(400).json("Erro ao exibir servidores: " + err.message);
        }
        res.json(employees);
    }

    public static employeeGet(req: Request, res: express.Response) {
        let employee;
        try {
            const employeeId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(employeeId, req.db.employees);
            employee = req.db.getEmployee(employeeId);
        } catch (err) {
            res.status(400).json("Erro ao buscar servidor: " + err.message);
        }
        res.json(employee);
    }

}