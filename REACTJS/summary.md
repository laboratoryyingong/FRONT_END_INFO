# Five key decisions to make up front

- Dev environment
- ES class or createClass
- Types
 May use flow to check the type, I could try it on.
- State
 your app's data
- Styling

# Why use react

 Good to build user interfaces, React is declarative.virtual browser is more friendly. Virtual DOM. Allow developers to declaratively describe stateful user interfaces.

# React basic concept

- components
 like functions, the input is props and state | the output is UI, the components are reusable and composable. It can mange a private state

- Reactive updates

- Virtual views in memory
 Generate HTML using Javascript; No HTML template language; Tree reconciliation

- React component can be function component; both of them can be stateful and have side effects or they can purely presentational.

 *props are immutable*
 *components can only change their internal state*
 always name your components with upper case first letter

- React Hook

 ```javascript
    function Button(){
        const [counter, setCounter] = useState(0);
        const handleClick = () => setCounter(counter+1);
        return (<button onClick={handleClick}>
                    {counter}
                </button>);
    }
 ```