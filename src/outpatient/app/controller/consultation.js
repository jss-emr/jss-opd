Ext.define('Jss.Outpatient.controller.consultation-old', {
    extend: 'Ext.app.Controller',
    config: {
        refs: { // all the fields are accessed in the controller through the id of the components
            main: '#mainview',
            contacts: 'patientlist',
            contact: '#contact',
            name: '#name',
        },
     } ,
    control: { //to perform action on specific component accessed through it's id above
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            contacts: {
                itemtap: 'onContactSelect'
            },
            addduration: {
                tap: 'addduration'
            }
        },
   init: function() {
   },

    });
