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
        var menuOptions = this.config.menuOptions || [
            {displayText: 'Edit', tapEventName: 'edit', iconCls: 'compose'},
            {displayText: 'Delete', tapEventName: 'delete', iconCls: 'trash'},
        ];

        this.actionPanel = Ext.create('Jss.Outpatient.view.util.MenuPanel', {menuOptions: menuOptions});
        this.actionPanel.showBy(target);

        this.actionPanel.on('delete',this.deleteObservation, this);
        this.actionPanel.on('edit', this.showDetailsForEdit, this);
    },

    deleteObservation:function(){
        this.store.remove(this.selectedObservation);
        this.clearActionPanel();
    },

    showDetailsForEdit: function(){
        this.actionPanel.destroy();
        this.fireEvent('editItem', this.selectedObservation);
    },

    clearActionPanel: function() {
        this.actionPanel.destroy();
        this.selectedObservation = null;
    },
});