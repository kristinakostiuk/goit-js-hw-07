const categoriesList = document.querySelectorAll(".title-categories");

console.log("Number of categories:", categoriesList.length);

categoriesList.forEach(category => {
    const categoryName = category.textContent;
    console.log("Category:", categoryName);
    const categoryItem = category.nextElementSibling.querySelectorAll(".name-categories").length;
    console.log("Elements:", categoryItem);
});

