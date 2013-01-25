Ext.define('Jss.Outpatient.controller.InstructionController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            instructionSelector: '#instructionSelector',
            instructionSummaryList: '#instructionSummaryList',
            instructionSummaryPanel: '#instructionSummaryPanel'
        },
        control: {
            instructionSelector: {
                initialize: 'flagInitialize',
                change: 'addInstruction', //this is fired even when selectbox loads.
            },
            instructionSummaryPanel:{
                containerDoubleTab:'gotoEditPage'
            }
        }
    },

    flagInitialize : function() {
        this.instructionSelectorJustInitialized = true
    },

    addInstruction: function() {
        if(this.instructionSelectorJustInitialized == true) {
            this.instructionSelectorJustInitialized = false;
            return;
        }

        this.getInstructionSummaryList().getStore().add(this.getInstructionSelector().getRecord());
    },

    gotoEditPage: function() {
        Ext.getCmp('mainview').push(Ext.getCmp('instruction-card'));
    }
});