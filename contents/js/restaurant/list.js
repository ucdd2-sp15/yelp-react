var RestaurantList = React.createClass({displayName: 'RestaurantList',

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

    handleListItemClicked: function(restaurant_id) {
        var restaurant = _.find(this.state.data, {business_id: restaurant_id})
        console.log('this.refs: ',this.refs)
        this.refs.restaurantView.setState({restaurant: restaurant})
    },


    render: function() {

        var self = this

        var restaurants = this.state.data.map(function(restaurant) {
            return (
                <RestaurantListItem restaurant={restaurant} onListItemClicked={self.handleListItemClicked}/>
                )
        })

        return (
            <div className="restaurantPage">
                <div className="restaurantList six columns">
                    {restaurants}
                </div>
                <div className="restaurantView six columns">
                    <RestaurantView refs="restaurantView"/>
                </div>
            </div>
        )
    }
})
