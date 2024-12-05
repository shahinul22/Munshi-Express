// Initial states
let isA1Available = null; // `null` means initial state, true = available, false = booked

const button = document.getElementById("availabilityButton");
const tooltip = document.querySelector(".tooltip");

const addtool = document.getElementById("testtip");
addtool.addEventListener('click',    () =>v{
    addtool.dataset.tip = "aceee!";
})

// Add click event listener
button.addEventListener("click", () => {
  if (isA1Available === null) {
    // First click, mark as available
    isA1Available = true;
    button.textContent = "Available";
    tooltip.dataset.tip = "Available"; // Update the tooltip
    button.classList.remove("bg-gray-200");
    button.classList.add("bg-green-300");
  } else if (isA1Available === true) {
    // Mark as booked on second click
    isA1Available = false;
    button.textContent = "Booked";
    tooltip.dataset.tip = "Booked"; // Update the tooltip
    button.classList.remove("bg-green-300");
    button.classList.add("bg-red-300");
    button.classList.remove("hover:border-purple-500"); // Disable hover effect
    button.classList.add("cursor-not-allowed"); // Show cursor as not allowed
    button.disabled = true; // Disable the button
  }
});




 // Tooltips functionality (optional JS for better experience)
 document.addEventListener("DOMContentLoaded", () => {
    const tooltipButtons = document.querySelectorAll("[data-tip]");

    tooltipButtons.forEach(button => {
      button.addEventListener("mouseenter", () => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = button.getAttribute("data-tip");
        document.body.appendChild(tooltip);

        const rect = button.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;

        button.tooltipElement = tooltip;
      });
      button.addEventListener("mouseleave", () => {
        if (button.tooltipElement) {
          button.tooltipElement.remove();
          button.tooltipElement = null;
        }
      });
    });
  });

   // Select all cells
   document.querySelectorAll('.cell').forEach(cell => {
    // Hover effect
    cell.addEventListener('mouseenter', () => {
        const status = cell.getAttribute('data-status');
        if (status === 'available') {
            cell.classList.add('bg-green-200');
        } else if (status === 'booked') {
            cell.classList.add('bg-red-200');
        }
    });

    cell.addEventListener('mouseleave', () => {
        cell.classList.remove('bg-green-200', 'bg-red-200');
    });
     // Click effect
     cell.addEventListener('click', () => {
        const status = cell.getAttribute('data-status');
        if (status === 'available') {
            // Change background to green, mark as booked
            cell.classList.add('bg-green-500');
            cell.setAttribute('data-status', 'booked');
            cell.classList.remove('cursor-pointer');
            cell.classList.add('cursor-not-allowed');
        }
    });
});