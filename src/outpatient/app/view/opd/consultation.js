
Ext.define('Jss.Outpatient.view.opd.consultation', {
    extend: 'Ext.Container',
    alias: 'widget.consultation',
    id: 'opd-panel',
    requires: ['Jss.Outpatient.view.opd.patient','Jss.Outpatient.view.opd.examination','Jss.Outpatient.view.opd.history'],
    config: {
        layout: {
            type: 'vbox'
        },
        style: 'background-color: #FFFFFF',
        title: 'Consultation',
        activeItem: 0,
        items: [
          {
            xtype: 'button',
            text: 'Back',
            width: 150 ,
            id :'back-button',
            hidden:true,
            listeners: {
                tap: {
                    fn: function(event, div, listener) {
                        var cmp2 = Ext.getCmp('examination-panel');
                        var cmp1 = Ext.getCmp('history-panel');
                        var cmp3 = Ext.getCmp('patient-panel');
                        var cmp4 = Ext.getCmp('bottom-panel');

                        cmp1.show();
                        cmp2.show();
                        cmp3.show();
                        cmp4.show();

                        this.hide();
                    }
                }
            },
          },
          {
            xtype: 'container',
            flex: 1,
            html: '',
            margin: 5,
            border: 1,
            layout: {
                type: 'hbox'
            } ,
            items: [{
                xtype: 'history',
                flex: 2,
                html: 'History',
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            },{
                xtype: 'examination',
                flex: 2,
                html: 'Examination',
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            },{
                xtype: 'patient',
                flex: 1,
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            }],
            style: 'background-color: #FFFFFF'
        },
        {
            xtype: 'container',
            flex: 1,
            html: '',
            margin: 5,
            border: 1 ,
            style: 'background-color: #FFFFFF',
            id: 'bottom-panel',
            layout: {
                 type: 'hbox'
             } ,
                items: [{
                    xtype: 'container',
                    flex: 2,
                    html: 'Diagnosis',
                    margin: 5,
                    border: 1,
                    id: 'diagnosis-panel',
                    style: 'background-color: #7FADCF'
                },{
                    xtype: 'container',
                    flex: 2,
                    html: 'Treatment',
                    margin: 5,
                    border: 1,
                    id: 'instruction-panel',
                    style: 'background-color: #7FADCF'
                },{
                    xtype: 'container',
                    flex: 1,
                    html: 'Instruction',
                    margin: 5,
                    border: 1,
                    id: 'treatment-panel',
                    style: 'background-color: #7FADCF'
                }]
            }
        ]
    }
    }

)
;
