Ext.define('Jss.Outpatient.Treatment.view.new.AutocompleteContainer', {
	extend: 'Ext.Container',
	alias: 'widget.autocomplete',

	config: {
		scroll: 'both',

		items: [
			{
				xtype: 'fieldset',
				width: '100%',
				layout: 'vbox',
				height: 50,
				items: [
					{
		                xtype: 'textfield',
		                id: 'drugAutocompleteSearchField',
		                placeHolder: 'Search Drugs .. ',
        				height:50,
	            	}
				]
			},
		]
	},

	setSearchFieldValue: function(value) {
		var textfield = Ext.getCmp('drugAutocompleteSearchField');
		textfield.setValue(value);
	},

	createListBox: function(keyword) {
		this.removeListBox();
		this.listbox = Ext.create('Jss.Outpatient.Treatment.view.new.AutocompleteListBox', {id: 'autocompleteListBox'});
		this.listbox.loadData(keyword);

		this.add(this.listbox);

		return this.listbox;
	},

	clear: function() {
		this.setSearchFieldValue('');
		this.removeListBox();
	},

	removeListBox: function() {
		if(this.listbox != null) {
			this.remove(this.listbox);
		}
	}
})