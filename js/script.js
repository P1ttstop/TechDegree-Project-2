/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// this variable holds all items in the class "student-item"
const studentItems = document.querySelectorAll('.student-item');
// this variable holds the number of students per page
const itemsPerPage = 10;

// The showPage function displays a page with ten items,the other items are hidden 
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   let itemLength = list.length;
   for(let i = 0; i < itemLength; i++) {
      if(i >= startIndex && i < endIndex) {
         list[i].style.display = "block";
      }
      else {
         list[i].style.display = "none";
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   let pagination = document.createElement('div');
   let page = document.createElement('div');
   page.className = "page";
   pagination.className = "pagination";
   pagination.appendChild(page);
   let ul = document.createElement('ul');
   let li = document.createElement('li');
   ul.appendChild(li);
}

showPage(studentItems, 1);
appendPageLinks(studentItems);