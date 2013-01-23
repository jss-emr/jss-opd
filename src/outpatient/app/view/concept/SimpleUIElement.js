Ext.define('Jss.Outpatient.view.concept.SimpleUIElement', {
    extend:'Ext.form.Panel',

    config:{
        height:100,
//        flex:1,
//        scrollable:'false',
        layout:'hbox'
    },

    for:function (concept) {
        this.concept = concept;

        this.add({
            xtype:'label',
            flex:1,
            height:50,
            html: '<b>' + this.concept.get('name') + '</b>'
        });

        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.concept.get('name'),
            summary: this.getSummary()
        });
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name ;
    },

    isValid:function () {
        return true;
    }
});