const projects = document.getElementById('projects-nav');

const exhibitions = document.getElementById('exhibitions-nav');

const info = document.getElementById('info-nav');

const noProjects = document.getElementById('projects');

const noExhibitions = document.getElementById('exhibitions');

const noInfo = document.getElementById('info');

const noCommissions = document.getElementById('commissions');


const home = document.getElementById('home');

const pmenu = document.getElementById('project-menu');

const pListNav = document.getElementById('pListNav');

const pList = document.getElementById('projects-list');

const pOverviewNav = document.getElementById('pOverviewNav');

const pCommissionsNav = document.getElementById('pCommissionsNav');

const bio = document.getElementById('bio');

// ✅ Show hidden DIV on hover
projects.onclick = function() {
    noProjects.style.display ='block';
    noExhibitions.style.display= 'none';
    noInfo.style.display= 'none';
    pList.style.display= 'none';
    home.style.display = 'none';
    bio.style.display = 'block';
    pmenu.style.display = 'block';
    noCommissions.style.display ='none';
  };

exhibitions.onclick = function() {
  noExhibitions.style.display= 'block';
  noProjects.style.display= 'none';
  noInfo.style.display= 'none';
  home.style.display = 'none';
  bio.style.display = 'block';
  pmenu.style.display = 'none';
  noCommissions.style.display ='none';
  };

info.onclick = function() {
  noInfo.style.display = 'block';
  noExhibitions.style.display= 'none';
  noProjects.style.display= 'none';
  home.style.display = 'none';
  bio.style.display = 'none';
  pmenu.style.display = 'none';
  noCommissions.style.display ='none';
};

pListNav.onclick = function() {
  pList.style.display = 'block';
  noProjects.style.display= 'none';
  noCommissions.style.display ='none';
};

pOverviewNav.onclick = function() {
  noProjects.style.display ='block';
  noExhibitions.style.display= 'none';
  noInfo.style.display= 'none';
  pList.style.display= 'none';
  home.style.display = 'none';
  bio.style.display = 'block';
  pmenu.style.display = 'block';
  noCommissions.style.display ='none';
};

pCommissionsNav.onclick = function() {
  noCommissions.style.display ='block';
  noProjects.style.display ='none';
  noExhibitions.style.display= 'none';
  noInfo.style.display= 'none';
  pList.style.display= 'none';
  home.style.display = 'none';
  bio.style.display = 'block';
  pmenu.style.display = 'block';
};