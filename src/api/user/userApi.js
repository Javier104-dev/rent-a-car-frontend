const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const user = await fetch(`${URL_BASE}/user`);
  const data = await user.json();

  if (data.message) throw new Error(data.message);

  return data;
};

const getUser = async (id) => {
  const user = await fetch(`${URL_BASE}/user/${id}`);
  const data = await user.json();

  if (data.message) throw new Error(data.message);

  return data;
};

const addUser = async (formData) => {
  const user = await fetch(`${URL_BASE}/user`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await user.json();

  if (data.message) throw new Error(data.message);

  return data;
};

export {
  getAll,
  getUser,
  addUser
};