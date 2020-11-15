export class WindDirections {
  constructor(public degreeDirection: number) {}

  get direction(): string {
    if (this.degreeDirection > 11.25 && this.degreeDirection <= 33.75) {
      return "NNE";
    } else if (this.degreeDirection > 33.75 && this.degreeDirection <= 56.25) {
      return "ENE";
    } else if (this.degreeDirection > 56.25 && this.degreeDirection <= 78.75) {
      return "E";
    } else if (this.degreeDirection > 78.75 && this.degreeDirection <= 101.25) {
      return "ESE";
    } else if (
      this.degreeDirection > 101.25 &&
      this.degreeDirection <= 123.75
    ) {
      return "ESE";
    } else if (
      this.degreeDirection > 123.75 &&
      this.degreeDirection <= 146.25
    ) {
      return "SE";
    } else if (
      this.degreeDirection > 146.25 &&
      this.degreeDirection <= 168.75
    ) {
      return "SSE";
    } else if (
      this.degreeDirection > 168.75 &&
      this.degreeDirection <= 191.25
    ) {
      return "S";
    } else if (
      this.degreeDirection > 191.25 &&
      this.degreeDirection <= 213.75
    ) {
      return "SSW";
    } else if (
      this.degreeDirection > 213.75 &&
      this.degreeDirection <= 236.25
    ) {
      return "SW";
    } else if (
      this.degreeDirection > 236.25 &&
      this.degreeDirection <= 258.75
    ) {
      return "WSW";
    } else if (
      this.degreeDirection > 258.75 &&
      this.degreeDirection <= 281.25
    ) {
      return "W";
    } else if (
      this.degreeDirection > 281.25 &&
      this.degreeDirection <= 303.75
    ) {
      return "WNW";
    } else if (
      this.degreeDirection > 303.75 &&
      this.degreeDirection <= 326.25
    ) {
      return "NW";
    } else if (
      this.degreeDirection > 326.25 &&
      this.degreeDirection <= 348.75
    ) {
      return "NNW";
    } else {
      return "N";
    }
  }
}
