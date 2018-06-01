import moment from 'moment';

let seedDate = moment().day('Sunday');
let gitCalendar = [];
let momentCount = 0;
let weekCount = 0;

for(weekCount; weekCount < 52 ; weekCount++){
  let weekObj = {week: weekCount,
                  dates: []};
  for(let i = 0; i < 7; i++, momentCount++){
    let tempDate = seedDate.clone();
    weekObj.dates.push(tempDate.add(momentCount, 'd').format('dddd, MMMM Do YYYY'));
  }
  gitCalendar.push(weekObj);
};

export default gitCalendar;
