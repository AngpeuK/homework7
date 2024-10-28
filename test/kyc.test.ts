import {UserEstonia} from "../src/UserEstonia";
import {KYC} from "../src/KYC";
import {UserLatvia} from "../src/UserLatvia";


describe('Tests for Estonia', () => {
    let user: UserEstonia
    let kyc: KYC

    beforeEach(() => {
        user = new UserEstonia('Andrei', 'Kuzmin', 17, '1234', '5354100', 'Narva')
        kyc = new KYC()
    })
    test('Verify if new mobileIdAuthorization field for user from Estonia is undefined', () => {
        expect(user.mobileIdAuthorization).toBeUndefined()
        console.log(user.mobileIdAuthorization)
    })

    test('Verify that activateMobileIDForEstonia method activates field mobileIdAuthorization when age for user is eligible', () => {
        kyc.activateMobileIDForEstonia(user)
        expect(user.mobileIdAuthorization).toBe(true)
        console.log(user.mobileIdAuthorization)
    })

    test('Attempt to activate Mobile ID for user with not eligible age ends up with thrown error "User is too young"', () => {
        user.age = 14
        //kyc.activateMobileIDForEstonia(user)
        expect(() => {
            kyc.activateMobileIDForEstonia(user)
        }).toThrowError('User is too young')
        console.log(user.mobileIdAuthorization)
    })

})

describe('Tests for Latvia', () => {
    let user: UserLatvia
    let kyc: KYC

    beforeEach(() => {
        user = new UserLatvia('Andrei', 'Kuzmin', 18, '1234', '5354100', 'Narva')
        kyc = new KYC()

    })
    test('Verify if new mobileIdAuthorization field for user from Estonia is undefined', () => {
        expect(user.activateEParakstsForLatvia).toBeUndefined()
        console.log(user.activateEParakstsForLatvia)
    })

    test('Verify that activateMobileIDForEstonia method activates field mobileIdAuthorization when age for user is eligible', () => {
        kyc.activateEParakstsForLatvia(user)
        expect(user.activateEParakstsForLatvia).toBe(true)
        console.log(user.activateEParakstsForLatvia)
    })

    test('Attempt to activate Mobile ID for user with not eligible age ends up with thrown error "User is too young"', () => {
        user.age = 14
        //kyc.activateEParakstsForLatvia(user)
        expect(() => {
            kyc.activateEParakstsForLatvia(user)
        }).toThrowError('User is too young')
        console.log(user.activateEParakstsForLatvia)
    })

})