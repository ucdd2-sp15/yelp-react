var UserListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.user)
        this.props.onListItemClicked(this.props.user.user_id)
    },

    render: function() {
        
        var user = this.props.user
        var resOpen = (user.open) ? "Open" : "Closed"

        return (
            <div className="user">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Yelping Since</th>
                            <th>Average Stars</th>
                            <th>Review Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{user.name}</a></td>
                            <td> {user.yelping_since} </td>
                            <td> {user.average_stars} </td>
                            <td> {user.review_count} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
