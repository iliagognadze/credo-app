Ext.define('CredoApp.view.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginviewcontroller',

    onLoginClick: function() {
        const email = this.lookupReference('emailField').getValue(),
            password = this.lookupReference('passwordField').getValue();

        const authRequest = {
            email,
            password
        }

        Ext.Ajax.request({
            url: "http://credoapi-dev.eba-apnu7tgz.eu-central-1.elasticbeanstalk.com/api/auth",
            method: 'POST',
            jsonData: authRequest,

            success: function(result, action, response) {
                const jsonResponse = JSON.parse(result.responseText);

                console.log(result.responseText)

                if (jsonResponse.accessToken == null)
                    Ext.Msg.alert('შეცდომა', 'დაფიქსირდა შეცდომა.')

                localStorage.setItem('accessToken', jsonResponse.accessToken);

                this.getView().destroy()

                Ext.Viewport.add([{xtype: 'mainview'}])

                Ext.Msg.alert('მოგესალმებით!', 'თქვენ წარმატებით გაიარეთ ავტორიზაცია')
            },

            failure: function(result, action, response) {
                const responseData = JSON.parse(result.responseText)

                let errorCode = responseData.statusCode

                if (errorCode === 401) {
                    Ext.Msg.alert('რეგისტრაცია ვერ მოხერხდა', 'არასწორი ელ-ფოსტა ან პაროლი')
                }
            },

            scope: this
        });
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