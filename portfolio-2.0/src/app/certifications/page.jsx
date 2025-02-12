import Image from "next/image";
import styles from "../page.module.css";
import Card from "../../../components/card";
import { Button } from "../../../components/button";

export default function Certifications() {
  const buttonText = "View Certification"

  const certifications = [
    [
      "AWS Certified Cloud Practitioner (2025)",
      <Image width={80} height={80} src="/AWS_Cert.png" alt="AWS Certification" />,
      <div>
      <a href="https://www.credly.com/badges/bea4df0d-a3a5-4699-be80-f1a281aafec6/linked_in?t=spmrmr" target="_blank" rel="noopener noreferrer">
        <Button text={buttonText}>
        </Button>
      </a>
      </div>,
      "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects."
    ],
    ["Udemy QA Certification (2024)", <Image width={80} height={80} src="/AWS_Cert.png" alt="AWS Certification" />,
      <div>
      <a href="https://www.udemy.com/certificate/UC-b71e3c0d-6242-4521-98bb-24fb22a5b398" target="_blank" rel="noopener noreferrer">
              <Button text={buttonText} className="bg-sky-500 hover:bg-sky-700">
        <em> </em>
        </Button>
      </a>
      </div>
, "test6"],
  ];

  return (
    <div className={styles.page}>
      <h1>Certifications</h1>
      <main className={styles.main}>
        <div>
          <Card items={certifications} />
        </div>
      </main>
    </div>
  );
}
