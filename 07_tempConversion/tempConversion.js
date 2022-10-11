const ftoc = function(degFar) {
  let degCel = ((degFar-32)*(5/9));
  return (Math.round(degCel * 10) / 10);
}

const ctof = function(degCel) {
  let degFar = ((degCel*1.8)+32);
  return (Math.round(degFar * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
