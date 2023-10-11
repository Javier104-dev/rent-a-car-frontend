const addRecord = async (fetch, data, message, navigate, url) => {
  try {
    await fetch(data);
    window.alert(message);
    navigate(url);

  } catch (error) {
    window.alert(error)
  }
};

export {
  addRecord,
}