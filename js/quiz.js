/* 
    Типи питань: 
   'radio' - одна відповідь
   'checkbox' - декілька відповідей
   'select' - випадаючий список
   'text' - ввід коду/тексту
   'drag' - Drag & Drop
*/

const questionBank = [
    // РІВЕНЬ: EASY
    {
        id: 1,
        type: 'radio',
        level: 'easy',
        question: 'Який оператор використовується для суворого порівняння (значення та тип)?',
        options: ['==', '=', '===', '!='],
        correct: 2
    },
    {
        id: 2,
        type: 'radio',
        level: 'easy',
        question: 'Що виведе в консоль код: if (0) { console.log("A") } else { console.log("B") }?',
        options: ['A', 'B', 'Помилка', 'undefined'],
        correct: 1
    },
    {
        id: 3,
        type: 'checkbox',
        level: 'easy',
        question: 'Які з наведених конструкцій є циклами в JavaScript?',
        options: ['for', 'if', 'while', 'foreach (як оператор)', 'do...while'],
        correct: [0, 2, 4]
    },
    {
        id: 4,
        type: 'select',
        level: 'easy',
        question: 'Оберіть ключове слово для переривання виконання циклу:',
        options: ['continue', 'stop', 'break', 'exit'],
        correct: 2
    },
    {
        id: 5,
        type: 'text',
        level: 'easy',
        question: 'Напишіть результат виразу: ("5" == 5) ? "Yes" : "No"',
        correct: "Yes"
    },
    { 
        id: 6, 
        type: 'radio', 
        level: 'easy', 
        question: 'Скільки разів виконається цикл while(false) { ... }?', 
        options: ['0', '1', 'Нескінченно'], 
        correct: 0 },
    { 
        id: 7, 
        type: 'radio', 
        level: 'easy', 
        question: 'Який цикл гарантовано виконується хоча б один раз?', 
        options: ['for', 'while', 'do...while'], 
        correct: 2 },

    // РІВЕНЬ: MEDIUM
    {
        id: 8,
        type: 'drag',
        level: 'medium',
        question: 'Співставте оператор з його описом:',
        pairs: [
            { id: 'd1', text: '&&', match: 'Логічне І' },
            { id: 'd2', text: '||', match: 'Логічне АБО' },
            { id: 'd3', text: '!', match: 'Логічне НІ' }
        ]
    },
    {
        id: 9,
        type: 'text',
        level: 'medium',
        question: 'Виправте помилку в коді (напишіть виправлений рядок): while i < 5 { i++ }',
        correct: "while (i < 5) { i++ }" 
    },
    {
        id: 10,
        type: 'checkbox',
        level: 'medium',
        question: 'Які значення в JavaScript вважаються "falsy" (хибними) в умові if(...) ?',
        options: ['0', '"0"', 'null', 'undefined', '[]', '""'],
        correct: [0, 2, 3, 5]
    },
    {
        id: 11,
        type: 'radio',
        level: 'medium',
        question: 'Що робить оператор continue?',
        options: ['Повністю зупиняє цикл', 'Переходить до наступної ітерації циклу', 'Виходить з функції', 'Нічого'],
        correct: 1
    },
    {
        id: 12,
        type: 'select',
        level: 'medium',
        question: 'Яка конструкція краще підходить для перевірки однієї змінної на багато конкретних значень?',
        options: ['if...else', 'switch', 'for', 'ternary'],
        correct: 1
    },
    { 
        id: 13, 
        type: 'text', 
        level: 'medium', 
        question: 'Напишіть тернарний оператор, який повертає "High" якщо x > 10, інакше "Low".', 
        correct: 'x > 10 ? "High" : "Low"' },

    // РІВЕНЬ: HARD
    {
        id: 14,
        type: 'text',
        level: 'hard',
        question: 'Напишіть цикл for, який виводить числа від 0 до 4 включно. (Без пробілів усередині дужок, використовуйте let)',
        correct: "for(let i=0;i<=4;i++)"
    },
    {
        id: 15,
        type: 'drag',
        level: 'hard',
        question: 'Розставте частини циклу for у правильному порядку:',
        pairs: [
            { id: 'h1', text: 'let i = 0', match: 'Ініціалізація' },
            { id: 'h2', text: 'i < 10', match: 'Умова' },
            { id: 'h3', text: 'i++', match: 'Крок' }
        ]
    },
    {
        id: 16,
        type: 'radio',
        level: 'hard',
        question: 'Який буде результат? let a = 5; switch(a) { case "5": a++; break; case 5: a+=2; break; }',
        options: ['5', '6', '7', 'Помилка'],
        correct: 2 
    },
    {
        id: 17,
        type: 'checkbox',
        level: 'hard',
        question: 'Оберіть коректні способи перебору властивостей об\'єкта:',
        options: ['for (let key in obj)', 'for (let val of obj)', 'Object.keys(obj).forEach(...)', 'while (obj)'],
        correct: [0, 2]
    },
    {
        id: 18,
        type: 'text',
        level: 'hard',
        question: 'Що поверне (false || 0 || "Hello" || null)?',
        correct: "Hello"
    }
];

