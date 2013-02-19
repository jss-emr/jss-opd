Ext.define('Jss.Outpatient.view.util.ArrayMultiSelectionBox', {
    extend: 'Jss.Outpatient.view.util.ArraySelectionBox',
    alias : 'widget.arrayMultiSelectionBox',

    config: {
        mode: 'MULTI',
    },

    getSelectedValue: function() {
        var self = this;
        var selectedValues = this.getSelection();
        return selectedValues.map(function(element) {
            return (self.isPrimitiveData === true) ? element.get('value') : element.getData();
        });
    },

    selectRecord: function(values, fieldName) {
        var self = this;
        if(values == null || values == undefined)
            return;
        values.forEach(function(value) {
            var index = self.getStore().find(fieldName, value[fieldName] || value);
            if(index >= 0) {
                self.select(index, true);
            }
        });
    },

});