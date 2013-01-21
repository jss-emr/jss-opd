Ext.define('Jss.Outpatient.view.util.ArrayMultiSelectionBox', {
    extend: 'Jss.Outpatient.view.util.ArraySelectionBox',
    alias : 'widget.arrayMultiSelectionBox',

    config: {
        mode: 'MULTI',
    },

    getSelectedValue: function() {
        var selectedValues = this.getSelection();
        return selectedValues.map(function(element) {return element.data.value});
    }
});