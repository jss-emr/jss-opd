Ext.define('Jss.Outpatient.Treatment.view.new.AutocompleteListBox', {
	extend: 'Ext.Panel',
	alias: 'widget.autocompleteListBox',

	config: {
		id: 'autocompleteListBox',
		cls: "x-simulator-popup",
		floating: true,
		top: 50,
		left: 0,
		height: 200,
		width: '100%',
		items: []
	},

	loadData: function(keyword) {
		var self = this;
		this.add({
			xtype: 'list',
			store: 'MedicineDetails',
			height: 180,
			itemTpl: '{name}',
			listeners: {
				select: function(list, record) {
					self.selectedRecord = record;
					self.fireEvent('drugSelected', record);
				}
			}
		});
	},

	getSelectedRecord: function() {
		return this.selectedRecord;
	}
})