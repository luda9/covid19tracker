import React from "react";
import styles from "./Covidinfo.module.css";
import cx from "classnames";


function Covidinfo() {

  return (
    <div className={styles.covidContainer}>
      <div className={styles.preventions}>
          <h2>Preventions</h2>
          <p>
            In addition to basic health and hygiene practices, like handwashing, CDC
            recommends some prevention actions at all COVID-19 Community Levels,
            which include:
          </p>
          <div className={styles.list}>
            <div>
              <ul>
                <li>Staying Up to Date with COVID-19 Vaccines</li>
                <li>Improving Ventilation</li>
                <li>Getting Tested for COVID-19 If Needed</li>
                <li>
                  Following Recommendations for What to Do If You Have Been Exposed
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Staying Home If You Have Suspected or Confirmed COVID-19</li>
                <li>
                  Seeking Treatment If You Have COVID-19 and Are at High Risk of
                  Getting Very Sick
                </li>
                <li>
                  Avoiding Contact with People Who Have Suspected or Confirmed
                  COVID-19
                </li>
              </ul>
            </div>
          </div>
          <p>
            The COVID-19 pandemic has been a part of our daily lives since March
            2020, but with about 151,000 new cases a day in the United States, it
            remains as important as ever to stay vigilant and know how to protect
            yourself from coronavirus. <br /> <br /> According to the Centers for Disease Control
            and Prevention (CDC), “The best way to prevent illness is to avoid being
            exposed to this virus.” As the vaccines continue their roll out, here
            are the simple steps you can take to help prevent the spread of COVID-19
            and protect yourself and others. <br /> <br /> Know how it spreads <br /> <br /> Scientists are
            still learning about COVID-19, the disease caused by the coronavirus,
            but according to the CDC, this highly contagious virus appears to be
            most commonly spread during close (within 6 feet) person-to-person
            contact through respiratory droplets. <br /> <br /> “The means of transmission can be
            through respiratory droplets produced when a person coughs or sneezes,
            or by direct physical contact with an infected person, such as shaking
            hands,” says Dr. David Goldberg, an internist and infectious disease
            specialist at NewYork-Presbyterian Medical Group Westchester and an
            assistant professor of medicine at Columbia University Vagelos College
            of Physicians and Surgeons.
          </p>
        </div>
        <div className={styles.questions}>
          <h2>Frecuent Questions</h2>
          <div className={cx(styles.question, styles.question1)}>
            <strong><p>How is coronavirus transmitted?</p></strong>
            <div className={styles.answer}>
              <p>The virus most often spreads through people who have symptoms. But it is possible to pass it on without showing any signs. Some people who don't know they've been infected can give it to others.</p>
            </div>
          </div>
          <div className={styles.question}>
            <strong><p>What are the symptoms of COVID-19?</p></strong>
            <div className={styles.answer}>
              <p>The most common things people who become ill with COVID-19 have include:</p>
              <ul>
                <li>Fever or chills</li>
                <li>A dry cough and shortness of breath</li>
                <li>Feeling very tired</li>
                <li>Nausea or vomiting</li>
              </ul>
            </div>
          </div>
          <div className={styles.question}>
            <strong><p>What to do if I have symptoms of the coronavirus?</p></strong>
            <div className={styles.answer}>
              <p>If you have COVID-19 or think you might have COVID-19, there are steps you should take to help prevent the virus from spreading to others in your home and community. These recommendations are for people who are not healthcare workers. Healthcare workers should refer to specific guidance from the CDC and their employer.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Covidinfo;
