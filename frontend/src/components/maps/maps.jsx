import React, {Component} from 'react'

class Maps extends Component{
    render(){
        return(
            <div className="content">
            <div className="container-fluid">
                <div className="card card-map">
					 <iframe src="https://www.google.com/maps/embed?key=AIzaSyDk3JWR0PjUIJT9ZN0SisfzEkjjRntUwKw" title="googleMaps" width="100%" height="400px" frameBorder="0" ></iframe>
				</div>
			</div>
		</div>
        
        )
    }
}

export default Maps;