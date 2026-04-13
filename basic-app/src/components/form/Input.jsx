

export default function ({ item, value, handleChange, inputRef }) {
    const { type, name } = item;
    return(
        <input type={type} id={name} name={name} value={value}
                onChange={(e) => { handleChange(e) }} ref={inputRef}/>
    )
}