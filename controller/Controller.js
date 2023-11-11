import Lamps from "../view/Lamps.js";
import LampModel from "../model/LampModel.js";
import LampElement from "../view/LampElement.js";

class Controller {
  constructor() {
    this.lampModel = new LampModel(this);
    this.lamps = new Lamps(this);
    this.createLampElements(9);
    this.lamps.init();
  }

  updateLampList() {
    this.lampModel.updateList();
  }

  createLampElements(count) {
    this.lampElements = Array.from({ length: count }, (_, index) => {
      const lampElement = new LampElement(this.lampModel, index + 1);
      return lampElement;
    });
  }

  getLampElements() {
    return this.lampElements;
  }
}

export default Controller;
