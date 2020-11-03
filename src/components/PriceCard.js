import React from 'react'

import './PriceCard.css'

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
  <li>{number}</li>
);


class PriceCard extends React.Component {

  render() {
    if (this.props.DisplayList) {
    return (
      <div className="PriceCard__container">
          <div className="PriceCard__header">
              <div className="PriceCard__title">
                <h2>{this.props.title}</h2>
                <span>Ecommerce Website</span>
              </div>
              <div className="PriceCard__price">
                  <span>${this.props.price}</span>
              </div>
          </div>
         

          <ul className="PriceCard__list">
                <li>{this.props.One}</li>
                <li>{this.props.Two}</li>
                <li>{this.props.Three}</li>
                <li>{this.props.Four}</li>
                <li>{this.props.Five}</li>
                <li>{this.props.Six}</li>

           </ul>

      </div>
    )
    } else {
        return (
            <div>
                <div className="PriceCard__container">
                <div className="PriceCard__header">
                <div className="PriceCard__title">
                <h2>{this.props.title}</h2>
                    <span>Ecommerce Website</span>
                </div>
                <div className="PriceCard__price">
                    <span>${this.props.price}</span>
                </div>
                </div>
                </div>
          </div>
        )
    }
  }
}

export default PriceCard
