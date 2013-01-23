Ext.define('Jss.Outpatient.view.util.ArraySelectionBox', {
	extend: 'Ext.dataview.List',
	alias : 'widget.arraySelectionBox',

	config: {
		centered: true,
		itemTpl: '{value}',
        height: '100%',
        scrollable: true,
	},

    isPrimitiveData: true,

    addData: function (array) {
        this.setStore(Ext.create('Ext.data.Store', {
            data: this._wrapDataIfPrimitive(array)
        }));

        this.refresh();
        return this;
    },

    getSelectedValue: function () {
        var selectedValues = this.getSelection();
        if (selectedValues.length <= 0) {
            return null;
        }

        return (this.isPrimitiveData === true) ? selectedValues[0].get('value') : selectedValues[0].getData();
    },

    _wrapDataIfPrimitive: function(array) {
        var self = this;
        return array.map(function (element) {
            if (element instanceof Object) {
                self.isPrimitiveData = false;
                return element;
            }
            return {'value': element};
        });
    },
})
