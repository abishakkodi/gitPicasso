import moment from 'moment';

let seedDate = moment().day('Sunday');
let gitCalendar = [];
let momentCount = 0;
let weekCount = 1;

for(weekCount; weekCount < 53 ; weekCount++){
  let weekObj = {week: weekCount };
  for(let i = 1; i < 8; i++, momentCount++){
    let tempDate = seedDate.clone();
    weekObj[i] = tempDate.add(momentCount, 'd').format('dddd, MMMM Do YYYY');
  }
  gitCalendar.push(weekObj);
};

export default gitCalendar;
