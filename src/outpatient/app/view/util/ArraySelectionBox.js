Ext.define('Jss.Outpatient.view.util.ArraySelectionBox', {
	extend: 'Ext.dataview.List',
	alias : 'widget.arraySelectionBox',

    config: {
        height: 300,
        centered: true,
        itemTpl: '{value}'
    },

    addData: function (array) {
        this.setStore(Ext.create('Ext.data.Store', {
            data: array.map(function (element) {
                if (element instanceof Object) {
                    return element;
                }
                return {'value': element};
            })
        }));

        this.refresh();
        return this;
    },

    getSelectedValue: function () {
        var selectedValues = this.getSelection();
        if (selectedValues.length <= 0) {
            return null;
        }
        if (selectedValues[0] instanceof Object) return selectedValues[0];
        return selectedValues[0].data.value;
    }

})
