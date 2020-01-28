const zero = 0;
const root = document.getElementById('root');

const main = document.createElement('div');
const mainAddSetBtn = document.createElement('button');
const mainContent = document.createElement('div');
const mainContentActual = document.createElement('div');
const mainContentCompleted = document.createElement('div');
mainAddSetBtn.textContent = 'Add new';
mainContentCompleted.classList.add('setCompleted');
mainContent.append(mainContentActual, mainContentCompleted);
main.append(mainAddSetBtn, mainContent);
root.append(main);

const addSet = document.createElement('div');
const addSetInputName = document.createElement('input');
const addSetAddTermBtn = document.createElement('button');
const addSetSaveChangesBtn = document.createElement('button');
const addSetCancelBtn = document.createElement('button');
const addSetContent = document.createElement('div');
addSetInputName.setAttribute('placeholder', 'Enter new set name');
addSetAddTermBtn.textContent = 'Add terms';
addSetSaveChangesBtn.textContent = 'Save Changes';
addSetCancelBtn.textContent = 'Cancel';
addSet.append(addSetInputName, addSetAddTermBtn, addSetSaveChangesBtn, addSetCancelBtn, addSetContent);
root.append(addSet);

const modifySet = document.createElement('div');
const modifySetInputName = document.createElement('input');
const modifySetSaveChangesBtn = document.createElement('button');
const modifySetCancelBtn = document.createElement('button');
const modifySetContent = document.createElement('div');
modifySetInputName.setAttribute('placeholder', 'Enter new set name');
modifySetSaveChangesBtn.textContent = 'Save Changes';
modifySetCancelBtn.textContent = 'Cancel';
modifySet.append(modifySetInputName, modifySetSaveChangesBtn, modifySetCancelBtn, modifySetContent);
root.append(modifySet);

const showMain = function() {
  main.style.display = 'block';
  addSet.style.display = 'none';
  modifySet.style.display = 'none';
  Array.from(mainContentActual.children).forEach(function(x) {
    x.remove()
  });
  Array.from(mainContentCompleted.children).forEach(function(x) {
    x.remove()
  });
  renderSetsFromLocalStorage('setsActual', mainContentActual);
  renderSetsFromLocalStorage('setsCompleted', mainContentCompleted);
}

const renderSetsFromLocalStorage = function(storageKey, setsContainer) {
  const sets = JSON.parse(localStorage.getItem(storageKey)) || {};
  Object.entries(sets).forEach(function([key,value]) {
    const terms = JSON.parse(localStorage.getItem(key)) || [];
    const set = document.createElement('div');
    const completeButton = document.createElement('button');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');
    set.id = key;
    set.classList.add('set');
    set.textContent = value;
    completeButton.innerHTML = '&check;';
    completeButton.addEventListener('click', completeSet);
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editSet);
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', removeSet);
    set.prepend(completeButton);
    set.append(removeButton, editButton);
    terms.forEach(function([name, def]) {
      const termContainer = document.createElement('div');
      const termName = document.createElement('div');
      const termDef = document.createElement('div');
      termContainer.classList.add('termContainer');
      termName.textContent = name;
      termName.classList.add('termContent');
      termDef.textContent = def;
      termDef.classList.add('termContent');
      termContainer.append(termName, termDef);
      set.append(termContainer);
    });
    setsContainer.append(set);
  })   
}

const completeSet = function(e) {
  const setId = e.target.parentNode.id;
  const setsActual = JSON.parse(localStorage.getItem('setsActual')) || {};
  const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || {};
  if (setsActual[setId]) {
    setsCompleted[setId] = setsActual[setId];
    delete setsActual[setId];
  } else {
    setsActual[setId] = setsCompleted[setId];
    delete setsCompleted[setId];
  }  
  localStorage.setItem('setsActual', JSON.stringify(setsActual));
  localStorage.setItem('setsCompleted', JSON.stringify(setsCompleted));
  showMain();
}

const addNewTerm = function() {
  const termContainer = document.createElement('div');
  const termName = document.createElement('input');
  const termDef = document.createElement('input');
  const buttonRemove = document.createElement('button');
  buttonRemove.textContent = 'Remove';
  buttonRemove.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });
  termContainer.append(termName, termDef, buttonRemove);
  addSetContent.append(termContainer);
}

const addPageSaveChanges = function() {
  const setName = addSetInputName.value;
  const setsActual = JSON.parse(localStorage.getItem('setsActual')) || {};
  const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || {};
  if (!setName) {
    alert('please input set name');
  } else if (Object.values(setsActual).includes(setName)
      || Object.values(setsCompleted).includes(setName)) {
    alert('set with the same name already exist');
  } else {
    setsActual[`id${getID()}`] = setName;
    localStorage.setItem('setsActual', JSON.stringify(setsActual));
    const terms = [];
    Array.from(addSetContent.children).forEach(function(termContainer) {
      const term = [];
      termContainer.querySelectorAll('input').forEach(function(inputElement) {
        term.push(inputElement.value)
      });
      terms.push(term);
    });
    localStorage.setItem(`id${getID(false)}`, JSON.stringify(terms));
    clearAddSet();
    window.location.hash = '#/main';
  } 
}

