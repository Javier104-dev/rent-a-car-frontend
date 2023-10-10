const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const user = await fetch(`${URL_BASE}/user`);

  if (user.msg) throw new Error(user.msg);

  return user.json();
};

export {
  getAll,
};