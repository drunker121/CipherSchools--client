import React from 'react';
import './Heatmap.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
// import { getUserProfile as UserProfile } from "../data/getUserProfile";

const today = new Date();
// let submissionCalendar = UserProfile.data.matchedUser.submissionCalendar;

// let submissionCalendarObject = JSON.parse(submissionCalendar);

// const ordered = Object.keys(submissionCalendarObject)
//   .sort()
//   .reduce((obj, key) => {
//     obj[key] = submissionCalendarObject[key];
//     return obj;
//   }, {});

// const o = Object.keys(ordered).reduce((obj, key) => {
//     let dateObject = new Date(key * 1000);
//     let humanDateFormat = dateObject.toLocaleString().slice(0, 10);
//   //   console.log(humanDateFormat);
//     // console.log(obj);
//     return obj;
//   }, {});


// let arr = [];
// arr.push(ordered);

const Heatmap = () => {

  return (
    <>
        <div>
        <CalendarHeatmap
        // startDate={shiftDate(today, -365)}
        endDate={today}
        values={[
          { date: "2021/01/01", count: 1 },
          { date: "2021/01/03", count: 4 },
          { date: "2021/01/06", count: 2 }
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `${value.count}` < 5
            ? `color-github-${value.count}`
            : `color-github-5`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.count} submissions on ${value.date}`
          };
        }}
        showWeekdayLabels={false}
        />

        <ReactTooltip/>
        </div>
    </>
  )
}

export default Heatmap