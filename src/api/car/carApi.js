const URL_BASE = 'http://127.0.0.1:8080';

const getAll = async () => {
  const car = await fetch(`${URL_BASE}/car`);

  if (car.msg) throw new Error(car.msg);

  return car.json();
};

export {
  getAll,
}
