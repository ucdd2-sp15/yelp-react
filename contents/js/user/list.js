var UserList = React.createClass({
displayName:'UserList',
	getInitialState: function(){ //setting the intial value state of data to []
		return {data:[]};
	},
	componentDidMount: function(){  //loads after the componnent mounted 
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data){
				this.setState({      //update data from server
					data:data
					});
			}.bind(this),
			error: function(xhr, status, err){
			console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleListItemClicked: function(user_id)  //fired on a click event 
    {
		var user = _.find(this.state.data, {user_id: user_id})  //finding the user id 
		this.refs.userView.setState({user: user})},  //sending the user data to userView
	
	render: function() {
		var self = this;
		var users = this.state.data.map(function(user)
		{
        return (
			<UserListItem user={user} onListItemClicked={self.handlListItemClicked}/>)
		})

		return (
			<div className="userPage">
				<div className="userList six columns">
					{users}
				</div>
				<div className="userview six columns">
					<UserView ref="userView"/>
				</div>
            </div>
        )
    }
})

