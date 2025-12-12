const questionBank = [
    // --- EASY 15 ---
    { id: 1, type: 'radio', level: 'easy', question: 'Який оператор використовується для суворого порівняння?', options: ['==', '=', '===', '!='], correct: 2 },
    { id: 2, type: 'radio', level: 'easy', question: 'Що виведе: if (0) { console.log("A") } else { console.log("B") }?', options: ['A', 'B', 'Помилка'], correct: 1 },
    { id: 3, type: 'checkbox', level: 'easy', question: 'Які конструкції є циклами?', options: ['for', 'if', 'while', 'foreach', 'do...while'], correct: [0, 2, 4] },
    { id: 4, type: 'select', level: 'easy', question: 'Ключове слово для переривання циклу:', options: ['continue', 'stop', 'break', 'exit'], correct: 2 },
    { id: 5, type: 'text', level: 'easy', question: 'Результат виразу: ("5" == 5) ? "Yes" : "No"', correct: "Yes" },
    { id: 6, type: 'radio', level: 'easy', question: 'Скільки разів виконається while(false) { ... }?', options: ['0', '1', 'Нескінченно'], correct: 0 },
    { id: 7, type: 'radio', level: 'easy', question: 'Який цикл гарантовано виконується хоча б раз?', options: ['for', 'while', 'do...while'], correct: 2 },
    { id: 8, type: 'text', level: 'easy', question: 'Яке ключове слово оголошує змінну, яку не можна змінити?', correct: "const" },
    { id: 9, type: 'radio', level: 'easy', question: 'Що таке DOM?', options: ['Document Object Model', 'Data Object Mode', 'Document Only Method'], correct: 0 },
    { id: 10, type: 'select', level: 'easy', question: 'Як знайти елемент за ID?', options: ['querySelector', 'getElementById', 'findId'], correct: 1 },
    { id: 11, type: 'checkbox', level: 'easy', question: 'Типи даних в JS:', options: ['Number', 'String', 'Boolean', 'Float'], correct: [0, 1, 2] },
    { id: 12, type: 'text', level: 'easy', question: 'Символ для однорядкового коментаря', correct: "//" },
    { id: 13, type: 'radio', level: 'easy', question: 'Що поверне typeof "Hello"?', options: ['object', 'string', 'text'], correct: 1 },
    { id: 14, type: 'text', level: 'easy', question: 'Як викликати модальне вікно з повідомленням?', correct: "alert" },
    { id: 15, type: 'radio', level: 'easy', question: 'Чи чутливий JS до регістру (Var vs var)?', options: ['Так', 'Ні'], correct: 0 },

    // --- MEDIUM 15 ---
    { id: 16, type: 'drag', level: 'medium', question: 'Співставте оператори:', pairs: [{id:'d1',text:'&&',match:'І'}, {id:'d2',text:'||',match:'АБО'}, {id:'d3',text:'!',match:'НІ'}] },
    { id: 17, type: 'text', level: 'medium', question: 'Виправте помилку: while i < 5 { i++ }', correct: "while (i < 5) { i++ }" },
    { id: 18, type: 'checkbox', level: 'medium', question: 'Які значення є "falsy"?', options: ['0', '"0"', 'null', 'undefined', '[]'], correct: [0, 2, 3] },
    { id: 19, type: 'radio', level: 'medium', question: 'Що робить continue?', options: ['Зупиняє цикл', 'Наступна ітерація', 'Вихід з функції'], correct: 1 },
    { id: 20, type: 'select', level: 'medium', question: 'Конструкція для перевірки багатьох значень змінної:', options: ['if...else', 'switch', 'for'], correct: 1 },
    { id: 21, type: 'text', level: 'medium', question: 'Напишіть тернарний оператор (High/Low) для x > 10', correct: 'x > 10 ? "High" : "Low"' },
    { id: 22, type: 'radio', level: 'medium', question: 'Де зберігається localStorage?', options: ['Сервер', 'Браузер', 'Оперативна пам\'ять'], correct: 1 },
    { id: 23, type: 'checkbox', level: 'medium', question: 'Методи масивів, що перебирають елементи:', options: ['map', 'filter', 'push', 'forEach'], correct: [0, 1, 3] },
    { id: 24, type: 'text', level: 'medium', question: 'Властивість для зміни текстового вмісту елемента', correct: "textContent" },
    { id: 25, type: 'radio', level: 'medium', question: 'Яка подія виникає при відправці форми?', options: ['click', 'submit', 'change'], correct: 1 },
    { id: 26, type: 'select', level: 'medium', question: 'Як зупинити спливання події?', options: ['preventDefault', 'stopPropagation', 'return false'], correct: 1 },
    { id: 27, type: 'drag', level: 'medium', question: 'Події миші:', pairs: [{id:'m1',text:'mousedown',match:'Клік'}, {id:'m2',text:'mousemove',match:'Рух'}, {id:'m3',text:'mouseenter',match:'Наведення'}] },
    { id: 28, type: 'text', level: 'medium', question: 'Метод для перетворення JSON в об\'єкт', correct: "JSON.parse" },
    { id: 29, type: 'radio', level: 'medium', question: 'Чи змінює метод map() вихідний масив?', options: ['Так', 'Ні, створює новий'], correct: 1 },
    { id: 30, type: 'text', level: 'medium', question: 'Як видалити клас у елемента (element.classList...)?', correct: "remove" },

    // --- HARD 15  ---
    { id: 31, type: 'text', level: 'hard', question: 'Напишіть цикл for від 0 до 4 (без пробілів)', correct: "for(let i=0;i<=4;i++)" },
    { id: 32, type: 'drag', level: 'hard', question: 'Частини циклу for:', pairs: [{id:'h1',text:'let i=0',match:'Start'}, {id:'h2',text:'i<10',match:'Condition'}, {id:'h3',text:'i++',match:'Step'}] },
    { id: 33, type: 'radio', level: 'hard', question: 'Результат: switch(5) { case "5": ... }?', options: ['Спрацює', 'Не спрацює (типи різні)'], correct: 1 },
    { id: 34, type: 'checkbox', level: 'hard', question: 'Способи перебору об\'єкта:', options: ['for..in', 'for..of', 'Object.keys()'], correct: [0, 2] },
    { id: 35, type: 'text', level: 'hard', question: 'Що поверне (false || 0 || "Hello" || null)?', correct: "Hello" },
    { id: 36, type: 'radio', level: 'hard', question: 'Що таке замикання (closure)?', options: ['Функція з доступом до зовнішніх змінних', 'Помилка пам\'яті', 'Закритий тег'], correct: 0 },
    { id: 37, type: 'select', level: 'hard', question: 'Як створити копію об\'єкта (shallow)?', options: ['Object.assign()', 'Object.copy()', 'new Object()'], correct: 0 },
    { id: 38, type: 'drag', level: 'hard', question: 'Event Loop:', pairs: [{id:'l1',text:'Stack',match:'Виклик'}, {id:'l2',text:'Queue',match:'Черга'}, {id:'l3',text:'Web API',match:'Асинхронність'}] },
    { id: 39, type: 'text', level: 'hard', question: 'Що виведе console.log(this) у глобальній області?', correct: "window" },
    { id: 40, type: 'checkbox', level: 'hard', question: 'Які методи мутують (змінюють) масив?', options: ['splice', 'sort', 'slice', 'map'], correct: [0, 1] },
    { id: 41, type: 'radio', level: 'hard', question: '0.1 + 0.2 === 0.3', options: ['true', 'false'], correct: 1 },
    { id: 42, type: 'text', level: 'hard', question: 'Ключове слово для наслідування класу', correct: "extends" },
    { id: 43, type: 'radio', level: 'hard', question: 'Promise states: pending, fulfilled та...', options: ['error', 'rejected', 'done'], correct: 1 },
    { id: 44, type: 'text', level: 'hard', question: 'Як перетворити масив у рядок?', correct: "join" },
    { id: 45, type: 'select', level: 'hard', question: 'Scope змінної var?', options: ['Блоковий', 'Функціональний', 'Глобальний'], correct: 1 }
];

