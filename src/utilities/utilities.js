import moment from "moment/moment";

const addRecord = async (fetch, data, message, navigate, url) => {
  try {
    await fetch(data);
    window.alert(message);
    navigate(url);

  } catch (error) {
    window.alert(error)
  }
};

const formatDate = (date, hr) => {
  const year = { year: '2-digit', month: '2-digit', day: '2-digit'}
  const hour = { hour: 'numeric', minute: 'numeric'}

  return new Date(date).toLocaleString(false, {...year, ...(hr && hour)});
};

const dateToInput = (dateParam) => {
  const date = new Date(dateParam).toLocaleString(); 
  return moment(date, 'DD/MM/YYYY, HH:mm:ss').format('YYYY-MM-DDTHH:mm');
};

export {
  addRecord,
  formatDate,
  dateToInput,
}