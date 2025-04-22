import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SendingMail =  async (To, From, Subject, content,heading) => {
  // sgMail.setApiKey(process.env.EMAIL_API_KEY);

   // Check if email sending is enabled via the environment variable
   if (process.env.EMAIL_SWITCH !== "ON" && process.env.EMAIL_SWITCH !== "on") {
    console.log('Email sending is disabled due to EMAIL_SWITCH being off.');
    return null; // Exit the function if email sending is disabled
  }

  // SENDING MAIL TO TEAM

  const currentYear = new Date().getFullYear();
//   const websiteURL = "https://krishlogix.lunar-edge.com/"; // Replace with your website URL
//   const websiteLogoURL = "https://lunaredge.lunar-edge.com/assets/logo-D18fc8iU.png"; // Website logo URL
//   const companyName = "KRISHLOGIX IT SERVICES "; // Company Name
//   const companyAddress = "Office no. 904,Shelton Sapphire, B-Wing, Office no. 904, Plot no 18 & 19, Sector 15, CBD, Belapur, Navi Mumbai, Maharashtra - 400614"; // Company Address
//   const companyContactNumber1 = "022-45174666"; // Contact Number 1
//   const companyContactNumber2 = "022-45175666"; // Contact Number 2
//   const companyEmail = "info@krishlogix.com"; // Company Email (if needed in footer, else remove if not used)
//   const linkedinURL = "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFlVCrIWjqmVQAAAZVagzxov2Zi9ScnL0yS3W1s1PWUSLqOz2c6riDoVPiKtnOOCKdM4hCnpFRBr4xlA7ABOONWcKv4hDVVxH86o9OD-0xJxibVS_NWADxzF0hp6cbuDcqybM8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Flunaredge"; // LinkedIn URL
//   const instagramURL = "https://www.instagram.com/lunaredge.co/"; // Instagram URL
//   const facebookURL = "https://www.facebook.com/LunarEdge.Co";   // Facebook URL
//   const twitterURL = "https://x.com/LunarEdge11";     // Twitter URL


  const Msg = {
    email_to: To,
    email_from: From,
    email_subject: Subject,
    content: `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${heading}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f9fd;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .header {
      text-align: center;
      background-color: white;
      padding: 30px;
      color: black;
    }
    .header img {
      width: 150px;
      margin-bottom: 10px;
    }
    .header h1 {
      font-size: 24px;
      margin: 10px 0;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
      background-color: #f4f4f4;
    }
    .details-table th,
    .details-table td {
      padding: 12px;
      border: 1px solid #ddd;
    }
    .details-table th {
      background-color: #eeeeee;
      color: #333;
      text-align: left;
    }
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    .button {
      background: linear-gradient(to right,rgb(87, 160, 255),rgb(82, 220, 255));
      color: #ffffff !important;
      padding: 5px 15px;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      font-size: 16px;
      display: inline-block;
    }
    .social-icons {
      text-align: center;
      margin-top: 30px;
    }
    .social-icons a {
      margin: 5px 8px;
      display: inline-block;
    }
    .social-icons img {
      width: 30px;
      height: 30px;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: black;
      padding: 20px;
    }
    .foot-con {
    display: flex;
    flex-direction: column;
    }
    .footer p {
      margin: 5px 0;
      line-height: 20px;
    }
    .footer a {
      color: #ff6347;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
 <div class="email-container">
    <!-- Header Section -->
    <div class="header">
      <img src="" alt="Company Logo" />
      <h1>${heading}</h1>
    </div>

      ${content}


    <!-- Button Section -->
    <div class="button-container">
      <a href="https://krishlogix.lunar-edge.com" class="button">Visit Our Website</a>
    </div>

    <!-- Social Media Icons Section -->
    <div class="social-icons">
      <a href="https://www.linkedin.com/company/krishlogix/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/krishlogix_/profilecard/?igsh=Y2swZnQzcm5odjVw">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/krishLogix/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook" />
      </a>
      <a href="https://x.com/KrishLogix">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" alt="Twitter" />
      </a>
    </div>

    <!-- Footer Section -->
    <div class="footer">
     <p><strong>Contact Us: 022-45174666,<br/> 022-45175666</strong></p>
      <p><strong>Email</strong>:info@krishlogix.com</p>
      <p><strong>Address:</strong> Office no. 904,Shelton Sapphire, B-Wing, Office no. 904, Plot no 18 & 19, Sector 15, CBD, Belapur, Navi Mumbai, Maharashtra - 400614</p>
      <p>&copy; ${currentYear}  Krishlogix Pvt. Ltd. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `,

        salt : `${process.env.SALT_CODE}`
  };

  try {
    const response = await axios.post(process.env.SMTP_URL, Msg, {
      headers: {
        "Content-Type": "application/json", // Ensure you send JSON data
      },
    }); 

    return response.data; // Return the response data from your SMTP service
  } catch (error) {
    console.error("Error Sending email:", error.response ? error.response.data : error.message);
    throw new Error("Error Sending email: " + error.message);
  }
};

export default SendingMail;