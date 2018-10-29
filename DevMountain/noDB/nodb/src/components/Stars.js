import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class Stars extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    console.log(111)
    
    return (                
      <div>
        <h2>Rate your song: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}     


 


export default Stars