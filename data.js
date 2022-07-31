// This is the place to add additional events
var readable_data = [
  { eventName: 'Settling in', color: 'orange', start_date: "2022-06-14", end_date: "2022-08-11"},
  { start_date: "2022-09-09", end_date: "2022-09-12"},
  { start_date: "2022-10-06", end_date: "2022-10-12"},
  { start_date: "2022-10-21", end_date: "2022-10-25"},
  // Add your new event here
]


// Tests for data
readable_data.forEach(function(event){
  if (!('start_date' in event)) {
	errorMsg = "start_date is required"
	console.error(errorMsg)
	throw errorMsg
  }
  if (!('end_date' in event)) {
	errorMsg = "end_date is required"
	console.error(errorMsg)
	throw errorMsg
  }
  
  regex = new RegExp('202[2-5]-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])');
  if (!regex.test(event.start_date)) {
	errorMsg = "start_date " + event.start_date + " is invalid, must be YYYY-MM-DD"
	console.error(errorMsg)
	throw errorMsg
  }
  if (!regex.test(event.end_date)) {
	errorMsg = "end_date " + event.end_date + " is invalid, must be YYYY-MM-DD"
	console.error(errorMsg)  
	throw errorMsg
  }
});