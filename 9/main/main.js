// rendering functions
function renderTable(sortBy = null) {
  const users = [...userData];

  $("tbody").html('');
  $("thead").html('') ;

  if (!!sortBy) {
    users.sort((a, b) => {
      const current = a[sortBy].toString();
      const next = b[sortBy].toString();

      return next.localeCompare(current, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
  }

  if (users.length === 0) return;

  const tableColumns = ['row', ...Object.keys(users[0])]
    .map(column => {
      if (column === 'row') return `<th>${column}</th>`;

      return `<th onclick="renderTable('${column}')">${column}</th>`;
    })
    .join('');

  $("thead").html ("<tr>"+tableColumns+"</tr>");

let tBody = [];
  for (const [index, user] of users.entries()) {
tBody.push(
      `<tr onclick="renderReadUser(${user.uid})">
        <td>${index + 1}</td>
        <td>${user.uid}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.city}</td>
        <td>${user.postalCode}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.position}</td>
      </tr>`);
  }
  tBody =tBody.join('')
  $("tbody").html (tBody)

}
renderTable();

function renderReadUser(uid) {
  resetModal();

  const user = userData.find(user => user.uid === uid);

  modalHeader.textContent = 'User info';

  modalBody.innerHTML = Object.keys(user)
    .map(property => `<p><strong>${property}:</strong> ${user[property]}</p>`)
    .join('');

  modalFooter.innerHTML = `
    <button class="button" onclick="renderUpdateUser(${uid})">update</button>
    <button class="button" onclick="deleteUser(${uid})">delete</button>`;

  modalOpen();
}

function renderCreateUser() {
  resetModal();

  modalHeader.textContent = 'Create new User';

  let properties = [
    'uid',
    'firstname',
    'lastname',
    'city',
    'postalCode',
    'phoneNumber',
    'position'
  ];

  if (userData.length !== 0) properties = Object.keys(userData[0]);

  modalBody.innerHTML = properties
    .map(property => {
      if (property === 'uid') {
        return `<input type="number" min="0" id="${property}" class="createInputs" value="" placeholder="${property}"/>`;
      }

      return `<input type="text" id="${property}" class="createInputs" value="" placeholder="${property}"/>`;
    })
    .join('');

  modalFooter.innerHTML = `
    <button class="button" onclick="createUser()">save</button>
    <button class="button" onclick="modalClose()">cancel</button>`;

  modalOpen();
}

function renderUpdateUser(uid) {
  resetModal();

  const user = userData.find(user => user.uid === uid);

  modalHeader.textContent = 'Update user';

  modalBody.innerHTML = Object.keys(user)
    .map(property => {
      if (property === 'uid') {
        return `<input type="text" id="${property}" class="updateInputs" value="${user[property]}" placeholder="${property}" disabled/>`;
      }

      return `<input type="text" id="${property}" class="updateInputs" value="${user[property]}" placeholder="${property}"/>`;
    })
    .join('');

  modalFooter.innerHTML = `
    <button class="button" onclick="updateUser(${uid})">save</button>
    <button class="button" onclick="renderReadUser(${uid})">cancel</button>`;
}

// operational functions
function createUser() {
  const createInputs = document.querySelectorAll('.createInputs');

  const newUser = {};

  for (const input of createInputs) {
    if (input.value.trim() === '') return alert('invalid input');

    if (input.id === 'uid' && !!userData.find(user => user.uid === Number(input.value))) {
      return alert('duplicated user !');
    }

    if (input.id === 'uid') {
      newUser[input.id] = Number(input.value);
      continue;
    }

    newUser[input.id] = input.value;
  }

  userData.push(newUser);

  modalClose();

  renderTable();
}

function updateUser(uid) {
  const user = userData.find(user => user.uid === uid);

  const updateInputs = document.querySelectorAll('.updateInputs');

  for (const input of updateInputs) {
    if (input.value.trim() === '') return alert('invalid input');

    if (input.id === 'uid') {
      user[input.id] = Number(input.value);
      continue;
    }

    user[input.id] = input.value;
  }

  modalClose();

  renderTable();
}

function deleteUser(uid) {
  const user = userData.find(user => user.uid === uid);

  userData = userData.filter(item => item.uid !== user.uid);

  renderTable();

  modalClose();
}
