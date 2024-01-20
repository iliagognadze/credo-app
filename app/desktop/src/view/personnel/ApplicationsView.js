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
        mode: 'SINGLE'
    },
    columns: [
        {
            text: 'სესხის ტიპი',
            dataIndex: 'loanType',
            editable: true,
            width: 100,
            renderer: function(value) {
                switch (value) {
                    case 'auto':
                        return 'ავტო სესხი'
                    case 'fast':
                        return 'სწრაფი სესხი'
                    case 'installment':
                        return 'განვადება'
                    default:
                        return value
                }
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
                switch (value) {
                    case 'sent':
                        return 'გადაგზავნილი'
                    case 'processing':
                        return 'მუშავდება'
                    case 'approved':
                        return 'დამტკიცებული'
                    case 'declined':
                        return 'უარყოფილი'
                    default:
                        return value
                }
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
            handler: 'addApplicationClickHandler', 
            docked: 'bottom',
            ui: 'action',
            margin: '0 0 10 0',
            textAlign: 'right'
        }
    ]
});
