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

const formatDatetime = (date, hr) => {
  const year = { year: 'numeric', month: 'numeric', day: 'numeric'}
  const hour = { hour: 'numeric', minute: 'numeric'}

  return new Date(date).toLocaleString(false, {...year, ...(hr && hour)});
};

const formatDatetimeToInput = (dateParam) => {
  const date = new Date(dateParam).toLocaleString();
  return moment(date, 'DD/MM/YYYY, HH:mm:ss').format('YYYY-MM-DDTHH:mm');
};

const formatDate = (dateParam) => moment(dateParam, 'YYYY/MM/DD').format('DD/MM/YYYY');

export {
  addRecord,
  formatDatetime,
  formatDatetimeToInput,
  formatDate
}