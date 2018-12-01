import React from "react";

class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            source_url: this.props.source_url,
            img_url: this.props.img_url,
            publisher: this.props.publisher
        }

        this.viewRecipe = this.viewRecipe.bind(this);
    }

    viewRecipe() {
        window.open(this.state.source_url);
    }

    render() {

        const imgStyle = {
            "width": "100%",
            "height": "220px",
            "border-radius": "10px"
        };

        return (
            <div className="recipe col-sm-12 col-md-4">
                <div className="recipe-info">
                    <img style={imgStyle} src={this.state.img_url} alt="Food" />
                    <h3>{this.state.title}</h3>
                    <h4>Publisher: {this.state.publisher}</h4>
                    <button onClick={this.viewRecipe}>View Recipe</button>
                </div>

            </div>
        );
    }
}

export default Recipe;