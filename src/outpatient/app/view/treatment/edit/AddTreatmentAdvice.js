Ext.define('Jss.Outpatient.view.treatment.edit.AddTreatmentAdvice', {
	extend: 'Ext.Container',
	alias: "widget.addTreatmentAdvice",

	config: {
		layout: 'hbox',
		id: 'addTreatmentAdvice',
		scroll: 'both',

		items: [
			{
				xtype: 'autoComplete',
				id: 'drugAutocompletePanel',
                placeHolder: 'Search Medicine name ...',
				width: '20%',
                store: 'MedicineDetails',
                itemTpl: '{name}',
                filterKey: 'name',
			},
		]
	},

	loadDetailsPanel: function(drug) {
        this._removeDetailsPanel();

		this.detailsPanel = this.add({
			xtype: 'addTreatmentAdviceDetailsPanel',
			id: 'addTreatmentAdviceDetailsPanel',
		});

		this.detailsPanel.showFor(drug);
		return this.detailsPanel;
	},

	clear: function() {
		Ext.getCmp('drugAutocompletePanel').clear();
		this._removeDetailsPanel();
	},

	_removeDetailsPanel : function() {
		if(this.detailsPanel != null) {
			this.remove(this.detailsPanel);
		}
	}
})