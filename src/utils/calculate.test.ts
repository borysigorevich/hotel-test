import {calculate} from "./calculate";

const mockClientDate = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209]

describe('Smart Host Coding Challenge', () => {
    test('3 Economy and 3 Premium rooms', () => {
        expect(calculate(mockClientDate, 3, 3)).toStrictEqual({
            usagePremium: 3,
            usageEconomy: 3,
            premiumCost: 738,
            economyCost: 167
        })
    })

    test('5 Economy and 7 Premium rooms', () => {
        expect(calculate(mockClientDate, 5, 7)).toStrictEqual({
            usagePremium: 6,
            usageEconomy: 4,
            premiumCost: 1054,
            economyCost: 189
        })
    })

    test('7 Economy and 2 Premium rooms', () => {
        expect(calculate(mockClientDate, 7, 2)).toStrictEqual({
            usagePremium: 2,
            usageEconomy: 4,
            premiumCost: 583,
            economyCost: 189
        })
    })

    test('1 Economy and 7 Premium rooms', () => {
        expect(calculate(mockClientDate, 1, 7)).toStrictEqual({
            usagePremium: 7,
            usageEconomy: 1,
            premiumCost: 1153,
            economyCost: 45
        })
    })
})