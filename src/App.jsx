import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
    const helloMessage = 'Hello, World!';

    return (
        <fieldset>
            <ComponentA message={"Welcome"} />
            <ComponentB message={helloMessage} />
            <ComponentC message={helloMessage} />
        </fieldset>
    )
}

export default App
