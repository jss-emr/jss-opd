Ext.define('Jss.Outpatient.store.SymptomsTemplates', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.SymptomsTemplate',
        data: [
		    {
		        name:'Bleeding from Rectum',
		        sections:{
		            history:[
		                {name:"Blood Loss", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Minimal"}, {name: "Moderate"}, {name: "Severe"}]}}}},
		                {name:"Associated Co-morbidity", properties:{datatype:{name:"Coded", properties:{multi: true, answers:[{name:"Cirrhosis"}, {name:"Renal Dysfunction"}, {name: "Diabetes"}]}}}},
		                {name:"Abdominal Symptoms", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Pain"}, {name: "Loose stool"}, {name: "Mucus"}]}}}},
		                {name:"Fever", properties:{datatype:"Boolean"}},
		                {name:"Fatigue/Weekness", properties:{datatype:"Boolean"}},
		                {name:"Syncope", properties:{datatype:"Boolean"}},
		            ],
		            examinations:[
		                {name:"PR", properties:{datatype:"Numeric"}},
		                {name:"Systolic BP", properties:{datatype:"Numeric"}},
		                {name:"Diastolic BP", properties:{datatype:"Numeric"}},
		                {name:"Postural fall of BP", properties:{datatype:"Numeric"}},
		                {name:"Pallor", properties:{datatype:{name:"Coded", properties:{answers:[{name: "None/Minimal"}, {name:"Moderate"}, {name:"Severe"}]}}}},
		                {name:"Ascitos", properties:{datatype:"Boolean"}},
		                {name:"Abdomen Tenderness", properties:{datatype:"Boolean"}},
		                {name:"Abdomen Lump", properties:{datatype:{name:"Coded", properties:{answers:[{name:"None"}, {name: "Tumor"}, {name: "Intussusception"}]}}}},
		                {name:"Fissures", properties:{datatype:"Boolean"}},
		                {name:"Piles", properties:{datatype:"Boolean"}},
		                {name:" Rectal Mass", properties:{datatype:"Boolean"}},
		                {name:"Fingersall", properties:{datatype:"Boolean"}},
		            ],
		            instructions: [
		                {name:"Complete Blood Count (CBC)", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Urine Microscopy", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Haemogram", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Nasogastric Lavage", properties:{datatype:{name:"Coded", properties:{answers:[{name:"Bile Stained"}, {name: "Blood Stained"}, {name: "No Bile/Blood"}]}}}},
		            ],
		            treatment: [
		                {name: "Ibuprofen (TAB)", properties: {datatype: "treatmentadvice", medicineDetails: {type: "TAB", specs: ["200mg", "400mg"], }, defaultValue: {spec: "200mg", instruction: ["Thrice a day"], dosage: "1", timings: ["Morning", "Noon", "Night"], duration: "10 Days"}, shortSummary: "200mg - Morning, Noon, Night"}},
		                {name: "Paracetamol (INJ)", properties: {datatype: "treatmentadvice", medicineDetails: {type: "INJ", specs: ["20ml"]}}},
		            ]
		        }
		    }
		]
    }
});
