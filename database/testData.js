const db = require('./index.js')
const { drug } = require('./models.js');


drug.create([{
  name: 'Adderall XR',
  generic: 'amphetamine, dextroamphetamine mixed salts',
  imgUrl: 'https://www.additudemag.com/wp-content/uploads/2017/02/adderall_xr_25mg.jpg',
  strength: '20 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: '',
  sideEffect: 'Loss of appetite, weight loss, dry mouth, stomach upset/pain, nausea/vomiting, dizziness, headache, diarrhea, fever, nervousness, and trouble sleeping may occur.',
  patientInfo: 'Take ADDERALL XR once a day in the morning when you first wake up. Swallow ADDERALL XR capsules whole with water or other liquids.',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Simvastatin',
  generic: 'Simvastatin',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/AUR00510.jpg',
  strength: '10 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: 'Take at bedtime',
  sideEffect: 'Tell your doctor right away if you develop any of these symptoms during treatment and if these symptoms last after your doctor stops this drug: muscle pain/tenderness/weakness (especially with fever or unusual tiredness), signs of kidney problems (such as change in the amount of urine).',
  patientInfo: 'Limit alcoholic beverages. Daily use of alcohol may increase your risk for liver problems, especially when combined with simvastatin.',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Losartan',
  generic: 'Losartan Potassium',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/CBR07010.jpg',
  strength: '50 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: '',
  sideEffect: 'Dizziness or lightheadedness may occur as your body adjusts to the medication.',
  patientInfo: 'To reduce the risk of dizziness and lightheadedness, get up slowly when rising from a sitting or lying position.',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Alendronate',
  generic: 'Alendronate Sodium',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/CIP02240.jpg',
  strength: '70 mg',
  direction: 'Take 1 Tablet By Mouth Once A Week 30 minutes before breakfast',
  note: 'Do not lie down for at least 30 min after the dose',
  sideEffect: 'Stomach pain, constipation, diarrhea, gas, or nausea may occur. Tell your doctor right away if you have any serious side effects, including: jaw/ear pain, increased or severe bone/joint/muscle pain, new or unusual hip/thigh/groin pain, swelling of joints/hands/ankles/feet, black/tarry stools, vomit that looks like coffee grounds.',
  patientInfo: 'Take after getting up for the day and before taking your first food, drink, or other medicine, swallow your FOSAMAX tablet with a full glass (6-8 oz) of plain water only.',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Amphetamine Salts',
  generic: 'Amphetamine salt combo',
  imgUrl: 'https://www.cvs.com/webcontent/images/drug/DrugItem_31.JPG',
  strength: '10 mg',
  direction: 'Take 1 Tablet By Mouth Once A Day at 2PM',
  note: '',
  sideEffect: 'Loss of appetite, weight loss, dry mouth, stomach upset/pain, nausea/vomiting, dizziness, headache, diarrhea, fever, nervousness, and trouble sleeping may occur.',
  patientInfo: 'Call your doctor right away if you or your child have any signs of heart problems such as chest pain, shortness of breath, or fainting while taking Adderall',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Metformin',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/ING01540.jpg',
  strength: '500 mg',
  direction: 'Take 1 Tablet By Mouth Twice A Day',
  note: 'With food/milk',
  sideEffect: 'Nausea, vomiting, stomach upset, diarrhea, weakness, or a metallic taste in the mouth may occur. ',
  patientInfo: 'Symptoms of low blood sugar include sudden sweating, shaking, fast heartbeat, hunger, blurred vision, dizziness, or tingling hands/feet. It is a good habit to carry glucose tablets or gel to treat low blood sugar.',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Metoprolol ER',
  generic: 'Metoprolol Succinate Extended Release',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/WTS08320.jpg',
  strength: '50 mg',
  direction: 'Take 1 Tablet By Mouth Once A Day',
  note: '',
  sideEffect: 'Drowsiness, dizziness, tiredness, diarrhea, and slow heartbeat may occur. Decreased sexual ability has been reported rarely.',
  patientInfo: 'To reduce the risk of dizziness and lightheadedness, get up slowly when rising from a sitting or lying position.',

  username: 'test',
  period: '',
  dose: ''
}])