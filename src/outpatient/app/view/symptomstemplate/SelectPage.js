Ext.define('Jss.Outpatient.view.symptomstemplate.SelectPage', {
    extend: 'Ext.Container',
    alias: 'widget.symptoms-template-select',

    config: {
        layout: 'hbox',
    },

    initialize: function() {
        this.addList();
        this.addAutoComplete()
    },

    addList: function() {
        var widget = Ext.create('Ext.dataview.List', {
            width: '30%',
            store: 'SymptomsTemplates',
            itemTpl: '{name}',
            allowDeselect: true,
        });

        widget.on('select', function(list, record) {this.onSelection(record)}, this);
        this.add(widget);
    },

    addAutoComplete: function() {
        var widget = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteWidget', {
            width: '30%',
            store: 'SymptomsTemplates',
            filterKey: 'name',
            itemTpl: '{name}',
            placeHolder: 'Search..',
        })

        widget.on('itemSelected', this.onSelection, this);
        this.add(widget);
    },

    onSelection: function(record) {
        var ans = confirm("Are you sure?");
        if(ans == true){
            this.fireEvent("symptomsTemplateSelected", record);
        }
    }
});