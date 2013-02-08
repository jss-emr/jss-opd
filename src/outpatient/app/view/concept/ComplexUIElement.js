Ext.define('Jss.Outpatient.view.concept.ComplexUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'vbox',
        width:'100%',
        scrollable:false
    },

    for:function (concept) {
        this.concept = concept;
        var answers = concept.getAnswers();
        var factory = Ext.create('Jss.Outpatient.view.concept.UIElementFactory');
        for (var i = 0; i < answers.length; i++) {
            var concept = new Jss.Outpatient.model.concept.Concept(answers[i]);
            var widget = factory.get(concept);
            this.add(widget);
        }
        return this;
    },

    getValue:function () {
        var obs = Ext.create('Jss.Outpatient.model.concept.Observation', {
            name: this.concept.get('name'),
            concept:this.concept
        });

        var summaries = this.getItems().items.map(function(item) {return item.getValue().get('summary')});
        obs.set('summary', obs.get('concept').get('name') + "{" + summaries.concat(",") + "}");
        return obs;
    },

    isValid:function () {
        return true;
    },

    setValueFrom: function(observation) {
    },

});