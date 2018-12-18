import * as React from 'react';
import { Route } from 'react-router-dom';

// todo to remove
const test = () => <div>home</div>;

const Viewport = () => {
    return (
        <div className="viewport">
            <Route path="/" component={test} />
        </div>
    );
};

export default Viewport;
