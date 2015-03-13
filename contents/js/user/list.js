var UserList = React.createClass({displayName: 'UserList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(user_id){
        var user = _.find(this.state.data, {user_id: user_id})
        this.refs.userView.setState({user:user})
    },

    render: function() {

        var self = this

        var user = this.state.data.map(function (user) {

          return (
            <UserListItem user={user} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="userPage">
                <div className="userList six columns">
                  <div className="six columns">
                    <h2>User< /h2>
                  </div>
                  <div className="six columns">
                    <h2>Average rating< /h2>
                  </div>
                    {user}
                </div>
                <div className="userView six columns">
                    <UserView ref="userView"/>
                </div>
            </div>
        )
    }
})
