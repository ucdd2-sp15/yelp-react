var UserView = React.createClass({

	 getInitialState: function() {
        return {user: null}
    },

    render: function() {

        if (this.state.user){

            return (
                <div className="userView" >
                    <h2 className="userName">
                        {this.state.user.name}
                    </h2>
                    Yelping since:  {this.state.user.yelping_since}<br/>
                    Average Stars: {this.state.user.average_stars}<br/>
                    Review Count: {this.state.user.review_count}
                    <h4> Votes </h4>
                    <p>Funny: {this.state.user.votes.funny}
                    <br/>Useful: {this.state.user.votes.useful}
                    <br/>Cool: {this.state.user.votes.cool}</p>

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }

})
