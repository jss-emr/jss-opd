Ext.define('Jss.Outpatient.view.diagnosis.DiagnosisObservationSummaryPanel', {
    extend: 'Jss.Outpatient.view.observation.ObservationSummaryPanel',
    alias: 'widget.diagnosisObservationSummaryPanel',

    showOptionsPanel:function(list, index, target, record){
        this.selectedObservation = record;

        this.actionPanel = Ext.create('Jss.Outpatient.view.util.MenuPanel', {
            menuOptions: [
                {displayText: 'Discard', tapEventName: 'discard'},
                {displayText: 'unDiscard', tapEventName: 'undiscard'},
                {displayText: 'Mark as Final', tapEventName: 'finalized'},
            ]
        });
        this.actionPanel.showBy(target);

        this.actionPanel.on('discard', this.discardDiagnosis, this);
        this.actionPanel.on('undiscard', this.unDiscardDiagnosis, this);
        this.actionPanel.on('finalized', this.finalizeDiagnosis, this);
    },

    discardDiagnosis: function() {
        this.actionPanel.destroy();
        this.selectedObservation.set('discarded', true);
    },

    unDiscardDiagnosis: function() {
        this.actionPanel.destroy();
        this.selectedObservation.set('discarded', false);
    },

    finalizeDiagnosis: function() {
        this.actionPanel.destroy();
        this.selectedObservation.set('finalized', false);    
    }

 })
