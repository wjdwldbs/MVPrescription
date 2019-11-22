const db = require('./index.js')
const { drug } = require('./models.js');


drug.create([{
  name: 'Adderall XR',
  generic: '',
  imgUrl: 'https://www.additudemag.com/wp-content/uploads/2017/02/adderall_xr_25mg.jpg',
  strength: '20 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: '',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Simvastatin',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/AUR00510.jpg',
  strength: '10 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: 'Take at bedtime',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Losartan',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/CBR07010.jpg',
  strength: '50 mg',
  direction: 'Take 1 tablet by mouth once a day',
  note: '',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Alendronate',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/CIP02240.jpg',
  strength: '70 mg',
  direction: 'Take 1 Tablet By Mouth Once A Week 30 minutes before breakfast',
  note: 'Do not lie down for at least 30 min after the dose',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Amphetamine Salts',
  generic: '',
  imgUrl: 'https://www.cvs.com/webcontent/images/drug/DrugItem_31.JPG',
  strength: '10 mg',
  direction: 'Take 1 Tablet By Mouth Once A Day at 2PM',
  note: '',
  sideEffect: '',

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
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}, {
  name: 'Januvia',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/MSD01120.jpg',
  strength: '100 mg',
  direction: 'Take 1 Tablet By Mouth Once A Day',
  note: '',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
},  {
  name: 'Metoprolol ER',
  generic: '',
  imgUrl: 'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/WTS08320.jpg',
  strength: '50 mg',
  direction: 'Take 1 Tablet By Mouth Once A Day',
  note: '',
  sideEffect: '',

  username: 'test',
  period: '',
  dose: ''
}])