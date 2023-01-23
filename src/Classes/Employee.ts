import { Schedule } from "./Schedule";

export interface dataEmployee {
    name: string;
    surname: string;
    phone: string;
    extension: string;
    photo_file: string;
    email: string;
    job_position: string;
    schedule:Schedule;
}

export class Employee {
    id:number;
    name: string;
    surname: string;
    phone: string;
    extension: string;
    photo_file: string;
    email: string;
    job_position: string;
    schedule: Schedule;

    constructor(data:dataEmployee, id:number) {
        this.name = data.name;
        this.surname = data.surname;
        this.phone = data.phone;
        this.extension = data.extension;
        this.photo_file = data.photo_file;
        this.email = data.email;
        this.job_position = data.job_position;
        this.schedule = data.schedule;
        this.id = id;
    }
}