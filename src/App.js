import React from 'react'
import Titles from './component/Titles'
import Form from './component/Form'
import Weather from './component/Weather'

const API_KEY = "b1ec2027899a4ad684903931feb6933c"

class App extends React.Component {
    state = {
        temparature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }

    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data)
            this.setState({
                temparature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "",
            })
        }else{
            this.setState({
                temparature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "pls enter Location",
            })
        }
    }

    render() {
        const { temparature, city, country, humidity, description, error } = this.state
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather
                    temparature={temparature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                />
            </div>
        )
    }
}
export default App