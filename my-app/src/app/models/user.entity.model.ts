export interface IUserEntity {
    id: number;
    firstName: string;
    lastName: string;
}

export class UserEntity implements IUserEntity {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string
    ) {}
}
