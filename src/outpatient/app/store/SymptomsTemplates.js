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
		    },
		    {
		        name:'Backache',
		        sections:{
		            history:[
		                {name:"M/C Days", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1-2 Days"}, {name: "2-3 Days"}, {name: "4-5 Days"}, {name: "5-6 Days"}, {name: "10-12 Days"}]}}}},
		                {name:"M/C Interval", properties:{datatype:{name:"Coded", properties:{answers:[{name: "< 25 Days"}, {name: "25-27 Days"}, {name: "28-30 Days"}, {name: "31-35 Days"}, {name: "35-40 Days"}, {name: "> 40 Days"}]}}}},
		                {name:"M/C Amount", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Scanty"}, {name: "Average"}, {name: "Heavy"}]}}}},
		                {name:"G", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"P", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"A", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"BOH", properties:{datatype:"Boolean"}},
		                {name:"LMP", properties:{datatype:"Text"}},
		            ],
		            examinations:[
		            ],
		            instructions: [
		                {name:"Haemoglobin", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Urine Microscopy", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		            ],
		            treatment: [
		            ]
		        }

		    },
		    {
		        name:'Abdominal Pain',
		        sections:{
		            history:[
		                {name:"M/C Days", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1-2 Days"}, {name: "2-3 Days"}, {name: "4-5 Days"}, {name: "5-6 Days"}, {name: "10-12 Days"}]}}}},
		                {name:"M/C Interval", properties:{datatype:{name:"Coded", properties:{answers:[{name: "< 25 Days"}, {name: "25-27 Days"}, {name: "28-30 Days"}, {name: "31-35 Days"}, {name: "35-40 Days"}, {name: "> 40 Days"}]}}}},
		                {name:"M/C Amount", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Scanty"}, {name: "Average"}, {name: "Heavy"}]}}}},
		                {name:"G", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"P", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"A", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"BOH", properties:{datatype:"Boolean"}},
		                {name:"LMP", properties:{datatype:"Text"}},
		            ],
		            examinations:[
		            ],
		            instructions: [
		                {name:"Haemoglobin", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Urine Microscopy", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		            ],
		            treatment: [
		            ]
		        }

		    },
		    {
		        name:'Menstrual C/O',
		        sections:{
		            history:[
		                {name:"M/C Days", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1-2 Days"}, {name: "2-3 Days"}, {name: "4-5 Days"}, {name: "5-6 Days"}, {name: "10-12 Days"}]}}}},
		                {name:"M/C Interval", properties:{datatype:{name:"Coded", properties:{answers:[{name: "< 25 Days"}, {name: "25-27 Days"}, {name: "28-30 Days"}, {name: "31-35 Days"}, {name: "35-40 Days"}, {name: "> 40 Days"}]}}}},
		                {name:"M/C Amount", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Scanty"}, {name: "Average"}, {name: "Heavy"}]}}}},
		                {name:"G", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"P", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"A", properties:{datatype:{name:"Coded", properties:{answers:[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}]}}}},
		                {name:"BOH", properties:{datatype:"Boolean"}},
		                {name:"LMP", properties:{datatype:"Text"}},
		            ],
		            examinations:[
		            ],
		            instructions: [
		                {name:"Haemoglobin", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		                {name:"Urine Microscopy", properties:{ datatype: {name: "N/A"}, conceptClass : "Test"}},
		            ],
		            treatment: [
		            ]
		        }

		    },
		    {
		        name:'Internal Examintation',
		        sections:{
		            history:[
		            ],
		            examinations:[
		                {name:"P/S Cervix", properties:{datatype:{name:"Coded", properties:{multi: true, answers:[{name: "Normal"}, {name: "Abnormal - Poly b"}, {name: "Abnormal - Growth"}, {name: "Abnormal - Erosion"}, {name: "V/A Test (+ve)"}, {name: "V/A Test (-ve)"}]}}}},
		                {name:"P/V Ut", properties:{datatype:{name:"Coded", properties:{multi: true, answers:[{name: "A/V"}, {name: "R/V"}, {name: "Normal"}, {name: "Enlarged"}, {name: "Soft"}, {name: "Firm"}, {name: "Mobile"}, {name: "Restricted Mobile"}]}}}},
		                {name:"P/V Ut Enlarged Size (Weeks)", properties:{datatype:{name:"Text", properties:{}}}},
		                {name:"P/R Ut", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Nad"}, {name: "Ab"}]}}}},
		                {name:"P/Vaginal", properties:{datatype:{name:"Coded", properties:{multi: true, answers:[{name: "OS - Closed"}, {name: "OS - Open"}, {name: "Head"}, {name: "Breach"}, {name: "Hand"}, {name: "Membrane - Present"}, {name: "Membrane - Absent"}]}}}},
		            ],
		            instructions: [
		            ],
		            treatment: [
		            ]
		        }

		    },
		    {
		        name:'Obstretic Abdominal Examintation',
		        sections:{
		            history:[
		            ],
		            examinations:[
		                {name:"Fundal Height (Weeks)", properties:{datatype:{name:"Text", properties:{}}}},
		                {name:"Presenting part", properties:{datatype:{name:"Coded", properties:{answers:[{name: "Cephalic"}, {name: "Breech"}, {name: "Transverse"}]}}}},
		                {name:"FHS", properties:{datatype:{name:"Boolean", properties:{}}}},
		                {name:"Amount of liquid", properties:{datatype:{name:"Text", properties:{}}}},
		                {name:"Contractions", properties:{datatype:{name:"Boolean", properties:{}}}},
		            ],
		            instructions: [
		            ],
		            treatment: [
		            ]
		        }

		    },
		]
    },

});
