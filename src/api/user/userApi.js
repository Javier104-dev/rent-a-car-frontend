const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const user = await fetch(`${URL_BASE}/user`);
  const data = await user.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const getUser = async (id) => {
  const user = await fetch(`${URL_BASE}/user/${id}`);
  const data = await user.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const addUser = async (dataForm) => {
  const user = await fetch(`${URL_BASE}/user`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });
  const data = await user.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

export {
  getAll,
  getUser,
  addUser
};