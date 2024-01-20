Ext.define('CredoApp.view.applications.ApplicationsView', {
    extend: 'Ext.grid.Grid',
    xtype: 'applicationsview',
    cls: 'applicationsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'applicationsviewcontroller' },
    viewModel: { type: 'applicationsviewmodel' },
    store: { type: 'applicationsviewstore' },
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
            text: '\u10e1\u10d4\u10e1\u10ee\u10d8\u10e1\u0020\u10e2\u10d8\u10de\u10d8',
            dataIndex: 'loanType',
            editable: true,
            width: 100,
            renderer: function(value) {
                const loanTypes = {
                    auto: '\u10d0\u10d5\u10e2\u10dd\u0020\u10e1\u10d4\u10e1\u10ee\u10d8',
                    fast: '\u10e1\u10ec\u10e0\u10d0\u10e4\u10d8\u0020\u10e1\u10d4\u10e1\u10ee\u10d8',
                    installment: '\u10d2\u10d0\u10dc\u10d5\u10d0\u10d3\u10d4\u10d1\u10d0'
                }

                let mappedValue = loanTypes[value]

                return mappedValue ?? value
            }
        },
        {
            text: '\u10d7\u10d0\u10dc\u10ee\u10d0',
            dataIndex: 'amount',
            editable: true,
            width: 100
        },
        {
            text: '\u10d5\u10d0\u10da\u10e3\u10e2\u10d0',
            dataIndex: 'currency',
            editable: true,
            width: 100
        },
        {
            text: '\u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10d8',
            dataIndex: 'period',
            editable: true,
            width: 100,
        },
        {
            text: '\u10e1\u10e2\u10d0\u10e2\u10e3\u10e1\u10d8',
            dataIndex: 'status',
            width: 130,
            renderer: function(value) {
                const loanTypes = {
                    sent: '\u10d2\u10d0\u10d3\u10d0\u10d2\u10d6\u10d0\u10d5\u10dc\u10d8\u10da\u10d8',
                    processing: '\u10db\u10e3\u10e8\u10d0\u10d5\u10d3\u10d4\u10d1\u10d0',
                    approved: '\u10d3\u10d0\u10db\u10e2\u10d9\u10d8\u10ea\u10d4\u10d1\u10e3\u10da\u10d8',
                    declined: '\u10e3\u10d0\u10e0\u10e7\u10dd\u10e4\u10d8\u10da\u10d8'
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
                    text: '\u10e0\u10d4\u10d3\u10d0\u10e5\u10e2\u10d8\u10e0\u10d4\u10d1\u10d0',
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
                    text: '\u10d3\u10d0\u10d3\u10d0\u10e1\u10e2\u10e3\u10e0\u10d4\u10d1\u10d0',
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
                    text: '\u10ec\u10d0\u10e8\u10da\u10d0',
                    handler: 'onDeleteClickHandler'
                }
            }
        }
    ],
    items: [
        {
            xtype: 'button',
            text: '\u002b\u0020\u10d2\u10d0\u10dc\u10d0\u10ea\u10ee\u10d0\u10d3\u10d8\u10e1\u0020\u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0',
            handler: 'addApplicationClickHandler', // Add a handler function in the controller
            docked: 'bottom',
            ui: 'action',
            margin: '0 0 10 0',
            textAlign: 'right'
        }
    ]
});
