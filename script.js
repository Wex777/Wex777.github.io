// Обработчик клика на кнопке "Добавить статью"
document.getElementById('addArticleBtn').addEventListener('click', function () {
    const articleText = prompt('Введите текст статьи:');
    if (articleText) {
        createArticle(articleText);
    }
});

// Функция для создания и добавления статьи на страницу
function createArticle(text) {
    const articleList = document.getElementById('articleList');
    const article = document.createElement('div');
    article.className = 'article';
    article.textContent = text;
    articleList.appendChild(article);
}
