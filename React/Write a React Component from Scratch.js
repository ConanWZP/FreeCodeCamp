// Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

const app = document.getElementById('challenge-node')

ReactDOM.render(<MyComponent />, app)