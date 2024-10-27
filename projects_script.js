const sortBySelect = document.getElementById('sort-by');
 const projects = document.querySelectorAll('.project');

 const savedSortBy = localStorage.getItem('sortBy');
 if (savedSortBy) {
  sortBySelect.value = savedSortBy;
 }

 sortBySelect.addEventListener('change', () => {
  const sortBy = sortBySelect.value;
  let sortedProjects = [];
  switch (sortBy) {
   case 'default':
    sortedProjects = [...projects].sort((a, b) => parseInt(a.dataset.number) - parseInt(b.dataset.number));
    break;
   case 'price-asc':
    sortedProjects = [...projects].sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
    break;
   case 'price-desc':
    sortedProjects = [...projects].sort((a, b) => parseInt(b.dataset.price) - parseInt(b.dataset.price));
    break;
   case 'build-price-asc':
    sortedProjects = [...projects].sort((a, b) => parseInt(a.dataset.buildPrice) - parseInt(b.dataset.buildPrice));
    break;
   case 'build-price-desc':
    sortedProjects = [...projects].sort((a, b) => parseInt(b.dataset.buildPrice) - parseInt(b.dataset.buildPrice));
    break;
   case 'area-asc':
    sortedProjects = [...projects].sort((a, b) => parseInt(a.dataset.area) - parseInt(b.dataset.area));
    break;
   case 'area-desc':
    sortedProjects = [...projects].sort((a, b) => parseInt(a.dataset.area) - parseInt(b.dataset.area));
    break;
  }
  
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.innerHTML = ''; 
  sortedProjects.forEach(project => projectsContainer.appendChild(project));

  localStorage.setItem('sortBy', sortBy);
 });

 sortBySelect.dispatchEvent(new Event('change')); 