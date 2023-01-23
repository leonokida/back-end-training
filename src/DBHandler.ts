import { Employee, dataEmployee } from "./Classes/Employee";
import { Schedule, dataSchedule } from "./Classes/Schedule";

export class DBHandler {
    id:number = 0;
    employees: Employee[];

    constructor() {
        this.employees = [];
        this.createArray();
    }

    createArray() {
        let scheduleData: dataSchedule = {
            "mon": [{
                "09h": {
                    "description":"Reunião com Secretário Y",
                    "duration": "1h"
                },
                "15h30": {
                    "description": "Reunião com C3SL",
                    "duration": "1h30"
                }
            }],
            "tue": [],
            "wed":[{
                "13h": {
                    "description": "Reunião geral da divisão X1",
                    "duration": "2h"
                }
            }],
            "thu": [],
            "fri":[]
        }
        let employeeData: dataEmployee = {
            "name": "José",
            "surname": "Paulo",
            "phone": "61 XXXXX-XXXX",
            "extension": "123",
            "photo_file": "1.png",
            "email": "josepaulo@x.gov.br",
            "job_position": "Secretário Y",
            "schedule": new Schedule(scheduleData)
        }
        this.employees.push(new Employee(employeeData, this.id++));
    }

    addEmployee(newEmployee:Employee) {
        this.employees.push(newEmployee);
    }

    getEmployee(id:number) {
        return this.employees.find(element => element.id == id);
    }

    getEmployees() {
        return this.employees;
    }

    updateEmployee(id:number, updatedEmployee:Employee) {
        let index:number = this.employees.findIndex(element => element.id == id);
        this.employees[index] = updatedEmployee;
    }

    deleteEmployee(id:number) {
        let index:number = this.employees.findIndex(element => element.id == id);
        this.employees[index] = this.employees[this.employees.length -1];
        this.employees.pop();
    }
}