class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];

    let verticalDist = Math.abs(
      this.beginningLocation.vertical - this.endingLocation.vertical
    );
    let horizontalDist = Math.abs(
      eastWest.indexOf(this.beginningLocation.horizontal) -
        eastWest.indexOf(this.endingLocation.horizontal)
    );
    return verticalDist + horizontalDist;
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
