/// <reference types="Cypress" />

import { GoogleStep } from '../../integration/test/GoogleStep';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';

const google = new GoogleStep();

Given('I open Google page', () => {
   // google.navigateUrl();
   cy.visit('https://www.google.com/');
})

When('I search for different keyword', () => {
    google.googleSearch();
})

Then('I should get search result', () => {
    google.resultVerification();
})
