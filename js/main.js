let skillsList = [[
    'Linux Tools',
    'Linux',
    'SSH',
    'Algorithms and Data Structures',
    'Node.js',
    'JavaScript',
    'OOP',
    'Open Source',
    'Object-Oriented Design',
    'Java',
    'Script Frameworks',
    'HTML5',
    'Open Source Frameworks',
    'Mongo DB',
    'Express.js',
    'Javascript ES6',
    'HTTP',
    'Microservices',
    'Angular',
    'MVVM',
    'CSS3',
    'JSON',
    'Bootstrap',
    'Modular APIs',
    'Fullstack Development',
    'Angular',
    'Typescript',
    'Back-End Development',
    'Git',
    'Socket.io',
    'Website Development',
    'MariaDB',
    'API Design',
    'Inventory',
    'Bash',
    'ERP Development',
    'Software Architecture'
  ],
  [
    'NoSQL',
    'REST/RESTful APIs',      
    'MySQL',
    'Electronics', 
    'LAMP',
    'Highcharts',
    'Web Design',        
    'System Design',
    'GitHub',
    'Shell Scripting',  
    'jQuery',
    'Firewalls',         
    'Mathematics',
    'PHP',
    'Figma',          
    'PostgreSQL',
    'XML',
    'Photoshop',   
    'Postman',
    'IoT',                
    'Blender',           
    'Ionic',
    'Docker',            
    'Vue.js',
    'Microsoft Office'
  ],
  [
    'Graphic Design', 
    'Three.js',       
    'Electron',
    'Electronic Billing',    
    'VoIP',
    'Chrome Extensions',   
    'Adobe Illustrator',
    'Django Rest Framework', 
    'Atlassian',
    'WordPress',
    'Ethical Hacking',       
    'Arduino',
    'Cordova',               
    'Android',
    'Webpack',               
    'Google Cloud Platform',
    'Puppeteer',             
    'NGINX','Android SDK',
    'Odoo',
    'Redis',                 
    'Android/',
    'Java',                  
    'Android Studio',
    'Svelte'
  ]];

let publicRepos = [
    'ceduardorubio/ceduardorubio.github.io',
'ceduardorubio/slipByCapital',
'ceduardorubio/nodejs-skill-tests-topics',
'ceduardorubio/User-Public-Repos-Commits',
'ceduardorubio/ceduardorubio',
'ceduardorubio/ceduardo-page',
'ceduardorubio/VSCode-Extension-Webview',
'ceduardorubio/grahamjs',
'ceduardorubio/Async-Array-Operations',
'ceduardorubio/SensorHexFrameToJSON',
'ceduardorubio/WHITELISTS-BY-COUNTRIES',
'ceduardorubio/pdfeditor',
'ceduardorubio/ernest'
]
let [advanced, experienced, beginner] = skillsList;
let advancedElem = document.getElementById('advanced');
let experiencedElem = document.getElementById('experienced');
let beginnerElem = document.getElementById('beginner');

let reposElem = document.getElementById('repos');

//append skills to the DOM
function appendSkills(skills, elem) {
    skills.forEach(skill => {
        
    });

    for(let i = 0 ; i < skills.length ; i = i +2) {
        let row = document.createElement('div');
        row.className = 'row';
        let col1 = document.createElement('div');
        col1.className = 'col';
        col1.innerHTML = GetCollInnerHTML(skills[i]);
        let col2 = document.createElement('div');
        col2.className = 'col';
        col2.innerHTML = GetCollInnerHTML(skills[i+1]);
        row.appendChild(col1);
        row.appendChild(col2);
        elem.appendChild(row);
    }
    
}

function appenRepos (repos,elem){
    repos.forEach(repo => {
        let row = document.createElement('div');
        row.className = 'row';
        let col1 = document.createElement('div');
        col1.className = 'col';
        col1.innerHTML = '- ' + repo;
        row.appendChild(col1);
        elem.appendChild(row);
    }
    );
}

function GetCollInnerHTML(value = '') {
    if(value !== ''){
       return '- ' + value;
    } else {
        return '';
    }
}
appendSkills(advanced, advancedElem);
appendSkills(experienced, experiencedElem);
appendSkills(beginner, beginnerElem);

appenRepos(publicRepos, reposElem);

