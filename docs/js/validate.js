function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var longitude = document.querySelector("#longitude").value;
  var latitude = document.querySelector("#latitude").value;
  var longitude_isValid = false;
  var latitude_isValid = false;

  //show erroe text for latitude
  if(!isNaN(latitude) && parseInt(latitude) >= -90 && parseInt(latitude) <= 90)
  {
	 document.querySelector("#error_latitude").style.display = "none";
	 latitude_isValid = true;
  }
  
  else 
  {
	 document.querySelector("#error_latitude").style.display = "inline-block";
  }

  //show erroe text for longitude
  if(!isNaN(longitude) && parseInt(longitude) >= -180 && parseInt(longitude) <= 180)
  {
	 document.querySelector("#error_longitude").style.display = "none";
	 longitude_isValid = true;
  }
  
  else 
  {
	 document.querySelector("#error_longitude").style.display = "inline-block";
  }
  
 //If any input is incorrect, stop the submission process
 if(!latitude_isValid || !longitude_isValid)
 {
    event.preventDefault();
 } 
  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
