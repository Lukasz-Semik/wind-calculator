class WindCalculator {
  constructor(wind, unit='mps') {
    const METER_TO_KNOTS = 0.514444;
    const METER_TO_KM = 3.6;
    const BFT_APROXIMATIONS = [0.1, 0.85, 3.15, 4.35, 6.65, 9.3, 12.25, 15.45, 18.9, 22.55, 26.4, 61.11, 65];
    this.mps = this.convertToMps(wind, unit, METER_TO_KNOTS, METER_TO_KM, BFT_APROXIMATIONS);
    this.knots = Number.parseFloat((this.mps / METER_TO_KNOTS).toFixed(2));
    this.kmh = Number.parseFloat((wind / METER_TO_KM).toFixed(2));
    this.bft = this.convertMpsToBft();
  }

  convertToMps(wind, unit, meterToKnots, meterToKm, BftAproximations) {
    if(unit === 'mps') return wind;

    switch(unit) {
      case 'bft':
        return this.BftToMeter(wind, BftAproximations);
      case 'knt':
        return Number.parseFloat((wind * meterToKnots).toFixed(2))
      case 'kmh':
        return Number.parseFloat((wind / meterToKm).toFixed(2));
      default:
        return wind;
    }
  }

  convertMpsToBft(){
    const meterPerSecond = this.mps;
    if(meterPerSecond<0.2){
      return 0;
    }else if(meterPerSecond > 0.2 && meterPerSecond <=1.5){
      return 1;
    }else if(meterPerSecond > 1.5 && meterPerSecond<=3.3){
      return 2;
    }else if(meterPerSecond>3.3 && meterPerSecond<=5.4){
      return 3;
    }else if(meterPerSecond>5.4 && meterPerSecond<=7.9){
      return 4;
    }else if(meterPerSecond>7.9 && meterPerSecond<=10.7){
      return 5;
    }else if(meterPerSecond>10.7 && meterPerSecond<=13.8){
      return 6;
    }else if(meterPerSecond>13.8 && meterPerSecond<=17.1){
      return 7;
    }else if(meterPerSecond>17.1 && meterPerSecond<=20.7){
      return 8;
    }else if(meterPerSecond>20.7 && meterPerSecond<=24.4){
      return 9;
    }else if(meterPerSecond>24.4 && meterPerSecond<=28.4){
      return 10;
    }else if(meterPerSecond>28.5 && meterPerSecond<=32.6){
      return 11;
    }else{
      return 12;
    }
  }

  BftToMeter(wind, BftAproximations) {
    console.warn('Beufort is an interval, result is an aproximation. Please, use another unit');
    return BftAproximations[wind];
  }
}

function calculateWind(wind, unit) {
  return new WindCalculator(wind, unit);
}

export default calculateWind;
