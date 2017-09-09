// var Search = (props) => (
//   // add function to pass in query
  
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={this.searchClick}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      string: ""
    };
    
    this.debounceFunc = _.debounce(this.debounceSearch, 500);
  }
  
  searchClick() {
    this.props.searcher(this.state.string);

  }

  userInput(input) {
    this.setState({
      string: input.target.value
    });
  }

  enterSearch(event) {
    if (event.keyCode === 13) {
      this.props.searcher(this.state.string);
    }
    this.debounceFunc();
  }
  
  debounceSearch() {
    this.props.searcher(this.state.string);    
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.userInput.bind(this)} onKeyUp={this.enterSearch.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.searchClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
