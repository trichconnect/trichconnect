// Sample data for Trichy opportunities
const internships = [
  {
    id: 1,
    company: "Zoho Corporation",
    role: "UI Designer",
    stipend: "₹15,000/month",
    location: "Trichy",
    type: "Internship"
  },
  {
    id: 2,
    company: "Naval Labs",
    role: "Frontend Developer",
    stipend: "₹12,000/month",
    location: "Trichy (Remote)",
    type: "Internship"
  },
  {
    id: 3,
    company: "Trichy Tech Solutions",
    role: "Content Writer",
    stipend: "₹8,000/month",
    location: "Trichy",
    type: "Internship"
  }
];

// Function to generate the HTML for a card panel
function createCard(item) {
  return `
    <article class="panel-card animate-slide-up">
      <div>
        <div class="panel-card-header">
          <span style="font-size: 0.8rem; color: #888; text-transform: uppercase;">🏢 ${item.type}</span>
          <h3 style="font-size: 1.75rem; margin-top: 0.25rem;">${item.company}</h3>
        </div>
        <p style="font-weight: 600; margin-bottom: 0.5rem;">${item.role}</p>
        <p class="mono-num" style="color: #AAAAAA; font-size: 0.95rem; margin-bottom: 1.5rem;">${item.stipend}</p>
      </div>
      <button class="btn-editorial" style="width: 100%;" onclick="applyItem(${item.id})">APPLY &rarr;</button>
    </article>
  `;
}

// Render cards when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("internships-grid");
  if (container) {
    container.innerHTML = internships.map(item => createCard(item)).join("");
  }
});

function applyItem(id) {
  alert(`Applying for opportunity #${id}! (Connect this to Firebase next)`);
}