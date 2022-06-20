const getTheTitles = function(bookList) {
    const titleArr = [];

    bookList.forEach(book => {
        titleArr.push(book['title']);
    });

    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
