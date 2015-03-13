var RestaurantListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.restaurant)
        this.props.onListItemClicked(this.props.restaurant.business_id)
    },

    render: function() {
        
        var restaurant = this.props.restaurant
        var resOpen = (restaurant.open) ? "Open" : "Closed"

        return (
            <div className="doctor">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Rating</th>
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" onClick={this.handleClick}>{restaurant.name}</a></td>
                            <td> {restaurant.state} </td>
                            <td> {restaurant.city} </td>
                            <td> {restaurant.stars + " Stars"} </td>
                            <td> {resOpen} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
