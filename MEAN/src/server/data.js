module.exports = {
  people: getPeople(),
  categories: getCategories()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}


function getCategories() {
  return [
    { id: 1, categoryName: 'John', categoryStatus: 'Active', noQuestions: 25},
    { id: 2, categoryName: 'Ward', categoryStatus: 'Active', noQuestions: 31},
    { id: 3, categoryName: 'Colleen', categoryStatus: 'Active', noQuestions: 21},
    { id: 4, categoryName: 'Madelyn', categoryStatus: 'Inactive', noQuestions: 18},
    { id: 5, categoryName: 'Ella', categoryStatus: 'Inactive', noQuestions: 18},
    { id: 6, categoryName: 'Landon', categoryStatus: 'Active', noQuestions: 11},
    { id: 7, categoryName: 'Haley', categoryStatus: 'Active', noQuestions: 35},
    { id: 8, categoryName: 'Aaron', categoryStatus: 'Inactive', noQuestions: 22}
  ];
}
