import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form
          className='ui form'
          // prevents default refreshing of page on Enter key
          onSubmit={event => {
            event.preventDefault();
            this.props.onFormSubmit(this.state.searchTerm);
          }}
        >
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.searchTerm}
              onChange={event => this.setState({ searchTerm: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
