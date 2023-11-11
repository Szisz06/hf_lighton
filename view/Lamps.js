class Lamps {
  constructor(controller) {
    this.controller = controller;
  }

  turn() {
    this.controller.createLampElements(9);
  }

  init() {
    const playground = document.querySelector(".playground");
    this.controller.getLampElements().forEach((lampElement) => {
      const lamp = lampElement.turn();
      playground.appendChild(lamp);
      lampElement.setColor();
    });
  }
}

export default Lamps;
