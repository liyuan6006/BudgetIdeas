import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class AddIncome extends React.Component {
    render() {
        return (
            <div>
                <TextField
                    floatingLabelText="Name"
                /><br />
                 <TextField
                    floatingLabelText="Amount"
                    type="number"
                /><br />
                <DatePicker hintText="Date" />
            </div>
        )
    }

};

export default AddIncome;