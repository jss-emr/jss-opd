Ext.define('Jss.Outpatient.view.treatment.new.AutocompleteListBox', {
	extend: 'Ext.Panel',
	alias: 'widget.autocompleteListBox',

	config: {
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
        var list = Ext.create('Ext.dataview.List', {
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

        list.getStore().filter('name', keyword);
        list.getStore().load();
		this.add(list);
	},

	getSelectedRecord: function() {
		return this.selectedRecord;
	}
})