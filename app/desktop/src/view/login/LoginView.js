Ext.define('CredoApp.view.login.LoginView', {
    extend: 'Ext.panel.Panel',
    xtype: 'loginview',
    controller: { type: 'loginviewcontroller' },
    layout: 'center',

    items: [
        {
            title: 'ავტორიზაცია',
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
                    xtype: 'emailfield',
                    label: 'E-mail:',
                    placeholder: 'შეიყვანეტ ელ-ფოსტა',
                    reference: 'emailField',
                    name: 'email',
                    allowBlank: false
                },
                {
                    xtype: 'passwordfield',
                    label: 'Password:',
                    placeholder: 'შეიყვანეთ პაროლი',
                    reference: 'passwordField',
                    name: 'password',
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
