//funcs to handle awkwardness autofilling checkin/checkout times in EditLocationForm

export const timeConverter = (time) => {
    let hours = time.split(':')[0];
    if (+hours > 12) {
        hours = `${((+hours + 11) % 12 + 1)}PM`;
    }
    else {
        hours = `${((+hours + 11) % 12 + 1)}AM`;
    }
    return hours;
}



export const checkinToTime = (time) => {
    if (time.split(' ')[1].includes('AM')) {

        let hour = parseInt(time.split(' ')[1].split("A")[0]);
        console.log(hour)
        if (hour === 12) { return `0${hour - 12}` }
        else if (hour < 10) {
            return `0${hour}`
        }
        else { return hour }

    } else if (time.split(' ')[1].includes('PM')) {

        let hour = parseInt(time.split(' ')[1].split("P")[0]);
        if (hour !== 12) {

            return `${hour + 12}`
        }
        else if (hour == 12) {
            return hour
        }

        return time.split(' ')[1].includes('AM')
    }
}
// console.log(checkinToTime('After 7AM'))
// console.log(checkinToTime('Before 1PM'))
