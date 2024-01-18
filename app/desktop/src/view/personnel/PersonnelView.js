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
    columns: [
        {
            text: 'სესხის ტიპი',
            dataIndex: 'loanType',
            editable: true,
            width: 100,
            cell: { userCls: 'bold' }
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
            width: 100
        },
        {
            text: 'სტატუსი',
            dataIndex: 'status',
            width: 100
        },
        {
            width: 130,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: 'რედაქტირება',
                    handler: 'onButtonClick'
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
                    handler: 'onButtonClick'
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
                    handler: 'onButtonClick'
                }
            }
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
