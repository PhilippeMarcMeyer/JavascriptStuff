	/* found on the internet, authored*/
  
  var hexToRgb = function(hex){
		let hexString = hex.replace("#","");
		let r = parseInt(hexString.substring(0,2), 16);
		let g = parseInt(hexString.substring(2,4), 16);
		let b = parseInt(hexString.substring(4,6), 16);
		return {"r":r,"g":g,"b":b};
	}
	
	var rgbToHex = function (rgb) { 
	  let hex = Number(rgb).toString(16);
	  if (hex.length < 2) {
		   hex = "0" + hex;
	  }
	  return hex;
	};

	var fullColorHex = function(r,g,b) {   
	  let red = rgbToHex(r);
	  let green = rgbToHex(g);
	  let blue = rgbToHex(b);
	  return "#"+red+green+blue;
	};
