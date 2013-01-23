Ext.define('Jss.Outpatient.view.util.ArraySelectionBox', {
	extend: 'Ext.dataview.List',
	alias : 'widget.arraySelectionBox',

	config: {
		centered: true,
		itemTpl: '{value}',
        height: '100%',
        scrollable: true,
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
        return selectedValues[0];
    }

})
