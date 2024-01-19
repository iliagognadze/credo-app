Ext.define('CredoApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    loanTypeOptions: [
        {
            text: 'სწრაფი სესხი',
            value: 'fast'
        },
        {
            text: 'ავტო სესხი',
            value: 'auto'
        },
        {
            text: 'განვადება',
            value: 'installment'
        }
    ],

    periodOptions: [
        {
            text: '6 თვე',
            value: '6 Months'
        },
        {
            text: '1 წელი',
            value: '1 Year'
        },
        {
            text: '2 წელი',
            value: '2 Years'
        }
    ],

    currencyOptions: [
        {
            text: 'GEL',
            value: 'GEL'
        },
        {
            text: 'USD',
            value: 'USD'
        },
        {
            text: 'EUR',
            value: 'EUR'
        }
    ],


    onEditClickHandler: function(button) {
        const gridRow = button.up('gridrow');

        if (gridRow) {
            const controller = this;

            const selectedRecord = gridRow.getRecord();
            console.log(selectedRecord);

            const loanApplication = selectedRecord.data;
            console.log(loanApplication)

            if (loanApplication.status === 'approved' ||
                loanApplication.status === 'declined') {
                Ext.Msg.alert('წარუმატებელი ოპერაცია!',
                    'თქვენ არ გაქვთ განაცხადის რედაქტირების უფლება მისი სტატუსის გამო.')

                return
            }

            Ext.create('Ext.window.Window', {
                title: 'განაცხადის რედაქტირება',
                modal: true,
                width: 400,
                layout: 'fit',
                items: [{
                    xtype: 'formpanel',
                    items: [
                        {
                        xtype: 'selectfield',
                        name: 'loanType',
                        label: 'სესხის ტიპი:',
                        reference: 'loanTypeReference',
                        value: loanApplication.loanType,
                        options: this.loanTypeOptions
                        },
                        {
                            xtype: 'numberfield',
                            name: 'amount',
                            label: 'თანხა:',
                            value: loanApplication.amount
                        },
                        {
                            xtype: 'selectfield',
                            name: 'currency',
                            label: 'ვალუტა:',
                            value: loanApplication.currency,
                            options: this.currencyOptions
                        },
                        {
                            xtype: 'selectfield',
                            name: 'period',
                            label: 'პერიოდი:',
                            value: loanApplication.period,
                            options: this.periodOptions
                        }
                    ],
                    buttons: [{
                        text: 'შენახვა',
                        handler: function(button) {
                            let form = button.up('formpanel'); // Assuming 'formpanel' is the correct xtype
                            if (form) {
                                const applicationUpdateRequest = {}

                                form.getItems().each(item => {
                                    if (item.getValue) {
                                        applicationUpdateRequest[item.getName()] = item.getValue();
                                    }
                                })

                                const accessToken = localStorage.getItem('accessToken')

                                Ext.Ajax.request({
                                    url: `http://localhost:5108/api/applications/${loanApplication.id}`,
                                    method: 'PUT',
                                    jsonData: applicationUpdateRequest,
                                    headers: {
                                        'Authorization': `Bearer ${accessToken}`
                                    },
                                    success: function(result, action, response) {
                                        controller.getView().getStore().load()

                                        Ext.Viewport.add([{
                                            xtype: 'personnelview'
                                        }])

                                        Ext.Msg.alert('წარმატებული ოპერაცია!', 'განაცხადი წარმატებით განახლდა')
                                    }.bind(this),

                                    fail: function(result, action, response) {
                                        console.log(response);
                                    },

                                    scope: this
                                });

                                form.up('window').close();
                            } else {
                                console.error('Unable to find formpanel.');
                            }
                        }
                    },
                        {
                            text: 'გაუქმება',
                            handler: function() {
                                // Close the window on cancel
                                this.up('window').close();
                            }
                        }
                    ]
                }]
            }).show();
        } else {
            console.error('Unable to find grid row.');
        }
    },
    onSubmitClickHandler: function(button) {
        console.log('submit clicked');
    },
    onDeleteClickHandler: function(button) {
        const gridRow = button.up('gridrow')

        if (gridRow) {
            const selectedRecord = gridRow.getRecord()

            const loanApplication = selectedRecord.data

            const accessToken = localStorage.getItem('accessToken')

            if (loanApplication.status === 'approved' ||
                loanApplication.status === 'declined') {
                Ext.Msg.alert('წარუმატებელი ოპერაცია!',
                    'თქვენ არ გაქვთ განაცხადის წაშლის უფლება მისი სტატუსის გამო.')

                return
            }

            Ext.Ajax.request({
                url: `http://localhost:5108/api/applications/${loanApplication.id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                success: function(result, action, response) {
                    this.getView().getStore().load()

                    Ext.Viewport.add([{
                        xtype: 'personnelview'
                    }])

                    Ext.Msg.alert('წარმატებული ოპერაცია!', 'განაცხადი წარმატებით წაიშალა')
                },

                fail: function(result, action, response) {
                    console.log(response);
                },

                scope: this
            });
        } else {
            console.error('Unable to find grid row.')
        }
    },

    addApplicationClickHandler: function(button) {
        const controller = this;

        Ext.create('Ext.window.Window', {
            title: 'ახალი განაცხადის დამატება',
            modal: true,
            width: 400,
            layout: 'fit',
            items: [{
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'selectfield',
                        name: 'loanType',
                        label: 'სესხის ტიპი:',
                        reference: 'loanTypeReference',
                        options: controller.loanTypeOptions
                    },
                    {
                        xtype: 'numberfield',
                        name: 'amount',
                        label: 'თანხა:',
                    },
                    {
                        xtype: 'selectfield',
                        name: 'currency',
                        label: 'ვალუტა:',
                        options: controller.currencyOptions
                    },
                    {
                        xtype: 'selectfield',
                        name: 'period',
                        label: 'პერიოდი:',
                        options: controller.periodOptions
                    }
                ],
                buttons: [{
                    text: 'დამატება',
                    handler: function(button) {
                        let form = button.up('formpanel'); // Assuming 'formpanel' is the correct xtype
                        if (form) {
                            const applicationCreationRequest = {}

                            form.getItems().each(item => {
                                if (item.getValue) {
                                    applicationCreationRequest[item.getName()] = item.getValue();
                                }
                            })


                            const accessToken = localStorage.getItem('accessToken')

                            Ext.Ajax.request({
                                url: `http://localhost:5108/api/applications`,
                                method: 'POST',
                                jsonData: applicationCreationRequest,
                                headers: {
                                    'Authorization': `Bearer ${accessToken}`
                                },
                                success: function(result, action, response) {
                                    controller.getView().getStore().load()

                                    Ext.Viewport.add([{
                                        xtype: 'personnelview'
                                    }])

                                    Ext.Msg.alert('წარმატებული ოპერაცია!', 'ახალი განაცხადი წარმატებით დაემატა')
                                }.bind(this),

                                fail: function(result, action, response) {
                                    console.log(response);
                                },

                                scope: this
                            });

                            form.up('window').close();
                        } else {
                            console.error('Unable to find formpanel.');
                        }
                    }
                },
                    {
                        text: 'გაუქმება',
                        handler: function() {
                            // Close the window on cancel
                            this.up('window').close();
                        }
                    }
                ]
            }]
        }).show();
    }
});