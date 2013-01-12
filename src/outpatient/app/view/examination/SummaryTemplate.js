Ext.define('Jss.Outpatient.view.examination.SummaryTemplate', {
    extend: 'Ext.XTemplate',

    html: ['<table>',
                '<tr class="summary">',
                    '<td>{complaint}</td>',
                    '<td>{duration}</td>',
                '</tr>',
           '</table>'],

    constructor: function() {
        return this.callParent(this.html);
    }
});
