/*
* Abstract
* @class Building
*/
export default class Building {
  constructor(sqft = 0) {
    if (this.constructor !== Building
      && typeof this.evacuationwarningMessage !== 'function') {
      throw new Error('Class extending Buidling must overrride evacuationwarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
