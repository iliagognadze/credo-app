Ext.define('CredoApp.view.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerviewcontroller',

    onRegisterClick: function() {
        const
            name = this.lookupReference('nameField').getValue(),
            surname = this.lookupReference('surnameField').getValue(),
            email = this.lookupReference('emailField').getValue(),
            privateNumber = this.lookupReference('privateNumberField').getValue(),
            password = this.lookupReference('passwordField').getValue(),
            confirmPassword = this.lookupReference('confirmPasswordField').getValue();

        console.log(name, surname, email, privateNumber, password, confirmPassword)
    },

    onLoginClick: function() {
        this.getView().destroy()

        Ext.Viewport.add([{xtype: 'loginview'}])
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