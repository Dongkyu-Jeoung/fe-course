import Button from "./components/button/Button.jsx"

export default function App() {

    const styleObj = {
        w : "150px",
        h : "80px",
        bg : "#777",
        color : "white",
    }
    const stylesObj2 = {
        w : "100px",
        h : "50px",
        bg : "black",
        color : "white",
    }

    return (
        <>
            <Button type="button" name="버튼1" styles={styleObj}/>
            <Button type="submit" name="버튼2" styles={stylesObj2}/>
        </>
    )
}