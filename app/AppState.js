import { House } from "./Models/House.js"
import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      id: 1234,
      year: 1974,
      name: 'Mid - Century Modern Single Family Home',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid - century modern home',
      imgUrl: 'https://thiscatdoesnotexist.com'
    }),
    new House({
      id: 1204,
      year: 1974,
      name: 'Home',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid - century modern home',
      imgUrl: 'https://thiscatdoesnotexist.com'
    })]

  /** @type {import('./Models/House').House} */
  activeHouse = null

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car} */
  car = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
