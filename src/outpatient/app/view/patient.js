Ext.define('Jss.Outpatient.view.patient', {
    extend: 'Ext.Container',
    xtype: 'patient-panel',
    alias:'widget.patient',
    id: 'patient-panel',
    config: {
        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                layout:'vbox',
                flex: 1,
                items: [
                    {
                        xtype: 'list',
                        flex: 3,
                        id: 'patientPanel',
                        scrollable: 'false',
                        itemTpl: '<table><tr><td>{firstName}, {lastName}</br>Age :{age} years<br/>Village: {village}</td></tr></table>' ,
                        store: 'patient',
                    },
                    {
                        xtype: 'button',
                        id: "symptomsTemplateButton",
                        html: 'Templates',
                        flex: 1,
                        width: '90%',
                    }
                ],
            },
            {
                xtype: 'image',
                layout: 'fit',
                src: '../outpatient/resources/images/no_image.jpeg',
                flex: 1,
            },
        ]
    }
})

