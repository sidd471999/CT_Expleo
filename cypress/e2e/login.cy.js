import { login } from "../support/login"

describe('Demo Test', () => {  // test suite
  it('Login With correct Credentrails', () => {  // testcases

    //visit the website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Login into Account
    login.LoginIntoOrangeHRM("User1")
    //verify dashboard text
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
  })
  
})