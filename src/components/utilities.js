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
    const index = date.getUTCDay();
    const day = week[index];
    console.log(input);
    console.log(index);
    console.log(day);

    return day;
  };

  const parseDate = (input) => {
    const date = new Date(input);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    console.log(day);
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
