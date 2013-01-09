Ext.define('Jss.Outpatient.view.treatment.AddTreatmentAdvice', {
	extend: 'Ext.Container',
	alias: "widget.add_treatment_advice",

	config: {
		layout: 'hbox',
		id: 'addTreatmentAdvice',
		scroll: 'both',

		items: [
			{
				xtype: 'autocomplete',
				id: 'drugAutocompletePanel',
				width: '20%',
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