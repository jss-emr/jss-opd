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

        var editButton = Ext.create('Ext.Button',{
            id:'listItemEdit',
            iconCls:'compose',
            iconMask:true,
            flex:1
        });
        var deleteButton = Ext.create('Ext.Button',{
            id:'listItemDelete',
            iconCls:'trash',
            iconMask:true,
            flex:1
        });

        this.actionPanel = Ext.create('Ext.Panel', {
            id:'optionsPanel',
            left:0,
            padding:10,
            hideOnMaskTap:true,
            modal:true,
            showAnimation:'fadeIn',
            layout:{
                type:'hbox'
            },
            items:[editButton,deleteButton],
            listeners:{
                hide:function(){
                    this.destroy();
                }
            }
        });
        this.actionPanel.showBy(target);

        deleteButton.on('tap',this.deleteObservation, this);
        editButton.on('tap', this.showDetailsForEdit, this);
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