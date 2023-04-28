const fetchData = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    let quateid = document.querySelector(".box p span");
    let mainauate = document.querySelector(".box q");
    quateid.innerHTML = data.slip.id;
    mainauate.innerHTML = data.slip.advice;

  } catch (error) {
    console.error('Error fetching API:', error);
  }
};
fetchData();

let clicker = document.querySelector(".clicker");
clicker.addEventListener("click", function () {
  fetchData()
})