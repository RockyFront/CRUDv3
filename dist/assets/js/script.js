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
  console.log(data);
};
tableRender();
const tablePagination = () => {};

const addData = () => {};

const editData = (id) => {};

const deleteData = (id) => {};

const searchData = (id) => {};
