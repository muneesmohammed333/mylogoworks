// EmailJS
emailjs.init("LSOG2YrgZ5WEWXy6F");

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.send("service_qo92mwp","template_a5nu8ao",{
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(function(){
    alert("✅ Message sent successfully!");
    e.target.reset();
  }, function(err){
    alert("❌ Error: " + JSON.stringify(err));
  });
});

// Portfolio dynamic load (can replace with Netlify CMS later)
const portfolioItems = [
  {title:"Logo 1", url:"https://via.placeholder.com/400x300?text=Logo+1"},
  {title:"Logo 2", url:"https://via.placeholder.com/400x300?text=Logo+2"},
  {title:"Logo 3", url:"https://via.placeholder.com/400x300?text=Logo+3"},
  {title:"Logo 4", url:"https://via.placeholder.com/400x300?text=Logo+4"},
  {title:"Logo 5", url:"https://via.placeholder.com/400x300?text=Logo+5"},
  {title:"Logo 6", url:"https://via.placeholder.com/400x300?text=Logo+6"}
];

const grid = document.getElementById("portfolio-grid");
portfolioItems.forEach(item => {
  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.title;
  grid.appendChild(img);
});
