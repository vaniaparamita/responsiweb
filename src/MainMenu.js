import React, {Component} from "react";
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    componentDidMount(){
        fetch("http://10.33.34.227/response.json")
        .then(res=> res.json())
        .then(parsedJSON => parsedJSON.results.map(data=>(
            {
                dt_txt: `${data.dt_txt}`,
                temp: `${data.main.temp}`,
                temp_min: `${data.main.temp_min}`,
                temp_max: `${data.main.temp_max}`,
                weather: `${data.weather.main}`
            }
        )))
        .then(items => this.setState(
            {
                items, 
                isLoaded: false
            }
        ))
        .catch(error => console.log('parsing failed', error))
    }
    render(){
        const{items } = this.state;
        return(
                <div className="table">
                {
                    items.length > 0 ? items.map(item => {
                        const {dt_txt, temp, temp_min, temp_max, weather} = item;
                        return(
                            <div>
                            <div className="ctr">
                                {firstName} {LastName} <br/ >
                                {location}
                            </div>
                     </div>
                        )
                    }) :null    
                }    
                </div>
        );
        
    }
}
export default Home;