class Question {
    constructor(data) {
        this.id = data.id;
        this.question = data.question;
        this.points = 1;
    }
    render() { return `<h3>${this.question}</h3>`; }
    checkAnswer() { return false; }
    afterRender() {}
}

// Radio
class RadioQuestion extends Question {
    constructor(data) {
        super(data);
        this.options = data.options;
        this.correct = data.correct;
    }
    render() {
        let html = super.render() + `<div class="options-container">`;
        this.options.forEach((opt, idx) => {
            html += `<label class="option-label"><input type="radio" name="answer" value="${idx}"> ${opt}</label>`;
        });
        return html + `</div>`;
    }
    checkAnswer() {
        const el = document.querySelector('input[name="answer"]:checked');
        return el && parseInt(el.value) === this.correct;
    }
}

// Checkbox
class CheckboxQuestion extends Question {
    constructor(data) {
        super(data);
        this.options = data.options;
        this.correct = data.correct;
    }
    render() {
        let html = super.render() + `<div class="options-container">`;
        this.options.forEach((opt, idx) => {
            html += `<label class="option-label"><input type="checkbox" name="answer" value="${idx}"> ${opt}</label>`;
        });
        return html + `</div>`;
    }
    checkAnswer() {
        const els = document.querySelectorAll('input[name="answer"]:checked');
        const ans = Array.from(els).map(c => parseInt(c.value)).sort();
        return JSON.stringify(ans) === JSON.stringify(this.correct.sort());
    }
}

