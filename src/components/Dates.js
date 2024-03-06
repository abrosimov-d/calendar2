export default class Dates {

	static addDays(date, days) {
		let result = new Date(date);
		result.setDate(result.getDate() + days)
		return result;
	}

    static fromString(s) {
        let result = null;
        if (s) {
            let parts = s.split('.');
            //01.05.2024
            result = new Date(parseInt(parts[2], 10), 
            parseInt(parts[1] - 1, 10), 
            parseInt(parts[0], 10));
        }
        return result;
    }

    static compareDates(date1, date2) {
        return (date1.getDate() == date2.getDate() &&
            date1.getMonth() == date2.getMonth() &&
            date1.getYear() == date2.getYear());
    }

    static inRange(date, startDate, range) {
        let endDate = Dates.addDays(startDate, range);
        let result = (date.valueOf() >= startDate.valueOf()) && (date.valueOf() < endDate.valueOf())
        return result;
    }
}

export {Dates}