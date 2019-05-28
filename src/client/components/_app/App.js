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
// components
import Show from '../show/Show';

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
            }
        }
    }

    render() {
        const { arr, str, obj, int, boolean } = this.state.sample;
        return (
            <div>
                <Show
                    arr={arr}
                    str={str}
                    obj={obj}
                    int={int}
                    boolean={boolean}
                />
            </div>
        )
    }
}

export default App;