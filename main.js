const dropdown = document.getElementById("filter-location");

dropdown.addEventListener("change", () => {
  const selectedOption = dropdown.value;
  const locationMedan = document.getElementById('galery__loc-medan');
  const locationJkt = document.getElementById('galery__loc-jakarta');
  
  locationJkt.style.display = 'none';
  if(selectedOption == 'medan') {
      locationJkt.style.display = 'none';
      locationMedan.style.display = 'block';
   } else if(selectedOption == 'jakarta') {
      locationMedan.style.display = 'none';
      locationJkt.style.display = 'block';
   } else if(selectedOption == 'all') {
      locationMedan.style.display = 'block';
      locationJkt.style.display = 'block';
   } else {
      alert('pilih option filternya');
   }
});
