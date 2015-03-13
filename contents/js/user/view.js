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
                    <b>Votes:</b>
                    <br/>Funny: {this.state.user.votes.funny}
                    <br/>Useful: {this.state.user.votes.useful}
                    <br/>Cool: {this.state.user.votes.cool}
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})