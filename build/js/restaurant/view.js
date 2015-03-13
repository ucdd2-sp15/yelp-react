var RestaurantView = React.createClass({

    getInitialState: function() {
        return {restaurant: null}
    },

    render: function() {

        if (this.state.restaurant){

            return (
                <div className="restaurantView" >
                    <h3 className="restaurantName">
                        {this.state.restaurant.name}
                    </h3>
                    <b> Rating : </b> {this.state.restaurant.stars}  stars<br/>   
                    <b> Address : </b> {this.state.restaurant.full_address} <br/>
                    <b> Type : </b> {this.state.restaurant.type} <br/>   
                    <b> Review count : </b> {this.state.restaurant.review_count} <br/>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
    }
})