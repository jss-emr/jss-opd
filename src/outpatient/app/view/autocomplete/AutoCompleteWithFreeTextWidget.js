Ext.define('Jss.Outpatient.view.autocomplete.AutoCompleteWithFreeTextWidget', {
    extend:'Ext.Container',
    alias:'widget.autoComplete',
    requires:[ 'Jss.Outpatient.view.autocomplete.AutoCompleteListWidget' ],

    config:{
        scroll:'both'
    },

    initialize: function() {
        this.addSearchField();
        this.addAutoCompleteList();
        this.addNewSearchTermAdditionButton();
        this.addNewSearchTermPanel()
    },

    addSearchField: function() {
        this.searchField = Ext.create('Ext.field.Text', {
            width:'100%',
            height:50,
            placeHolder: this.config.placeHolder,
            bubbleEvents: 'clearicontap'
        });
        var fieldSet = Ext.create('Ext.form.FieldSet');


        this.searchField.on('keyup', 'onKeyUp', this);
        this.searchField.on('clearicontap', 'clear', this);

        fieldSet.add(this.searchField);
        this.add(fieldSet);
    },

    addAutoCompleteList: function(){
        this.autoCompleteList = Ext.create('Jss.Outpatient.view.autocomplete.AutoCompleteListWidget',{
            hidden:true,
            width:'100%',
            height:300,
            itemTpl: this.config.itemTpl,
            filterKey: this.config.filterKey,
            store: this.config.store,
        });

        this.autoCompleteList.on('select', 'onItemSelection', this);
        this.add(this.autoCompleteList);
    },

    onItemSelection : function(list,record){
        this.autoCompleteList.hide();
        this.searchField.setValue(list.getItemTpl().apply(record.data))
        this.fireEvent('itemSelected',record);
    },

    onKeyUp : function(){
        this.autoCompleteList.destroy();
        this.addAutoCompleteList();
        var keyword = this.searchField.getValue();
        this.autoCompleteList.loadData(keyword, this.config.store);
        this.autoCompleteList.show();
        if(this.autoCompleteList.hasNoSuggestions()){
            this.autoCompleteList.hide();
            this.newSearchTermAdditionButton.show();

        }
    },

    clear: function() {
        this.searchField.setValue('');
        this.autoCompleteList.destroy();
        this.addAndSelectButton.destroy();
        this.searchTermText.destroy();
    },

    addNewSearchTermAdditionButton: function(){
        this.newSearchTermAdditionButton = Ext.create('Ext.Button',{
            text: 'Add new search term',
            hidden:true
        });
        this.newSearchTermAdditionButton.on('tap','addNewSearchTerm',this);
        this.add(this.newSearchTermAdditionButton);
    },

    addNewSearchTermPanel:function(){
        this.searchTermText = Ext.create('Ext.field.Text', {
            hidden:true,
            placeHolder: 'Enter new search term...',
        });

        this.addAndSelectButton = Ext.create('Ext.Button',{
            text: 'Add term and select',
            hidden:true,
        });

        this.addAndSelectButton.on('tap', 'addSearchTermToStore', this);

        this.add(this.searchTermText);
        this.add(this.addAndSelectButton);
    },

    addNewSearchTerm: function(){
        this.newSearchTermAdditionButton.hide();
        this.searchTermText.show();
        this.addAndSelectButton.show();
    },

    addSearchTermToStore: function(){
        var record = this.autoCompleteList.getStore().addFrom(this.searchTermText.getValue());
        this.searchTermText.hide();
        this.addAndSelectButton.hide();
        console.log(record);
        this.searchField.setValue(record.getName());
        this.fireEvent('itemSelected',record);
    },

    setConcept:function(observation){
        this.searchField.setValue(observation.data.concept.data.name);
    }
});