// Select
class SelectQuestion extends Question {
    constructor(data) {
        super(data);
        this.options = data.options;
        this.correct = data.correct;
    }
    render() {
        let html = super.render() + `<select id="select-answer" class="auth-form-internal"><option value="" disabled selected>Оберіть...</option>`;
        this.options.forEach((opt, idx) => { html += `<option value="${idx}">${opt}</option>`; });
        return html + `</select>`;
    }
    checkAnswer() {
        const el = document.getElementById('select-answer');
        return el.value && parseInt(el.value) === this.correct;
    }
}

// Text
class TextQuestion extends Question {
    constructor(data) {
        super(data);
        this.correct = data.correct;
    }
    render() {
        return super.render() + `<textarea id="text-answer" class="code-input" placeholder="Ваша відповідь..."></textarea>`;
    }
    checkAnswer() {
        const val = document.getElementById('text-answer').value.trim();
        const norm = str => str.replace(/\s+/g, '').toLowerCase();
        return norm(val) === norm(this.correct);
    }
}

// Drag & Drop
class DragQuestion extends Question {
    constructor(data) {
        super(data);
        this.pairs = data.pairs;
    }
    render() {
        const shuffled = [...this.pairs].sort(() => Math.random() - 0.5);
        return super.render() + `
            <div class="drag-container">
                <div class="draggables">
                    ${shuffled.map(p => `<div class="draggable-item" draggable="true" id="${p.id}">${p.text}</div>`).join('')}
                </div>
                <div class="drop-zones">
                    ${this.pairs.map(p => `<div class="drop-zone" data-match="${p.match}"><span>${p.match}</span></div>`).join('')}
                </div>
            </div>`;
    }
	
    afterRender() {
        const draggables = document.querySelectorAll('.draggable-item');
        const zones = document.querySelectorAll('.drop-zone');

        draggables.forEach(d => {
            d.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text', d.id);
                d.classList.add('dragging');
            });
            d.addEventListener('dragend', () => d.classList.remove('dragging'));
        });

        zones.forEach(z => {
            z.addEventListener('dragover', e => { e.preventDefault(); z.style.borderColor = '#3498db'; });
            z.addEventListener('dragleave', () => z.style.borderColor = '#2c3e50');
            z.addEventListener('drop', e => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text');
                const el = document.getElementById(id);
                if (z.querySelectorAll('.draggable-item').length === 0) z.appendChild(el);
                z.style.borderColor = '#2c3e50';
            });
        });
    }
    checkAnswer() {
        let correct = 0;
        document.querySelectorAll('.drop-zone').forEach(z => {
            const item = z.querySelector('.draggable-item');
            if (item && this.pairs.find(p => p.id === item.id).match === z.dataset.match) correct++;
        });
        return correct === this.pairs.length;
    }
}

