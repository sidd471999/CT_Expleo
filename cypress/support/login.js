import { env } from "../support/env"
import { crypt } from "../support/encryption"

class Login {

    usernameselector = '[name="username"]'
    passwordSelector = '[name="password"]'
    loginButton = '.oxd-button'

    LoginIntoOrangeHRM(name) {
        let Credentials = env.getCredentials(name)
        let decodedpassword = crypt.decode(Credentials.password)
        cy.wait(2000)
        cy.get(this.usernameselector).type(Credentials.username,{log:false})
        cy.get(this.passwordSelector).type(decodedpassword,{log:false})
        cy.wait(5000)
        cy.get(this.loginButton).click()
    }
}
export const login = new Login()