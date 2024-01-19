Ext.define('CredoApp.view.personnel.PersonnelView', {
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'personnelviewcontroller' },
    viewModel: { type: 'personnelviewmodel' },
    store: { type: 'personnelviewstore' },
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    selModel: {
        type: 'rowmodel',
        mode: 'SINGLE' // or 'MULTI' if you want to allow multiple selections
    },
    columns: [
        {
            text: 'სესხის ტიპი',
            dataIndex: 'loanType',
            editable: true,
            width: 100,
            renderer: function(value) {
                const loanTypes = {
                    auto: 'ავტო სესხი',
                    fast: 'სწრაფი სესხი',
                    installment: 'განვადება'
                }

                let mappedValue = loanTypes[value]

                return mappedValue ?? value
            }
        },
        {
            text: 'თანხა',
            dataIndex: 'amount',
            editable: true,
            width: 100
        },
        {
            text: 'ვალუტა',
            dataIndex: 'currency',
            editable: true,
            width: 100
        },
        {
            text: 'პერიოდი',
            dataIndex: 'period',
            editable: true,
            width: 100,
        },
        {
            text: 'სტატუსი',
            dataIndex: 'status',
            width: 130,
            renderer: function(value) {
                const loanTypes = {
                    sent: 'გადაგზავნილი',
                    processing: 'მუშავდება',
                    approved: 'დამტკიცებული',
                    declined: 'უარყოფილი'
                }

                let mappedValue = loanTypes[value]

                return mappedValue ?? value
            }
        },
        {
            width: 130,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: 'რედაქტირება',
                    handler: 'onEditClickHandler'
                }
            }
        },
        {
            width: 130,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: 'დადასტურება',
                    handler: 'onSubmitClickHandler'
                }
            }
        },
        {
            width: 100,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: 'წაშლა',
                    handler: 'onDeleteClickHandler'
                }
            }
        }
    ],
    items: [
        {
            xtype: 'button',
            text: '+ განაცხადის დამატება',
            handler: 'addApplicationClickHandler', // Add a handler function in the controller
            docked: 'bottom',
            ui: 'action',
            margin: '0 0 10 0', // Optional margin for spacing
            textAlign: 'right' // Align to the right
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
