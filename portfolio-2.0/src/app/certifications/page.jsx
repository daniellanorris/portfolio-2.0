import Image from "next/image";
import styles from "../page.module.css";
import Card from "../../../components/client/card";
import { Button } from "../../../components/client/button";

export default function Certifications() {
  const buttonText = "View Certification";

  const certifications = [
    [
      "AWS Certified Cloud Practitioner (2025)",
      <Image
        width={1000}
        height={1000}
        src="/images/aws-header.jpg"
        alt="AWS Certification"
        className="w-full fill p-0 rounded-t-4xl overflow-hidden"

      />,
      <div className="hover:cursor-pointer" >
        <a
          href="https://www.credly.com/badges/bea4df0d-a3a5-4699-be80-f1a281aafec6/linked_in?t=spmrmr"
          target="_blank"
          rel="noopener noreferrer">
          <Button text={buttonText}></Button>
        </a>
      </div>,
      "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
    ],
    [
      "Udemy QA Certification (2024)",
      <Image
        width={1000}
        height={1000}
        src="/images/testing_qa.jpg"
        alt="Udemy QA Certification"
        className="w-full fill p-0 rounded-t-4xl overflow-hidden"
      />,
      <div>
        <a
          href="https://www.udemy.com/certificate/UC-b71e3c0d-6242-4521-98bb-24fb22a5b398"
          target="_blank"
          rel="noopener noreferrer">
          <Button text={buttonText} className="bg-sky-500 hover:bg-sky-700 hover:cursor-pointer">
            <em> </em>
          </Button>
        </a>
      </div>,
      <div className="grid sm:grid-cols-2 gap-4">
        <div id="div1">
          <ul className="col-span-1 list-disc">
            <li>
              Foundation of Quality Assurance - Manual and Automation Agile
              Methodology
            </li>
            <li>QA Automation Best Practices</li>
            <li>How to Write Test Cases</li>
            <li>JIRA</li>
            <li>Automation Testing</li>
          </ul>
        </div>
        <div id="div2">
          <ul className="col-span-1 list-disc">
            <li>Software Development Life Cycle</li>
            <li>UI Front-End Testing with Selenium</li>
            <li>Back-End testing with Postman</li>
            <li>REST API Testing</li>
            <li>How to Find Bugs</li>
          </ul>
        </div>
      </div>,
    ],
  ];

  return (
    <div className={`${styles.page} m-auto sm:p-10`}>
      <h1>CERTIFICATIONS </h1>
      <main className={styles.main}>
        <div>
          <Card items={certifications} />
        </div>
      </main>
    </div>
  );
}
