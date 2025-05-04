/**
 * Mock PayPal script to simulate payment integration
 * This would be replaced by actual PayPal SDK in production
 */

export const initPayPalButtons = (
  containerId,
  serviceName,
  amount,
  onSuccess
) => {
  // Get container element
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear loading indicator
  container.innerHTML = "";

  // Create a mock PayPal button
  const button = document.createElement("button");
  button.className =
    "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md transition duration-300 flex items-center justify-center";
  button.innerHTML = `
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" class="h-6 mr-3" />
    <span>Pagar ${amount} con PayPal</span>
  `;

  // Simulate payment process on click
  button.addEventListener("click", () => {
    // Check if form is valid
    const form = document.getElementById("client-info-form");
    if (form && form.checkValidity()) {
      form.reportValidity();

      // Show loading state
      button.disabled = true;
      button.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Procesando pago...
      `;

      // Simulate API call delay
      setTimeout(() => {
        // Generate fake transaction ID
        const transactionId =
          "TRX-" + Math.random().toString(36).substring(2, 10).toUpperCase();

        // Call success callback with transaction details
        if (onSuccess) {
          onSuccess({
            transactionId,
            serviceName,
            amount,
          });
        }
      }, 2000);
    } else {
      // Focus on the first invalid field
      const invalidInput = form.querySelector(":invalid");
      if (invalidInput) {
        invalidInput.focus();
      }
    }
  });

  // Add button to container
  container.appendChild(button);

  return {
    // Mock API for the PayPal SDK
    close: () => {
      container.innerHTML = "";
    },
  };
};

export default initPayPalButtons;
