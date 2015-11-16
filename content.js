var classList = [{
  courseId: 'ACCT 212',
  courseTitle: 'Principles of Accounting',
  room: 'DB302',
  days: 'MWF',
  startTime: 1230,
  endTime: 1320,
  credits: 3
},{
  courseId: 'ART 104',
  courseTitle: 'Drawing for Everyone',
  room: 'EH 201',
  days: 'MW',
  startTime: 1330,
  endTime: 1520,
  credits: 2
},{
  courseId: 'ART 125',
  courseTitle: 'Oil Painting',
  room: 'EH 201',
  days: 'MW',
  startTime: 1530,
  endTime: 1720,
  credits: 2
},{
  courseId: 'BIOL 104',
  courseTitle: 'Insects and You',
  room: 'KC 135',
  days: 'MWF',
  startTime: 1130,
  endTime: 1220,
  credits: 3
},{
  courseId: 'BIOL 314',
  courseTitle: 'Immunology',
  room: 'KC 109',
  days: 'MWF',
  startTime: 930,
  endTime: 1020,
  credits: 3
},{
  courseId: 'BAUD 138',
  courseTitle: 'Dynamics of Business',
  room: 'DB 302',
  days: 'MWF',
  startTime: 1030,
  endTime: 1120,
  credits: 3
},{
  courseId: 'CHEM 151',
  courseTitle: 'General Chemistry I',
  room: 'KC 200',
  days: 'MWF',
  startTime: 1330,
  endTime: 1420,
  credits: 4
},{
  courseId: 'COMM 105',
  courseTitle: 'Public Speaking',
  room: 'DB 204',
  days: 'MWF',
  startTime: 1530,
  endTime: 1620,
  credits: 3
},{
  courseId: 'ENGL 112',
  courseTitle: 'College Writing II',
  room: 'DB 203',
  days: 'MWF',
  startTime: 800,
  endTime: 920,
  credits: 3
},{
  courseId: 'HHPT 216',
  courseTitle: 'Athletic Injuries',
  room: 'LL 212',
  days: 'MWF',
  startTime: 1030,
  endTime: 1120,
  credits: 3
},{
  courseId: 'MATH 184',
  courseTitle: 'Calculus I',
  room: 'KC 230',
  days: 'MWF',
  startTime: 1130,
  endTime: 1220,
  credits: 3
},{
  courseId: 'SOWK 115',
  courseTitle: 'Introduction to Social Work',
  room: 'DB 212',
  days: 'MWF',
  startTime: 1030,
  endTime: 1120,
  credits: 3
},{
  courseId: 'CPTR 245',
  courseTitle: 'Web Development Basics',
  room: 'DB 303',
  days: 'TR',
  startTime: 1530,
  endTime: 1620,
  credits: 3
}];

function loadElements(){
  var button = document.getElementById('submit');
  button.addEventListener('click', generate, false);
}

function generate(event){
  console.log("click!");
  var idStart = Number(document.getElementById('id-start').value);
  var idEnd = Number(document.getElementById('id-end').value);
  var students = []
  for(var i = 0; i <= (idEnd - idStart); i++){
    students.push({
      stuId: i + idStart,
      nameLast: chance.last(),
      nameFirst: chance.first(),
      major: 'Computing',
      credits: 42,
      currentClasses: []
    });
    for(var j = 0; j < 4; j++){
      var course = chance.integer({min: 0, max: classList.length-1});
      students[students.length - 1].currentClasses.push(classList[course]);
    }
  }

  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(students));
  var dl = document.createElement('a');
  dl.href = "data:" + data;
  dl.download = "data.json";
  dl.textContent = "Download JSON";

  var anchor = document.getElementById('anchor');
  anchor.appendChild(dl);
}

loadElements();
