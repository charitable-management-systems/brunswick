import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import lorLink from "../images/pdf/forms/dealer/Letter_of_Recommendation.pdf"
import dealer_employee from "../images/pdf/forms/dealer/Employee_Verification_Form.pdf"
import dealer_checklist from "../images/pdf/forms/dealer/Checklist.pdf"
import dealer_reference from "../images/pdf/forms/dealer/Reference_Form.pdf"
import dealer_transcript from "../images/pdf/forms/dealer/Transcript_Form.pdf"
import dealer_release from "../images/pdf/forms/dealer/Release_Form.pdf"

const Dealers = () => (
  <Layout type="dealers">
    <div className="card card--alternate">
      <h3>How To Apply</h3>
      <p>Begin your application by clicking on Apply tab above. The deadline to submit your application is March 17, 2025.  Completing this application does not guarantee that you will receive the scholarship.
        A <a href={dealer_checklist}>checklist</a> has been provided to help you navigate the application process.</p>
      <ul>
        <li>
          <p>A complete application must include:</p>
          <ul>
            <li>the online application</li>
            <li><a href={dealer_employee}>employment verification form</a></li>
            <li><a href={dealer_transcript}>transcript form</a></li>
            <li><a href={lorLink} target="_blank">letter of recommendation</a></li>
          </ul>
        </li>
        <li>Instructions are provided on each form.</li>
      </ul>
    </div>
    <div className="card">
      <h3>Awards and Eligibility</h3>
      <ul>
        <li>Parent, stepparent or guardian is employed as a full-time employee of an eligible Brunswick Corporation dealership or an affiliate dealer business* and has been employed at that dealership for at least one year as of March 17, 2025.</li>
        <li>Currently in final year of high school or a current college freshman, sophomore or junior.</li>
        <li>Grade point average of 2.0 or higher on a 4.0 scale; or an average of 70% or higher.</li>
        <li>Entering full-time into an accredited college, university or vocational school in Canada or the United States for the fall of 2025.</li>
        <li>23 years of age or younger (exception for military duty) as of March 17, 2025.</li>
        <li> Students selected for this award will receive a single-year scholarship up to $2,000.</li>
        <li>All scholarship winners will be individually notified by email of the committee's decision no later than May 12, 2025.</li>
        <li>Dealership spouses are not eligible to apply.</li>
        <li>Dealership employees are eligible to apply as long as they meet <strong>ALL</strong> of the above-mentioned criteria.</li>
      </ul>
    </div>
    <div className="card card--alternate">
      <h3>Selection Process</h3>
      <p>Selections are made by an impartial, outside committee comprised of professionals from prominent universities.  No representatives of Brunswick Corporation or The Brunswick Foundation are involved in the selection process.  All selection committee decisions are confidential and final.  There is no appeal process.</p>
      <p>No preference is given to an applicant by reason of a parent’s position, length of employment, relationship with Brunswick or by the dealerships standing with Brunswick Corporation.  Consideration for all awards is based on the applicant’s academic record, achievement test scores and leadership abilities as demonstrated by extracurricular activities and work record.  Financial need is also an additional consideration for the awards.</p>
    </div>
    <div className="card">
      <h3>Rules and Regulations</h3>
      <ul>
        <li>The application must be completed by the student applicant only (in English), otherwise the application will not be accepted.</li>
        <li>Completing the online application does not guarantee that you will receive a scholarship.</li>
        <li>Copies or prior scholarship application forms will not be accepted.</li>
        <li>No materials will be returned back to the applicant.</li>
        <li>Payments will be disbursed each July payable to the school and mailed directly to the institution.</li>
        <li>The funds provided must be used only for educational expenses (e.g. tuition, books and fees).</li>
        <li>The scholarship may not be used for graduate school or master’s degree.</li>
        <li>Current year recipients that remain eligible may reapply each year and compete for a scholarship up to $2,000 to receive a maximum of $8,000 during their four years of undergraduate studies.</li>
        <li>Scholarship recipients are required to complete a sufficient number of school credit hours each year to complete degree requirements within the normal time period.</li>
        <li>It is the intent of The Brunswick Foundation to avoid granting a student financial aid in excess of educational expenses.  In accordance with the Internal Revenue Service regulations, financial aid in excess of actual education expenses may result in taxable income to the recipient.</li>
        <li>Scholarship recipients are not required to accept employment with Brunswick Corporation or any of its related divisions/subsidiaries upon graduation.</li>
        <li>The administration and financing of this program is exclusively the responsibility of The Brunswick Foundation, which has full authority to make rules and regulations governing the program and to make final decisions in all matters arising in connection therewith except for the selection of scholarship recipients.  The Foundation may modify or discontinue the program at any time.  The application is property of The Brunswick Foundation.</li>
      </ul>
    </div>
    <div className="card card--alternate">
      <h3>Contact Us</h3>
      <p>
        Brunswick Dealer Sons &amp; Daughters Scholarship Program<br />
        PO Box 648<br />
        Naperville, IL  60566
      </p>
      <p>
        630.428.2412<br />
        Fax:  630.428.2695
      </p>
      <p>info@brunswickscholarships.com</p>
      <p>*Eligible dealers are those who have been a Brunswick Boat Group brand or Authorized Mercury Dealer for at least one year and are currently a dealer in good standing with all the Brunswick Boat Group and Mercury brands they sell or service. Provided an eligible Brunswick Boat Group brand or Authorized Mercury Dealer has satisfied the requirements in the preceding sentence, employees who work for an affiliate dealer business are also eligible to participate in the Scholarship Program. An affiliate dealer business means a subsidiary, affiliate, sister or similar company under common ownership by or with the eligible Brunswick Boat Group brand or Authorized Mercury Dealer.</p>
      <p>Questions regarding dealer eligibility may be directed to a Dealer Advantage Specialist at 877.462.3884</p>
    </div>
  </Layout>
)

export default Dealers
