import contactModal from "../Modal/ContactModal.js";
import SendingMail from "../Utils/SendMail.js"; // Import the SendingMail function

export const contactQuery = async (req, res) => {
  // Make it an async function to use await

  if (
    !req.body.Name ||
    !req.body.Phone ||
    !req.body.Email ||
    !req.body.Weight ||
    !req.body.Destination ||
    !req.body.Departure ||
    !req.body.Freight_Type
  ) {
    return res.status(400).send({
      message: "All fields are required!",
      success: false, // Added success false for consistency
      error: true, // Added error true for consistency
    });
  }

  try {
    const client = new contactModal({
      Name: req.body.Name,
      Phone: req.body.Phone,
      Email: req.body.Email,
      Weight: req.body.Weight,
      Departure: req.body.Departure,
      Destination: req.body.Destination,
      Freight_Type: req.body.Freight_Type,
    });

    const savedClient = await client.save(); // Use await for asynchronous save operation

    const websiteName = "KrishLogix"; // Replace with your website name
    const emailSubject = "Testing"; // Subject from contact form
    const emailContent = `
            <!-- Content Section -->
            <div class="content">
              <h2>Hello Team,</h2>
              <p>We have received a new contact inquiry . Below are the details:
              </p>
              <p>
                  Name: <strong>${req.body.Name}</strong><br>
                  Contact Number: <strong>${req.body.Phone}</strong><br>
                  Email: <strong>${req.body.Email}</strong><br>
                  Weight: <strong>${req.body.Weight}</strong><br>
                 Destination: <strong>${req.body.Destination}</strong><br>
                  Departure: <strong>${req.body.Departure}</strong><br>
                  Freight Type: <strong>${req.body.Freight_Type}</strong>
              </p>
              <p>Please prioritize this inquiry and ensure timely follow-up.</p>
              
            </div>
        `;

    if (
      process.env.EMAIL_SWITCH === "ON" ||
      process.env.EMAIL_SWITCH === "on"
    ) {
      // Call SendingMail function to send email
      await SendingMail(
        // Use await as SendingMail is async
        `${process.env.EMAIL_TO}`,
        `${process.env.EMAIL_FROM}`,
        emailSubject,
        emailContent,
        "New Contact Form Enquiry" // Heading for the email
      );
    } else {
      console.log("Email Functionality is off please check env file ");
    }

    res.status(200).send({
      message: "Your Query Sent Successfully!",
      success: true,
      error: false,
      data: savedClient, // Optionally send back the saved client data
    });
  } catch (err) {
    console.error("Error in clientQuery:", err); // Log the error for debugging
    res.status(500).send({
      message:
        err.message || "Some error occurred while processing your request.",
      error: true,
      success: false,
    });
  }
};
