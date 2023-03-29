export type CalculateResultType = {
    usagePremium: number
    usageEconomy: number
    premiumCost: number
    economyCost: number
}

export const calculate = (arr: number[], economyRoom: number, premiumRoom: number): CalculateResultType => {
    let economy: number[] = []
    let premium: number[] = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 100) {
            economy.push(arr[i])
        } else {
            premium.push(arr[i])
        }
    }

    economy = economy.sort((a, b) => a - b)
    premium = premium.sort((a, b) => a - b)

    let premiumAvailable = 0
    debugger
    if (premium.length > premiumRoom) {
        const end = premium.length - premiumRoom
        premium.splice(0, end)
    } else {
        premiumAvailable = premiumRoom - premium.length
    }

    if (premiumAvailable && economy.length >= economyRoom) {
        premium.push(...economy.splice(economy.length - premiumAvailable))
    }

    if (economy.length > economyRoom) {
        const end = economy.length - economyRoom
        economy.splice(0, end)
    }

    return {
        usagePremium: premium.length,
        usageEconomy: economy.length,
        premiumCost: premium.reduce((acc, next) => acc + next, 0),
        economyCost: economy.reduce((acc, next) => acc + next, 0),
    }

}