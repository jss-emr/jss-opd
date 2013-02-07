Ext.define('Jss.Outpatient.view.ContainerWithHeader', {
    extend: 'Ext.Container',
    alias: 'widget.header',

    config: {
        layout: 'fit',
    },

    initialize: function() {
        this.patient = Ext.getStore('patient');
        this.addHeaderContainer();
        this.add(this.config.content);
    },

    gotoPreviousPage: function() {
        Ext.getCmp('mainview').pop();
    },

    addHeaderContainer: function() {
        this.headerContainer = Ext.create('Ext.Container', {
            layout: 'hbox',
            docked: 'top',
            cls: 'headerWidget',
        });
        this.add(this.headerContainer);

        this.addDoneButton();
        this.addTitleContainer();

        this.patient.on('load', function() {
            this.addPatientDetails();
            this.addVisitDates();
        }, this);
    },

    addDoneButton: function() {
        this.doneButton = Ext.create('Ext.Button', {
            text: 'Done',
            flex: 1,
        });

        this.doneButton.on('tap', this.gotoPreviousPage, this);

        this.headerContainer.add(this.doneButton);
    },

    addTitleContainer: function() {
        this.titleContainer = Ext.create('Ext.Container', {
            html: this.config.title,
            flex: 7,
            cls: 'title',
        });

        this.headerContainer.add(this.titleContainer);
    },

    addPatientDetails: function() {
        var patient = this.patient.getAt(0);
        this.personDetails = Ext.create('Ext.Container', {
            tpl: '<div>{firstName} {lastName}<br/>Weight = {weight}</div>',
            data: {firstName: patient.get('firstName'), lastName: patient.get('lastName'), weight: patient.get('weight')},
            flex: 2,
            cls: 'patientDetails',
        });

        this.headerContainer.add(this.personDetails);
    },

    addVisitDates: function() {
        this.visitDates = Ext.create('Ext.Container', {
            tpl: '<tpl for="visits"><div><a href="">{date}</a></div></tpl>',
            data: {visits: this.patient.getAt(0).get('visits')},
            flex: 2,
            cls: 'visitDates',
        });

        this.headerContainer.add(this.visitDates);
    },

});
