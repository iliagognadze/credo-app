Ext.define('CredoApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', 'Confirm cancel?', 'onConfirm', this);
    },
    onButtonClick: () => {
        console.log('WoW');
    }
});
