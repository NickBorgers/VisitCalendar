// Thank you kiwicopple
// https://stackoverflow.com/a/57567327/2700751
/**
 * @param {date|moment} start The start date
 * @param {date|moment} end The end date
 * @param {string} type The range type. eg: 'days', 'hours' etc
 */
function getRange(startDate, endDate, type) {
  let fromDate = moment(startDate)
  let toDate = moment(endDate)
  let diff = toDate.diff(fromDate, type)
  let range = []
  for (let i = 0; i < diff; i++) {
	range.push(moment(startDate).add(i, type))
  }
  return range
}

function generateRenderData(readableData) {
  var renderable_data = [];
  readableData.forEach(function(event){
	if (!('eventName' in event)) {
		event.eventName = 'Busy'
	}
	if (!('color' in event)) {
		event.color = 'blue'
	}
	days_in_event= getRange(event.start_date, event.end_date, 'days');
	days_in_event.forEach(function(date){
	  renderable_data.push({eventName: event.eventName, calendar: "event", color: event.color, date: date});
	});
  });
  
  return renderable_data
}