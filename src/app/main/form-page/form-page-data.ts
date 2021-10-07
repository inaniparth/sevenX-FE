import { FormPageContainerType, FormPageScreenCode } from "./form-page-constants";
import { FormPageScreenWiseDataModel } from "./form-page-interface";

export const FormPageScreenTitleMap: { [key: string]: string } = {
    // public_limited_company_registration: "Public Limited Company Registration"
    PARTERSHIP_FIRM: 'Partership Firm',
    LLP: 'LLP',
    OPC: 'OPC',
    PVT_LTD: 'Pvt Ltd.',
    LTD_COMPANY: 'Ltd Company',
    SECTION_8_COMPANY_NGO: 'Section 8 Company/NGO',
    NIDHI_COMPANY: 'Nidhi Company',
    PRODUCER_COMPANY: 'Producer Company',
    TRUST_REGISTRATION: 'Trust Registration',
    SOCIETY_REGISTRATION: 'Society Registration',
    MSME_UDYAM: 'MSME/Udyam',
    IEC: 'IEC',
    STARTUP_REGISTRATION: 'Startup Registration',
    TRADEMARK: 'Trademark',
    GST_REGISTRATION: 'GST Registration',
    PAN_TAN_APPLICATION: 'PAN/TAN Application',
    COPYRIGHT: 'Copyright',
    ADD_REMOVE_DIRECTOR: 'Add/Remove a Director',
    CHANGE_IN_REGISTRED_OFFICE: 'Change in Registered Office',
    REGISTERED_OFFICE_CHANGE: 'Registered Office Change',
    MOA_AMENDMENT: 'MOA Amendment',
    CHANGE_IN_SHAREHOLDING: 'Change in Shareholding',
    CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED: 'Conversion from LLP to Private Limited',
    ADD_REMOVE_PARTNER: 'Add/Remove a partner',
    CHANGE_IN_LLP_AGREEMENT: 'Change in LLP Agreement',
    CONVERSION_FROM_PARTNERSHIP_TO_LLP: 'Conversion from Partnership to LLP',
    CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP: 'Conversion from Private Limited to LLP',
    ITR_FILING: 'ITR Filing',
    TDS_RETURN_FILING: 'TDS Return Filing',
    INCOME_TAX_ADVISORY: 'Income Tax Advisory',
    GST_RETURN_FILING_REGULAR: 'Regular',
    GST_RETURN_FILING_COMPOSITE: 'Composite',
    GST_ADVISORY: 'GST Advisory',
    COMPANY: 'Company',
    ROC_LLP: 'LLP',
    PF: 'PF',
    ESIC: 'ESIC',
    PROFESSIONAL_TAX: 'Professional Tax',
    CLRA: 'CLRA',
    ALTERNATIVE_INVESTMENT_FUND_REGISTRATION: 'Alternative Investment Fund Registration',
    MERGERS_AND_ACQUISITIONS: 'Mergers and Acquisitions',
    NBFC_REGISTRATION: 'NBFC Registration',
    NBFC_TAKEOVER: 'NBFC Takeover',
    FFMC_LICENSE: 'FFMC License',
    NBFC_COLLABORATION: 'NBFC Collaboration',
    MICROFINANCE_COMPANY_REGISTRATION: 'Microfinance Company Registration',
    HOUSING_FINANCE_COMPANY_REGISTRATION: 'Housing Finance Company Registration',
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: 'NBFC Account Aggregator License',
    PREPAID_WALLET_LICENSE: 'Prepaid Wallet License',
    PEER_TO_PEER_LENDING_LICENSE: 'Peer to Peer Lending License',
    PAYMENT_BANK_LICENSE: 'Payment Bank License',
    PAYMENT_GATEWAY_LICENSE: 'Payment Gateway License',
    FEMA_COMPLIANCES: 'FEMA Compliances'
}

