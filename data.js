// This is the place to add additional events
var readable_data = [
  { eventName: 'Settling in', color: 'orange', start_date: "2022-06-14", end_date: "2022-09-30"},
  { start_date: "2022-09-09", end_date: "2022-09-12"},
  { start_date: "2022-09-29", end_date: "2022-10-03"},
  { start_date: "2022-10-06", end_date: "2022-10-12"},
  { start_date: "2022-10-20", end_date: "2022-10-25"},
  { start_date: "2022-11-23", end_date: "2022-12-06"},
  { start_date: "2022-12-23", end_date: "2023-01-17"},
  { start_date: "2023-02-03", end_date: "2023-02-06"},
  { start_date: "2023-02-16", end_date: "2023-02-21"},
  { start_date: "2023-02-24", end_date: "2023-02-27"},
  { start_date: "2023-03-16", end_date: "2023-03-21"},
  { start_date: "2023-03-28", end_date: "2023-04-01"},
  { start_date: "2023-04-06", end_date: "2023-04-11"},
  { start_date: "2023-04-27", end_date: "2023-05-03"},
  { start_date: "2023-05-13", end_date: "2023-05-30"},
  { start_date: "2023-06-16", end_date: "2023-07-06"},
  { start_date: "2023-07-19", end_date: "2023-07-24"},
  { start_date: "2023-08-03", end_date: "2023-08-07"},
  { start_date: "2023-08-23", end_date: "2023-08-29"},
  { start_date: "2023-09-07", end_date: "2023-11-30"},
  { start_date: "2023-12-03", end_date: "2023-12-13"},
  { start_date: "2024-01-18", end_date: "2024-01-22"},
  { start_date: "2024-02-02", end_date: "2024-02-14"},
  { start_date: "2024-02-28", end_date: "2024-03-03"},
  { start_date: "2024-03-09", end_date: "2024-03-14"},
  { start_date: "2024-04-15", end_date: "2024-04-25"},
  { start_date: "2024-04-25", end_date: "2024-05-11"},
  { eventName: 'Leave NYC', color: 'orange', start_date: "2024-05-11", end_date: "2025-12-31"},
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