/* ===================== LOGIC ===================== */

class QuizController {
    constructor(rawQuestions) {
        this.rawQuestions = rawQuestions;
        this.questions = []; // обєкти класів
        this.score = 0;
        this.index = 0;
        this.timer = null;
        this.seconds = 0;
        this.level = '';
    }

    createQuestionObject(data) {
        switch (data.type) {
            case 'radio': return new RadioQuestion(data);
            case 'checkbox': return new CheckboxQuestion(data);
            case 'select': return new SelectQuestion(data);
            case 'text': return new TextQuestion(data);
            case 'drag': return new DragQuestion(data);
            default: return new Question(data);
        }
    }

    start(level) {
        this.level = level;
        let filteredData = this.rawQuestions.filter(q => q.level === level);
        
        // Якщо питань мало - додаємо середні
        if (filteredData.length < 10 && level === 'hard') {
             filteredData = [...filteredData, ...this.rawQuestions.filter(q => q.level === 'medium')];
        }

        this.questions = filteredData
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
            .map(data => this.createQuestionObject(data));

        this.score = 0;
        this.index = 0;
        this.seconds = 0;
        
        document.getElementById('total-qs').innerText = this.questions.length;
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');

        this.startTimer();
        this.render();
    }

    startTimer() {
        if(this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.seconds++;
            const m = Math.floor(this.seconds / 60).toString().padStart(2, '0');
            const s = (this.seconds % 60).toString().padStart(2, '0');
            document.getElementById('timer').innerText = `${m}:${s}`;
        }, 1000);
    }

    render() {
        const q = this.questions[this.index];
        document.getElementById('current-q-num').innerText = this.index + 1;
        
        const container = document.getElementById('question-container');
        container.innerHTML = q.render();
        q.afterRender();
    }

    next() {
        const q = this.questions[this.index];
        if (q.checkAnswer()) this.score++;
        
        this.index++;
        if (this.index < this.questions.length) {
            this.render();
        } else {
            this.finish();
        }
    }

    finish() {
        clearInterval(this.timer);
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');
        
        const timeStr = document.getElementById('timer').innerText;
        document.getElementById('final-score').innerText = this.score;
        document.getElementById('final-time').innerText = timeStr;

        this.saveHistory(timeStr);
    }

    saveHistory(time) {
        const name = document.getElementById('student-name').value;
        const group = document.getElementById('student-group').value;
        const rec = {
            date: new Date().toLocaleString('uk-UA'),
            name, group, level: this.level,
            score: `${this.score} / ${this.questions.length}`,
            time
        };
        const history = JSON.parse(localStorage.getItem('quiz_results')) || [];
        history.push(rec);
        localStorage.setItem('quiz_results', JSON.stringify(history));
    }
}

// Ініціалізація
const app = new QuizController(questionBank);

// Події
document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('header-student-name').innerText = document.getElementById('student-name').value;
    document.getElementById('header-student-group').innerText = document.getElementById('student-group').value;
    app.start(document.getElementById('difficulty-level').value);
});

document.getElementById('next-btn').addEventListener('click', () => app.next());

// Історія
const histBtn = document.getElementById('show-history-btn');
const histBox = document.getElementById('history-container');
const histTbody = document.getElementById('history-body');

histBtn.addEventListener('click', () => {
    histBox.classList.toggle('hidden');
    if(!histBox.classList.contains('hidden')) {
        const data = JSON.parse(localStorage.getItem('quiz_results')) || [];
        histTbody.innerHTML = data.reverse().map(r => 
            `<tr><td>${r.date}</td><td>${r.name} (${r.group})</td><td>${r.level}</td><td>${r.time}</td><td><b>${r.score}</b></td></tr>`
        ).join('');
        histBtn.innerText = 'Приховати історію';
    } else {
        histBtn.innerText = 'Показати історію спроб';
    }
});

document.getElementById('clear-history-btn').addEventListener('click', () => {
    if(confirm('Очистити?')) { localStorage.removeItem('quiz_results'); histTbody.innerHTML = ''; }
});