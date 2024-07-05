import { FC } from "react";
import ContactHero from "../../components/ContactHero";
import PrimaryBtn from "../../components/PrimaryBtn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page: FC = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <div className="contact__section">
        <div className="contact__section__content">
          <form>
            <input type="text" name="name" id="name" placeholder="name" />
            <input type="email" name="email" id="email" placeholder="email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <PrimaryBtn title="Send message" />
          </form>
          {/* <div className="about__section__info">
            <div className="heading__border"></div>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit.
            </p>
          </div>
          <div className="about__section__img">
            <img src={contactSectionImg} alt="team" />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
