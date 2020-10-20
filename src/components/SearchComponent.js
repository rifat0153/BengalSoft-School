import React from 'react';
import Autosuggest from 'react-autosuggest';
import { COURSES } from '../shared/courses';
import {Link} from 'react-router-dom';

  
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return COURSES.filter(course => regex.test(course.name, course.code));
  }
  
  function getSuggestionValue(suggestion) {
    return (
      suggestion.name
    );
  }
  
  function renderSuggestion(suggestion) {
    return (
      <div>
        <Link to={`/coursedetail/${suggestion.id}`}>
          <span>{suggestion.name}</span>
        </Link>
        {/* <Link to={`/coursedetail/${suggestion.id}`}>
          <span>{suggestion.code}</span>
        </Link> */}
      </div>
      
    );
  }
  
  export default class Search extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Enter Course Name",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      );
    }
  }
  