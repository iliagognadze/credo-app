Ext.define('CredoApp.view.register.RegisterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerviewcontroller',

    onRegisterClick: function() {
        const
            name = this.lookupReference('nameField').getValue(),
            surname = this.lookupReference('surnameField').getValue(),
            email = this.lookupReference('emailField').getValue(),
            privateNumber = this.lookupReference('privateNumberField').getValue(),
            birthDate = this.lookupReference('birthDateField').getValue(),
            password = this.lookupReference('passwordField').getValue(),
            confirmPassword = this.lookupReference('confirmPasswordField').getValue();

        if (password !== confirmPassword)
            Ext.Msg.alert('არასწორი ინფორმაცია', 'პაროლები არ ემთხვევა')

        const userRegistrationRequest = {
            privateNumber,
            email,
            name,
            surname,
            password,
            birthDate
        }

        console.log(userRegistrationRequest)

        console.log(typeof birthDate)

        Ext.Ajax.request({
            url: "http://credoapi-dev.eba-apnu7tgz.eu-central-1.elasticbeanstalk.com/api/users",
            method: 'POST',
            jsonData: userRegistrationRequest,

            success: function(result, action, response) {
                this.getView().destroy()

                Ext.Viewport.add([{xtype: 'loginview'}])

                Ext.Msg.alert('გილოცავთ!', 'თქვენ წარმატებით დარეგისტრირდით')
            },

            failure: function(result, action, response) {
                const predefinedErrors = [
                    {
                        errorMessage: 'USER_WITH_PROVIDED_PRIVATE_NUMBER_ALREADY_EXISTS',
                        alertMessage: 'თქვენ მიერ შეყვანილი პირადი ნომრით მომხმარებელი უკვე არსებობს.'
                    },
                    {
                        errorMessage: 'USER_WITH_PROVIDED_EMAIL_ALREADY_EXISTS',
                        alertMessage: 'თქვენ მიერ შეყვანილი ელ-ფოსტით მომხმარებელი უკვე არსებობს.'
                    }
                ]

                console.log('failed')
                console.log(result);

                const responseData = JSON.parse(result.responseText);

                let errorMessage = responseData.message

                let errorInPredefined = predefinedErrors.find(pe => pe.errorMessage === errorMessage)

                console.log(errorMessage)
                console.log(errorInPredefined)

                if (errorInPredefined) {
                    Ext.Msg.alert('რეგისტრაცია ვერ მოხერხდა', errorInPredefined.alertMessage)
                }
            },

            scope: this
        });

        console.log(name, surname, email, privateNumber, password, confirmPassword)
    },

    onLoginClick: function() {
        this.getView().destroy()

        Ext.Viewport.add([{xtype: 'loginview'}])
    }
});