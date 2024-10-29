import {UserEstonia} from "../src/UserEstonia";
import {UserLatvia} from "../src/UserLatvia";
import {Contract} from "../src/Contract";

let userEstonia: UserEstonia
let userLatvia: UserLatvia
let contract: Contract

describe('Tests for class Contract for user Estonia and Latvia', () => {

    beforeEach(() => {
        contract = new Contract('Contract with MIT', false)
    })

    describe('Tests for Estonia', () => {

        beforeEach(() => {
            userEstonia = new UserEstonia('Andrei', 'Kuzmin', 15, '1234', '5354100', 'Narva')
        })

        test('Contract cannot be signed if Mobile Authorization is not activated', () => {
            contract.signForUserEstonia(userEstonia)
            expect(userEstonia.mobileIdAuthorization).toBe(false)
            //console.log(userEstonia.mobileIdAuthorization)
        })

        test('Contract can be signed if Mobile Authorization is activated', () => {
            userEstonia.age = 16
            contract.signForUserEstonia(userEstonia)
            expect(userEstonia.mobileIdAuthorization).toBe(true)
            //console.log(userEstonia.mobileIdAuthorization)
        })
    })

    describe('Tests for Latvia', () => {

        beforeEach(() => {
            userLatvia = new UserLatvia('Andrei', 'Kuzmin', 17, '1234', '5354100', 'Narva')
        })

        test('Contract cannot be signed if Mobile Authorization is not activated', () => {
            contract.signForUserLatvia(userLatvia)
            expect(userLatvia.activateEParakstsForLatvia).toBe(false)
            //console.log(userLatvia.activateEParakstsForLatvia)
        })

        test('Contract can be signed if Mobile Authorization is activated', () => {
            userLatvia.age = 18
            contract.signForUserLatvia(userLatvia)
            expect(userLatvia.activateEParakstsForLatvia).toBe(true)
            //console.log(userLatvia.activateEParakstsForLatvia)
        })
    })
})