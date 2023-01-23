export interface dataSchedule {
    mon: any[];
    tue: any[];
    wed: any[];
    thu: any[];
    fri: any[];
}

export class Schedule {
    mon: any[];
    tue: any[];
    wed: any[];
    thu: any[];
    fri: any[];

    constructor(data:dataSchedule) {
        this.mon = data.mon;
        this.tue = data.tue;
        this.wed = data.wed;
        this.thu = data.thu;
        this.fri = data.fri;
    }
}