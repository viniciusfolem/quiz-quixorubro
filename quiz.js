const steps = [
  // Step 1: Gender
  {
    type: 'single',
    question: 'Você é homem ou mulher?',
    options: [
      { text: 'Homem', value: 'homem', emoji: '👨🏻' },
      { text: 'Mulher', value: 'mulher', emoji: '👩🏻' }
    ]
  },
  // Step 2: Age
  {
    type: 'single',
    question: 'Qual a sua idade?',
    options: [
      { text: 'Menos de 18', value: '<18' },
      { text: '18-25', value: '18-25' },
      { text: '26-35', value: '26-35' },
      { text: '36-45', value: '36-45' },
      { text: '46+', value: '46+' }
    ]
  },
  // Step 3: Insecurity
  {
    type: 'single',
    question: 'Você já se sentiu <span class="text-orange">inseguro</span> por causa do seu rosto?',
    options: [
      { text: 'Sim, muito', value: 'muito', emoji: '😣' },
      { text: 'Às vezes', value: 'as_vezes', emoji: '😕' },
      { text: 'Raramente', value: 'raramente', emoji: '🤔' },
      { text: 'Nunca', value: 'nunca', emoji: '😁' }
    ]
  },
  // Step 4: Problems (Multi)
  {
    type: 'multi',
    question: 'O que mais te <span class="text-orange">incomoda</span> no seu rosto hoje?',
    subline: 'Pode escolher mais de uma opção',
    options: [
      { text: 'Falta de definição no maxilar', value: 'maxilar', emoji: '🗿' },
      { text: 'Rosto inchado', value: 'inchado', emoji: '😕' },
      { text: 'Queixo fraco ou pra dentro', value: 'queixo', emoji: '🔽' },
      { text: 'Papada', value: 'papada', emoji: '😐' },
      { text: 'Problemas de pele, como acne, rugas ou olheiras', value: 'pele', emoji: '😎' },
      { text: 'Rosto parece "sem presença"', value: 'presenca', emoji: '😠' }
    ],
    cta: 'Continuar'
  },
  // Step 5: Social Perception
  {
    type: 'single',
    question: 'Você sente que seu rosto influencia como as pessoas te tratam?',
    options: [
      { text: 'Sim, bastante', value: 'sim' },
      { text: 'Às vezes', value: 'as_vezes' },
      { text: 'Não sei dizer', value: 'nao_sei' }
    ]
  },
  // Step 6: Info - Side-by-side comparison
  {
    type: 'info',
    content: `
      <h2 class="text-xl mb-3 font-bold text-center">🖊 A maioria das pessoas não tem um "rosto feio".<br>Elas só têm um rosto <span class="text-green font-bold">SEM ESTRUTURA</span>.</h2>
      <img src="images/7GG81-antes-depois-01.jpg" alt="Hoje vs Em 3 semanas" class="step-image">
      <div class="info-box mt-3">
        <p>Pequenos ajustes na postura da língua, musculatura do maxilar e hábitos faciais podem mudar <strong>drasticamente</strong> como seu rosto é percebido.</p>
        <p class="mt-2 font-bold">Mesmo sem cirurgia ou procedimentos estéticos.</p>
      </div>
    `,
    cta: 'Continuar'
  },
  // Step 7: Breathing
  {
    type: 'single',
    question: 'Você respira mais pela boca ou pelo nariz?',
    options: [
      { text: 'Boca', value: 'boca' },
      { text: 'Nariz', value: 'nariz' },
      { text: 'Nunca prestei atenção', value: 'indiferente' }
    ]
  },
  // Step 8: Past attempts
  {
    type: 'single',
    question: 'Você já tentou mudar algo no seu rosto antes?',
    options: [
      { text: 'Já tentei exercícios aleatórios', value: 'exercicios' },
      { text: 'Apenas dieta e treino', value: 'dieta' },
      { text: 'Nunca tentei nada', value: 'nunca' }
    ]
  },
  // Step 9: Goals (Multi)
  {
    type: 'multi',
    question: 'Quais características você gostaria de melhorar?',
    subline: 'Escolha as opções que mais se aplicam.',
    options: [
      { text: 'Definição do maxilar', value: 'maxilar', emoji: '🗿' },
      { text: 'Queixo mais projetado', value: 'queixo', emoji: '⬆️' },
      { text: 'Reduzir papada', value: 'papada', emoji: '🔻' },
      { text: 'Contorno do rosto mais marcado', value: 'contorno', emoji: '😏' },
      { text: 'Melhorar a pele', value: 'pele', emoji: '🌿' }
    ],
    cta: 'Continuar'
  },
  // Step 10: Info - Moldable face
  {
    type: 'info',
    content: `
      <h2 class="text-xl mb-3 font-bold text-center">🍎 Seu rosto é moldável</h2>
      <img src="images/ksnsV-rosto-moldavel-quiz.jpg" alt="Rosto moldável" class="step-image">
      <p class="mb-3">A posição da língua, tensão muscular facial e respiração nasal moldam a estrutura do rosto ao longo do tempo.</p>
      <p class="font-bold mb-3">O problema é que ninguém te ensina sobre isso.</p>
      <div class="info-box">
        <p>Mas a boa notícia é que <strong>com os exercícios faciais corretos</strong>, e apenas <strong>10min por dia</strong>, você já pode melhorar isso em 3 semanas.</p>
      </div>
    `,
    cta: 'Continuar'
  },
  // Step 11: Potential
  {
    type: 'single',
    question: 'Você acha que seu rosto hoje reflete <span class="text-green">seu potencial</span>?',
    options: [
      { text: 'Acho que não', value: 'nao' },
      { text: 'Nem de perto', value: 'longe' },
      { text: 'Talvez', value: 'talvez' }
    ]
  },
  // Step 12: Feeling
  {
    type: 'single',
    question: 'Se seu rosto estivesse <span class="text-green">mais definido</span>, você se sentiria:',
    options: [
      { text: 'Mais confiante', value: 'confiante' },
      { text: 'Mais atraente', value: 'atraente' },
      { text: 'Mais respeitado', value: 'respeitado' },
      { text: 'Tudo isso', value: 'tudo', bold: true }
    ]
  },
  // Step 13: Time
  {
    type: 'single',
    question: 'Quanto tempo por dia você consegue se dedicar?',
    options: [
      { text: '5 minutos', value: '5min' },
      { text: '10 minutos', value: '10min' },
      { text: '15 minutos ou mais', value: '15min' }
    ]
  },
  // Step 14: Perception
  {
    type: 'single',
    question: 'Você já sentiu que pessoas mais bonitas recebem <span class="text-green">mais atenção</span>?',
    options: [
      { text: 'Sim', value: 'sim' },
      { text: 'Já percebi muito', value: 'muito' }
    ]
  },
  // Step 15: Confidence
  {
    type: 'single',
    question: 'Seu nível de <span class="text-green">confiança</span> aumentaria se seu rosto fosse mais harmônico?',
    options: [
      { text: 'Com certeza', value: 'com_certeza' },
      { text: 'Muito provavelmente', value: 'provavel' }
    ]
  },
  // Step 16: Commitment
  {
    type: 'single',
    question: 'Se existisse um plano claro e simples para definir o seu rosto e <span class="text-green">lhe deixar mais bonito em apenas 21 dias</span>, você seguiria?',
    options: [
      { text: 'Claro!', value: 'claro' },
      { text: 'Sem dúvidas!', value: 'sem_duvidas' }
    ]
  }
];

