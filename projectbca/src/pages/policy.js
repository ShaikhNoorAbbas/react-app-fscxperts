import React from "react";
import { Link } from "react-router-dom";
import "./policy.css";
import logo from "../images/logo.png";

export default function Policy() {
  return (
    <div className="polpage">
      <div className="poltop">
        <img src={logo} alt="logo" className="logo7" />
        <Link to="/home" className="webname2">
          FSCXpert
        </Link>
      </div>
      <div className="policyhead1">
        <div className="policyhead2">
          Terms&nbsp;&nbsp;&&nbsp;&nbsp;Conditions
        </div>
        <br />
        <p className="parapol">
          <h3>AGREEMENT TO TERMS :-</h3>
          <h5>
            These Terms of Service constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and FSCXpert (“we,” “us” or “our”), concerning your access to and
            use of the fscxpert.com website as well as any other media form,
            media channel, mobile website or mobile application related, linked,
            or otherwise connected thereto (collectively, the “Site”).
          </h5>
          <h5>
            You agree that by accessing the Site, you have read, understood, and
            agree to be bound by all of these Terms of Service. If you do not
            agree with all of these Terms of Service, then you are expressly
            prohibited from using the Site and you must discontinue use
            immediately.
          </h5>
          <h5>
            Supplemental Terms of Service or documents that may be posted on the
            Site from time to time are hereby expressly incorporated herein by
            reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Service at any time and
            for any reason.
          </h5>
          <h5>
            We will alert you about any changes by updating the “Last updated”
            date of these Terms of Service, and you waive any right to receive
            specific notice of each such change.
          </h5>
          <h5>
            It is your responsibility to periodically review these Terms of
            Service to stay informed of updates. You will be subject to, and
            will be deemed to have been made aware of and to have accepted, the
            changes in any revised Terms of Service by your continued use of the
            Site after the date such revised Terms of Service are posted.
          </h5>
          <h5>
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country.
          </h5>
          <h5>
            Accordingly, those persons who choose to access the Site from other
            locations do so on their own initiative and are solely responsible
            for compliance with local laws, if and to the extent local laws are
            applicable.
          </h5>
          <br />
          <h3>USER REPRESENTATIONS :-</h3>
          <h5>By using the Site, you represent and warrant that:</h5>
          <p className="parapol2">
            <h5>
              1.All registration information you submit will be true, accurate,
              current, and complete; (2) you will maintain the accuracy of such
              information and promptly update such registration information as
              necessary;
            </h5>
            <h5>
              2.You have the legal capacity and you agree to comply with these
              Terms of Service;
            </h5>
            <h5>
              3.You will not access the Site through automated or non-human
              means, whether through a bot, script, or otherwise;
            </h5>
            <h5>
              4.You will not use the Site for any illegal or unauthorized
              purpose;
            </h5>
            <h5>
              5.You will not misuse or falsely advertise features of the Site to
              third parties;
            </h5>
            <h5>
              6.Your use of the Site will not violate any applicable law or
              regulation.
            </h5>
          </p>
          <h5>
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).
          </h5>
        </p><br/>
      </div>
    </div>
  );
}
