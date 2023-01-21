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
        <h1 className="text-3xl font-bold m-5 text-center text-slate-800">
          Quote Generator
        </h1>
        {this.state.quote ? (
          <div className="mb-2">
            <h2 className="italic px-3 break-words text-2xl text-slate-700">
              "{this.state.quote}"
            </h2>
            <h3 className="text-right text-slate-600">--{this.state.author}</h3>
          </div>
        ) : null}
        <div className="flex justify-end">
          <button
            onClick={this.fetchRandomQuote}
            className="bg-sky-600 hover:bg-sky-700 text-white leading-3 font-bold py-2 px-2.5 text-sm rounded"
          >
            Get a new Quote!
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
