Ext.define('Jss.Outpatient.view.ContainerWithHeader', {
    extend: 'Ext.Container',
    alias: 'widget.header',

    config: {
        layout: 'fit',
    },

    buttonPageMaps: [
        {text: "History"     , id: "history-card"},
        {text: "Examination" , id: 'examination-card'},
        {text: "Diagnosis"   , id: 'diagnosis-card'},
        {text: "Treatment"   , id: 'treatment-card'},
        {text: "Instruction" , id: 'instruction-card'},
    ],

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

        this.headerContainer.add({xtype: 'spacer', flex: 1});
        this.addToggleButtons();
        this.addTitleContainer();

        this.patient.on('load', function() {
            this.addPatientDetails();
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
            flex: 5,
            cls: 'title',
        });

        this.headerContainer.add(this.titleContainer);
    },

    addPatientDetails: function() {
        var patient = this.patient.getAt(0);
        this.personDetails = Ext.create('Ext.Container', {
            tpl: '<div>{firstName} {lastName}</div>',
            data: {firstName: patient.get('firstName'), lastName: patient.get('lastName')},
            flex: 1,
            cls: 'patientDetails',
        });

        this.headerContainer.add(this.personDetails);
    },

    addToggleButtons: function() {
        var self = this;
        this.buttonPageMaps.forEach(function(button) {
            self.addToggleButton(button.text, button.id);
        });
    },

    addToggleButton: function(text, nextPageId) {
        var button = Ext.create('Ext.Button', {
            text: text,
            flex: 1,
        });

        button.on('tap', function() {
            Ext.getCmp('mainview').pop(1);
            Ext.getCmp('mainview').push(Ext.getCmp(nextPageId));
        }, this);
        this.headerContainer.add(button)
    },
});
