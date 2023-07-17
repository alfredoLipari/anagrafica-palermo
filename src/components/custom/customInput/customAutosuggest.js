import React, { useState, useContext } from "react";
import Autosuggest from "react-autosuggest";
import CountryAndCity from "../../../lib/CountryAndCity.json";
import { Text, FormHelperText, FormControl } from "@chakra-ui/react";
import "./customAutosuggest.css";
import { Context } from "../../../App";

const CustomAutosuggest = ({
  autosuggestHandler,
  tag,
  country,
  error,
  keyAuto,
  questId
}) => {
  // Imagine you have a list of languages that you'd like to autosuggest.
  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    let filter;
    console.log('questId', questId)
    // logic for the filter
    if(questId === 'Indicare il comune di provenienza'){
        if (country) {
            filter =
              CountryAndCity[
              country.answer["Indicare lo Stato estero di provenienza"]
              ];
        } else{
          filter = [];
        }
    }

    
    else {
      filter = Object.keys(CountryAndCity);
    }

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : filter.filter(
          (country) =>
            country.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  function shouldRenderSuggestions(value) {
    if (country) {
      return value.trim().length > 3;
    } else {
      return value.trim().length > 0;
    }
  }

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { state } = useContext(Context);

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <Text>{suggestion}</Text>;

  // and an onChange handler that updates this value (see below).
  const onChange = (event, { newValue }) => {
    setValue(newValue);
    autosuggestHandler(newValue, tag.id);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
    autosuggestHandler(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };


  // Tranlate error text helper function
  const translateError = (language) => {
    switch (language) {
      case "Italian":
        return "Questo paese non esiste";
      case "French":
        return "Ce lieu n'existe pas";
      case "Spanish":
        return "Este lugar no existe";
      case "Ukranian":
        return "Це місце не існує";
      case "Arab":
        return "هذا المكان غير موجود";
      case "Tamil":
        return "இந்த இடம் இல்லை";
      case "Bengali":
        return "এই স্থানটি বিদ্যমান নয়";
      default:
        return "This place does not exist";
    }
  }
      


  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: tag.label + " *",
    value,
    onChange: onChange,
  };

  // Finally, render it!
  return (
    <FormControl color={"#404B57"} margin="0" key={keyAuto}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        shouldRenderSuggestions={shouldRenderSuggestions}
      />
      <FormHelperText
        marginBottom="10"
        color={error !== false ? "#D2072A" : "#718096"}
      >
        {error !== false ? translateError(state.language) : tag.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomAutosuggest;
