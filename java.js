function login() {
    const loginForm = document.getElementById('login-form');
    const modeSelectionPage = document.getElementById('mode-selection-page');

    if (loginForm && modeSelectionPage) {
        loginForm.classList.add('hidden');
        modeSelectionPage.classList.remove('hidden');
    } else {
        console.error('Login form or mode selection page not found');
    }
}

function selectMode(mode) {
    const modeSelectionPage = document.getElementById('mode-selection-page');
    const quizGameSelection = document.getElementById('quiz-game-selection');
    const explorationMode = document.getElementById('exploration-mode');
    const scenarioMode = document.getElementById('scenario-mode');

    modeSelectionPage.classList.add('hidden');

    if (mode === 'quiz') {
        quizGameSelection.classList.remove('hidden');
    } else if (mode === 'exploration') {
        explorationMode.classList.remove('hidden');
    } else if (mode === 'scenario') {
        scenarioMode.classList.remove('hidden');
    }
}

function selectQuiz(game) {
    console.log('Selected Quiz Game:', game);
    // Navigate to the respective quiz game (implement the quiz logic here)
}

function explorePart(part) {
    console.log('Exploring Constitution Part:', part);
    // Implement exploration of Part V or VI
}

function selectScenario(scenario) {
    console.log('Selected Scenario:', scenario);
    // Implement scenario logic
}
function navigateToArticles(type, chapter) {
    // Hide exploration mode and show articles page
    document.getElementById('exploration-mode').classList.add('hidden');
    document.getElementById('articles-page').classList.remove('hidden');

    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = ''; // Clear previous articles

    // Define articles for each chapter
    const articles = {
        'union': {
            'chapter1': ['Article 1', 'Article 2', 'Article 3', 'Article 4'],
            'chapter2': ['Article 52', 'Article 53', 'Article 54', 'Article 55', 'Article 56', 'Article 57', 'Article 58', 'Article 59', 'Article 60', 'Article 61', 'Article 62', 'Article 63', 'Article 64', 'Article 65', 'Article 66', 'Article 67', 'Article 68', 'Article 69', 'Article 70', 'Article 71', 'Article 72', 'Article 73', 'Article 74', 'Article 75', 'Article 76', 'Article 77', 'Article 78'],
            'chapter3': ['Article 75', 'Article 76', 'Article 77', 'Article 78'],
            'chapter4': ['Article 79', 'Article 80', 'Article 81', 'Article 82', 'Article 83', 'Article 84', 'Article 85', 'Article 86', 'Article 87', 'Article 88', 'Article 89', 'Article 90', 'Article 91', 'Article 92', 'Article 93', 'Article 94', 'Article 95', 'Article 96', 'Article 97', 'Article 98', 'Article 99', 'Article 100', 'Article 101', 'Article 102', 'Article 103', 'Article 104', 'Article 105', 'Article 106', 'Article 107', 'Article 108', 'Article 109', 'Article 110', 'Article 111', 'Article 112', 'Article 113', 'Article 114', 'Article 115', 'Article 116', 'Article 117', 'Article 118', 'Article 119', 'Article 120', 'Article 121', 'Article 122'],
            'chapter5': ['Article 245', 'Article 246', 'Article 247', 'Article 248', 'Article 249', 'Article 250', 'Article 251', 'Article 252', 'Article 253', 'Article 254', 'Article 255'],
            'chapter6': ['Article 239', 'Article 240', 'Article 241', 'Article 242']
        },
        'state': {
            'chapter7': ['Article 153', 'Article 154', 'Article 155', 'Article 156', 'Article 157', 'Article 158', 'Article 159', 'Article 160', 'Article 161', 'Article 162'],
            'chapter8': ['Article 168', 'Article 169', 'Article 170', 'Article 171'],
            'chapter9': ['Article 172', 'Article 173', 'Article 174', 'Article 175'],
            'chapter10': ['Article 176', 'Article 177', 'Article 178', 'Article 179', 'Article 180', 'Article 181', 'Article 182', 'Article 183', 'Article 184', 'Article 185', 'Article 186', 'Article 187', 'Article 188', 'Article 189', 'Article 190'],
            'chapter11': ['Article 214', 'Article 215', 'Article 216', 'Article 217', 'Article 218', 'Article 219', 'Article 220', 'Article 221', 'Article 222', 'Article 223', 'Article 224', 'Article 225', 'Article 226', 'Article 227', 'Article 228', 'Article 229', 'Article 230', 'Article 231'],
            'chapter12': ['Article 330', 'Article 331', 'Article 332', 'Article 333', 'Article 334', 'Article 335', 'Article 336', 'Article 337', 'Article 338', 'Article 339', 'Article 340', 'Article 341', 'Article 342']
        }
    };

    // Add articles to the list based on selected chapter
    const articlesForChapter = articles[type][chapter];
    articlesForChapter.forEach(article => {
        const button = document.createElement('button');
        button.textContent = article;
        button.onclick = () => {
            alert('You selected ' + article);
        };
        articlesList.appendChild(button);
    });
}

function goBack() {
    document.getElementById('articles-page').classList.add('hidden');
    document.getElementById('exploration-mode').classList.remove('hidden');
}