export const FormPageScreenWiseData: { [key: string]: FormPageScreenWiseDataModel } = {
    public_limited_company_registration: {
        title: 'Public Limited Company Registration',
        description: 'Incorporating a Public Company will provide you security & enjoys far more credibility than other business forms. Count on Corpbiz, and allow us to assist you in Registering Public Limited Company seamlessly in India!',
        navigationContainers: [
            {
                title: 'Overview - Public Limited Company',
                description: 'A public limited company (PLC) is a separate legal business entity that has limited liability and offers shares to the general public. The company can invite public for subscription of securities through an IPO or via Trades on the stock exchange. Incorporating a Public Limited Company is a suitable option for large scale businesses that require huge capital. For Public Limited Company Registration, the company must have minimum 3 Directors, 7 Shareholders and need Rs 5 Lakhs of Paid up Share Capital. A Public Limited Company is strictly regulated and is required to publish its true financial health to its shareholders.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A 'Public Company' is a limited company formed with minimum of 7 members and 3 Directors. There is no restriction for Maximum number of members in a Public Company.",
                            "The name of the company should end with the words 'Limited'. Subject to the compliance of the Companies Act, a company can issue shares to the public and can accept deposits from the public. Operations of public limited companies are subject to more stringent compliance of many of the restrictive provisions of the Companies Act.",
                            "Generally, companies that require huge capital investments opt to be registered as a Public Limited Company."
                        ],
                        innerList: [
                            {
                                title: 'Company Name',
                                description: [
                                    "The name of a Public Limited company shall end with the words 'Limited'. Proposed Company Name shall comply with the Company Name Availability Guidelines under Companies Act 2013",
                                    "There are TWO ways for reserving a name for a New Company."
                                ],
                                innerList: [
                                    {
                                        title: 'RUN (Reserve Unique Name)',
                                        description: [
                                            "It is an easy and web-based application for reservation of a Company Name. The name approved under RUN Process is valid for a period of 20 days from the date of approval. In one application, Two names can be submitted for approval under RUN process. If the application is rejected, the another Two more names can be submitted again. If that also rejected by ROC office, a fresh application to be filled with fresh filing fee."
                                        ]
                                    },
                                    {
                                        title: 'SPICe (Simplified Proforma for Incorporating Company Electronically)',
                                        description: [
                                            "Incorporation Filing process is an integrated single point application for Reservation of Company Name, Allotment of DIN for Directors and Incorporation of a New Company along with allotment of Permanent Account Number (PAN) and Tax Collection and Deduction Number (TAN) to the New Company. Under SPICe application, only ONE name can  be submitted for approval."
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'Share Capital',
                                description: [
                                    "There is no minimum capital (Authorised or Paid up Capital) requirement for registering a company. However, the registration fee payable to the Registrar of companies depends on the different slabs of Authorised capital of the company.",
                                    "The First Shareholders must bring the subscribed capital to the Company with in 60 days of Company Incorporation and the Company must issue share certificates to the subscribers."
                                ]
                            },
                            {
                                title: 'Registered Office Address',
                                description: [
                                    "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Public Limited Company Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Place Order'
                    },
                    {
                        title: 'Attend Interview'
                    },
                    {
                        title: 'Submit Documents and Incorporate Company'
                    }
                ]
            },
            {
                title: 'How to Register a Public Limited Company - Easy Steps',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Identify a minimum of 7 shareholders and 3 directors.',
                        description: [
                            "For registering a public company, a minimum of 7 shareholders and 3 directors are required. Shareholders could be individuals, companies or LLPs, but only individuals can become directors of the company. A director need not be a shareholder of the company and shareholders need not necessarily be the directors also.",
                            "Shareholders / Members are the persons holding shares in a company. Directors of company are responsible for the management of the company affairs and legal compliance under various laws. Directors are normally appointed by shareholders. Indian company laws specify that only an individual can be appointed as a director of a company."
                        ]
                    },
                    {
                        title: 'Obtain a Director Identification Number (DIN) for all proposed directors.',
                        description: [
                            "The proposed director must have a DIN allotted by the Ministry of Corporate Affairs. DIN can be obtained by filing an online application with a copy of ID and address proofs. Indian nationals must have a PAN for applying a DIN."
                        ]
                    },
                    {
                        title: 'Obtain a Digital Signature Certificate (DSC) for promoters and directors.',
                        description: [
                            "During the registration process, all the documents are submitted to the ROC online through www.mca.gov.in. These forms need to be authenticated by signing it using Digital Signature Certificate issued by Certifying Authority in India. All promoters and directors should have a digital signature certificate to authenticate the documents that are being filed."
                        ]
                    },
                    {
                        title: 'Identify the location and authorised capital of the company',
                        description: [
                            "It is important to have a proper address for the registered office of the company. The address need not be a commercial location for registering a company. It could be the residential address of one of the promoters or any other identifiable address. The ROC will send all correspondence relating to the company to the registered office address. The jurisdiction of the ROC will depend on the location of the registered office.",
                            "A public limited company should have no minimum authorised capital. Authorised capital can be any amount. Company registration fee varies depends on authorised capital of the company."
                        ]
                    },
                    {
                        title: 'Company Name Application',
                        description: [
                            "The name of the public company should end with the words 'Limited'. Before proceeding with the incorporation process, an application has to be filed for getting the company name approval from the ROC. It is preferable to submit the application with multiple names in the order of preference. The company name application must be in line with the Company Name Guidelines.",
                            "Company name application is filed in RUN Form of the Ministry of Corporate Affairs, Government of India, to check the availability of the proposed name for registration of a new company."
                        ]
                    },
                    {
                        title: 'Execution of company registration documents',
                        description: [
                            "After the company name is approved, the company incorporation documents such as Memorandum of Association (MOA) and Articles of Association (AOA) have to be executed by the promoters in the prescribed format. Now MOA and AOA are electronic document (eMoA (INC-33), eAOA (INC-34)"
                        ]
                    },
                    {
                        title: 'Submission of company registration documents to the ROC',
                        description: [
                            "Once the eMOA and eAOA are prepared, the same have to be submitted to the ROC Central for registration of the company. Usually in couple of days, Central Registrar Register company.."
                        ]
                    },
                    {
                        title: 'Company Registration and Certificate of Incorporation',
                        description: [
                            "The ROC will register the company after due verification of eMOA, eAOA and other details and will issue the Certificate of Incorporation (COI). The Central ROC will also allocate a Corporate Identification Number (CIN) to the company that is registered. The COI is now issued by the ROC in digital form with the digital signature certificate. Central ROC will not issue any physical certificate."
                        ]
                    },
                    {
                        title: 'Filing Commencement of Business Declaration',
                        description: [
                            "A public company cannot start its business immediately unless declaration is filed by directors stating that all subscribers paid subscription money in such manner within 180 days from the date of incorporation."
                        ]
                    }
                ]
            },
            {
                title: 'Documents required',
                navigationTitle: 'Documents',
                containerKey: 'requiredDocuments',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Director Identification Number',
                        description: [
                            'DIN is mandatory to become a director of a company. Now, DIN numbers are issued alone with the incorporation by filing required documents. The following list of documents are required for obtaining DIN number',
                            'The Utility bill submitted shall not be order than 2 month on the date of filing. In case of foreign nations, documents need notarization and apostille.'
                        ],
                        innerList: [
                            {
                                title: 'DIN Document List',
                                innerList: [
                                    {
                                        title: 'Copy of PAN Self Attested - Indian National'
                                    },
                                    {
                                        title: 'Bank statement copy or Mobile Bill or Gas Bill or Electricity Bill or Any other utility Bill'
                                    },
                                    {
                                        title: 'Foreign national - Copy of passport'
                                    },
                                    {
                                        title: 'Indian national have passport- Copy of passport'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Digital Signature',
                        description: [
                            'Every subscriber to memorandum of association and director need to obtain digital signature issued by Certifying Authority. To obtain DSC, following documents required',
                            'In case of any utility bills like electricity, water, gas, and telephone bill, in the name of the applicant, the recent proof, but not earlier than 2 months from the date of application should be attached.'
                        ],
                        innerList: [
                            {
                                title: 'List of Documents for DSC',
                                innerList: [
                                    {
                                        title: 'Application Form Filled and Signed'
                                    },
                                    {
                                        title: 'ID proof Passport or Driving License or PAN Card or Post Office ID card or Bank Account Passbook containing the photograph and signed by an individual with attestation by the concerned Bank official.'
                                    },
                                    {
                                        title: 'Photo ID card issued by the Ministry of Home Affairs of Centre/State Governments.'
                                    },
                                    {
                                        title: 'Photo ID card issued by any Government Authority bearing the signatures of the individual.'
                                    },
                                    {
                                        title: 'Aadhaar Card'
                                    },
                                    {
                                        title: 'Address Proof Document Passport or Driving License (DL) / Registration certificate (RC) or Voter ID Card',
                                    },
                                    {
                                        title: 'Bank Statements signed by the bank'
                                    },
                                    {
                                        title: 'Telephone Bill'
                                    },
                                    {
                                        title: 'Electricity Bill'
                                    },
                                    {
                                        title: 'Water Bill'
                                    },
                                    {
                                        title: 'Gas connection'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Public Limited Company',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Minimum Directors',
                        description: ['A public company must have minimum 3 directors of with minimum one director must be resident in India']
                    },
                    {
                        title: 'Minimum and Maximum Shareholders',
                        description: ['A public company must have minimum seven shareholders all time. There is no limit on maximum number of shareholders.']
                    },
                    {
                        title: 'Compliance Requirements',
                        description: ['Public company shall comply with all most all provisions of Companies Act as this type of company is for large business with public interest.']
                    },
                    {
                        title: 'Transfer of Shares',
                        description: ['Shares of a public company is freely transferable. Board of directors can not impose restrictions on share transfer.']
                    },
                    {
                        title: 'Issue of Shares',
                        description: ['A public company can issue shares subject to regulation of SEBI and other compliance requirements']
                    }
                ]
            },
        ]
    }
}