let currentStep = 0;
let answers = {};
const totalSteps = steps.length;

// DOM Elements
const progressBar = document.getElementById('progress-bar');
const contentDiv = document.getElementById('content');
const backButton = document.getElementById('back-btn');
const loadingScreen = document.getElementById('loading-screen');
const salesPage = document.getElementById('sales-page');
const quizContainer = document.getElementById('quiz-container');
const introScreen = document.getElementById('intro-screen');

// Start Quiz (from intro screen)
window.startQuiz = function() {
  introScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  renderStep(currentStep);
};

// Init intro compare slider
function initIntroCompareSlider() {
  const wrapper = document.getElementById('intro-compare');
  const afterDiv = document.getElementById('intro-after-div');
  const handle = document.getElementById('intro-handle');
  const afterImg = document.getElementById('intro-after-img');
  if (!wrapper || !afterDiv || !handle) return;

  function setPosition(x) {
    const rect = wrapper.getBoundingClientRect();
    let pct = (x - rect.left) / rect.width;
    pct = Math.min(Math.max(pct, 0.05), 0.95);
    afterDiv.style.width = (pct * 100) + '%';
    handle.style.left = (pct * 100) + '%';
    if (afterImg) afterImg.style.width = (1 / pct * 100) + '%';
  }

  let dragging = false;
  wrapper.addEventListener('mousedown', (e) => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });
  wrapper.addEventListener('touchstart', (e) => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

// Init
function init() {
  initIntroCompareSlider();
}

// Render Step
function renderStep(index) {
  if (index >= steps.length) {
    startLoading();
    return;
  }

  const step = steps[index];
  let html = '';

  backButton.style.display = index > 0 ? 'block' : 'none';

  html += `<div class="step-container active">`;

  if (step.type === 'info') {
    html += `<div class="info-content mb-6 mt-2">${step.content}</div>`;
  } else {
    html += `<h2 class="text-xl mb-2 text-center font-bold">${step.question}</h2>`;
    if (step.subline) {
      html += `<p class="text-center text-gray-500 mb-6 text-sm">${step.subline}</p>`;
    } else {
      html += `<div class="mb-6"></div>`;
    }
  }

  if (step.type === 'single' || step.type === 'multi') {
    html += `<div class="flex flex-col gap-3">`;
    step.options.forEach((opt) => {
      const isSelected = answers[index] && (
        answers[index] === opt.value ||
        (Array.isArray(answers[index]) && answers[index].includes(opt.value))
      );
      html += `
        <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectOption(${index}, '${opt.value}', '${step.type}', this)">
          ${opt.emoji ? `<span class="opt-emoji">${opt.emoji}</span>` : ''}
          <span class="opt-text${opt.bold ? ' font-bold' : ''}">${opt.text}</span>
          <span class="opt-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </button>
      `;
    });
    html += `</div>`;
  }

  if (step.type === 'multi' || step.type === 'info') {
    const disabled = step.type === 'multi' && (!answers[index] || answers[index].length === 0) ? 'disabled' : '';
    html += `
      <div class="mt-8">
        <button class="btn-primary" id="next-btn" ${disabled} onclick="nextStep()">
          ${step.cta || 'Continuar'}
        </button>
      </div>
    `;
  }

  html += `</div>`;
  contentDiv.innerHTML = html;

  updateProgress();

  // Callback after render (e.g. for compare slider)
  if (step.onRender) {
    setTimeout(step.onRender, 50);
  }
}

// Option Selection
window.selectOption = function(stepIndex, value, type, element) {
  if (type === 'single') {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    answers[stepIndex] = value;
    setTimeout(nextStep, 250);
  } else if (type === 'multi') {
    element.classList.toggle('selected');
    if (!answers[stepIndex]) answers[stepIndex] = [];
    if (answers[stepIndex].includes(value)) {
      answers[stepIndex] = answers[stepIndex].filter(v => v !== value);
    } else {
      answers[stepIndex].push(value);
    }
    const nextBtn = document.getElementById('next-btn');
    if (answers[stepIndex].length > 0) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
    }
  }
};

