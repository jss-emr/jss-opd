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
            return  name + ' (' + conceptProperties.unit + ')';
        }
    },
    getUnit : function(){
        var properties = this.get("properties").datatype.properties;
        return properties !== null && properties !== undefined ? properties.unit : '';
    } ,
    getAnswers : function(){
        return this.get('properties').datatype.properties.answers;
    },
    getDataType : function(){
        return this.get('properties').datatype;
    },
});