// ===================== ЛОГІКА ТЕСТУ =====================

class Quiz {
    constructor(questions) {
        this.allQuestions = questions;
        this.currentQuestions = [];
        this.score = 0;
        this.questionIndex = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeElapsed = 0; // у секундах
        this.selectedLevel = '';
    }

    start(level) {
        this.selectedLevel = level;
        
        // Логіка фільтрації питань
        let levelQuestions;
        if (level === 'hard') {
            // Для харду і medium, і hard
            levelQuestions = this.allQuestions.filter(q => q.level === 'hard' || q.level === 'medium');
        } else {
            levelQuestions = this.allQuestions.filter(q => q.level === level);
        }

        // якщо питань мало - берем всі, інакше тільки відфільтровані
        if (levelQuestions.length < 5) {
            this.currentQuestions = this.shuffleArray(this.allQuestions).slice(0, 10);
        } else {
            this.currentQuestions = this.shuffleArray(levelQuestions).slice(0, 10);
        }

        this.score = 0;
        this.questionIndex = 0;
        this.timeElapsed = 0;
        
        // Оновлюєм кількість питань на результатах
        document.getElementById('total-qs').innerText = this.currentQuestions.length;

        this.startTimer();
        this.renderQuestion();
        
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Час
    formatTime(seconds) {
        const min = Math.floor(seconds / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeElapsed++;
            document.getElementById('timer').innerText = this.formatTime(this.timeElapsed);
        }, 1000);
    }

    renderQuestion() {
        const qData = this.currentQuestions[this.questionIndex];
        const container = document.getElementById('question-container');
        document.getElementById('current-q-num').innerText = this.questionIndex + 1;

        let html = `<h3>${qData.question}</h3>`;

        switch (qData.type) {
            case 'radio':
                html += `<div class="options-container">`;
                qData.options.forEach((opt, idx) => {
                    html += `
                        <label class="option-label">
                            <input type="radio" name="answer" value="${idx}">
                            ${opt}
                        </label>`;
                });
                html += `</div>`;
                break;

            case 'checkbox':
                html += `<div class="options-container">`;
                qData.options.forEach((opt, idx) => {
                    html += `
                        <label class="option-label">
                            <input type="checkbox" name="answer" value="${idx}">
                            ${opt}
                        </label>`;
                });
                html += `</div>`;
                break;

            case 'select':
                html += `<select id="select-answer" class="auth-form-internal">
                            <option value="" disabled selected>Оберіть відповідь</option>`;
                qData.options.forEach((opt, idx) => {
                    html += `<option value="${idx}">${opt}</option>`;
                });
                html += `</select>`;
                break;

            case 'text':
                html += `<textarea id="text-answer" class="code-input" placeholder="Введіть код або відповідь..."></textarea>`;
                break;

            case 'drag':
                this.currentDragPairs = qData.pairs;
                html += `<div class="drag-container">
                            <div class="draggables" id="draggables">
                                ${this.shuffleArray([...qData.pairs]).map(p => 
                                    `<div class="draggable-item" draggable="true" id="${p.id}">${p.text}</div>`
                                ).join('')}
                            </div>
                            <div class="drop-zones">
                                ${qData.pairs.map(p => 
                                    `<div class="drop-zone" data-match="${p.match}">
                                        <span>${p.match}</span>
                                    </div>`
                                ).join('')}
                            </div>
                         </div>`;
                break;
        }

        container.innerHTML = html;
        if (qData.type === 'drag') {
            this.initDragAndDrop();
        }
    }

