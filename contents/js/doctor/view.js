var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {

        if (this.state.doctor){

            return ( 
                <div className="doctorView examplegrid" >
                    <div className="twelve columns" >
                        

                        <div className="row" >

                            <p className="doctorName name twelve columns" >
                                {this.state.doctor.name}
                            </p>
                        </div>



                        <div className="row" >
                            <h6 className="three columns" >
                                    Address: 
                            </h6>

                            <h6 className="nine columns" >
                                {this.state.doctor.full_address}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                Category: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.doctor.categories}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                Stars: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.doctor.stars}
                            </h6>

                        </div>



                    </div>

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})