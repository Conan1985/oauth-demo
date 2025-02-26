const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/oauth/callback",
        clientId: config.clientId,
        scopes: [
            "contacts.readonly",
            "contacts.write",
            "calendars.readonly",
            "calendars/events.readonly",
            "calendars/events.write",
            "conversations.readonly",
            "conversations.write",
            "conversations/message.readonly",
            "conversations/message.write",
            "conversations/reports.readonly",
            "forms.readonly"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
