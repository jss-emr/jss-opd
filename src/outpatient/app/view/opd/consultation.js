Ext.define('Jss.Outpatient.view.opd.consultation', {
    extend: 'Ext.Container',
    alias: 'widget.consultation',
    id: 'opd-panel',
    config: {
        layout: {
            type: 'vbox'
        },
        style: 'background-color: #FFFFFF',
        title: 'Consultation',
        activeItem: 0,
        items: [{
            xtype: 'container',
            flex: 1,
            html: 'My flex is 1',
            margin: 5,
            border: 1,
            layout: {
                type: 'hbox'
            } ,
            items: [{
                xtype: 'container',
                flex: 1,
                html: 'History',
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            },{
                xtype: 'container',
                flex: 1,
                html: 'Patient Details',
                margin: 5,
                border: 1,
                style: 'background-color: #FFFFFF'
            }],
            style: 'background-color: #7FADCF'
        },
        {
            xtype: 'container',
            height: 80,
            html: 'My height is 80',
            margin: 5,
            border: 1 ,
            style: 'background-color: #7FADCF',
            layout: {
                 type: 'hbox'
             } ,
                items: [{
                    xtype: 'container',
                    flex: 1,
                    html: 'My flex is 1',
                    margin: 5,
                    border: 1,
                    style: 'background-color: #7FADCF'
                },{
                    xtype: 'container',
                    flex: 1,
                    html: 'My flex is 2',
                    margin: 5,
                    border: 1,
                    style: 'background-color: #FFFFFF'
                }]
            },
           {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            html: '<div id="hello"> Bottom</div>',
            border: 1
        }, {
            xtype: 'container',
            height: 50,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            html: '<div id="footer">Footer</div>'
            }
        ]
    }})
;
