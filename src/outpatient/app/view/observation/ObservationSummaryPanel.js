Ext.define('Jss.Outpatient.view.observation.ObservationSummaryPanel', {
    extend:'Ext.Container',
    alias:"widget.observationSummaryPanel",

    config:{
        layout:'fit',
        scroll:'both',
    },

    initialize: function() {
    	this.list = this.addSummaryList();
    },

    addSummaryList: function() {
    	var widget = Ext.create('Ext.dataview.List', {
    		store: this.config.store,
            itemTpl: Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
            cls: 'observationSummary',
            selectedCls: '',
            scroll:'both',
            inline: true,
    	});

    	this.store = widget.getStore();

    	widget.on('itemswipe', function(list, index, target, record, event) {this.fireEvent('itemswipe', list, index, target, record, event)}, this);

    	this.add(widget);
    	return widget;
    },

    addData: function(observation) {
		this.store.add(observation);
    },
});