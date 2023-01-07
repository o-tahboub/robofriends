import React,{ Component } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchText:''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({'robots': users})
        })
    }

    onSearchChange = (event) => {
        this.setState({'searchText': event.target.value})
    }

    render() {
        const {searchText, robots} = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase())
        });

        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;