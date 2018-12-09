import React from "react";

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
                <div className="food-1">
                    <div className="border">
                        <div className="food-text">
                            <h3>Discover Delicious Recipes!</h3>
                            <p>This website was created using the <a href="https://www.food2fork.com/">Food2Fork</a> API</p>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h3>Section 1</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                       sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                       consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                       ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                       labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                       ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                       reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                       fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className="food-2"></div>
                <div className="info">
                    <h3>Section 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                       sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                       consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                       ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                       labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                       ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                       reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                       fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className="food-3"></div>
                <div className="info">
                    <h3>Section 3</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                       sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                       consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                       ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                       labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                       ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                       reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                       fugiat quo voluptas nulla pariatur?</p>
                </div>
            </div>
        );
    }
}

export default Home;