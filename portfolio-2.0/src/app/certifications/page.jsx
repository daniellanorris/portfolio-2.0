import React from "react";
import styles from "../page.module.css";
import Card from "../../../components/card";

export default function Certifications() {
  const certifications = [
   ["AWS Certified Cloud Practioner", <img src="../../../public/AWS_Cert.png"/>,<a href="https://www.credly.com/badges/bea4df0d-a3a5-4699-be80-f1a281aafec6/linked_in?t=spmrmr" > Link to Certification</a>, "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects."],
   ["test4", "test5", "test6"],
   ["test7", "test8", "test9"]
    
  ]
  return (
    <>
     <div className={styles.page}>
        <h1> Certifications </h1>
        <main className={styles.main}>
        <div>
          <Card items = {certifications} />
        </div>
        </main>
      </div>
    </>
  );
}