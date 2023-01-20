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
      <div className="pb-3">
        <h1 className="text-3xl font-bold m-5 text-center">Quote Generator</h1>
        {this.state.quote ? (
          <div>
            <h2 className="italic px-3 break-words text-2xl">
              "{this.state.quote}"
            </h2>
            <h3 className="text-right ">--{this.state.author}</h3>
          </div>
        ) : null}
        <div className="flex justify-end">
          <button
            onClick={this.fetchRandomQuote}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Get a new Quote!
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
