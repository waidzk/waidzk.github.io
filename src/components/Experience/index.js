import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./styles.scss";

export default function Experience() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Experience ${theme}`}>
      <h2>Experience</h2>
      <hr />
      <div className="item">
        <h3>Field Engineer | Contract | Jun 2023 - Present</h3>
        <p>Packet Systems Indonesia</p>
        <p></p>
      </div>
      <div className="item">
        <h3>Frontend Web Developer | Internship | Jun 2023 - Sep 2023</h3>
        <p>Involuntir</p>
        <ul>
          <li>Make Progressive Web App in React JS framework</li>
          <li>Troubleshooting when there is an error/ bug and fix it</li>
          <li>Make new features</li>
          <li>Fix bugs in old features</li>
          <li>Slicing UI Design from Figma</li>
        </ul>
      </div>
      <div className="item">
        <h3>Frontend Web Developer | Freelance | Jun 2023 - Aug 2023</h3>
        <p>Yayasan Binaa Arrofaahiyati Ummah</p>
        <ul>
          <li>Slicing UI Design from Figma to code</li>
        </ul>
      </div>
      <div className="item">
        <h3>Operator | Contract | Nov 2020 - Nov 2022</h3>
        <p>PT. Indonesia Epson Industry</p>
        <ul>
          <li>
            Receiving parts sent by the warehouse department to the production
            department
          </li>
          <li>Give parts to production operators</li>
          <li>Request parts to the warehouse department with Handy Terminal</li>
          <li>Maintain stock parts to keep production going</li>
          <li>Become Multiskilled</li>
        </ul>
      </div>
      <div className="item">
        <h3>Network Engineer | Freelance | Jun 2019 - Dec 2019</h3>
        <p>Telkom Indonesia | Astinet</p>
        <ul>
          <li>
            Setting access point and router for UNBK (Computer Based National
            Examination) program
          </li>
        </ul>
      </div>
      <div className="item">
        <h3>Network Engineer Intern | Internship |Jan 2019 - Mar 2019</h3>
        <p>PT. Cikarang Cyberindo / Jetflash</p>
        <ul>
          <li>
            Assisting NOC (Network Operation Control) in network troubleshooting
            to installing networks in several places such as companies and homes
          </li>
          <li>Complete the internship program at Vocational High School</li>
          <li>Get a score of 8.88 from the company</li>
        </ul>
      </div>
    </div>
  );
}
