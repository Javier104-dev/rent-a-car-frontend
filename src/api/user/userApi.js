const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const user = await fetch(`${URL_BASE}/user`);
  const data = await user.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

export {
  getAll,
};