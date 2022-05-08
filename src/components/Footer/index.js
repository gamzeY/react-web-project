import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { db } from "../firebase";
import { animateScroll as scroll } from "react-scroll";
import {
  FormH1,
  Form,
  Container,
  FormContent,
  FormInput,
  FormWrap,
  Text,
  FormButton,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function FooterG() {
  const [name, setName] = useState("");
  const [Wphone, setNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        Wphone: Wphone,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thanks for your message. We will get in touch with you soon!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setNo("");
    setMessage("");
    setEmail("");
  };

  const toogleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container id="footer">
      <FormWrap>
        <FormH1>You can ask a question at any time</FormH1>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormInput
              name="name"
              type="text"
              value={name}
              placeholder="Full Name*"
              required
              onChange={(e) => setName(e.target.value)}
            ></FormInput>
            <FormInput
              name="Wphone"
              value={Wphone}
              type="number"
              onChange={(e) => setNo(e.target.value)}
              placeholder="Mobile Number*"
              required
            ></FormInput>
            <FormInput
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address*"
              required
            ></FormInput>
            <Text
              name="message"
              value={message}
              type="textarea"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            ></Text>
            <FormButton
              type="submit"
              style={{ background: loader ? "#ccc" : " rgb(255, 255, 255)" }}
            >
              SUBMIT
            </FormButton>
          </Form>
        </FormContent>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toogleHome}>
              Bla Software
            </SocialLogo>
            <WebSiteRights>
              BlaTech © {new Date().getFullYear()} All rights reserved.
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FormWrap>
    </Container>
  );
}

export default FooterG;
