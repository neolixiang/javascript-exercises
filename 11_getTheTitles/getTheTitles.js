const getTheTitles = function(books) {
    titles = [];
    for (let i = 0; i <= books.length - 1; i++) {
        titles.push(books[i].title)
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
