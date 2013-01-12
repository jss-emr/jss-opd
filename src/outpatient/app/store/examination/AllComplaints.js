Ext.define('Jss.Outpatient.store.examination.AllComplaints', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Jss.Outpatient.model.examination.Complaint',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/allComplaints.json'
        }
    }
});