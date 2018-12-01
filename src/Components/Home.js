import React from "react";
import Carousel from "./Carousel";

class Home extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    submit() {

        this.props.history.push({
            pathname: "/recipes",
            state: {
                input: this.state.input
            }
        })
    }

    render() {
        return (
            <div className="home">
                <div className="header">
                    <button className="home-btn"><i class="fas fa-home fa-2x"></i></button>
                    <h1>Search for a Recipe!</h1>
                </div>
                <input value={this.state.input} onChange={this.handleChange} placeholder="Search"></input>
                <button onClick={this.submit}><i class="fas fa-search"></i></button>
                <Carousel />
            </div>
        );
    }
}

export default Home;