const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const car = await fetch(`${URL_BASE}/car`);
  const data = await car.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const getCar = async (id) => {
  const car = await fetch(`${URL_BASE}/car/${id}`);
  const data = await car.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

const addCar = async (formData) => {
  const car = await fetch(`${URL_BASE}/car`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await car.json();

  if (data.msg) throw new Error(data.msg);

  return data;
};

export {
  getAll,
  getCar,
  addCar,
}
