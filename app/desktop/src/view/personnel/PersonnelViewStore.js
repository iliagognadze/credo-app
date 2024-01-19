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
    proxy: {
        type: 'rest',
        url: 'http://localhost:5108/api/applications',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
    },
    autoLoad: true
});
