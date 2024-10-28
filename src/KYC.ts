import {UserEstonia} from "./UserEstonia";
import {UserLatvia} from "./UserLatvia";

export class KYC {
    activateMobileIDForEstonia(user: UserEstonia) {
        if (user.age < 16) {
            throw new Error('User is too young')
        } else {
            user.mobileIdAuthorization = true
        }
    }

    activateEParakstsForLatvia(user: UserLatvia) {
        if (user.age < 18) {
            throw new Error('User is too young')
        } else {
            user.activateEParakstsForLatvia = true
        }
    }
}