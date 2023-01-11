const generateProfileInformation = ({id,avatar, email}) => {
    return `
    <div class="col-2">
    <img src="${avatar}" class="card-img-top p-2 rounded-4" alt="${id}">
</div>
    <ul class="list-group list-group-flush my-4">
         <li class="list-group-item">id: ${id}</li>
         <li class="list-group-item">email: ${email}</li>
       
    </ul>
    `
}

const id = window.location.search.split('=')[1];
const targetUser = users.find(el => el.id === Number(id));
document.getElementById("root").innerHTML = `
    <h4 class="ms-3 mt-3">${targetUser.first_name} ${targetUser.last_name}</h4>
    ${generateProfileInformation(targetUser, false)}
`