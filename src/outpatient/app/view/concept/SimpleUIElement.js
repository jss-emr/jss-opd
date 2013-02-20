Ext.define('Jss.Outpatient.view.concept.SimpleUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',

    config:{
        height:100,
        layout:'hbox',
        style:'background-color : whitesmoke; padding: 10px; border-radius: 10px;'
    },

    for:function (concept) {
        this.concept = concept;
        this.conceptLabel = Ext.create('Ext.Label',{
            flex:1,
            height:50,
            html: '<b>' + this.concept.get('name') + '</b>'
        })
        this.add(this.conceptLabel);
        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            name: this.concept.get('name'),
            concept:this.concept,
            value: this.concept.get('name'),
            summary: this.getSummary()
        });
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name ;
    },

    setValueFrom:function(observation){
        this.conceptLabel.setHtml('<b>' + observation.get('name') + '</b>')
    },

    isDefault:function(){
        return true;
    },
});