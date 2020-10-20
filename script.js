// Validation Form
const form = document.querySelector('.form-framework');
const validateBtn = form.querySelector('.validateBtn');
const errorMessage = form.querySelector('.errorMessage');
const selectSel = form.querySelector(".field_sel");
const fields_inp = form.querySelectorAll('.field_inp');
const checkbox_inp = form.querySelector('.terms_conditions');
const required_field = form.querySelector('.required_field');
const box_required = form.querySelector('.box_required');

checkbox_inp.addEventListener('click', function() {
  event.preventDefault();

  if (this.checked) {
    required_field.classList.add('checked');
  } else {
    required_field.classList.remove('checked');
  }
});

function checkbox() {
  if (!checkbox_inp.checked) {
    box_required.classList.add('invalid');
  } else {
    box_required.classList.remove('invalid');
  }
};

function emptySelect() {
  const select = form.querySelector(".field_sel").options.selectedIndex;
  const selectTxt = form.querySelector('.field_sel').options[select].value;

  if (selectTxt == '') {
    selectSel.classList.add('invalid');
  } else {
    selectSel.classList.remove('invalid');
  }
};

function emptyInpit() {
  for (let i = 0; i < fields_inp.length; i++) {
    if (fields_inp[i].value == '') {
      fields_inp[i].classList.add('invalid');
    } else {
      fields_inp[i].classList.remove('invalid');
    }
  }
};

validateBtn.addEventListener('click', function(event) {
  event.preventDefault();

  checkbox();
  emptySelect();
  emptyInpit();
});

// ColorButton
const not_active = document.querySelectorAll('.not_active');
const buttonsLists = [...document.getElementById('buttons').children];

let selectedLi;
for (var i = 0, buttonsList; buttonsList = buttonsLists[i]; i++)
  buttonsList.onclick = function(e) {
    if (e.target.tagName !== 'SPAN') return;

    lightButton(this);
  };

function lightButton(li) {
  if (selectedLi) {
    selectedLi.classList.remove('active');
  }

  selectedLi = li;
  selectedLi.classList.add('active');
}
