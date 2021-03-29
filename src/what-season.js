const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {    
	let dateCheck = new Date(date);
    if (!dateCheck) { 
    	return 'Unable to determine the time of year!';
    }	
    try {
      dateCheck.getTime();
    } catch(e) {
      throw new Error(e);
    }

  let month = date.getMonth()
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    default:
      return 'fall';
  }
};

