import moment from "moment/moment";

const addRecord = async (fetch, data, message, navigate, url) => {
  try {
    await fetch(data);
    window.alert(message);
    navigate(url);

  } catch (error) {
    window.alert(error.message)
  }
};

const setAttributes = (e, setData, formData) => {
  const { name, value } = e.target;
  setData({
    ...formData,
    [name]: value
  });
};

const formatDatetime = (date, hr) => {
  const year = { year: 'numeric', month: 'numeric', day: 'numeric'}
  const hour = { hour: 'numeric', minute: 'numeric'}

  return new Date(date).toLocaleString(false, {...year, ...(hr && hour)});
};

const formatDatetimeToInput = (dateParam, hr) => {
  const date = new Date(dateParam).toLocaleString();
  const formatString = hr ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD';
  return moment(date, 'DD/MM/YYYY, HH:mm:ss').format(formatString);
};

export {
  addRecord,
  formatDatetime,
  formatDatetimeToInput,
  setAttributes
}