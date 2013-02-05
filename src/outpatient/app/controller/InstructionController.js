Ext.define('Jss.Outpatient.controller.InstructionController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            instructionSummaryPanel: '#instructionSummaryPanel',
            addObservationsPanel:'#instruction-addObservationsPanel',
            observationsSummaryPanel:'#instruction-observationSummaryPanel',
            optionsPanel:'#optionsPanel'
        },
        control: {
            instructionSummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            },
            addObservationsPanel: {
                observationDetailsCaptured: 'addObservation'
            },
            optionsPanel:{
                tap:'editListItem'
            },
            observationsSummaryPanel:{
                itemtaphold : 'showOptionsPanel'
            }
        }
    },
    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('instruction-card'));
    },

    addObservation: function(observation) {
        this.getObservationsSummaryPanel().getStore().add(observation);
    },

    editListItem: function(observation){
        this.getAddObservationsPanel().showDetails(observation.getName(), observation.get);
    },

    showOptionsPanel:function(list, index, target, record){
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
        selectedElement = record;
        Ext.create('Ext.Panel', {
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
                    console.log("destroying panel");
                    this.destroy();
                }
            }
        }).showBy(target);

        deleteButton.on('tap',this.deleteObservation);
        editButton.on('tap', this.showDetailsForEdit);
    },

    deleteObservation:function(){
        Ext.getCmp('instruction-observationSummaryPanel').getStore().remove(selectedElement);
        Ext.getCmp('optionsPanel').destroy()
    },

    showDetailsForEdit: function(){
        Ext.getCmp('instruction-observationSummaryPanel').getStore().remove(selectedElement);
        Ext.getCmp('instruction-addObservationsPanel').showForEdit(selectedElement);
        Ext.getCmp('optionsPanel').destroy()
    }
});