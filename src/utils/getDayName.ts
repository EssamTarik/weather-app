const getDayName = (date: Date) => date.toLocaleDateString('en-gb', { weekday: 'long' });
export default getDayName;