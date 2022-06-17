const BASE_URL = "https://62a21c77cc8c0118ef5d2e28.mockapi.io/users/";
const LIMIT_PAGES = 5;

const getData = async (url, page) => {
	let mainUrl = url;

	if (page) {
		mainUrl = url + `?page=${page}&limit=${LIMIT_PAGES}`;
	}
	const result = await fetch(mainUrl);
	return await result.json();
};

const tableRender = async (page = 1) => {
	const data = await getData(BASE_URL, page);
	const tbody = document.getElementById("tbody");

	console.log(data);

	data.forEach((userObj, index) => {
		const tr = tbody.insertRow();
		tr.setAttribute("data-id", userObj.id);

		const {
			id,
			name,
			family,
			birthday,
			nationalID,
			fatherName,
			education,
			job,
			gender,
			country,
			state,
			city,
			street,
			block,
			no,
			floor,
			unit,
		} = userObj;

		const modifiedUserObj = [
			id,
			name,
			family,
			birthday,
			nationalID,
			fatherName,
			education,
			job,
			gender,
			country,
			state,
			city,
			street,
			block,
			no,
			floor,
			unit,
		];

		modifiedUserObj.forEach((objValue) => {
			const td = tr.insertCell();
			td.innerHTML = objValue;
		});

		const editCell = tr.insertCell();
		const editImg = document.createElement("img");
		editImg.classList.add("icon");
		editImg.src = "./assets/icons/edit.svg";
		editCell.appendChild(editImg);
		editImg.onclick = () => {
			window.open(`./add-edit.html?status=edit&id=${id}`, "_self");
		};
		const deleteCell = tr.insertCell();
		const deleteImg = document.createElement("img");
		deleteImg.classList.add("icon");
		deleteImg.src = "./assets/icons/delete.svg";
		deleteCell.appendChild(deleteImg);
		deleteImg.onclick = () => {
			const modal = document.querySelector(".modal");
			modal.style.display = "initial";
			let inputs = modal.getElementsByTagName("input");

			[...inputs].forEach((input, index) => {
				input.value = modifiedUserObj[index + 1];
			});
		};
	});
};

tableRender();

const tablePagination = () => {};

const addData = () => {};

function editData(id) {}

const deleteData = (id) => {};

function addRow() {
	window.open(`./add-edit.html?status=add&id=${id}`, "_self");
}

const searchData = (id) => {};
