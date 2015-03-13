var UserView = React.createClass({

    getInitialState: function() {
        return {user: null}
    },

    render: function() {
        
        if (this.state.user){

            return ( 
                <div className="userView">
                    <h2 className="userName">
                        {this.state.user.name}
                    </h2>
                    <b> Yelping Since : </b> {this.state.user.yelping_since} <br/>   
                    <b> Review Count :  </b> {this.state.user.review_count} <br/>
                    <b> Average Stars : </b> {this.state.user.average_stars} <br/><br/>
                    <h5> Votes : </h5>
                    <b> Funny : </b> {this.state.user.votes.funny} <br/>   
                    <b> Useful :  </b> {this.state.user.votes.useful} <br/>
                    <b> Cool : </b> {this.state.user.votes.cool} <br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})