window.nextStep = function() {
  currentStep++;
  renderStep(currentStep);
};

window.prevStep = function() {
  if (currentStep > 0) {
    currentStep--;
    renderStep(currentStep);
  }
};

window.updateProgress = function() {
  const percent = (currentStep / totalSteps) * 100;
  progressBar.style.width = `${percent}%`;
};

// Compare Slider
function initCompareSlider() {
  const wrapper = document.getElementById('compare-slider');
  const afterDiv = document.getElementById('compare-after-div');
  const handle = document.getElementById('compare-handle');
  if (!wrapper || !afterDiv || !handle) return;

  function setPosition(x) {
    const rect = wrapper.getBoundingClientRect();
    let pct = (x - rect.left) / rect.width;
    pct = Math.min(Math.max(pct, 0.05), 0.95);
    afterDiv.style.width = (pct * 100) + '%';
    handle.style.left = (pct * 100) + '%';
    // Stretch the after image to full wrapper width
    const afterImg = document.getElementById('compare-after-img');
    if (afterImg) {
      afterImg.style.width = (1 / pct * 100) + '%';
    }
  }

  let dragging = false;

  wrapper.addEventListener('mousedown', (e) => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });

  wrapper.addEventListener('touchstart', (e) => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

// Loading Screen
function startLoading() {
  quizContainer.style.display = 'none';
  loadingScreen.classList.remove('hidden');

  const loader = document.getElementById('loader-fill');
  const statusText = document.getElementById('loading-text');
  const pctEl = document.getElementById('loading-pct');
  const testimonialBox = document.getElementById('testimonial-box');
  const testimonialText = document.getElementById('testimonial-text');
  const testimonialAuthor = document.getElementById('testimonial-author');

  const messages = [
    'Analisando seu perfil...',
    'Identificando estrutura facial...',
    'Calculando potencial de definição...',
    'Montando seu plano personalizado...',
    'Finalizando...'
  ];

  const testimonials = [
    { text: '"Em 2 semanas meu maxilar apareceu de um jeito que nunca vi antes. Incrível!"', author: '— João M., 24 anos' },
    { text: '"Meu queixo ficou muito mais definido em 3 semanas seguindo o protocolo!"', author: '— Marcos L., 27 anos' },
    { text: '"Nunca achei que exercício facial funcionava, mas funcionou de verdade."', author: '— Ana C., 22 anos' },
    { text: '"Segui o protocolo 20 dias e as pessoas começaram a me notar diferente."', author: '— Rafael S., 31 anos' }
  ];

  let progress = 0;
  let msgIndex = 0;
  let testimonialIndex = 0;

  if (testimonialBox) {
    testimonialBox.classList.add('visible');
  }

  const testimonialInterval = setInterval(() => {
    if (!testimonialBox) return;
    testimonialBox.classList.remove('visible');
    setTimeout(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      if (testimonialText) testimonialText.innerText = testimonials[testimonialIndex].text;
      if (testimonialAuthor) testimonialAuthor.innerText = testimonials[testimonialIndex].author;
      testimonialBox.classList.add('visible');
    }, 300);
  }, 2000);

  const interval = setInterval(() => {
    progress += 1;
    loader.style.width = `${progress}%`;
    if (pctEl) pctEl.innerText = progress + '%';

    if (progress % 20 === 0 && msgIndex < messages.length) {
      statusText.innerText = messages[msgIndex];
      msgIndex++;
    }

    if (progress >= 100) {
      clearInterval(interval);
      clearInterval(testimonialInterval);
      setTimeout(showSalesPage, 600);
    }
  }, 50);
}

