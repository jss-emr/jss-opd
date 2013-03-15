Ext.define('Jss.Outpatient.view.observation.ObservationSummaryPanel', {
    extend:'Ext.Container',
    alias:"widget.observationSummaryPanel",

    config:{
        layout:'fit',
        scroll:'both',
    },

    initialize: function() {
    	this.list = this.addSummaryList();
        this.factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
    },

    addSummaryList: function() {
        var widget = Ext.create('Ext.dataview.DataView', {
    		store: this.config.store,
            itemTpl: this.config.itemTpl || Ext.create('Jss.Outpatient.view.observation.SummaryTemplate'),
            cls: 'observationSummary',
            selectedCls: '',
            scroll:'both',
            inline: true,
    	});

    	this.store = widget.getStore();

        widget.on('itemtap', this.showOptionsPanel, this);

    	this.add(widget);
    	return widget;
    },

    addData: function(observation) {
        var existingObservation = this.store.findRecord('name', observation.get('name'));
        if(existingObservation){
            existingObservation.set('concept', observation.get('concept'));
            existingObservation.set('value', observation.get('value'));
            existingObservation.set('summary', observation.get('summary'));
            return;
        }
		this.store.add(observation);
    },

    showOptionsPanel:function(list, index, target, record){
        this.selectedObservation = record;

        if(this.factory.getObject(record.get('concept')).$className == "Jss.Outpatient.view.concept.SimpleUIElement") {
            this.showDeleteMenuOption(target);
            return;
        }

        this.showDetailsForEdit(list, index, target, record);
    },

    showDeleteMenuOption: function(target) {
        this.actionPanel = Ext.create('Jss.Outpatient.view.util.MenuPanel', {
            menuOptions: [{displayText: 'Delete', tapEventName: 'delete'}]
        });
        this.actionPanel.showBy(target);
        this.actionPanel.on('delete', this.deleteSimpleObservation, this);
    },

    deleteObservation:function(concept){
        var existingObservation = this.store.findRecord('name', concept.get('name'));
        if(existingObservation)
            this.store.remove(existingObservation);
    },

    deleteSimpleObservation: function() {
        this.store.remove(this.selectedObservation);
        this.clearActionPanel();
    },

    showDetailsForEdit: function(list, index, target, record){
        this.selectedObservation = record;
        this.fireEvent('editItem', this.selectedObservation);
    },

    clearActionPanel: function() {
        this.actionPanel.destroy();
        this.selectedObservation = null;
    },
});