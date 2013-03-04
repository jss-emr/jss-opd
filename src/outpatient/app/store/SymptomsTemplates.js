Ext.define('Jss.Outpatient.store.SymptomsTemplates', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Jss.Outpatient.model.SymptomsTemplate',
        data: [
		    {
		        name:'Bleeding from Rectum',
		        sections:{
		            history:[
		                {name:"Blood Loss", properties:{datatype:{name:"coded", properties:{answers:[{name: "Minimal"}, {name: "Moderate"}, {name: "Severe"}]}}}},
		                {name:"Associated Co-morbidity", properties:{datatype:{name:"coded", properties:{multi: true, answers:[{name:"Cirrhosis"}, {name:"Renal Dysfunction"}, {name: "Diabetes"}]}}}},
		                {name:"Abdominal Symptoms", properties:{datatype:{name:"coded", properties:{answers:[{name: "Pain"}, {name: "Loose stool"}, {name: "Mucus"}]}}}},
		                {name:"Fever", properties:{datatype:"boolean"}},
		                {name:"Fatigue/Weekness", properties:{datatype:"boolean"}},
		                {name:"Syncope", properties:{datatype:"boolean"}},
		            ],
		            examinations:[
		                {name:"Age", properties:{datatype:"numeric"}},
		                {name:"PR", properties:{datatype:"numeric"}},
		                {name:"Systolic BP", properties:{datatype:"numeric"}},
		                {name:"Diastolic BP", properties:{datatype:"numeric"}},
		                {name:"Postural fall of BP", properties:{datatype:"numeric"}},
		                {name:"Pallor", properties:{datatype:{name:"coded", properties:{answers:[{name: "None/Minimal"}, {name:"Moderate"}, {name:"Severe"}]}}}},
		                {name:"Ascitos", properties:{datatype:"boolean"}},
		                {name:"Abdomen Tenderness", properties:{datatype:"boolean"}},
		                {name:"Abdomen Lump", properties:{datatype:{name:"coded", properties:{answers:[{name:"None"}, {name: "Tumor"}, {name: "Intussusception"}]}}}},
		                {name:"Fissures", properties:{datatype:"boolean"}},
		                {name:"Piles", properties:{datatype:"boolean"}},
		                {name:" Rectal Mass", properties:{datatype:"boolean"}},
		                {name:"Fingersall", properties:{datatype:"boolean"}},
		            ],
		            instructions: [
		                {name:"Complete Blood Count (CBC)", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Urine Microscopy", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Haemogram", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Nasogastric Lavage", properties:{datatype:{name:"coded", properties:{answers:[{name:"Bile Stained"}, {name: "Blood Stained"}, {name: "No Bile/Blood"}]}}}},
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
