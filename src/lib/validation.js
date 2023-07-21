/*
 *   Starting point for validate input
 */

import CountryAndCity from "./CountryAndCity.json";
import React from "react";
import {Language} from "../App";
import { resetSelected } from "../components/custom/customInput/customInput";
import { resetSelectedSelect } from "../components/custom/customInput/customInputSelect";

// write validators


//todo make string translated

export const validateTextTranslated = (lang) => {

  switch (lang) {
    case "Italian":
      return "Campo obbligatorio";
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

export const validateFiscalCodeTranslated = (lang) => {


  switch (lang) {
    case "Italian":
      return "Codice fiscale non valido";
    case "French":
      return "code fiscal non valide";
    case "Spanish":
      return "código fiscal no válido";
    case "Ukranian":
      return "неправильний код";
    case "Arab":
      return "الرمز الضريبي غير صالح";
    case "Tamil":
      return "தவறான வரி குறியீடு";
    case "Bengali":
      return "অবৈধ কর কোড";
    default:
      return "this fiscal code is not valid";
  }
}

export const validateEmailTranslated = (lang) => {


  switch (lang) {
    case "Italian":
      return "E-mail non valida";
    case "French":

      return "email non valide";
    case "Spanish":
      return "correo electrónico no válido";
    case "Ukranian":
      return "неправильна електронна пошта";
    case "Arab":
      return "البريد الإلكتروني غير صالح";
    case "Tamil":
      return "தவறான மின்னஞ்சல்";
    case "Bengali":
      return "অবৈধ ইমেল";
    default:
      return "this e-mail is not valid";
  }
}

export const validatePhoneNumberTranslated = (lang) => {


  switch (lang) {
    case "Italian":
      return "Numero di telefono non valido";
    case "French":
      return "numéro de téléphone non valide";
    case "Spanish":
      return "número de teléfono no válido";
    case "Ukranian":
      return "неправильний номер телефону";
    case "Arab":
      return "رقم الهاتف غير صالح";
    case "Tamil":
      return "தவறான தொலைபேசி எண்";
    case "Bengali":
      return "অবৈধ ফোন নম্বর";
    default:
      return "this phone number is not valid";
  }
}






export const validateText = (value) => {
  let error;
  resetSelected();
  resetSelectedSelect();
  console.log('value', value  )

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
    error = validateFiscalCodeTranslated(Language);
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
    error = validatePhoneNumberTranslated(Language);
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    error = validateEmailTranslated(Language);
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
export const validateCountry = (values, autosuggestAnsw, language) => {
  let isValidated = "";
  let error = false;
  let newObject = { ...values };

  // check if the language is different from english
  if(language !== 'English'){
    return autosuggestAnsw;
  }
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
