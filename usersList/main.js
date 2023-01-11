const usersListContainer = document.getElementById("usersList");
const userProfileModalTitle = document.getElementById("userProfileModalTitle");
const userProfileModalBody = document.getElementById("userProfileModalBody");
const userProfileModalFooter = document.getElementById("userProfileModalFooter"
);
const filteredUserInput = document.getElementById("search-user");
const firstButton = document.getElementById("first-btn");
const secondButton = document.getElementById("second-btn");

let selectedUser = null;

const generateProfileInformation = (
  { id, email },
  collapse = true
) => {
  return `
    <ul class="list-group list-group-flush my-4">
        ${collapse ? "" : `<li class="list-group-item">id: ${id}</li>`}
        <li class="list-group-item">email: ${email}</li>
           </ul>
    `;
};

const showModalInformation = ({ first_name, last_name, ...params }) => {
  const title = `${first_name} ${last_name}`;
  userProfileModalTitle.innerText = title;

  const profileInfo = generateProfileInformation(params, false);
  userProfileModalBody.innerHTML = profileInfo;
};

const handleOnClickProfileBtn = (id) => {
  window.location.href = `./info.html?id=${id}`;
  const targetUser = users.find((el) => el.id === id);
  selectedUser = targetUser;
  showModalInformation(targetUser);
};
const cardGenerator = ({
  id,
  first_name,
  last_name,
  avatar,
  email,
}) => {
  return `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="card shadow rounded-4">
    <img src="${avatar}" class="card-img-top p-2 rounded-4" alt="${id}">

                <div class="card-body">
                    <h5 class="card-title text-center">${first_name} ${last_name}</h5>
                    ${generateProfileInformation({  email })}
                    <button
                        onclick="handleOnClickProfileBtn(${id})" 
                        class="btn btn-primary rounded-3 w-100"
                        data-bs-toggle="modal" data-bs-target="#userProfileModal">
                        Profile
                    </button>
                </div>
            </div>
        </div>
    `;
};

const usersListGenerator = (filteredUser) => {
  const usersToShow = filteredUser ? filteredUser : users;
  let usersListBody = "";
  for (const user of usersToShow) {
    usersListBody += cardGenerator(user);
  }
  return usersListBody;
};

const renderUsersList = (filteredUser) => {
  usersListContainer.innerHTML = usersListGenerator(filteredUser);
};
const filterUser = () => {
  const inputValue = filteredUserInput.value;
  let filteredUser = [];
  users.forEach((user) => {
    if (
      Object.values(user).some((value) => String(value).includes(inputValue))
    ) {
      filteredUser.push(user);
    }
  });
  renderUsersList(filteredUser);
};
const pagination = (currPage = 1) => {
  const numberOfUsers = users.length;
  const numberOfUsersPerPage = 6;
  const currentPage = currPage;
  const numberOfPages = Math.ceil(numberOfUsers / numberOfUsersPerPage);
  const trimStart = (currentPage - 1) * numberOfUsersPerPage;
  const trimEnd = trimStart + numberOfUsersPerPage;
  const usersToShow = users.slice(trimStart, trimEnd);

  if (currPage == 2) {
    firstButton.classList.remove("active");
    secondButton.classList.add("active");
  } else {
    secondButton.classList.remove("active");
    firstButton.classList.add("active");
  }
  renderUsersList(usersToShow);
};

pagination();
