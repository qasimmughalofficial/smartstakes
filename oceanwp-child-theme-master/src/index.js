import React from 'react';
import App from './app';
import './index.css';
import Widget from './Components/Widget';
import SpecificEvent from './Components/SpecificEvent';

// ReactDOM.render(<App />, document.getElementById('root'));
const { render } = wp.element; //we are using wp.element here!
// import App from './App';
if (document.getElementById('my-react-app')) { //check if element exists before rendering
    render(<App />, document.getElementById('my-react-app'));
}
// Single Component Render
if (document.getElementById('rugby')) {
    // Getting Sports For Widget From WP_SHORTCODE
    let sports = document.getElementById('rugby')?.getAttribute( 'data-default-sports' );
    render(<Widget sports={sports}/>, document.getElementById('rugby'));
}
if (document.getElementById('football')) {
    // Getting Sports For Widget From WP_SHORTCODE
    let sports = document.getElementById('football')?.getAttribute( 'data-default-sports' );
    render(<Widget sports={sports}/>, document.getElementById('football'));
}
if (document.getElementById('tennis')) {
    // Getting Sports For Widget From WP_SHORTCODE
    let sports = document.getElementById('tennis')?.getAttribute( 'data-default-sports' );
    render(<Widget sports={sports}/>, document.getElementById('tennis'));
}
if (document.getElementById('darts')) {
    // Getting Sports For Widget From WP_SHORTCODE
    let sports = document.getElementById('darts')?.getAttribute( 'data-default-sports' );
    render(<Widget sports={sports}/>, document.getElementById('darts'));
}

// Specific Event Render
if (document.getElementById('specific-event')) {
    // Getting Sports For Widget From WP_SHORTCODE
    let sports = document.getElementById('specific-event')?.getAttribute( 'data-sport' );
    let specificEvent = document.getElementById('specific-event')?.getAttribute( 'data-event' );
    render(<SpecificEvent sports={sports} specificEvent={specificEvent}/>, document.getElementById('specific-event'));
}