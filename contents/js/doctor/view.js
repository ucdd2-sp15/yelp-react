var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {

        if (this.state.doctor){
            var cats = this.state.doctor.categories
            var categories = ''
            for( var i = 0 ; i < cats.length ; i++){
                categories += ' ' + cats[i]
            }

            return (
                <div className="doctorView" >
                    <h2 className="doctorName">
                        {this.state.doctor.name}
                    </h2>
                    {this.state.doctor.full_address}
                    <p>State: {this.state.doctor.state} </p>
                    <p><b>Stars: {this.state.doctor.stars} </b> </p>
                    <p>Review Count: {this.state.doctor.review_count} </p>
                    <p>Categories: {categories} </p>



                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
