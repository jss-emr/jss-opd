    Ext.define('Jss.Outpatient.view.edit.history-edit', {
        extend: 'Ext.Container',
        xtype: 'history-edit-panel',
        alias:'widget.history-edit',
        id: 'history-edit-panel',
        config: {
            layout: {
                type: 'vbox'
            },
//        title: 'History',
            activeItem: 1,
            items: [{
                xtype: 'formpanel',
                flex: 1,
                id: 'historyPanel',
                scrollable: 'false',
                items: [
                    {
                    xtype: 'fieldset',
                    title: 'History',
                    items: [{
                        xtype: 'selectfield',
                        label: 'Alcohol',
                        valueField: 'alcoholFrequency',
                        displayField: 'title',
                        id: 'alcoholField',
                        store: {
                            data: [{
                                alcoholFrequency: '',
                                title: ''
                            }, {
                                alcoholFrequency: 'never',
                                title: 'None'
                            }, {
                                alcoholFrequency: 'daily',
                                title: 'Daily'
                            }, {
                                alcoholFrequency: 'occasional',
                                title: 'Occasional'
                            }, {
                                alcoholFrequency: 'experiencedWithdrawal',
                                title: 'Experienced Withdrawal'
                            }]
                        }
                    }, {
                        xtype: 'fieldset',
                        baseCls: 'x-form-fieldset-mod',
                        margin: '0 0 0 0',
                        layout: {
                            type: 'hbox'
                        },
                        items: [{
                            xtype: 'selectfield',
                            label: 'Tobacco',
                            border: 0,
                            labelWidth: '56.25%',
                            flex: 16,
                            valueField: 'time',
                            displayField: 'title',
                            id: 'tobaccoField',
                            store: {
                                data: [{
                                    time: '',
                                    title: ''
                                }, {
                                    time: 'never',
                                    title: 'Never'
                                }, {
                                    time: 'present',
                                    title: 'Present'
                                }, {
                                    time: 'past',
                                    title: 'Past'
                                }]
                            }
                        }, {
                            xtype: 'selectfield',
                            border: 0,
                            flex: 7,
                            valueField: 'way',
                            id: 'tobaccoRouteofIntake',
                            displayField: 'title',
                            store: {
                                data: [{
                                    way: '',
                                    title: ''
                                }, {
                                    way: 'Neither',
                                    title: 'Neither'
                                }, {
                                    way: 'oral',
                                    title: 'Oral'
                                }, {
                                    way: 'smoking',
                                    title: 'Smoking'
                                }, {
                                    way: 'both',
                                    title: 'Both'
                                }]
                            }
                        }, {
                            xtype: 'selectfield',
                            border: 0,
                            flex: 7,
                            valueField: 'amount',
                            id: 'tobaccoFrequency',
                            displayField: 'title',
                            store: {
                                data: [{
                                    amount: '',
                                    title: ''
                                }, {
                                    amount: 'None',
                                    title: 'None'
                                }, {
                                    amount: 'occasional',
                                    title: 'Occasional'
                                }, {
                                    amount: 'heavy',
                                    title: 'Heavy'
                                }]
                            }
                        }]
                    }]
                }]
            }]
        }
    });