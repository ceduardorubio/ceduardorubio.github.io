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
let [advanced, experienced, beginner] = skillsList;
let advancedElem = document.getElementById('advanced');
let experiencedElem = document.getElementById('experienced');
let beginnerElem = document.getElementById('beginner');

//append skills to the DOM
function appendSkills(skills, elem) {
    skills.forEach(skill => {
        let skillElem = document.createElement('li');
        skillElem.innerHTML = skill;
        elem.appendChild(skillElem);
    });
}

appendSkills(advanced, advancedElem);
appendSkills(experienced, experiencedElem);
appendSkills(beginner, beginnerElem);

