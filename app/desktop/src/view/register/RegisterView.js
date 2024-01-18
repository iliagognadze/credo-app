Ext.define('CredoApp.view.register.RegisterView', {
    extend: 'Ext.panel.Panel',
    xtype: 'registerview',
    controller: { type: 'registerviewcontroller' },
    layout: 'center',

    items: [
        {
            title: 'რეგისტრაცია',
            xtype: 'formpanel',
            width: 300,
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield',
                labelWidth: 80,
                width: '100%',
                margin: '5 0' // Add some margin between items
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'სახელი:',
                    placeholder: 'შეიყვანეთ სახელი',
                    reference: 'nameField',
                    name: 'name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    label: 'გვარი:',
                    placeholder: 'შეიყვანეტ გვარი',
                    reference: 'surnameField',
                    name: 'surname',
                    allowBlank: false
                },
                {
                    xtype: 'emailfield',
                    label: 'ელ-ფოსტა:',
                    placeholder: 'შეიყვანეტ ელ-ფოსტა',
                    reference: 'emailField',
                    name: 'email',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    label: 'პირადი ნომერი:',
                    placeholder: 'შეიყვანეთ პირადი ნომერი',
                    reference: 'privateNumberField',
                    name: 'privateNumber',
                    allowBlank: false
                },
                {
                    xtype: 'passwordfield',
                    label: 'პაროლი:',
                    placeholder: 'შეიყვანეთ პაროლი',
                    reference: 'passwordField',
                    name: 'password',
                    inputType: 'password',
                    allowBlank: false
                },
                {
                    xtype: 'passwordfield',
                    label: 'პაროლის დასტური:',
                    placeholder: 'ხელახლა შეიყვანეთ პაროლი',
                    reference: 'confirmPasswordField',
                    name: 'confirmPassword',
                    inputType: 'password',
                    allowBlank: false
                }
            ],
            buttons: [
                {
                    text: 'შესვლა',
                    formBind: true,
                    handler: 'onLoginClick'
                },
                {
                    text: 'რეგისტრაცია',
                    formBind: true,
                    handler: 'onRegisterClick'
                }
            ]
        }
    ]
});
