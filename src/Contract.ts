import {UserEstonia} from "./UserEstonia";
import {UserLatvia} from "./UserLatvia";

export class Contract {
    title: string
    signed: boolean


    constructor(title: string, signed: boolean) {
        this.title = title;
        this.signed = signed;
    }

    isMobileIdActivated(user: UserEstonia): boolean {
        return user.age >= 16
    }

    isEParakstsActivated(user: UserLatvia): boolean {
        return user.age >= 18
    }

    signForUserEstonia(user: UserEstonia): boolean {
        return user.mobileIdAuthorization = this.isMobileIdActivated(user)
    }

    signForUserLatvia(user: UserLatvia): boolean {
        return user.activateEParakstsForLatvia = this.isEParakstsActivated(user)
    }
}
