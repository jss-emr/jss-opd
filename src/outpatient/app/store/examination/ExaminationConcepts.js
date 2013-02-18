Ext.define('Jss.Outpatient.store.examination.ExaminationConcepts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/concept?name=der&category=Examination',
			noCache: false
        }
    }
});