Ext.define('Jss.Outpatient.view.concept.BaseUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
        width:'100%'
    },
      
    setValueFrom: function(observation) {
    },

    isDefault:function(){
        return false;
    },

    setValueFrom: function(observation) {
    },

    getValue:function () {
    },

    for:function (concept) {
    },

    getValueAsString: function() {
        return this.concept.get('name');
    },
});