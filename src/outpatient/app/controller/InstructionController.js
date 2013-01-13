Ext.define('Jss.Outpatient.controller.InstructionController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            instructionSelector: '#instructionSelector',
            instructionSummaryList: '#instructionSummaryList'
        },

        control: {
            instructionSelector: {
                initialize: 'flagInitialize',
                change: 'addInstruction', //this is fired even when selectbox loads.
            },
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
    }
});