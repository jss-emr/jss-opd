Ext.define('Jss.Outpatient.model.concept.Concept', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: "name"},
            {name: "id"},
            {name: "properties", type: "auto"},
        ]
    },
    conceptName: function() {
        var name = this.get("name");
        var props = this.get("properties");
        var conceptProperties = props.datatype.properties;
        if (conceptProperties !== null && conceptProperties !== undefined) {
            return  conceptProperties.unit != undefined ?  name + ' (' + conceptProperties.unit + ')' : name;
        }
        return name;
    },
    getUnit : function(){
        var properties = this.get("properties").datatype.properties;
        return properties !== null && properties !== undefined && properties.unit !== undefined ? properties.unit : '';
    } ,

    getAnswers : function(){
        return this.get('properties').datatype.properties.answers;
    },

    getName : function(){
        return this.get('name');
    },

    makeFor : function(name){
        this.name = name;
        this.properties= '{ datatype: {name: "N/A"}, conceptClass : "Test"}';
        this.id='127.0UUID';
        return this;
    },

    getDatatype: function() {
        var datatype = this.get('properties').datatype;
        if(datatype instanceof Object)
            return datatype.name;
        return datatype;
    }
});