Ext.define('Jss.Outpatient.view.util.ArrayMultiSelectionBox', {
    extend: 'Jss.Outpatient.view.util.ArraySelectionBox',
    alias : 'widget.arrayMultiSelectionBox',

    config: {
        mode: 'MULTI',
    },

    initialize: function() {
        this.callParent();
        this.setItemTpl('<input class="mutliSelectInput" type="checkbox" disabled> ' + this.config.itemTpl);
        this.on('itemtap', function(scope, index, target) {
            Ext.query('.mutliSelectInput').forEach(function(d) {d.checked = false});
            Ext.query('.x-item-selected .mutliSelectInput').forEach(function(d) {d.checked = true});
        });
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
            var index = self.getStore().find(fieldName, value[fieldName] || value, 0, false, false, true);
            if(index >= 0) {
                self.select(index, true);
            }
        });

        Ext.query('.x-item-selected .mutliSelectInput').forEach(function(dom) {
            dom.checked = true;
        });
    },

});