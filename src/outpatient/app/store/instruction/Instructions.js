Ext.define('Jss.Outpatient.store.instruction.Instructions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Observation',
    },

    addObservation :function(observation){
        var index = this.find('name', observation.data.name);
        var existingModel = this.getAt(index);
        if(existingModel != null){
            this.removeAt(index)
            this.insert(index,observation);
        }
        else{
            this.add(observation);
        }
    }
});