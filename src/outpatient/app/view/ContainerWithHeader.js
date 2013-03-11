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
        {text: "Templates" , id: 'symptomsTemplateSelect-card'},
    ],

    initialize: function() {
        this.buttonUIPageMap = {};
        this.patient = Ext.getStore('patient');
        this.addHeaderContainer();
        this.add(this.config.content);
    },

    activate: function() {
        Ext.getCmp('mainview').setActiveItem(this);
        this.buttonUIPageMap[this.getId()].setUi('action');
    },

    gotoPreviousPage: function() {
        Ext.getCmp('mainview').setActiveItem(Ext.getCmp('consultationPanel'));
    },

    addHeaderContainer: function() {
        this.headerContainer = Ext.create('Ext.Container', {
            layout: 'hbox',
            docked: 'top',
            cls: 'headerWidget',
            style: 'margin-bottom: 5px;'
        });
        this.add(this.headerContainer);

        this.addDoneButton();
        this.headerContainer.add({xtype: 'spacer', flex: 1});
        this.createPatientDetailsContainer();

        this.addToggleButtons();

        this.patient.on('load', function() {
            this.addPatientDetails();
        }, this);
    },

    createPatientDetailsContainer: function() {
        this.personDetails = Ext.create('Ext.Container', {
            flex: 1,
            html: 'test',
            cls: 'patientDetails',
        });

        this.headerContainer.add(this.personDetails);
    },

    addDoneButton: function() {
        this.doneButton = Ext.create('Ext.Button', {
            text: 'Done',
            flex: 1,
        });

        this.doneButton.on('tap', this.gotoPreviousPage, this);

        this.headerContainer.add(this.doneButton);
    },

    addPatientDetails: function() {
        var patient = this.patient.getAt(0);
        this.personDetails.setTpl("<div>{firstName} {lastName}</div>");
        this.personDetails.setData({firstName: patient.get('firstName'), lastName: patient.get('lastName')});
    },

    addToggleButtons: function() {
        var self = this;
        this.buttonPageMaps.forEach(function(button) {
            self.addToggleButton(button.text, button.id);
        }, this);
    },

    addToggleButton: function(text, nextPageId) {
        var self = this;
        var button = Ext.create('Ext.Button', {
            text: text,
            flex: 1,
        });

        this.buttonUIPageMap[nextPageId] = button;

        button.on('tap', function() {
            Ext.getCmp(nextPageId).activate();
        }, this);
        this.headerContainer.add(button)
    },
});
