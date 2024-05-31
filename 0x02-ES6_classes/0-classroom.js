// Define and export the ClassRoom class
export default class ClassRoom {
  // Private field for maximum students size
  #maxStudentsSize;

  // Constructor to initialize the maximum students size
  constructor(maxStudentsSize) {
    this.#maxStudentsSize = maxStudentsSize;
  }

  // Getter method for the maximum students size
  getMaxStudentsSize() {
    return this.#maxStudentsSize;
  }
}

