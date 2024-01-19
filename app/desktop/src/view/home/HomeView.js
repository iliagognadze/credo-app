Ext.define('CredoApp.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">მოგესალმებით კორედო ბანკის განაცხადების მოდულში.
<br><br>
ეს მოდული საშუალებას გაძლევთ მართოთ განაცხადების სია
<br>
- გადადით სიის კატალოგში
<br>
- იხილეთ განაცხადები
<br>
- შესაძლებლობა გაქვთ გადააგზავნოთ, განაახლოთ, წაშალოთ განაცხადი
<br>

</div>`
});