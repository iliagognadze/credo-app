Ext.define('CredoApp.view.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginviewcontroller',

    onLoginClick: function() {
        const email = this.lookupReference('emailField').getValue(),
            password = this.lookupReference('passwordField').getValue();

        if (email !== 'ilia' || password !== 'test') {
            Ext.Msg.alert('არასწორი მონაცემები!', 'გთხოვთ შეიყვანოთ სწორი მონაცემები')
            return
        }

        localStorage.setItem('accessToken', makeId(26));

        this.getView().destroy();

        Ext.Viewport.add([{xtype: 'mainview'}])
    },

    onRegisterClick: function() {
        this.getView().destroy()

        Ext.Viewport.add([{xtype: 'registerview'}])
    }
});

function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}