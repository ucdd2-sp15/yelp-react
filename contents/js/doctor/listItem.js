var DoctorListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.doctor)
        this.props.onListItemClicked(this.props.doctor.business_id)
    },

    render: function() {

        var doctor = this.props.doctor

        return ( 
            <div className="doctor row" >
                <a className="doctorName six columns" onClick={this.handleClick}>
                    {doctor.name}                    
                </a>
                <div className="doctorCity six columns">
                    {doctor.city}   
                </div>
            </div>
        )
  }
})