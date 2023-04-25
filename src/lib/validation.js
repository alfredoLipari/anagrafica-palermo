/*
 *   Starting point for validate input
 */

import CountryAndCity from "./CountryAndCity.json";
import React from "react";
import {Language} from "../App";

// write validators


//todo make string translated

export const validateTextTranslated = (lang) => {

  console.log("state", lang)

  switch (lang) {
    case "Italian":
      return "scrivi qualcosa";
    case "French":
      return "écris quelque chose";
    case "Spanish":
      return "escribe algo";
    case "Ukranian":
      return "щось написати";
    case "Arab":
      return "أكتب شيئا";
    case "Tamil":
      return "ஏதாவது எழுத";
    case "Bengali":
      return "কিছু লিখুন";
    default:
      return "please insert something";
  }
}



export const validateText = (value) => {
  let error;
  if (value === "" || value === undefined) {
    error = validateTextTranslated(Language);
  } else if (value !== undefined) {
    if (value?.length > 50) {
      error = "I dont think you need all that space";
    }
  }
  return error;
};

export const validateFiscalCode = (value) => {
  let error;
  var fiscalCodeRegex =
      /^[a-zA-Z]{6}[0-9]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9]{2}([a-zA-Z]{1}[0-9]{3})[a-zA-Z]{1}$/;
  if (!fiscalCodeRegex.test(value)) {
    error = "this fiscal code is not valid";
  }
  if (value === "test") {
    error = "";
  }
  return error;
};

export const validatePhoneNumber = (value) => {
  let error;
  var phoneNumberRegex =
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  if (!phoneNumberRegex.test(value)) {
    error = "this phone number is not valid";
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    error = "this e-mail is not valid";
  }
  return error;
};

export const validateDate = (value) => {
  let error;
  const currentdate = new Date();
  const date = new Date(value);
  if (isNaN(date)) {
    error = "Invalid date";
  }
  //se la data è maggiore di quella di oggi ritorna l'errore
  else if (date >= currentdate) {
    error = "You cannot enter a date greater than today";
  }
  return error;
};

// function that validate country for autosuggest component
export const validateCountry = (values, autosuggestAnsw) => {
  let isValidated = "";
  let error = false;
  let newObject = { ...values };
  // dispatch also this answers
  Object.keys(autosuggestAnsw).map((key) => {
    // validate the result
    isValidated = Object.keys(CountryAndCity).find(
        (country) => country === autosuggestAnsw[key]
    );
    if (isValidated) {
      newObject["Indicare lo Stato estero di provenienza"] =
          autosuggestAnsw[key];
      return newObject;
    } else {
      error = true;
      return {};
    }

    // add auto suggest value to the result
  });

  if (error) {
    return {};
  } else {
    return newObject;
  }
};
