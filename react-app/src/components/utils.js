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
