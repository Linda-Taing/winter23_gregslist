import { appState } from "../AppState.js"















class HousesService {
    createHouse(formData) {
        let house = new house(formData)
        appState.houses.push(house)
        appState.emit('houses')
    }
}

// singleton pattern more on this later
export const housesService = new HousesService()