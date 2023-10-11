const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const reservation = await fetch(`${URL_BASE}/reservation`);

  if (reservation.msg) throw new Error(reservation.msg);

  return reservation.json();
};

const getReservation = async (id) => {
  const reservation = await fetch(`${URL_BASE}/reservation/${id}`);

  if (reservation.msg) throw new Error(reservation.msg);

  return reservation.json();
};

const makeReservation = async (data) => {
  const reservation = await fetch(`${URL_BASE}/reservation`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (reservation.msg) throw new Error(reservation.msg);

  return reservation.json();
};



export {
  getAll,
  makeReservation,
  getReservation
};
