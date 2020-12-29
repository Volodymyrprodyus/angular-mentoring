
export interface ICourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors?: {
        id?: number;
        name?: string;
    };
    isTopRated?: boolean;
}

export class Course implements ICourse {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public length: number,
        public description: string,
        public authors?: {
            id?: number;
            name?: string;
        },
        public isTopRated?: boolean,
    ) {}
}
