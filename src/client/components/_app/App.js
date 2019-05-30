/**
 * *********************
 * 
 * @module App
 * @author the3ddy
 * @date 5/28/2019
 * @description Main App component
 * 
 * *********************
 */

// dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import Show from '../show/Show';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import Filter from '../filter/Filter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: {
                arr: ['example1'],
                str: 'example2',
                obj: { key: 'example3' },
                int: 0,
                boolean: true
            },
            people: []
        }
    }

    componentDidMount() {
        // sends ajax request to grab people data
        fetch('/people')
            .then(data => data.json())
            .then(people => {
                this.setState(prevState => {
                    return ({ people: people })
                })
            })
    }

    render() {
        // destructuring
        const { people } = this.state;
        const { arr, str, obj, int, boolean } = this.state.sample;

        /**
         * displays navigation and routed components
         */
        return (
            <BrowserRouter>
                <Show
                    arr={arr}
                    str={str}
                    obj={obj}
                    int={int}
                    boolean={boolean}
                />
                <Header />
                <Switch>
                    <Route 
                        path="/" exact
                        render={props => <Pagination {...props} people={people} />}
                    />
                    <Route path="/infinitescroll" exact
                        render={props => <InfiniteScroll {...props} people={people} />} 
                    />
                    <Route path="/filter" component={Filter} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;