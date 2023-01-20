import React from "react";

class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.fetchRandomQuote();
  }

  fetchRandomQuote = () => {
    const options = {
      method: "GET",
    };
    fetch("https://api.quotable.io/random", options)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ quote: data.content, author: data.author })
      );
  };

  render() {
    return (
      <div style={{ paddingBottom: "12px" }}>
        {this.state.quote ? (
          <div>
            <h2 style={{ fontStyle: "italic", padding: "0 12px" }}>
              "{this.state.quote}"
            </h2>
            <h3 style={{ textAlign: "right" }}>--{this.state.author}</h3>
          </div>
        ) : null}
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button onClick={this.fetchRandomQuote}>
            Get a new Quote!
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
