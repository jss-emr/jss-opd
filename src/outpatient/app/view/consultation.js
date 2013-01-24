Ext.define('Jss.Outpatient.view.consultation', {
    extend: 'Ext.Container',
    alias: 'widget.consultation',
    id: 'opd-panel',

    requires: [
    ],

    config: {
        layout: 'card',
        title: 'Consultation',
        items:[{
            layout: 'hbox',
            style: 'background-color: #FFFFFF',
            title: 'Consultation',
            id:'consultation',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 5,
                    border: 1,
                    layout: 'vbox',
                    items: [{
                        xtype: 'historySummary',
                        id: 'historySummaryPanel',
                        flex: 2,
                        margin: 5,
                        border: 1,
                        style: 'background-color: #F5F5F5',
                    },{
                        xtype: 'diagnosis',
                        id: 'diagnosisSummaryPanel',
                        flex: 1,
                        margin: 5,
                        border: 1,
                        style: 'background-color: #7FADCF'
                    },{
                        xtype: 'instruction',
                        flex: 2,
                        margin: 5,
                        border: 1,
                        id: 'instructionSummaryPanel',
                        style: 'background-color: #7FADCF'
                    }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    html: '',
                    margin: 5,
                    border: 1 ,
                    style: 'background-color: #FFFFFF',
                    id: 'bottom-panel',
                    layout: 'vbox',
                    items: [{
                        xtype: 'patient',
                        flex: 1,
                        margin: 5,
                        border: 1,
                        style: 'background-color: #7FADCF'
                    },{
                        xtype: 'examinationSummary',
                        id: 'examinationSummaryPanel',
                        flex: 1,
                        margin: 5,
                        border: 1,
                        style: 'background-color: #7FADCF'
                    },{
                        xtype: 'treatmentSummary',
                        id: 'treatmentSummaryPanel',
                        flex: 1,
                        margin: 5,
                        border: 1,
                    }]
                }
            ]
        },{
            layout: 'vbox',
            style: 'background-color: #FFFFFF',
            title: 'Examination-Edit',
            id: 'examination-card',
            items: [{
                xtype: 'examinationEdit',
                id: 'examination-editpanel',
                flex: 2,
                margin: 5,
                border: 1,
            }]
        },{
          layout: 'vbox',
          style: 'background-color: #FFFFFF',
          title: 'History-Edit',
          id: 'history-card',
          items: [
              {
                  xtype: 'historyEdit',
                  id: 'historyEditPanel',
                  flex: 2,
                  margin: 5,
                  border: 1,
              }]
        } ,
          {
              layout: 'vbox',
              style: 'background-color: #FFFFFF',
              title: 'Diagnosis-Edit',
              id: 'diagnosis-card',
              items: [
                  {
                      xtype: 'diagnosis-edit',
                      flex: 2,
                      margin: 5,
                      border: 1,
                  }]
          },
          {
              layout: 'vbox',
              style: 'background-color: #FFFFFF',
              title: 'Treatment-Edit',
              id: 'treatment-card',
              items: [
                  {
                      xtype: 'treatmentEdit',
                      flex: 2,
                      margin: 5,
                      border: 1,
                      // style: 'background-color: #7FADCF'
                  }]
          },
          {
              layout: 'vbox',
              style: 'background-color: #FFFFFF',
              title: 'Instruction-Edit',
              id: 'instruction-card',
              items: [
                  {
                      xtype: 'instruction-edit',
                      flex: 2,
                      html: 'Instruction',
                      margin: 5,
                      border: 1,
                      style: 'background-color: #7FADCF'
                  }]
          }
        ]
    }
    }

)
;
