import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        const { temparature, city, country, humidity, description, error } = this.props

        return (
            <div>
                {country && city && <p>Location: {city}, {country}</p>}
                {temparature && <p>Condition {temparature}</p>}
                {humidity && <p>humidity: {humidity}</p>}
                {description && <p>Description: {description}</p>}
                {error && <p>{error}</p>}
            </div>
        )
    }
}
