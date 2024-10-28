export class UserBase {

    namn: string
    surname: string
    age: number
    personalCode: string
    phone: string
    address: string


    constructor(namn: string, surname: string, age: number, personalCode: string, phone: string, address: string) {
        this.namn = namn;
        this.surname = surname;
        this.age = age;
        this.personalCode = personalCode;
        this.phone = phone;
        this.address = address;
    }
}