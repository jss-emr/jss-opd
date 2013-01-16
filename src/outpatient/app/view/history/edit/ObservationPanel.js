Ext.define('Jss.Outpatient.view.history.edit.ObservationPanel', {
	extend: 'Ext.Container',
	alias: "widget.observationsPanel",

	config: {
		layout: 'hbox',
		id: 'observationsPanel',
		scroll: 'both',
        store: 'Observations',
        inline: true,
        items: [],
    },
});