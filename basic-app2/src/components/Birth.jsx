

export default function Birth (props) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const years = [];
    const months = [];
    const days = [];

    for (let i=currentYear ; i>1940 ; i--) {
        years.push(i);
    }
    for (let i=1 ; i < 13 ; i++) months.push(i);
    for (let i=1 ; i < 32 ; i++) days.push(i);

    return (
        <li>
            <label>{props.title}</label>
            <div>
                <select name={props.name1}>
                    <option value="default">년</option>
                    { years.map(year => 
                        <option key={year} value={year}>{year}</option>)}
                </select>
                <select name={props.name2}>
                    <option value="default">월</option>
                    {months.map(month =>
                        <option key={month} value={month}>{month}</option>)}
                </select>
                <select name={props.name3}>
                    <option value="default">일</option>
                    {days.map(day =>
                        <option key={day} value={day}>{day}</option>)}
                </select>
            </div>
        </li>
    )
}