import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/posts")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!"};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <div className="container">
                {this.state.data.map(post => {
                    return (
                        <div className="card pt-2 pl-5 pr-5 mt-3" key={post.id}>
                            <h3>{post.title}</h3>
                            <div className="d-flex justify-content-between"> 
                                <h5><em>{post.author}</em></h5>
                                <h5><em>{post.created_at}</em></h5>
                            </div>
                            <p>{post.preview}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Homepage;