import React, {Component} from 'react';


class App extends Component {
    state = {
        data: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=The+Winds+Of+Winter&format=json&origin=*";

        fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({
                    data: jsonResponse,
                })
            })
    }

    render() {
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        return <ul>{result}</ul>;
    }
}

export default App;
