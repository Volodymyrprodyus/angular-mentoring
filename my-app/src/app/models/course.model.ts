
export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated?: boolean;
}

export class Course implements ICourse {
    constructor(
        public id: number,
        public title: string,
        public creationDate: Date,
        public duration: number,
        public description: string,
        public topRated?: boolean
    ) {}
}