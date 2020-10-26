export interface IUserEntity {
    id: number;
    FirstName: string;
    lastName: string;
}

export class UserEntity implements IUserEntity {
    id: number;
    FirstName: string;
    lastName: string;

    constructor(id: number, FirstName: string, lastName: string) {
        this.id = id;
        this.FirstName = FirstName;
        this.lastName = lastName;
    }
}