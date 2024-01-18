Ext.define('CredoApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'loanType',
        'amount',
        'currency',
        'period',
        'status'
    ],
    groupField: 'loanType',
    data: { items: [
        {
            loanType: 'auto',
            amount: 133.54,
            currency: 'gel',
            period: '1 year',
            status: 'active'
        }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
