const utilities = (() => {
  const getDay = (input) => {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(input);
    const day = week[date.getDay()];
    console.log(day);
    return day;
  };

  const parseDate = (input) => {
    const date = new Date(input);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const removeChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  return { getDay, parseDate, removeChildren };
})();

export default utilities;
