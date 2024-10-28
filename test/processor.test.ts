import {User} from "../src/User";
import {Processor} from "../src/Processor";

describe('Tests for Processor', () => {

let user: User
let processor: Processor

beforeEach((): void => {
    processor = new Processor()
    user = new User('Andrei', 'Kuzmin', '5354100', 'Narva', 18)
})

test('check if new user is undefined', (): void => {
    expect(user.consentGiven).toBeUndefined()
    //console.log(user.consentGiven)
})

test('check if processor gives consent to the user', (): void => {
    processor.giveConsent(user)
    expect(user.consentGiven).toBe(true)
    //console.log(user.consentGiven)
})

test('verify if user has given his consent', (): void => {
    processor.giveConsent(user)
    expect(processor.verifyConsent(user)).toBeTruthy()
    //console.log(user.consentGiven)
})

test('check that consent is not approved  when user has not given consent', (): void => {
    expect(processor.verifyConsent(user)).toBeFalsy()
    //console.log(user.consentGiven)
})

// new tests homework 6
// ====================

describe('when users aged under 18', () => {
    beforeEach((): void => {
        user = new User('Andrei', 'Kuzmin', '5354100', 'Narva', 17)
        processor = new Processor()
    })

    test('user under 18 is not able to give consent', (): void => {
        expect(processor.isConsentGiven(user)).toBe(false)
        //console.log(user.consentGiven)
    })

    test('Second method - user under 18 is not able to give consent', (): void => {
        expect(processor.consentGiven(user)).toBe(false)
        //console.log(user.consentGiven)
    })

})

describe('when users aged 18 or over', () => {
    beforeEach((): void => {
        processor = new Processor()
        user = new User('Andrei', 'Kuzmin', '5354100', 'Narva', 18)
    })

    test('when aged 18 or over, user is able to give consent', (): void => {
        expect(processor.isConsentGiven(user)).toBe(true)
        //console.log(user.consentGiven)
    })

    test('revoke consent method works correctly', (): void => {
        processor.giveConsent(user)
        processor.revokeConsent(user)
        expect(user.consentGiven).toBe(false)
        //console.log(user.consentGiven)
    })
})

})