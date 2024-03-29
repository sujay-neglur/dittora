import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

var dateSelected;

export default class DatePickerClass extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment(),

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date,

        });
        dateSelected = date;
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            data={this.state.startDate}
        />;
    }
}

