const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// Chiude il menu mobile cliccando fuori
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// WIZARD
let currentStep = 1;
const totalSteps = 4;

function wizardNext() {
  if (currentStep < totalSteps) {
    setStep(currentStep + 1);
  }
}

function wizardBack() {
  if (currentStep > 1) {
    setStep(currentStep - 1);
  }
}

function setStep(step) {
  document.querySelector(`.wizard-panel[data-panel="${currentStep}"]`).classList.remove('active');
  document.querySelector(`.wizard-step-dot[data-step="${currentStep}"]`).classList.remove('active');
  document.querySelector(`.wizard-step-dot[data-step="${currentStep}"]`).classList.add('done');

  currentStep = step;
  document.querySelector(`.wizard-panel[data-panel="${currentStep}"]`).classList.add('active');
  document.querySelector(`.wizard-step-dot[data-step="${currentStep}"]`).classList.add('active');
  document.querySelector(`.wizard-step-dot[data-step="${currentStep}"]`).classList.remove('done');

  document.getElementById('btnBack').style.display = currentStep > 1 ? 'inline-flex' : 'none';
  document.getElementById('btnNext').style.display = currentStep < totalSteps ? 'inline-flex' : 'none';
  document.getElementById('btnSubmit').style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
}

function submitWizard(e) {
  e.preventDefault();
  document.querySelector(`.wizard-panel[data-panel="${currentStep}"]`).classList.remove('active');
  document.getElementById('wizardNav').style.display = 'none';
  document.querySelector('.wizard-panel[data-panel="5"]').classList.add('active');
  document.querySelectorAll('.wizard-step-dot').forEach(d => { d.classList.remove('active'); d.classList.add('done'); });
}
