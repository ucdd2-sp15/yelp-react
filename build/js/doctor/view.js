var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {
        
        if (this.state.doctor){

            return ( 
                <div className="doctorView" >
                    <h2 className="doctorName">
                        {this.state.doctor.name}
                    </h2>
                    <b> Rating : </b> {this.state.doctor.stars}  stars<br/>   
                    <b> Address : </b> {this.state.doctor.full_address} <br/>
                    <b> Type : </b> {this.state.doctor.type} <br/>   
                    <b> Review count : </b> {this.state.doctor.review_count} <br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})