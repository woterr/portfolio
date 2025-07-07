import React from "react";
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dd7d91d8-af7e-450e-b5c8-7a539614e879");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            navigate("/sent");
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <>
      <main className="main">
        <section className="section">
            <div className="container contact">
                <form onSubmit={onSubmit} className="grid form">    
                    <input type="hidden" name="subject" value="New Email from Woduh Website" />
                    {/* honeypot  */}
                    <input type="hidden" name="captcha" value="false" />
                    <div className="name_div">
                      <label for="name" className="input_label">Name <span className="required_label">*</span></label>
                      <input type="text" name="name" required className="input" placeholder="John Doe"/>
                    </div>
                    <div className="email_div">
                      <label for="email" className="input_label">Email <span className="required_label">*</span></label>
                      <input type="email" name="email" required className="input" placeholder="johndoe@example.com"/>
                    </div>
                    <div className="message_div">
                      <label for="message" className="input_label">Tell me about your project <span className="required_label">*</span></label>
                      <textarea name="message" required className="textarea input" placeholder="I'm making a..."></textarea>
                    </div>
                    <button type="submit" className="button_secondary">Send message</button>

                </form>
                <span>{result}</span>
            </div>
        </section>
      </main>
    </>

  );
}

export default Contact;
