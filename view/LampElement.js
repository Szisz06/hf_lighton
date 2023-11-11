class LampElement {
  constructor(lampModel, lampNumber) {
    this.lampModel = lampModel;
    this.lampNumber = lampNumber;
    this.lamp = null;
  }

  turn() {
    this.lamp = document.createElement("div");
    this.lamp.classList.add("lamp");
    const randomColor = Math.random() < 0.5 ? "green" : "red";
    this.lamp.style.backgroundColor = randomColor;
    this.lamp.addEventListener("click", this.setColor.bind(this));
    return this.lamp;
  }

  setColor() {
    if (this.lamp.style.backgroundColor === "green") {
      this.lamp.style.backgroundColor = "red";
    } else {
      this.lamp.style.backgroundColor = "green";
    }
    this.lampModel.updateList();
  }
}

export default LampElement;