// Sales Page
function showSalesPage() {
  loadingScreen.style.display = 'none';
  salesPage.classList.remove('hidden');
  window.scrollTo(0, 0);

  // Init compare sliders in sales page
  initSalesCompareSliders();
}

function initSalesCompareSliders() {
  document.querySelectorAll('.sales-compare').forEach(wrapper => {
    const afterDiv = wrapper.querySelector('.sc-after');
    const handle = wrapper.querySelector('.sc-handle');
    const afterImg = wrapper.querySelector('.sc-after img');
    if (!afterDiv || !handle) return;

    function setPos(x) {
      const rect = wrapper.getBoundingClientRect();
      let pct = (x - rect.left) / rect.width;
      pct = Math.min(Math.max(pct, 0.05), 0.95);
      afterDiv.style.width = (pct * 100) + '%';
      handle.style.left = (pct * 100) + '%';
      if (afterImg) afterImg.style.width = (1 / pct * 100) + '%';
    }

    let drag = false;
    wrapper.addEventListener('mousedown', (e) => { drag = true; setPos(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (drag) setPos(e.clientX); });
    window.addEventListener('mouseup', () => { drag = false; });
    wrapper.addEventListener('touchstart', (e) => { drag = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove', (e) => { if (drag) setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => { drag = false; });
  });
}

// Event Listeners
backButton.addEventListener('click', prevStep);

document.addEventListener('DOMContentLoaded', init);
