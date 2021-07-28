import {FirstTest  } from "../page/firsttest.po";

let firstPagePO = new FirstTest();

before(function(){
    cy.fixture('google').then(function(data)
    {
        this.googleSearchTestData=data ;
    })
    })

beforeEach(function(){
    window.console.log('Enter the beforeEach function')
    Cypress.Cookies.preserveOnce('SESSION')
  firstPagePO.navigate('/');
})

export class GoogleStep{
    googleSearchTestData: any;

    navigateUrl(){
        firstPagePO.navigate('/');
    }

    randomIntFromInterval(min:number, max:number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    googleSearch(){
        let search = ['Java', 'Cypress','Selenium','Cloud Computing','Data science','Matlab','Data Analyst','Typescript','Javascript'];  
        const rndInt = this.randomIntFromInterval(0, 8)
        firstPagePO.enterSearchText().type(search[rndInt]);
        firstPagePO.googleImapge().type('{enter}');
    }

    resultVerification(){
        firstPagePO.verifySearchResult().contains('About');   
    }
}