const addSetCancel = function() {
  clearAddSet();
  window.location.hash = '#/main';
}

const clearAddSet = function() {
  addSetInputName.value = '';
  Array.from(addSetContent.children).forEach(function(x) {
    x.remove()
  });
  addSet.append(addSetContent);
}

const editSet = function(e) {
  const setId = e.target.parentNode.id;
  const terms = JSON.parse(localStorage.getItem(setId));
  const container = document.createElement('div');
  container.id = 'editContainer';
  terms.forEach(function([name, def]) {
    const termContainer = document.createElement('div');
    const termName = document.createElement('input');
    const termDef = document.createElement('input');
    termContainer.classList.add('termContainer');
    termName.textContent = name;
    termName.classList.add('termContent');
    termDef.textContent = def;
    termDef.classList.add('termContent');
    termContainer.append(termName, termDef);
    container.append(termContainer);
  });
  modifySetContent.append(container);
  window.location.hash = `#/modify/:${setId}`;
  fillModifySet(container);
}

const fillModifySet = function(container) {
  const setId = window.location.hash.match(/id[\d]+$/)[zero];
  const setsActual = JSON.parse(localStorage.getItem('setsActual')) || {};
  const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || {};
  const setName = setsActual[setId] || setsCompleted[setId];
  const terms = JSON.parse(localStorage.getItem(setId));
  modifySetInputName.value = setName;
  const termContainers = container.children;
  for (let i = zero; i < terms.length; i++) {
    termContainers[i].firstChild.value = terms[i][zero];
    termContainers[i].lastChild.value = terms[i][1];
  }
}

const modifySaveChanges = function() {
  const setsActual = JSON.parse(localStorage.getItem('setsActual')) || {};
  const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || {};
  const setId = window.location.hash.match(/id[\d]+$/)[zero];
  const setName = modifySetInputName.value || '';
  const oldName = setsActual[setId] || setsCompleted[setId];
  const setTerms = [];
  let isNameValid = true;
  if (!setName) {
    alert('set name cannot be empty');
    isNameValid = false;
  } else if (setName !== oldName) {
    Object.entries(setsActual).forEach(function([key,value]) {
      if (key !== setId && value === setName) {
        alert('set with the same name already exist');
        isNameValid = false;
      }
    });
    Object.entries(setsCompleted).forEach(function([key,value]) {
      if (key !== setId && value === setName) {
        alert('set with the same name already exist');
        isNameValid = false;
      }
    });
  }
  if (isNameValid) {
    setsActual[setId]
        ? setsActual[setId] = setName
        : setsCompleted[setId] = setName;
    const container = document.getElementById('editContainer');
    for (let term of container.children) {
      setTerms.push([term.firstChild.value, term.lastChild.value]);
    }
    localStorage.setItem('setsActual', JSON.stringify(setsActual));
    localStorage.setItem('setsCompleted', JSON.stringify(setsCompleted));
    localStorage.setItem(setId, JSON.stringify(setTerms));
    container.remove();
    window.location.hash = '#/main';
  }
}

const removeSet = function(e) {
  const setId = e.target.parentNode.id;
  const setsActual = JSON.parse(localStorage.getItem('setsActual')) || {};
  const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || {};
  setsActual[setId] ? delete setsActual[setId] : delete setsCompleted[setId];
  localStorage.removeItem(setId);
  e.target.parentNode.remove();
  localStorage.setItem('setsActual', JSON.stringify(setsActual));
  localStorage.setItem('setsCompleted', JSON.stringify(setsCompleted));
}

const getID = function(isNew = true) {
  let setIdCounter = localStorage.getItem('setIdCounter') || zero;
  if (isNew) {
    setIdCounter++;
  }
  localStorage.setItem('setIdCounter', setIdCounter);
  return setIdCounter;
}

mainAddSetBtn.addEventListener('click', function() {
  window.location.hash = '#/add';
});
addSetAddTermBtn.addEventListener('click', addNewTerm);
addSetSaveChangesBtn.addEventListener('click', addPageSaveChanges);
addSetCancelBtn.addEventListener('click', addSetCancel);
modifySetCancelBtn.addEventListener('click', function() {
  Array.from(modifySetContent.children).forEach(function(x) {
    x.remove();
  });
  window.location.hash = '#/main';
});
modifySetSaveChangesBtn.addEventListener('click', modifySaveChanges);
window.addEventListener('hashchange', function() {
  switch (true) {
    case /^#\/main/.test(location.hash):
      showMain();
      break;
    case /^#\/add/.test(location.hash):
      addSet.style.display = 'block';
      main.style.display = 'none';
      modifySet.style.display = 'none';
      break;
    case /^#\/modify\/:/.test(location.hash):
      modifySet.style.display = 'block';
      main.style.display = 'none';
      addSet.style.display = 'none';
      break;
    default:
      showMain();
  }
}, false);

window.location.hash = '#/main';
showMain();