const generateProfileInformation = ({uid,avatar, city, postalCode, phoneNumber, position}, collapse = true) => {
    return `
    <div class="col-2">
    <img src="${avatar}" class="card-img-top p-2 rounded-4" alt="${uid}">
</div>
    <ul class="list-group list-group-flush my-4">
        ${collapse ? '' : `<li class="list-group-item">uid: ${uid}</li>`}
        <li class="list-group-item">position: ${position}</li>
        <li class="list-group-item">city: ${city}</li>
        ${collapse ? '' : `
        <li class="list-group-item">postalCode: ${postalCode}</li>
        <li class="list-group-item">phoneNumber: ${phoneNumber}</li>
        `}
    </ul>
    `
}

const uid = window.location.search.split('=')[1];
const targetUser = userData.find(el => el.uid === Number(uid));
document.getElementById("root").innerHTML = `
    <h4 class="ms-3 mt-3">${targetUser.firstname} ${targetUser.lastname}</h4>
    ${generateProfileInformation(targetUser, false)}
`