import { dataEmployee } from "./Classes/Employee";
import { Schedule, dataSchedule } from "./Classes/Schedule";
import { Request } from "./Middleware/middleware";

var isUpdate = false;

export class ErrorHandler {

    public static idExists(id: number, array: any[]): void {
        if (!(array.find(elem => elem.id == id)))
            throw new Error("Element with id " + id + " does not exist");
        isUpdate = true;
    }

    public static employeeHandler(input: any, employees: any[]): dataEmployee {
        if (typeof input.name !== "string" || !input.name.length)
            throw new Error("Invalid employee name");

        if (typeof input.surname !== "string" || !input.surname.length)
            throw new Error("Invalid employee surname");

        if (typeof input.phone !== "string" || !input.phone.length)
            throw new Error("Invalid employee phone");

        if (typeof input.job_position !== "string" || !input.job_position.length)
            throw new Error("Invalid employee job position");

        if ((!isUpdate) && (employees.find(elem => elem.name == input.name)) && (employees.find(elem => elem.surname == input.surname)))
            throw new Error("Employee already exists");

        if (input.schedule != undefined) {

            if (input.schedule["mon"] == undefined)
                input.schedule["mon"] = [];
            
            if (input.schedule["tue"] == undefined)
                input.schedule["tue"] = [];

            if (input.schedule["wed"] == undefined)
                input.schedule["wed"] = [];

            if (input.schedule["thu"] == undefined)
                input.schedule["thu"] = [];

            if (input.schedule["fri"] == undefined)
                input.schedule["fri"] = [];

        }
        else {
            input.schedule = {};
            input.schedule["mon"] = [];
            input.schedule["tue"] = [];
            input.schedule["wed"] = [];
            input.schedule["thu"] = [];
            input.schedule["fri"] = [];
        }

        const employee: dataEmployee = {
            name: input.name,
            surname: input.surname,
            phone: input.phone,
            extension: input.extension,
            photo_file: input.photo_file,
            email: input.email,
            job_position: input.job_position,
            schedule: new Schedule(input.schedule)
        }

        isUpdate = false;
        return employee;
    }

}
