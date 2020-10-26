export interface ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
}

export class Course implements ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;

    constructor(id: number, title: string, creationDate: string, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}