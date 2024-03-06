import {Dates} from './Dates.js' //import {compareDates} from './Dates'

export default function Calendar(props) {

    function renderWeek(week) {
        let weekNumber = Math.floor((week[6].getDate() -1 ) / 7) + 1;
        let udClass = (weekNumber % 2 != props.odd)?'day-of':'';
        let russianMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',]
        let today7 = Dates.addDays(new Date(), -7);
        let today = new Date();
        let todayClass = '';
        let hiddenWeek = (week[0].valueOf() < today7.valueOf())?"week-hidden":""
        hiddenWeek = props.currentWeek?hiddenWeek:""
        return <div className={"week " + hiddenWeek} ><div className="week-number">{weekNumber}</div>{week.map(e => {
            let vacationFlag = false;
            todayClass = Dates.compareDates(today, e)?'today':'';
            props.vacations.forEach(vacation => {
                vacationFlag = vacationFlag || Dates.inRange(e, Dates.fromString(vacation.startDate), vacation.len);
            })
            return <div className={(e.className!='day-ud'?e.className:e.className + ' ' + udClass) + ' ' + todayClass + ' ' + (vacationFlag?'day-vac':'')}>{e.getDate()}</div>;
        })}
        {weekNumber==1?<div className="month-name">{russianMonths[week[6].getMonth()]}`{week[6].getYear()-100}</div>:''}
        </div>
    }

    function shift7(arr) {
        let result = [];
        for (let i = 0; i <= 6; i++)
            result.push(arr.shift());
        return result;
    }

    function render() {

        let result = [];
        let week = [];
        while (dates.length > 7) {
            week = shift7(dates);
            result.push(renderWeek(week));
        }
        return result;
    }

    let dates = [];
    let startDate = new Date(2024, 0, 1);
    startDate = Dates.addDays(startDate, -startDate.getDay()+1)
    for (let i = 0; i <= 400; i++) {
        let current = Dates.addDays(startDate, i);
        current.className = (((i + 0) % 4) == props.smena)?'day-ud':'day';
        dates.push(current);
    }

    return (
        <div className="calendar">
            <div className="calendar-form">
                <select onChange={props.onSmenaChange} className="calendar-select smena" value={'Смена ' + (props.smena+1)}>
                    <option>Смена 1</option>
                    <option>Смена 2</option>
                    <option>Смена 3</option>
                    <option>Смена 4</option>
                </select>
                <select onChange={props.onOddChange} className="calendar-select odd"
                    value={props.odd===0?'Четная':'Нечетная' + ' УД'}
                >
                    <option>Четная УД</option>
                    <option>Нечетная УД</option>
                </select>
                <div className="day-of">ОФ</div>
                <div className="day-ud">УД</div>
                <div className="day-vac">ОТ</div>
            </div>
            <div>
            </div>
            <label>
                <input className="current-week" onChange={props.onCurrentWeekChange} checked={props.currentWeek} type="checkbox"/>
               
                <span class="checkable">Текущая неделя</span>
            </label>
            {render()}
            </div>        
    )
}