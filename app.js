const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// Using the new DOM Manipulation library, do all of the following: 

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.
function renderList() {
  $('.content').empty();
  for (let i = 0; i < studentList.length; i++) {
    $('.content').append(`<p>${studentList[i]}</p>`);
  };
}
renderList()

// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
$('#add').on('click', function () {
  let addName = $('#name').val();
  studentList.push(addName);
  renderList();
  addName.val('');
});

// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
$('#search').on('click', function () {
  let searchName = $('#name').val();
  studentList.forEach(e => {
    if (searchName === e) {
      $('body').addClass('blue');
    }
  });
});

// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
$('#delete').on('click', function () {
  let deleteName = $('#name').val();
  studentList.forEach((e, i) => {
    if (deleteName === e) {
      studentList.splice(i, 1);
      renderList();
      deleteName.val('');
    }
  });
  
})