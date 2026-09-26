import { useEffect } from 'react'
import { ArrowLeft, Phone, Mail } from 'lucide-react'
import './App.css'

const PHONE = '07956158041'
const PHONE_DISPLAY = '07956 158041'
const EMAIL = 'gjbuilders15@gmail.com'

const SECTIONS = [
  {
    title: '1. Quotations and Estimates',
    items: [
      '1.1. All quotations and estimates are based on the information, drawings and specifications available to GJ Builders at the time of pricing.',
      '1.2. Where drawings, structural calculations, surveys or other technical information have not yet been provided, any price given may be an estimate rather than a fixed quotation.',
      '1.3. Quotations are valid for the period stated on the quotation. If no period is stated, GJ Builders reserves the right to review the price if there are significant changes in material, labour, plant or other costs before the work commences.',
      '1.4. Unless specifically stated otherwise, all prices are exclusive of VAT, which will be charged at the applicable rate.',
    ],
  },
  {
    title: '2. Scope of Works',
    items: [
      '2.1. The works included will be those specifically detailed within the agreed quotation.',
      '2.2. Any works outside the agreed scope will be treated as additional works and may incur additional charges.',
      '2.3. Where possible, additional works will be discussed and agreed with the customer before they are carried out.',
    ],
  },
  {
    title: '3. Unforeseen Works',
    items: [
      '3.1. Building work can sometimes uncover conditions that could not reasonably have been identified before work commenced.',
      '3.2. This may include, but is not limited to, unexpected ground conditions, inadequate existing foundations, concealed drainage, structural defects, asbestos, undocumented services or other hidden issues.',
      '3.3. Where unforeseen works are required, GJ Builders will discuss the issue with the customer and agree any additional costs where reasonably practicable before proceeding.',
    ],
  },
  {
    title: '4. Deposits and Payments',
    items: [
      '4.1. A deposit may be required to secure the booking and commencement of works. The required deposit will be stated in the quotation or payment schedule.',
      '4.2. Payment of the required deposit confirms acceptance of the quotation and allows GJ Builders to schedule the works and make necessary arrangements for labour, materials, plant and deliveries.',
      '4.3. Further payments may be required throughout the project in accordance with the agreed payment schedule.',
      '4.4. Invoices are payable by the date stated on the invoice.',
      '4.5. GJ Builders reserves the right to suspend works where agreed payments remain outstanding.',
    ],
  },
  {
    title: '5. Cancellation',
    items: [
      '5.1. Once works have been booked, GJ Builders may make arrangements including ordering materials, hiring plant, booking labour and allocating dates within its schedule.',
      '5.2. If a customer cancels or postpones works, the customer may be responsible for reasonable costs already incurred by GJ Builders as a result of the cancellation or postponement.',
      '5.3. Where works are cancelled at short notice, additional costs may apply where GJ Builders has been unable to reasonably reallocate labour, plant or other resources.',
      '5.4. The specific cancellation and deposit terms agreed with the customer will take precedence where they have been provided as part of the quotation or contract.',
    ],
  },
  {
    title: '6. Variations and Additional Works',
    items: [
      '6.1. Changes requested by the customer after acceptance of the quotation may result in additional costs.',
      '6.2. Additional works will normally be priced separately and agreed with the customer before being carried out.',
      '6.3. Where immediate action is required to protect the property, site or works, GJ Builders may carry out necessary works and subsequently advise the customer of the associated cost.',
    ],
  },
  {
    title: '7. Start Dates and Delays',
    items: [
      '7.1. Any start date provided is an estimated date unless specifically agreed otherwise in writing.',
      '7.2. GJ Builders will make reasonable efforts to commence works within the agreed timeframe.',
      '7.3. Delays may occur due to circumstances outside GJ Builders\u2019 reasonable control, including adverse weather, material shortages, supplier delays, planning or Building Control requirements, unforeseen site conditions, delays caused by other contractors or changes requested by the customer.',
      '7.4. GJ Builders will keep the customer informed of significant delays where reasonably practicable.',
    ],
  },
  {
    title: '8. Customer Responsibilities',
    items: [
      '8.1. The customer must provide GJ Builders with reasonable access to the property and working areas for the duration of the works.',
      '8.2. The customer is responsible for ensuring that any information supplied to GJ Builders is accurate and complete.',
      '8.3. Unless specifically included within the quotation, the customer is responsible for obtaining any necessary permissions, consents or approvals relating to the works.',
      '8.4. The customer should remove or protect personal belongings and valuables from areas where works are taking place.',
    ],
  },
  {
    title: '9. Materials and Client-Supplied Items',
    items: [
      '9.1. Materials supplied by GJ Builders will be those specified or allowed for within the quotation.',
      '9.2. Where the customer requests alternative materials, finishes or products, any difference in cost or labour may be added to the final price.',
      '9.3. GJ Builders cannot accept responsibility for delays or additional costs caused by customer-supplied materials arriving late, being incorrect, defective or unsuitable for installation.',
    ],
  },
  {
    title: '10. Existing Services and Structures',
    items: [
      '10.1. GJ Builders will take reasonable care when working around existing services and structures.',
      '10.2. GJ Builders cannot accept responsibility for concealed or incorrectly located services that were not reasonably identifiable before works commenced.',
      '10.3. Where existing structures, services or installations are found to be defective or unsuitable, additional works may be required.',
    ],
  },
  {
    title: '11. Workmanship and Defects',
    items: [
      '11.1. GJ Builders will carry out works with reasonable care and skill and in accordance with the agreed specification.',
      '11.2. If the customer believes there is a defect in the workmanship, they should notify GJ Builders as soon as reasonably practicable and provide reasonable access for inspection.',
      '11.3. Where a genuine workmanship defect is identified, GJ Builders will have a reasonable opportunity to inspect and, where appropriate, rectify the issue.',
      '11.4. This does not cover damage, wear and tear, misuse, alterations carried out by others, defects arising from existing structures or materials, or issues outside GJ Builders\u2019 control.',
    ],
  },
  {
    title: '12. Site Conditions and Waste',
    items: [
      '12.1. GJ Builders will carry out reasonable site preparation and waste removal where these are included within the agreed quotation.',
      '12.2. Additional waste, contaminated materials, hazardous materials or other unforeseen disposal requirements may incur additional charges.',
    ],
  },
  {
    title: '13. Photography and Marketing',
    items: [
      '13.1. GJ Builders may wish to photograph completed works for use on its website, social media and other marketing materials.',
      '13.2. Where photographs are taken, GJ Builders will take reasonable steps to avoid including personal information or identifying details unless permission has been provided.',
    ],
  },
  {
    title: '14. Complaints',
    items: [
      '14.1. If a customer has a concern regarding the works, they should contact GJ Builders as soon as possible so that the matter can be discussed and investigated.',
      '14.2. GJ Builders will make reasonable efforts to resolve genuine concerns fairly and promptly.',
    ],
  },
  {
    title: '15. Changes to These Terms',
    items: [
      '15.1. GJ Builders reserves the right to update these Terms & Conditions from time to time.',
      '15.2. The Terms & Conditions applicable to a project will be those provided to and agreed with the customer at the time the work is booked, unless otherwise agreed in writing.',
    ],
  },
  {
    title: '16. Acceptance',
    items: [
      'Acceptance of a quotation, payment of a required deposit, or instruction to commence works may constitute acceptance of the relevant quotation, scope of works and applicable Terms & Conditions.',
    ],
  },
]

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions | GJ Builders'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-page">
      <header className="terms-topbar">
        <div className="container terms-topbar-inner">
          <a href="/" className="terms-logo">
            <img src="/images/gj-logo-flat.png" alt="GJ Builders - Built on Quality" />
          </a>
          <div className="terms-topbar-links">
            <a href={`tel:+44${PHONE.replace(/^0/, '')}`} className="terms-phone">
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
            <a href="/" className="btn btn-nav">Back to site</a>
          </div>
        </div>
      </header>

      <main className="terms-main">
        <div className="container terms-layout">
          <a href="/" className="terms-back">
            <ArrowLeft size={16} />
            Back to homepage
          </a>

          <p className="section-label">Legal</p>
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-updated">Last updated: September 2026</p>
          <p className="terms-intro">
            These Terms &amp; Conditions apply to building works, quotations and services provided by GJ Builders.
          </p>
          <p className="terms-doc-note">
            For deposit and cancellation details provided with quotations, see the{' '}
            <a href="/docs/GJ-Builders-Deposit-and-Cancellation-Policy.pdf" target="_blank" rel="noopener noreferrer">
              Deposit &amp; Cancellation Policy (PDF)
            </a>.
          </p>

          <nav className="terms-toc" aria-label="Contents">
            <p className="terms-toc-label">Contents</p>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.title}>
                  <a href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
                    {s.title.replace(/^\d+\.\s*/, '')}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {SECTIONS.map((section) => {
            const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
            return (
              <section key={section.title} id={id} className="terms-section">
                <h2>{section.title}</h2>
                {section.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </section>
            )
          })}

          <div className="terms-close">
            <img src="/images/gj-logo-flat.png" alt="" className="terms-close-logo" />
            <p className="terms-close-brand">GJ Builders</p>
            <p>All aspects of construction</p>
            <p>
              <a href="https://gjbuilders.co.uk">gjbuilders.co.uk</a>
              {' · '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              {' · '}
              <a href={`tel:+44${PHONE.replace(/^0/, '')}`}>{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="terms-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} GJ Builders. All rights reserved.</p>
          <a href={`mailto:${EMAIL}`}><Mail size={14} /> {EMAIL}</a>
        </div>
      </footer>
    </div>
  )
}
