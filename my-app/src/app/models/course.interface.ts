import { Time } from "@angular/common";

export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: Time;
    description: string;
}

export class Course implements ICourse {
    constructor(
        public id: number, 
        public title: string, 
        public creationDate: Date, 
        public duration: Time, 
        public description: string
    ) {}
}