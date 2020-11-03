import React from 'react'

import './PricingTable.css'
import PriceCard from './PriceCard'

class PricingTable extends React.Component {

  render() {

    return (
        <div>
            <div className="PricingTable__wrapper">
                <div className="PriceCard__container--long">
                    <PriceCard 
                    DisplayList 
                    title="Basic" 
                    price="500" 
                    One="Commercial Theme"
                    Two="Complete Store Setup"
                    Three="Contact Form"
                    Four="Tweaks & Adjustments"
                    Five="Mobile Responsive"
                    Six="Custom Hero Banner"
                    />
                    <PriceCard title="Add Function" price="1200" />
                    </div>
                <div>
                    <div className="PricingTable__title">
                        <h1>Shopify Ecommerce Development</h1>
                        <span>Get started today with a free consultation</span>
                    </div>
                    <div className="PricingTable__container">
                    <PriceCard DisplayList title="Premium" price="2000" />
                    <PriceCard DisplayList title="Custom" price="4000+" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default PricingTable
