const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const reservation = await fetch(`${URL_BASE}/reservation`);

  if (reservation.msg) throw new Error(reservation.msg);

  return reservation.json();
};

export {
  getAll,
};
