import Child from './Child.jsx';

function PropsComp() {
    return (
        <h1>PropsComponent!!</h1>
    )
}

export default function Parent(props) {
    return (
        <>
            <h1>Parent :: {props.name}</h1>
            <Child>
                <PropsComp/>
            </Child>
        </>
    )
}