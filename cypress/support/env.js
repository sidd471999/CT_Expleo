class ENV {

    getCredentials(name) {

        const credentials = {};

        if (name == 'User1') {
            credentials['username'] = 'Admin'
            credentials['password'] = 'firns123'
            return credentials;
        }
    }

}

export const env = new ENV()