import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.search);

    this.reset();
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
