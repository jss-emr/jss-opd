Ext.define('Jss.Outpatient.store.examination.ExaminationQueue', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.concept.Concept',
        data: [
            {
                name: "Systolic Bloood Pressure",
                id: "systolicBllodPressureUUID",
                properties: {
                    datatype: {name:"numeric"},
                    conceptClass: "Test"
                }
            },
            {
                name: "ALLERGY TO PENICILLIN",
                id: "allergyToPenicillinUUID",
                properties: {
                    datatype: {name:"boolean"},
                    conceptClass: "Question"
                }
            },
            {
                name: "PARACETAMOL",
                id: "paracetamolUUID",
                properties: {
                    datatype: {name:"duration"},
                    conceptClass: "Drug",
                }
            },
        ]
    }
});