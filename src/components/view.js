const view = (() => {
  // do something
  const updateLocation = (weather) => {
    const location = document.getElementById("location");
    location.innerHTML = weather.location;
  };

  return { updateLocation };
})();

export default view;
