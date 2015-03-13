var RestaurantView = React.createClass({

    getInitialState: function() {
        return {restaurant: null}
    },

    render: function() {

        if (this.state.restaurant){
            var openStr = 'Closed Now :('
            if (this.state.restaurant.open){
                openStr= 'Open Now!'
            }

            return (
                <div className="restaurantView" >
                    <h2 className="restaurantName">
                        {this.state.restaurant.name}
                    </h2>
                    <p> {this.state.restaurant.full_address} </p>
                    <p> <b> {openStr} </b> </p>
                    <p> Stars: {this.state.restaurant.stars} </p>
                    <p> Attire: {this.state.restaurant.attributes.Attire} </p>


                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
