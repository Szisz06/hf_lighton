class LampModel {
  constructor(controller) {
    this.controller = controller;
    this.latestRow = "";
  }

  updateList() {
    if (this.controller) {
      const lampElements = this.controller.getLampElements();
      this.latestRow = "";

      lampElements.forEach((lampElement) => {
        if (lampElement && lampElement.lamp) {
          const colorCode =
            lampElement.lamp.style.backgroundColor === "green" ? "G" : "R";
          this.latestRow += `${lampElement.lampNumber}${colorCode} `;
        }
      });

      console.log("Updated Lamp List:", this.latestRow.trim());
    } else {
      console.error("Controller is not defined");
    }
  }
}

export default LampModel;