    initDragAndDrop() {
       const draggables = document.querySelectorAll('.draggable-item');
        const dropZones = document.querySelectorAll('.drop-zone');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', draggable.id);
                draggable.classList.add('dragging');
            });
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.style.borderColor = '#3498db';
            });
            zone.addEventListener('dragleave', () => {
                zone.style.borderColor = '#2c3e50';
            });
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                const draggable = document.getElementById(id);
                if(zone.children.length < 2) {
                     zone.appendChild(draggable);
                }
                zone.style.borderColor = '#2c3e50';
            });
        });
    }

    checkAnswer() {
        const qData = this.currentQuestions[this.questionIndex];
        let isCorrect = false;
        let userAnswer = null;

        switch (qData.type) {
            case 'radio':
                const radio = document.querySelector('input[name="answer"]:checked');
                if (radio) {
                    userAnswer = parseInt(radio.value);
                    isCorrect = (userAnswer === qData.correct);
                }
                break;
            case 'checkbox':
                const checks = document.querySelectorAll('input[name="answer"]:checked');
                userAnswer = Array.from(checks).map(c => parseInt(c.value)).sort();
                const correctArr = qData.correct.sort();
                isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctArr);
                break;
            case 'select':
                const select = document.getElementById('select-answer');
                if (select.value) {
                    userAnswer = parseInt(select.value);
                    isCorrect = (userAnswer === qData.correct);
                }
                break;
            case 'text':
                const text = document.getElementById('text-answer').value;
                userAnswer = text.trim();
                const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();
                isCorrect = normalize(userAnswer) === normalize(qData.correct);
                break;
            case 'drag':
                const zones = document.querySelectorAll('.drop-zone');
                let correctDrops = 0;
                userAnswer = [];
                zones.forEach(zone => {
                    const droppedItem = zone.querySelector('.draggable-item');
                    const zoneLabel = zone.dataset.match;
                    if (droppedItem) {
                        const originalPair = qData.pairs.find(p => p.id === droppedItem.id);
                        if (originalPair.match === zoneLabel) correctDrops++;
                    }
                });
                isCorrect = (correctDrops === qData.pairs.length);
                break;
        }

        if (isCorrect) this.score++;
    }

    nextQuestion() {
        this.checkAnswer();
        this.questionIndex++;

        if (this.questionIndex < this.currentQuestions.length) {
            this.renderQuestion();
        } else {
            this.finish();
        }
    }

    finish() {
        clearInterval(this.timer);
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');
        
        const finalScoreEl = document.getElementById('final-score');
        finalScoreEl.innerText = this.score;

        const finalTimeString = this.formatTime(this.timeElapsed);
        document.getElementById('final-time').innerText = finalTimeString;

        this.saveResult(finalTimeString);
    }

// Збереження в LocalStorage
    saveResult(timeString) {
        const studentName = document.getElementById('student-name').value;
        const group = document.getElementById('student-group').value;
        
        const resultData = {
            date: new Date().toLocaleString('uk-UA'),
            name: studentName,
            group: group,
            level: this.selectedLevel,
            score: `${this.score} / ${this.currentQuestions.length}`,
            time: timeString
        };

        let history = JSON.parse(localStorage.getItem('quiz_results')) || [];
        history.push(resultData);
        localStorage.setItem('quiz_results', JSON.stringify(history));
    }
}

// ІНІЦІАЛІЗАЦІЯ

const quizApp = new Quiz(questionBank);

// Старт тесту
document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('student-name').value;
    const group = document.getElementById('student-group').value;
    const level = document.getElementById('difficulty-level').value;

    document.getElementById('header-student-name').innerText = name;
    document.getElementById('header-student-group').innerText = group;

    quizApp.start(level);
});

document.getElementById('next-btn').addEventListener('click', () => {
    quizApp.nextQuestion();
});

// ІСТОРІЇ

const historyBtn = document.getElementById('show-history-btn');
const historyContainer = document.getElementById('history-container');
const historyBody = document.getElementById('history-body');
const clearHistoryBtn = document.getElementById('clear-history-btn');

historyBtn.addEventListener('click', () => {
    if (historyContainer.classList.contains('hidden')) {
        renderHistory();
        historyContainer.classList.remove('hidden');
        historyBtn.innerText = 'Приховати історію';
    } else {
        historyContainer.classList.add('hidden');
        historyBtn.innerText = 'Показати історію спроб';
    }
});

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('quiz_results')) || [];
    historyBody.innerHTML = ''; // Очистка таблиці

    if (history.length === 0) {
        historyBody.innerHTML = '<tr><td colspan="5">Історія порожня</td></tr>';
        return;
    }

    // Сортування (новіші зверху)
    history.reverse().forEach(record => {
        const row = `
            <tr>
                <td>${record.date}</td>
                <td>${record.name} (${record.group})</td>
                <td>${record.level}</td>
                <td>${record.time}</td>
                <td><b>${record.score}</b></td>
            </tr>
        `;
        historyBody.innerHTML += row;
    });
}

// Кнопка очищення
clearHistoryBtn.addEventListener('click', () => {
    if(confirm('Ви впевнені, що хочете видалити всю історію?')) {
        localStorage.removeItem('quiz_results');
        renderHistory();
    }
});