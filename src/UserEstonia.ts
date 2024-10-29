import {UserBase} from "./UserBase";

export class UserEstonia extends UserBase {

    mobileIdAuthorization: undefined | boolean

    constructor(namn: string, surname: string, age: number, personalCode: string, phone: string, address: string) {
        super(namn, surname, age, personalCode, phone, address);
        this.mobileIdAuthorization = undefined;
    }
}