import { addLog } from "./commands"

//Class containing all the assertions methods that can be used in multiple places
//These methods are defined in this class in order not to define them multiple times
class Assertion {

    toHaveTextContaining(actual: string, expected: string) {
        expect(actual).toHaveTextContaining(expected)
        addLog(`Assertion >> ${actual} to contain ${expected}`)
    }

    toContain(actual: string, expected: string) {
        expect(actual).toContain(expected)
        addLog(`Assertion >> ${actual} to contain ${expected}`)
    }
}

export default new Assertion()