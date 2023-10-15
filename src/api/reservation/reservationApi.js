const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const reservation = await fetch(`${URL_BASE}/reservation`);
  const data = await reservation.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const getReservation = async (id) => {
  const reservation = await fetch(`${URL_BASE}/reservation/${id}`);
  const data = await reservation.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const makeReservation = async (formData) => {
  const reservation = await fetch(`${URL_BASE}/reservation`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await reservation.json();

  if (data.msg) throw new Error(data.msg);
  console.log(data);
  return data;
};

export {
  getAll,
  makeReservation,
  getReservation
};
