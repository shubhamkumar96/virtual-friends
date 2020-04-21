import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import Button from '../components/Button';
// import InputBar from '../components/InputBar';
import 'tachyons';
import './App.css';


class App extends Component{
    constructor(){
        super();
        this.state = {
            avatars: [],
            searchfield: '',
            count: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        // fetch('https://uinames.com/api/?region=india&amount=25&gender=male&ext') --> This link is not working anymore.
        .then(response => response.json())
        .then(users => this.setState({avatars: users}));
    }

    onSearchChange = (event) => {       
        this.setState({searchfield: event.target.value})
    }

    onCountChange = (event) => {       
        this.setState({count: event.target.value})
    }

    onButtonSubmit = (event) => {       
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {avatars, searchfield} = this.state;
        const filterAvatars = avatars.filter( avatar => {
            return (avatar.name + " " + avatar.surname).toLowerCase().includes(searchfield.toLowerCase());
        })

        if(!avatars.length)
            return <h1>Loading</h1>
        else{
            return(
                <div className='tc'>
                    <h1 className='f2'>Virtual Friends</h1>
                    {/* <InputBar onButtonSubmit={this.onButtonSubmit} onCountChange={this.onCountChange}/> */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList avatars = {filterAvatars}/>
                        </ErrorBoundry>                       
                    </Scroll> 
                </div>    
            );
        }        
    }   
}

export default App;
