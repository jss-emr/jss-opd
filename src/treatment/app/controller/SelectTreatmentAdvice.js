Ext.define('Jss.Treatment.controller.SelectTreatmentAdvice', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			selectDrugStrength: '#selectDrugStrength',
		},

		control: {
			selectDrugStrength: {
				itemtap: function(listView, index, item) {
					console.log(listView.getRecord(index));
					console.log(listView.getStore().getAt(index).data);
				}
			}
		}
	}
})