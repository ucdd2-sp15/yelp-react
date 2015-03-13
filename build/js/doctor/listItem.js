var DoctorListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.doctor)
        this.props.onListItemClicked(this.props.doctor.business_id)
    },

    render: function() {

        var doctor = this.props.doctor

        return ( 
            <div className="doctor" >
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Rating</th>
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{doctor.name}</a></td>
                            <td> {doctor.state} </td>
                            <td> {doctor.city} </td>
                            <td> {doctor.stars + " Stars"} </td>
                            <td> {doctor.open} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
  }
})
