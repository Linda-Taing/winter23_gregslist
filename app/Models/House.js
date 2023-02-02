import { HousesController } from "../Controllers/HousesController.js"
import { generateId } from "../Utils/generateId.js"
import { Pop } from "../Utils/Pop.js"

export class House {

    constructor(data) {
        this.id = data.id
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }


    get housesCardTemplate() {
        return /*html*/`
    <div class="col-md-4 my-3">
    <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
      <img
        src="${this.imgUrl}"
        alt="${this.name}" class="rounded">
      <p><b>${this.name} ${this.sqft} - $${this.price}</b></p>
    </div>
  </div>
    `
    }
    static HouseForm() {
        return `
 
    <form onsubmit="app.housesController.handleFormSubmit()">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="make" required minlength="3" maxlength="20">
          <label id="1234" for="Neighborhood">Neighborhood</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="model" required>
          <label for="Year-built">Year-Built</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="year" required min="0" max="9999">
          <label for="Bedrooms">Number of Bedrooms</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="price" required min="0">
          <label for="price">Price</label>
        </div>

        <div class="form-floating mb-3">
          <input type="url" class="form-control" name="imgUrl">
          <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
          <label for="description">Description</label>
        </div>

        <div class="d-flex my-4 gap-5 align-items-center">
          <button class="btn" type="reset">Cancel</button>
          <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>

      </form>
    `
    }

}
