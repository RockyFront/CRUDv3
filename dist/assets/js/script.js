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
    tr.setAttribute("data-id", userObj.id)
    


    if(Object.keys(userObj).includes("id")){
      tr.insertCell(0).innerHTML = `${userObj.id}`;
    }else{

    }


    Object.values(userObj).forEach((objValue) => {
     
      if(objValue !== userObj.id){

        tr.insertCell(1).innerHTML = `${objValue}`;
      }
    });
    
    const editCell = tr.insertCell()
    const editImg = document.createElement("img")
    editImg.classList.add("icon");
    editImg.src= "./assets/icons/edit.svg";
    editCell.appendChild(editImg);

    const deleteCell = tr.insertCell()
    const deleteImg = document.createElement("img")
    deleteImg.classList.add("icon");
    deleteImg.src= "./assets/icons/delete.svg";
    deleteCell.appendChild(deleteImg);
    

  });
};





tableRender();

const tablePagination = () => {};

const addData = () => {};

const editData = (id) => {};

const deleteData = (id) => {};

const searchData = (id) => {};
