import moment from 'moment';

let seedDate = moment().day('Sunday');
let gitCalendar = [];
let momentCount = 0;
let weekCount = 0;

for(weekCount; weekCount < 52 ; weekCount++){
  let weekObj = {week: weekCount,
                  dates: []};
  for(let i = 0; i < 7; i++, momentCount++){
    let tempDate = {};
    tempDate[i] = seedDate.clone().add(momentCount, 'd').format('dddd, MMMM Do YYYY'); //the calculated date
    tempDate['status'] = false;
    weekObj.dates.push(tempDate);
  }
  gitCalendar.push(weekObj);
};

export default gitCalendar;


/*
let example = [{
      week: 0
      dates: [{
        '0': 'Sunday, June 3rd 2018',
        status: false
      }];

*/