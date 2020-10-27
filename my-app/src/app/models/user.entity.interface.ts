export interface IUserEntity {
    id: number;
    FirstName: string;
    lastName: string;
}

export class UserEntity implements IUserEntity {
    constructor(
        public id: number,
        public FirstName: string,
        public lastName: string
    ) {}
}