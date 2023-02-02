import { Pop } from "../Utils/Pop.js"
import { appState } from "../AppState.js"
import { setText } from "../Utils/Writer.js"
import { setHTML } from "../Utils/Writer.js"
import { housesService } from "../Services/HousesService.js"
import { House } from "../Models/House.js"

function _drawHouses() {

}
function _drawHouse() {

}


export class HousesController {


  constructor() {
    this.show()
    console.log('Hello this is the houses Controller')
    appState.on('houses', _drawHouses)
    appState.on('house', _drawHouse)
  }

  show() {
    console.log('Check House Button')
    setText('add-listing-button', '🏡 A new Home?')
    setText('listingFormLabel', '🏡Home Sweet Home🏡')

    setHTML('the-actual-form', House.HouseForm())

    _drawHouses()
  }
  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      housesService.createHouse(formData)

      console.log(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }
}
_drawHouses()