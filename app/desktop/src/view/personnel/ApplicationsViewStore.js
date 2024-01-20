Ext.define('CredoApp.view.applications.ApplicationsViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.applicationsviewstore',
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
        url: 'http://credoapi-dev.eba-apnu7tgz.eu-central-1.elasticbeanstalk.com/api/applications',
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
