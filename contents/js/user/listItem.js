var UserListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.user)
        this.props.onListItemClicked(this.props.user.user_id)
    },

    render: function() {

        var user = this.props.user

        return ( 
            <div className="user row" >
                <div className="userName six columns" onClick={this.handleClick}>
                    {user.name}                    
                </div>
                <div className="userReview_Count six columns">
                    {user.review_count}   
                </div>
                <div className="userYelping_Since six columns">
                    {user.yelping_since}
                </div>
            </div>
        )
  }
})