var RestaurantView = React.createClass({

    getInitialState: function() {
        return {restaurant: null}
    },

    render: function() {
        
        if (this.state.restaurant){

            return ( 
                <div className="restaurantView" >
                    <h2 className="restaurantName">
                        {this.state.restaurant.name}
                    </h2>
                    <h5>
                    {this.state.restaurant.full_address}
                    </h5>
                    {this.state.restaurant.stars} stars, {this.state.restaurant.review_count} reviews

                        
                </div>
            )
        }

        else {

            return (
                <h2>Click an item to see details</h2>
            )
        }
  	}
})