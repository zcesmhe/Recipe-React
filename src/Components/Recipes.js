import React from "react";
import Recipe from "./Recipe";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.location.state.input,
            recipes: []
        }

        this.goHome = this.goHome.bind(this);
    }

    goHome() {
        this.props.history.push({
            pathname: "/"
        });
    }

    componentDidMount() {
        const API_KEY = "d64d0997b5e154a79dd3740fd9424e35";

        fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.state.input}`)
            .then(response => response.json())
            .then(json => this.setState({
                recipes: json.recipes
            }));
    }

    render() {
        var recipeList = this.state.recipes.map(recipe => <Recipe title={recipe.title} publisher={recipe.publisher} source_url={recipe.source_url} img_url={recipe.image_url} />);

        return (
            <div className="recipes">
                <div className="header">
                    <button className="home-btn" onClick={this.goHome}><i class="fas fa-home fa-2x"></i></button>
                    <h1>Recipe Search Results</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {recipeList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipes;