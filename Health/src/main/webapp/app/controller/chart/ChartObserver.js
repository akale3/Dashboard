'use strict';
class ChartObserver {

  constructor() {
    if (this.constructor === ChartObserver) {
      throw new TypeError("Can not construct abstract class.");
    }

    if (this.generateChart === ChartObserver.prototype.generateChart) {
      throw new TypeError("Please implement abstract method foo.");
    }
  }
  // An abstract method.
  generateChart() {
    throw new TypeError("Do not call abstract method generateChart from child.");
  }
}
