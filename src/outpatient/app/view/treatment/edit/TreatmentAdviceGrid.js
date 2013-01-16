Ext.define('Jss.Outpatient.view.treatment.edit.TreatmentAdviceGrid', {
	extend: 'Ext.ux.touch.grid.List',
    alias: 'widget.treatmentAdviceGrid',


    config: {
        id: 'treatmentAdviceGrid',
	    store: 'TreatmentAdvice',
	    features: [
            {
                ftype    : 'Ext.ux.touch.grid.feature.Editable',
                launchFn : 'initialize'
            }
        ],

        listeners: {
            itemswipe: function(grid, index, target, record) {
                grid.getStore().remove(record);
            }
        },

        columns: [
            {
                header    : 'Medicine',
                dataIndex : 'medicine',
                style     : 'padding-left: 1em;',
                width     : '20%',
                editor    : {
                    xtype : 'textfield'
                }
            },
            {
                header    : 'mg',
                dataIndex : 'mg',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Morning',
                dataIndex : 'morning',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Noon',
                dataIndex : 'noon',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Evening',
                dataIndex : 'evening',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Night',
                dataIndex : 'night',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Days',
                dataIndex : 'days',
                style     : 'text-align: center;',
                width     : '10%',
                editor    : {
                    xtype : 'numberfield'
                }
            },
            {
                header    : 'Instruction',
                dataIndex : 'instruction',
                style     : 'text-align: center;',
                width     : '20%',
                editor    : {
                    xtype : 'textfield'
                }
            },
        ]
    }

});