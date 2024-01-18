Ext.define('CredoApp.Application', {
	extend: 'Ext.app.Application',
	name: 'CredoApp',
	requires: ['CredoApp.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()

		// It's important to note that this type of application could use
		// any type of storage, i.e., Cookies, LocalStorage, etc.
		var loggedIn;

		// Check to see the current value of the localStorage key
		loggedIn = localStorage.getItem("accessToken");

		console.log(loggedIn)

		var whichView = loggedIn ? 'mainview' : 'loginview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
