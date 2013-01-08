Ext.define('Jss.Outpatient.view.consultation', {
    extend: 'Ext.Container',
    alias: 'widget.consultation',
    id: 'opd-panel',
    requires: ['Jss.Outpatient.view.patient','Jss.Outpatient.view.examination','Jss.Outpatient.view.history','Jss.Outpatient.view.diagnosis','Jss.Outpatient.view.treatment','Jss.Outpatient.view.instruction'],
    config: {
      layout: {
            type: 'card'
      },
      title: 'Consultation',
      items:[{
        layout: {
            type: 'vbox'
        },
        style: 'background-color: #FFFFFF',
        title: 'Consultation',
        id:'consultation',
        activeItem: 0,
        items: [

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
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            },{
                xtype: 'examination',
                flex: 2,
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            },{
                xtype: 'patient',
                flex: 1,
                margin: 5,
                border: 1,
                style: 'background-color: #7FADCF'
            }]
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
                    xtype: 'diagnosis',
                    flex: 2,
                    margin: 5,
                    border: 1,
                    id: 'diagnosis-panel',
                    style: 'background-color: #7FADCF'
                },{
                    xtype: 'treatment',
                    flex: 2,
                    margin: 5,
                    border: 1,
                    id: 'instruction-panel',
                    style: 'background-color: #7FADCF'
                },{
                    xtype: 'instruction',
                    flex: 1,
                    margin: 5,
                    border: 1,
                    id: 'treatment-panel',
                    style: 'background-color: #7FADCF'
                }]
            }
        ]
      },{
          layout: {
              type: 'vbox'
          },
          style: 'background-color: #FFFFFF',
          title: 'Examination-card',
          id: 'examination-card',
          items: [
              {
                  xtype: 'examination-edit',
                  flex: 2,
                  html: 'Examination-Card',
                  margin: 5,
                  border: 1,
                  style: 'background-color: #7FADCF'
              }]
      },{
          layout: {
              type: 'vbox'
          },
          style: 'background-color: #FFFFFF',
          title: 'History-Edit',
          id: 'history-card',
          items: [
              {
                  xtype: 'history-edit',
                  flex: 2,
                  html: 'History',
                  margin: 5,
                  border: 1,
                  style: 'background-color: #7FADCF'
              }]
      } ,
          {
              layout: {
                  type: 'vbox'
              },
              style: 'background-color: #FFFFFF',
              title: 'Diagnosis-Edit',
              id: 'diagnosis-card',
              items: [
                  {
                      xtype: 'diagnosis-edit',
                      flex: 2,
                      margin: 5,
                      border: 1,
                      style: 'background-color: #7FADCF'
                  }]
          },
          {
              layout: {
                  type: 'vbox'
              },
              style: 'background-color: #FFFFFF',
              title: 'Treatment-Edit',
              id: 'treatment-card',
              items: [
                  {
                      xtype: 'treatment-edit',
                      flex: 2,
                      margin: 5,
                      border: 1,
                      style: 'background-color: #7FADCF'
                  }]
          },
          {
              layout: {
                  type: 'vbox'
              },
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
