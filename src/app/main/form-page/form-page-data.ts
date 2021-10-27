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
    FEMA_COMPLIANCES: 'FEMA Compliances',
    PROPRIETORSHIP_REGISTRATION: 'Proprietorship Registration',
    HUF: 'HUF'
}

export const FormPageScreenWiseData: { [key: string]: FormPageScreenWiseDataModel } = {
    LTD_COMPANY: {
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
    },
    PARTERSHIP_FIRM: {
        title: 'Partnership',
        description: 'A partnership is a special type of contract and is a relation between two or more persons who have agreed to share profits of a business run by all or any one of them acting for all. The essence of a partnership is a contract between partners. It is mandatory for partners to share profits among themselves.',
        navigationContainers: [
            {
                title: 'Overview - Partnership Firm Registration',
                description: 'partnership registration online | create partnership deed in 10 minutes using or elawyering tool. Your partnership will be read in a day.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A partnership is one of the oldest business structures in India and is governed by the Indian Partnership Act, 1932. A partnership firm does not have an independent status apart from the partners constituting it. A partnership is not a legal entity; it has a limited identity for the purpose of tax laws. Any two people who are capable of entering into a contract can start a partnership business under an agreement called a partnership deed. The partnership agreement can be oral or written. It is not mandatory to register a partnership deed, but it is advisable to do so for evidential purposes since a firm cannot file a suit against a third party if it is unregistered.",
                            "Forming a partnership firm is simple since it does not have to be registered to start operations. A partner is an agent of the firm and all other partners. Each partner is liable for the actions of the other partners."
                        ]
                    }
                ]
            },
            {
                title: 'Partnership - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Place an Order at CompaniesInn'
                    },
                    {
                        title: 'Complete the E-Lawyering Interview'
                    },
                    {
                        title: 'Generate the Partnership Agreement and Execute it'
                    },
                    {
                        title: "Get the Agreement Registered with 'Registrar of Firms'"
                    }
                ]
            },
            {
                title: 'Process of Partnership Firm Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Name Selection',
                        description: [
                            "Choose an appropriate name for the partnership The first step is to choose an appropriate name for the proposed firm. While choosing the name, due care has to be taken to see that it does not violate the trademark of any other person or prohibited emblems and names."
                        ]
                    },
                    {
                        title: 'Place of Business',
                        description: [
                            "Place of business: It is important that the firm should have a proper address since all official communications will be sent only to this address. The jurisdiction of the registrar will be ascertained by this address."
                        ]
                    },
                    {
                        title: 'Partnership Deed',
                        description: [
                            "Execute the partnership deed and stamp with appropriate stamp duty : By the partnership deed, the right, duties and liabilities of the partners is ascertained. All the partners to the firm are governed by the terms and conditions mentioned in the agreement. The stamp duty will vary from state to state and is based on the total amount of contribution by all partners."
                        ]
                    },
                    {
                        title: 'Application for registration',
                        description: [
                            "Along with the documents mentioned above, an application in the prescribed format needs to be submitted to the Registrar of Firms located in the jurisdiction mentioned in the official communication address. On receipt of the application, the Registrar will verify all documents. If satisfied that the provision of the Partnership Act is complied with, the Registrar will enter the particulars in the Register of Firms and issue an acknowledgment in the prescribed format."
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
                        title: 'Documents for Partnership Registration',
                        description: [
                            'Basic document for registering a partnership firm is the executed partnership deed.'
                        ],
                        innerList: [
                            {
                                title: 'List of Other Documents',
                                innerList: [
                                    {
                                        title: 'Partnership Deed Signed by all Partners'
                                    },
                                    {
                                        title: 'Primary ID - Permanent Account Number (PAN)'
                                    },
                                    {
                                        title: 'Additional ID - Aadhaar Card'
                                    },
                                    {
                                        title: 'Latest Address Proof: Telephone Bill or Electricity Bill or Bank Statement or Bank Passbook with latest entries'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Partnership Firm',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Simple to Form and Easy to Operate',
                        description: ['A Partnership is very simple to form and easy to manage condisering the regultory requiremets of Limited Company or Limited Liability Partnership.']
                    },
                    {
                        title: 'Registration is not Mandatory',
                        description: ['Registration of Partnership under the Partnership Act is not Mandatory. It is optional to the partners of the Firm. However, an unregistered partnership may face difficulties in getting the agreement terms enforced under law.']
                    },
                    {
                        title: 'Simple Compliance Needs',
                        description: ['Regulatory compliance requirements of partnership are much simpler compared to Limited Companies and LLP. However, the compliances related to Taxation and other operational matters are equally applicable to Partnership.']
                    }
                ]
            },
        ]
    },
    PROPRIETORSHIP_REGISTRATION: {
        title: 'Proprietorship Registration',
        description: 'Proprietorship is a business concern owned and operated by an individual. Proprietorship is nothing but the Individual carrying the business himself.',
        navigationContainers: [
            {
                title: 'Overview - Proprietorship Business',
                description: 'proprietorship Registration. sole proprietorship registration by registering MSME, shop and establishment or GST registration. 100% online process.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A sole proprietorship, also known as a sole trader or simply a proprietorship, is a type of business structure that is owned and run by one individual and in which there is no legal distinction between the owner and the business. The owner receives all profits (after tax) and has unlimited responsibility for all losses and debts. All assets and debts of the business in the proprietorship are owned by the proprietor. This means that the owner has no less liability than if they were acting as an individual instead of as a business.",
                            "A sole proprietor may use a trade name or business name other than his or her name. In India, there is no specific law for registration of sole proprietorship, but as per the Shop and Establishment Law (State Law), every establishment needs to get registered under the Act, which can be used as limited purpose sole proprietorship registration.",
                            "As the name reveals, a sole proprietorship is operated managed and run by a single individual. The identity of the organization is nothing but the individual himself.  However, depending on the nature of business, it is required to obtain registration such as GST, Professional Tax etc. A sole proprietorship can be registered under the MSME Act to avail benefits and protection.",
                            "The proprietorship business carries unlimited business risk as the business proprietor is individually responsible to settle all business liabilities. The proprietor’s personal assets are at risk to compensate the business liabilities."
                        ],
                        innerList: [
                            {
                                title: 'Different Options for Registering Sole Proprietorship',
                                innerList: [
                                    {
                                        title: 'MSME Registration',
                                        description: [
                                            "Udyog Aadhaar is a unique identification number provided by  MSME ministry to the business. Udyog Aadhaar  can be obtained by all entities such as company and partnership, even a sole proprietor can apply for udyog aadhaar."
                                        ]
                                    },
                                    {
                                        title: 'Shop and Establishment Registration',
                                        description: [
                                            "In Shop and Establishment Law (State Law), every establishment needs to get registered under the Act, which can be used as limited purpose sole proprietorship registration."
                                        ]
                                    },
                                    {
                                        title: 'GST Registration',
                                        description: [
                                            "A sole proprietorship can apply for GST number submitting all supporting documents. GST registration can be considered as sole proprietorship registration."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Proprietorship Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Place an Order online'
                    },
                    {
                        title: 'Complete the E-Lawyering Interview'
                    },
                    {
                        title: 'Get your Business Registered under MSME'
                    }
                ]
            },
            {
                title: 'Process of Starting a Proprietorship Business',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Proprietorship can obtain any of the following Registrations:',
                        description: [
                            "1. MSME Registration",
                            "2. Shops and Establishment Registration",
                            "3. Professional Tax Registration",
                            "4. Goods and Service Tax Registration",
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
                        title: 'Proprietor Documents',
                        innerList: [
                            {
                                title: 'Copy of PAN'
                            },
                            {
                                title: 'Copy of Aadhaar'
                            },
                            {
                                title: 'Address Proof of Business'
                            },
                            {
                                title: 'Rental Agreement in the name of Business'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Proprietorship Business',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'No registration',
                        description: ['Sole proprietorship businesses need not be registered under any specific law in India. However, for opening an account with a bank, a person needs any two registrations under any law such as service tax or VAT, etc.']
                    },
                    {
                        title: 'Tax',
                        description: ['Since sole proprietorship is an individual business, all profits are taxed in the name of individual himself.']
                    },
                    {
                        title: 'Management',
                        description: ['Proprietor manages the business as per his will and wish.']
                    },
                    {
                        title: 'Legal compliance',
                        description: ['Since sole proprietorship is not created by law, no specific compliance or filing is required except for tax compliance and other legal compliance applicable for any business.']
                    },
                    {
                        title: 'Business Closure',
                        description: ['It is easy to close a sole proprietorship business. The proprietor can sell all businesses without much difficulty.']
                    }
                ]
            },
        ] 
    },
    LLP: {
        title: 'LLP Registration',
        description: "Limited Liability Partnership (LLP) is a hybrid form of incorporated business structure with 'Limited Liability' and features of a 'Partnership'. Register your LLP from the house of First LLP* in India.",
        navigationContainers: [
            {
                title: 'Overview - LLP - Limited Liability Partnership',
                description: 'Online LLP Registration simplified with the help of technology. Get you LLP Registration any where in India in easy steps.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        innerList: [
                            {
                                title: 'LIMITED LIABILITY PARTNERSHIP (LLP)',
                                description: [
                                    "A Limited Liability Partnership (LLP) is a form of business that offers the combined features of ‘Partnership’ and ‘Limited Company’ business structures. This business form was introduced in India in April 2009 with the enactment of the Limited Liability Partnership Act, 2008.",
                                    "In an LLP, a partner is not responsible or liable for another partner's misconduct or negligence. Instead, all partners have limited liability, limited to their own acts of commission or omission, similar to shareholders’ liabilities in a limited company.",
                                    "However, unlike company shareholders, LLP partners have the right to manage the business directly. An LLP also limits the personal liability of a partner for the errors, omissions, incompetence, or negligence of the LLP's employees or other agents. The management of day-to-day business is outlined in the LLP Agreement, providing partners with the freedom to regulate affairs of the business.",
                                    "LLP registration is administered by the Ministry of Corporate Affairs (MCA) through the Office of the Registrar of Companies. The incorporation process is fully electronic, similar to the company registration process, i.e. applications and documents are filed electronically and the Registrar issues a digitally-signed Certificate of Incorporation (COI)."
                                ]
                            },
                            {
                                title: 'LLP NAME',
                                description: [
                                    "The name of a Limited Liability Partnership shall end with the words 'LLP’ of ‘Limited Liability Partnership’. Proposed LLP Name shall comply with the LLP Name Availability Guidelines under Limited Liability Partnership Act 2008.",
                                    "There are TWO ways for reserving a name for an LLP."
                                ],
                                innerList: [
                                    {
                                        title: 'RUN (Reserve Unique Name)',
                                        description: [
                                            "It is an easy and web-based application for reservation of an LLP Name. The name approved under RUN Process is valid for a period of 90 days from the date of approval. In one application, TWO names can be submitted for approval under RUN process. If the application is rejected, the another Two more names can be submitted again. If that also rejected by ROC office, a fresh application to be filed with fresh filing fee."
                                        ]
                                    },
                                    {
                                        title: 'FiLLiP (Form for Incorporation of Limited Liability Partnership)',
                                        description: [
                                            "LLP Incorporation Filing process is an integrated single point application for Reservation of Name, Allotment of DIN for Designate Partners and Incorporation of a New LLP. Under FiLLiP application, only ONE name can be submitted for approval."
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'FOREIGN DIRECT INVESTMENT (FDI) IN LLP',
                                description: [
                                    "FDI is permitted in LLPs operating in business activities where 100% FDI is allowed through the automatic route. FDI in LLPs will not be allowed in sectors such as agricultural/plantation activity, print media or real estate business."
                                ]
                            },
                            {
                                title: 'FIRST LLP REGISTERED IN INDIA*'
                            },
                            {
                                title: 'CompaniesInn holds the record of registering the First LLP in India through the online filing system of MCA way back on 24-04-2009 (CompaniesInn Consulting LLP; LLPIN:AAA-0002)'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'LLP Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Select LLP Registration Package'
                    },
                    {
                        title: 'Complete Online E-Lawyering Interview'
                    },
                    {
                        title: 'Generate LLP Registration Documents online and Execute it'
                    },
                    {
                        title: 'Companiesinn will prepare and file Incorporation documents with MCA'
                    },
                    {
                        title: 'MCA will Register the LLP and Issue Certificate of Incorporation'
                    }
                ]
            },
            {
                title: 'LLP Registration Procedure - Steps',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Select Packages and place order with CompaniesInn',
                        description: [
                            "You will be directed to India's First and the State of the Art E-Lawyering Interview by CompaniesInn. Complete the online Interview and generate LLP Registration Documents for execution by Partners and Designated Partners."
                        ]
                    },
                    {
                        title: 'Submit Executed documents to CompaniesInn',
                        description: [
                            "Execute the documents by Partners and Designated Partners and submit to CompaniesInn with supporting such as Identity and Address documents, Registered office Address Proof and NOC and other additional documents."
                        ]
                    },
                    {
                        title: 'RUN Application (Optional)',
                        description: [
                            "RUN (Reserve Unique Name) is a web-based application for reserving the LLP Name. The name approved under RUN Process is valid for a period of 90 days from the date of approval. LLP Incorporation documents are to be filed within the validity period of LLP Name."
                        ]
                    },
                    {
                        title: 'Filing of LLP Incorporation Documents with MCA',
                        description: [
                            "LLP Registration filing consists of preparation and filing of E-Form FiLLip with MCA with required documents. All the documents executed and attested as per documentation requirements has to be attached to the E-Form FiLLip and has to be digitally signed with the Digital Signature Certificate (DSC) of all the proposed Partners and Designated Partners."
                        ]
                    },
                    {
                        title: 'Verification by the Central Registrar of Companies (CRC)',
                        description: [
                            "The CRC verifies the application and if found the documents are in order, the Central Registrar of Companies shall register the LLP and issue the following: 1. LLP Incorporation Certificate 2. DIN for Designated Partners."
                        ]
                    },
                    {
                        title: 'LLP Agreement - Within of Incorporation',
                        description: [
                            "After registration of LLP, the partners have to execute an LLP Agreement and shall file LLP Agreement with office of ROC within 30 days from the date of LLP registration."
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
                        title: 'Registered Office – Address',
                        innerList: [
                            {
                                title: 'Address Proof'
                            },
                            {
                                title: 'No-Objection Letter from the owner of the Property'
                            }
                        ]
                    },
                    {
                        title: 'Additional Documents',
                        description: [
                            'The following documents are required on case to case basis:'
                        ],
                        innerList: [
                            {
                                title: 'Nomination from Corpoate Partner for Designated Partner'
                            },
                            {
                                title: 'NOC for Use of Name from Trademark owner'
                            },
                            {
                                title: 'Resolution and NOC from an existing Company / LLP for user of similar names'
                            },
                            {
                                title: 'Declaration for complying sectoral regulatory compliaces'
                            }
                        ]
                    },
                    {
                        title: 'ID & Address from Partners and Designated Partners',
                        description: [
                            "Partners and Designated Partners have to submit Identity Proof and Latest address proof",
                            "List of Acceptable Documents"
                        ],
                        innerList: [
                            {
                                title: 'Primary ID - Permanent Account Number (PAN)'
                            },
                            {
                                title: 'Additional ID - Aadhaar Card or Passport or Driving License or Voter Identity Card'
                            },
                            {
                                title: 'Latest Address Proof: Telephone Bill or Electricity Bill or Bank Statement or Bank Passbook with latest entries'
                            }
                        ]
                    },
                    {
                        title: 'Documents to be Signed by Partners and Designated Partners',
                        innerList: [
                            {
                                title: 'Application for Digital Signature Certificate (DSC)'
                            },
                            {
                                title: 'Consent to Act as Partner / Designated Partner - Form 9'
                            },
                            {
                                title: 'Details/Information for DIN'
                            },
                            {
                                title: 'Declaration of DIN (If DIN is allotted already)'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of LLP',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Online Services',
                        description: ['Our LLP Registration is 100% online. Using our tools, LLP can incorporation made easy. All documents required for LLP registration is generated online']
                    },
                    {
                        title: 'Support Services',
                        description: ['Companiesinn incorporated 1st LLP in India online. Thereafter we have helped over 20000+ customers to register LLP. With the help of technology and process driven workflow LLP incorporation happen in couple of days.']
                    }
                ]
            },
        ]
    },
    OPC: {
        title: 'One Person Company Registration',
        description: "One Person Company (OPC) is a new concept in India from 2013. A Single Person, who is an Indian National and Resident in India can incorporate a Limited Company. CompaniesInn provides cost effective OPC Registration with India’s First and State of the Art E-Lawyering Process.",
        navigationContainers: [
            {
                title: 'Overview - One Person Company (OPC) Registration India',
                description: 'One Person Private Limited Company Registration in India is administered by the Registrar of Companies-ROC in India. Register a OPC company in India. Before registering a start-up company in India as a OPC Pvt Ltd Company, Company Name Check can be checked done with CompaniesInn',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        innerList: [
                            {
                                title: 'ONE PERSON COMPANY (OPC)',
                                description: [
                                    "One Person Company or OPC means a company which has only one person as a member. ",
                                    "An OPC is classified as a private company under Companies Act. OPC has all benefits of a private limited company such as protecting personal assets from business liability, separate legal entity and perpetual succession. One Person Company (OPC) is a Company registered with ONLY ONE PERSON as its shareholder.",
                                    "A One Person Company can have owned by Only a natural person who is Resident in India and Citizen of India. No corporate entity can be as shareholder (owner) of a One Person Company.",
                                    "There is no minimum or maximum paid-up capital restriction for One Person Company. It can be converted into private limited or public limited at any time.",
                                    "One Person Company is not allowed to take any partner (Shareholder). But, OPC can convert into private limited or public limited and add partners(shareholders)."
                                ]
                            },
                            {
                                title: 'COMPANY NAME',
                                description: [
                                    "The name of a OPC shall end with the words '(OPC) Private Limited'. Proposed Company Name shall comply with the Company Name Availability Guidelines under Companies Act 2013",
                                    "There are TWO ways for reserving a name for a New One Person Company."
                                ],
                                innerList: [
                                    {
                                        title: 'RUN (Reserve Unique Name)',
                                        description: [
                                            "It is an easy and web-based application for reservation of a Company Name. The name approved under RUN Process is valid for a period of 20 days from the date of approval. In one application, Two names can be submitted for approval under RUN process. If the application is rejected, the another Two more names can be submitted again. If that also rejeccted by ROC offce, a fresh application to be fiiled with fresh filing fee."
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
                                title: 'SHARE CAPITAL',
                                description: [
                                    "There is no minimum capital (Authorised or Paid-up Capital) requirement for registering an OPC.",
                                    "The registration fee payable to the Registrar of companies depends on the different slabs of Authorised capital of the company.",
                                    "The First Shareholder must bring the subscribed capital to the Company with in 60 days of Company Incorporation and the Company must issue share certificates to the subscribers."
                                ]
                            },
                            {
                                title: 'REGISTERED OFFICE ADDRESS',
                                description: [
                                    "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company."
                                ]
                            },
                            {
                                title: 'WHO CAN REGISTER OPC?',
                                description: [
                                    "Only a natural person who is an Indian citizen who is resident in India or otherwise not less than 120 days during the last days during the immediately preceding financial year."
                                ]
                            },
                            {
                                title: 'HOW MANY OPC ONE PER CAN CREATE?',
                                description: [
                                    "As per the rules, one person can create only ONE OPC and can be nominee in another OPC."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'One Person Company Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Select Company Registration Package'
                    },
                    {
                        title: 'Complete Online E-Lawyering Interview'
                    },
                    {
                        title: 'Generate Registration Documents online and Execute it'
                    },
                    {
                        title: 'File Company Formation Documents with ROC'
                    },
                    {
                        title: 'ROC will Issue the Certificate of Incorporation'
                    }
                ]
            },
            {
                title: 'How to Register a One Person Company (OPC) in India - Steps',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Select Packages and place order with CompaniesInn',
                        description: [
                            "You will be directed to India's First and the State of the Art E-Lawyering Interview by CompaniesInn . Complete the online Interview and generate Company Registration Documents for execution by Shareholders and Directors."
                        ]
                    },
                    {
                        title: 'Submit Executed documents to CompaniesInn',
                        description: [
                            "Execute the documents by Shareholder, Nominee Shareholder and Director(s) and submit to CompaniesInn with supporting such as Identity and Address documents, Registerd office Adress Proof and NOC and other additional documents."
                        ]
                    },
                    {
                        title: 'RUN Application (Optional)',
                        description: [
                            "RUN (Reserve Unique Name) is a web-based application for reserving the Company Name.",
                            "The name approved under RUN Process is valid for a period of 20 days from the date of approval. Company Incorporation documents are to be filed within the validity period of Company Name."
                        ]
                    },
                    {
                        title: 'Filing of Company Incorporation Documents with MCA',
                        description: [
                            "Company Registration filing consists of preparation and filing of the flowing E-Forms:",
                            "1. e-Form INC-32 – SPICe Application",
                            "2. e-Form INC-33: e-Memorandum of Association (SPICe MoA)",
                            "3. e-Form INC-34: e-Articles of Association (SPICe AoA)",
                            "All the documents executed and attested as per documentation requirements has to be attached to the e-Form INC-32 / 33/ 34 and the e-Forms to be digitally signed with the Digital Signature Certificate (DSC) of all the proposed shareholders /representatives.",
                        ]
                    },
                    {
                        title: 'Verification by the Central Registrar of Companies (CRC)',
                        description: [
                            "The CRC verifies the application and if found the documents are in order, the Central Registrar of Companies shall register the Company and issue the following:",
                            "1. Company Incorporation Certificate",
                            "2. DIN for Directors",
                            "3. Permanent Account Number (PAN)",
                            "4. Tax Collection and Deduction Number (TAN) to the New Company.",
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
                        title: 'Documents to be Signed by the NOMINEE SHAREHOLDER',
                        innerList: [
                            {
                                title: 'Consent of Nominee Form No. INC-3.'
                            }
                        ]
                    },
                    {
                        title: 'Documents to be Signed by all DIRECTORS',
                        innerList: [
                            {
                                title: 'Consent to Act as Director: Form DIR-2'
                            },
                            {
                                title: 'Details/Information for DIN'
                            },
                            {
                                title: 'Declaration of DIN (If DIN is allotted already)'
                            }
                        ]
                    },
                    {
                        title: 'Registered Office – Address',
                        innerList: [
                            {
                                title: 'Address Proof'
                            },
                            {
                                title: 'No-Objection Letter from the owner of the Property'
                            }
                        ]
                    },
                    {
                        title: 'Additional Documents',
                        description: [
                            'The following documents are required on case to case basis:'
                        ],
                        innerList: [
                            {
                                title: 'NOC for Use of Name from Trademark owner'
                            },
                            {
                                title: 'Resolution and NOC from an existing Company / LLP for user of similar names'
                            },
                            {
                                title: 'Declaration for complying sectoral regulatory compliaces'
                            }
                        ]
                    },
                    {
                        title: 'ID & Address from Partners and Designated Partners',
                        description: [
                            "Shareholder, Nominee Shareholder and Director(s) have to submit Identity Proof and Latest address proof",
                            "List of Acceptable Documents"
                        ],
                        innerList: [
                            {
                                title: 'Primary ID - Permanent Account Number (PAN)'
                            },
                            {
                                title: 'Additional ID - Aadhaar Card or Passport or Driving License or Voter Identity Card'
                            },
                            {
                                title: 'Latest Address Proof: Telephone Bill or Electricity Bill or Bank Statement or Bank Passbook with latest entries'
                            }
                        ]
                    },
                    {
                        title: 'Documents to be Signed by the Shareholder',
                        description: [
                            "Shareholder to sign the folliwing documents:"
                        ],
                        innerList: [
                            {
                                title: 'Application for Digital Signature Certificate (DSC)'
                            },
                            {
                                title: 'Declaration by Subscribers & Director: INC-9'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of One Person Company',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Busines Credibiity',
                        description: ['An OPC, being limited company will have more business credibiility than a Proprietorship.']
                    },
                    {
                        title: 'Limited Liability',
                        description: ["Like any other incorporated business, a limited company is a limited liability organization. The owner's liability is limited to the extent of shares held in the company and ends once he pays for the shares."]
                    },
                    {
                        title: 'Protection of Personal Assets to owners',
                        description: ["Since the liability of owner is limited, the personal assets of the shrehodler is protected against business risk as the company's liability is not the owner's liability."]
                    },
                    {
                        title: 'Perpetual Existence',
                        description: ['Assets and liabilities of a company belongs to itself and do not belong to the shareholders. Hence, the company will continue to be in existence even if the owner changes']
                    },
                    {
                        title: 'Can sue and be sued',
                        description: ['A limited company is like an artificial person created by law. Like any other person, it can sue and be sued before the court of law. This means that if a company defaults, others can take legal action against the company and likewise, the company can tak']
                    }
                ]
            },
        ] 
    },
    PVT_LTD: {
        title: 'Company  Registration',
        description: "Company Registration web-based filing. Pvt Ltd Company Registration is the most used structure registration in India. Private Limited Company in India is registered under the Companies Act 2013 with limited liability. Get your company registered with the help of Artificial Intelligence and the power of e-Lawyering from CompaniesInn.",
        navigationContainers: [
            {
                title: 'Overview - Private Limited Company Registration India',
                description: 'Company Registration India is completely online with web-based filing. Itis regulated and administered under the Companies Act, 2013 by the Ministry of Corporate Affairs (MCA) and processed by the Registrar of Companies from the Central Registration Centre (CRC).',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Company is the most trusted and visible business structure in India. A Private Limited Company in India is registered under the Companies Act 2013 with limited liability.",
                            "Company Registration is an online process with Companiesinn. With over 11 years experience  in online Company Registration with an affordable rate to startups, we have helped more than 20000 startups across India. Now with the help of our online order processing tool, we make registration of company  and anywhere more affordable and accessible to every aspiring entrepreneur at the comfort of your home.",
                            "Company Registration is regulated by the Companies Act, 2013, and administered by the Ministry of Corporate Affairs (MCA), Registrar of Companies,   and is processed at the Central Registration Centre (CRC)."
                        ],
                        innerList: [
                            {
                                title: 'How to Register a Company in India?',
                                description: [
                                    "Today, company registration process  and other regulatory filings are paperless; documents are filed electronically through the MCA website and is processed at the Central Registration Centre (CRC).",
                                    "Company Registration process  is completely online. Upon completing all registration formalities, the Registrar of Companies’ issues a digitally signed Certificate of Incorporation (COI). Electronic certificates issued by the ministry can be verified by all stakeholders on the MCA website itself.",
                                    "Incorporating a company  is a systematic process of collection and submission of details required as per the requirements of Companies Act 2013 and as per the process defined by the Ministry of Corporate Affairs from time to time. Management of the process requires in-depth knowledge of legal requirements and not to mention, practical experience of the same."
                                ]
                            },
                            {
                                title: 'Requirements for Company Registration ',
                                description: [
                                    "There are certain prerequisites to registering  a company in . Requirements and process of registration of company  depends on the type of These are minimum shareholders and directors, etc for different types of Companies."
                                ]
                            },
                            {
                                title: 'Basic requirements for Online Company Registration in India:',
                                innerList: [
                                    {
                                        title: '1. Shareholders',
                                        description: [
                                            "To register a Private Company, there should be a minimum of two shareholders. The first shareholder(s) should execute the Memorandum and Articles of Association for registering the Company."
                                        ]
                                    },
                                    {
                                        title: '2. Directors',
                                        description: [
                                            "A Private Company should have a minimum of two directors Only individuals can be designated as directors of a company. Where a new company is registered by two or more existing companies or LLPs, the promoter company or LLP can nominate individuals as directors of the new company. An individual should hold a valid DIN to become a director of a company."
                                        ]
                                    },
                                    {
                                        title: '3. Digital Signature Certificate (DSC)',
                                        description: [
                                            "To register a Private Company, there should be a minimum of two shareholders. The first shareholder(s) should execute the Memorandum and Articles of Association for registering the Company."
                                        ]
                                    },
                                    {
                                        title: '4. Company Name',
                                        description: [
                                            "The name structure of a private company is Name (Noun/Coined Word) + Activity Word + Private Limited. For eg. CompaniesInn Solutions Private Limited.  Proposed Company Name shall comply with the Company Name Availability Guidelines under Companies Act 2013.",
                                            "You can check the company name availability and make sure there is no Company or LLP name already registered the same or similar name that you propose.",
                                            "How to Choose  a Company Name? Selection of a company or LLP is the most unpredictable task in the process of starting a company and LLP. Naming of a Business by a promoter is a logical decision and approval of the name by the office of the Registrar of Companies is a legal decision.",
                                            "a. Validity of Company Name Approval",
                                            "Company Name approved will be valid for 20 days from the date of Approval, in case name is being reserved for a new company.",
                                            "b. Extension of Time Company Name Validity",
                                            "From January 26, 2020, the Registrar shall extend the period of a name reserved subject to payment of fees provided by Web service SPICe+."
                                        ]
                                    },
                                    {
                                        title: '5. Share Capital',
                                        description: [
                                            "The term Share Capital in a Company means the amount invested by the owners of the company for running the business.",
                                            "There is no minimum capital (Authorised or Paid up Capital) requirement for registering a company. However, the registration fee payable to the Registrar of companies depends on the different slabs of Authorised capital of the company."
                                        ]
                                    },
                                    {
                                        title: '6. Registered Office Address of Company',
                                        description: [
                                            "Registered Office of Company  refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company."
                                        ]
                                    },
                                    {
                                        title: '7. Commencement of Business by Company',
                                        description: [
                                            "The First Shareholders must bring the subscribed capital to the Company within 180 days of Company Incorporation. The Company can commence the business activities only after filing a declaration to the Registrar that every subscriber to the memorandum has paid the value of the shares agreed to be taken by him."
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'Company Registration Office in India',
                                description: [
                                    "Registration and regulatory administration of limited companies are regulated under the Companies Act, 2013 and is administered by the Office of the Registrar of Companies (ROC), Ministry of Corporate Affairs. The Office of the Registrar of Companies (ROC) is situated at each State."
                                ]
                            },
                            {
                                title: 'SPICe+ (SPICe Plus) Company Registration',
                                description: [
                                    "As a part of Ease of Doing Business(EODB) initiatives by Government of India, the Ministry of Corporate Affairs would be shortly notifying & deploying a new Web Form christened ‘SPICe+’ (pronounced ‘SPICe Plus’) replacing the existing SPICe Form 32 SPICe+ would be an integrated Web form offering multiple services viz. name reservation, incorporation, DIN allotment, mandatory issue of PAN, TAN, EPFO, ESIC, Profession Tax (Maharashtra) and Opening of Bank Account. It will also facilitate allotment of GSTIN wherever so applied for by the Stakeholders."
                                ]
                            },
                            {
                                title: 'What you get with Company Registration?',
                                description: [
                                    "After completion of Company Incorporation, you get the following:"
                                ],
                                innerList: [
                                    {
                                        title: '1. Certificate of Incorporation',
                                        description: [
                                            "Certification of Incorporation is the Birth Certificate of Company."
                                        ]
                                    },
                                    {
                                        title: '2. MOA & AOA',
                                        description: [
                                            "Memorandum of Association (MOA) & Articles of Association (AOA) are the charter documents of Company."
                                        ]
                                    },
                                    {
                                        title: '3. DIN of Directors',
                                        description: [
                                            "Physical PAN Card and TAN allotment letter will be despatched from the Income Tax Department by post to the registered office address with in 15-20 days of Company Incorporation.",
                                            "It is important to receive the PAN when delivered to the Registered Office address. If it is returned undelivered, there is no option to retrieve it and duplicate PAN card has to be to be applied with separate fee.",
                                            "An E-PAN Card and TAN allotment letter will also be delivered to the registered e-mail ID from Income Tax Department. The password to open the same will be Date of Registration of Company (DDMMYYY)."
                                        ]
                                    },
                                    {
                                        title: '4. PF / ESI Registrations',
                                        description: [
                                            "PF / ESI Registration numbers will be allocated to the Company. These registrations are mandatorily processed along with Company Incorporation. However, the Ministry has clarified that new companies incorporated through Spice+ and have obtained EPFO/ESI numbers will have to file statutory returns only when  they cross threshold prescribed under the relevant Acts."
                                        ]
                                    },
                                    {
                                        title: '5. Bank Account',
                                        description: [
                                            "Under Spice+ incorporation process, the preferred bank is will open a Bank account in the name of the Company and Account Number will be allocated to the Company. However, the bank account will be activated only after completion of KYC process by the Bank."
                                        ]
                                    },
                                    {
                                        title: '6. Professional Tax Registrations',
                                        description: [
                                            "In Karnataka and Maharashtra, Professional Tax Registration is also processed along with Spice+ incorporation process. Registration particulars will be mailed to the registered email immediately after incorporation of Company. However, required fee for registrations has to be paid separately to the respective departments by creating online login with the credentials received."
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'Company Registration Fees in India',
                                description: [
                                    "Company Registration Fee varies depending on the Authorised Capital of the Company and State in which company is to be registered. Fill the form with place of registration and Check the Company Registration Cost / Package for different State."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Company Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Directors',
                        description: [
                            "Minimum 2 individuals out of which one must be a person resident in India. All directors must have KYC documents."
                        ]
                    },
                    {
                        title: 'Shareholders',
                        description: [
                            "Minimum 2 shareholders. It is possible to have individuals and entities as shareholders"
                        ]
                    },
                    {
                        title: 'Digital Signature',
                        description: [
                            "Since, all documents are filed online, it is mandatory to have all directors and shareholders valid digital signature"
                        ]
                    },
                    {
                        title: 'Registered Office Address',
                        description: [
                            "Every company need registered office. The co-founders shall produce KYC documents at the time registration and thereafter for filing with registrar"
                        ]
                    }
                ]
            },
            {
                title: 'How to Register a Company in India',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Company Name Application',
                        description: [
                            "The applicant has two options to proceed with Company Name Application.",
                            "Option 1. Get the Company Name Approval under RUN Application process and proceed with File an application for Company name approval first and then go for Company Registration; or",
                            "Option 2. File the Integrated Company Registration Form.",
                            "The Company name can be reserved through SPICe incorporation process. In case of name application through SPICe form, only one name can be submitted for approval. However, if the first applied name is rejected, the application can be resubmitted 2 more times with alternate names."
                        ]
                    },
                    {
                        title: 'Preparation and Filing of Company Incorporation Documents with MCA:',
                        description: [
                            "Under the SPICe incorporation process, Company Incorporation Process consists of preparation and filing of the flowing E-Forms:",
                            "a. e-Form INC-32 - Simplified Proforma for Incorporating Company Electronically (SPICe)",
                            "b. e-Form INC-33: e-Memorandum of Association (SPICe MoA)",
                            "c. e-Form INC-34: e-Articles of Association (SPICe AoA)",
                            "All the documents executed / notarised / attested as per documentation requirements has to be attached to the e-Form INC-32 / 33/ 34 and the e-Forms has to be digitally signed with the Digital Signature Certificate (DSC) of all the proposed shareholders / representatives.",
                            "There is NO Registration Fee payable for filing of e-Form INC-32 for all types of Companies if the authorised capital is less than or equal to Rs.15 Lakhs at the time of registration. However, filing fee for e-Form INC-33 / 34 and stamp duty is applicable for registration of any Company.",
                        ]
                    },
                    {
                        title: 'Processing of e-Forms by the office of Central Registrar of Companies',
                        description: [
                            "The Central Registration Centre (CRC) processes the application and if found the details / documents are in order, the Central Registrar of Companies shall register the Company and issue the following:",
                            "1. Company Incorporation Certificate",
                            "2. DIN for Directors",
                            "3. Permanent Account Number (PAN)",
                            "4. Tax Collection and Deduction Number (TAN) to the New Company."
                        ]
                    }
                ]
            },
            {
                title: 'Documents required',
                navigationTitle: 'Documents',
                containerKey: 'requiredDocuments',
                type: FormPageContainerType.LIST,
                description: 'To get Company registered, you need to provide below documents. The documents can be submitted through online',
                value: [
                    {
                        title: 'Documents to be Signed by all SHAREHOLDERS',
                        innerList: [
                            {
                                title: 'Application for Digital Signature Certificate (DSC)'
                            },
                            {
                                title: 'Declaration by Subscribers & Director: INC-9'
                            }
                        ]
                    },
                    {
                        title: 'Documents to be Signed by all DIRECTORS',
                        innerList: [
                            {
                                title: 'Consent to Act as Director: Form DIR-2'
                            },
                            {
                                title: 'Details/Information for DIN'
                            },
                            {
                                title: 'Declaration of DIN (If DIN is allotted already)'
                            }
                        ]
                    },
                    {
                        title: 'Registered Office – Address',
                        innerList: [
                            {
                                title: 'Address Proof – Electricity bill / Tax Paid receipt'
                            },
                            {
                                title: 'No-Objection Letter from the owner of the Property'
                            }
                        ]
                    },
                    {
                        title: 'ID & Address from Directors and Shareholders',
                        description: [
                            "Shareholders and Directors have to submit Identity Proof and Latest address proof",
                            "List of Acceptable Documents"
                        ],
                        innerList: [
                            {
                                title: 'Primary ID - Permanent Account Number (PAN)'
                            },
                            {
                                title: 'Additional ID - Aadhaar Card or Passport or Driving License or Voter Identity Card'
                            },
                            {
                                title: 'Latest Address Proof: Telephone Bill or Electricity Bill or Bank Statement or Bank Passbook with latest entries'
                            }
                        ]
                    },
                    {
                        title: 'Additional Documents',
                        description: [
                            'The following documents are required on case to case basis:'
                        ],
                        innerList: [
                            {
                                title: 'NOC for Use of Name from Trademark owner'
                            },
                            {
                                title: 'Resolution and NOC from an existing Company / LLP for user of similar names Declaration for complying'
                            },
                            {
                                title: 'Sectoral regulatory compliaces'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Company Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Business Credibitlity',
                        description: ['A limited company is the most accepted business organization in India as its structure is well known to the public.']
                    },
                    {
                        title: 'Limited Liability',
                        description: ["Like any other incorporated business, a limited company is a limited liability organization. The owner's liability is limited to the extent of shares held in the company and ends once he pays for the shares."]
                    },
                    {
                        title: 'Protection of Personal Assets to owners',
                        description: ["Since the liability of owners is limited, their personal assets are protected against business risk as the company's liability is not the owner's liability."]
                    },
                    {
                        title: 'Perpetual Existence',
                        description: ['Assets and liabilities of a company belongs to itself and do not belong to the shareholders. Hence, the company will continue to be in existence even if the owner changes']
                    },
                    {
                        title: 'Can sue and be sued',
                        description: ['A limited company is like an artificial person created by law. Like any other person, it can sue and be sued before the court of law. This means that if a company defaults, others can take legal action against the company and likewise, the company can tak']
                    }
                ]
            },
        ]
    },
    SECTION_8_COMPANY_NGO: {
        title: 'Section 8 Company Registration',
        description: 'Section 8 company or NGO company can be formed for charitable purpose after getting license from registrar of companies. These companies can be private limited or public limited and liability of members are limited by guarantee.',
        navigationContainers: [
            {
                title: 'Overview - Section 8 Company (Non-Profit Company)',
                description: 'Section 8 company or NGO company can be formed for charitable purpose after getting license from registrar of companies. These companies can be private limited or public limited and liability of members are limited by guarantee.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A company can be registered for charitable purposes with the object of not making any profits. These companies are basically called section 8 company or NGO company.",
                            "This is subject to the provisions of Section 8 of the Companies Act, 2013. Hence, these companies are generally called Section 8 companies and are formed to promote Commerce, Science, Art, Religion, Charity or other socially useful objectives.",
                            "A Section 8 Company shall not pay any dividend to its members, but apply the surplus of receipts over payments for promotion of its objectives.",
                            "These companies need not use the words Limited or Private Limited after their name and are generally registered as Guarantee Company with limited liability with or without capital. Such companies can be private or public depending on the number of persons involved.",
                            "In case of winding up of a Section 8 company, the assets remaining after clearing all debts and liabilities should not be distributed amongst members of the company. Instead, it should be given or transferred to other companies having similar objectives as may be determined by the members or the High Court in the process of winding up.",
                        ]
                    }
                ]
            },
            {
                title: 'Section 8 Company Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Place Order Online'
                    },
                    {
                        title: 'Create e-lawyering documents'
                    },
                    {
                        title: 'Apply Company Name'
                    },
                    {
                        title: "Apply for License under Sec.8"
                    },
                    {
                        title: "Incorporation Filing"
                    }
                ]
            },
            {
                title: 'Process of Section 8 Company Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Company Name Application',
                        description: [
                            "The First Step to obtain Digital Signatures and Director Identification Number for Directors and file Company Name Application",
                            "- Minimum 2 Directors and Shareholders",
                            "- PAN / Aadhaar / Address for obtaining Digital Signatures and Director Identification Number",
                            "- Application for Company Name Approval"
                        ]
                    },
                    {
                        title: 'Obtaining Licence from the Registrar of Companies',
                        description: [
                            "On Approval of Company Name, Application to be submitted for Licence under Section 8 with:",
                            "- Promoters Profile and Background",
                            "- Detailed Grounds of Application",
                            "- Projected Income and Expenditure / Assets and Liabilities for 3 years",
                            "- Memorandum and Articles of Association"
                        ]
                    },
                    {
                        title: 'Company Name Application',
                        description: [
                            "On Approval of Licence under Section 8, Application to be submitted for Company Registration",
                            "- Copy of Licence",
                            "- Declarations / Affidavits under Companies Act",
                            "- Memorandum and Articles of Association",
                            "- Address Proof of Registered Address",
                            "On approval of Application, Certificate of Incorporation shall be issued by the Registrar of Companies."
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
                        title: 'Documents for License',
                        description: [
                            'Section 8 company formation only possible after obtaining license from registrar of companies. The license can be obtained with below list of documents'
                        ],
                        innerList: [
                            {
                                title: 'List of Documents',
                                innerList: [
                                    {
                                        title: 'Profile of Promoters (E-lawyering doc)'
                                    },
                                    {
                                        title: 'Income Projection'
                                    },
                                    {
                                        title: 'Grounds of Application (e-lawyering doc)'
                                    },
                                    {
                                        title: 'INC 15 - Declaration'
                                    },
                                    {
                                        title: 'Draft Memorandum of Association'
                                    },
                                    {
                                        title: 'Draft Articles of Association'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Directors Document',
                        description: [
                            'To get Company registered, you need to provide below documents. The documents can be submitted through online. Company registration process start with applying DIN for new directors. To apply for DIN, address proof and ID proof required to be submitted'
                        ],
                        innerList: [
                            {
                                title: 'List of Documents',
                                innerList: [
                                    {
                                        title: 'Copy of PAN'
                                    },
                                    {
                                        title: 'Copy of Address Proof - Telephone Statement'
                                    },
                                    {
                                        title: 'Second ID Proof'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Registered Office Address',
                        description: [
                            'Company need registered office within 30 days from the date of registration. While filing registered office, below documents are required for approval'
                        ],
                        innerList: [
                            {
                                innerList: [
                                    {
                                        title: 'Electricity Bill Copy or Gas Bill'
                                    },
                                    {
                                        title: 'Ownership proof'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Section 8 Company Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Not for Profit',
                        description: ['Section 8 company can only be formed for the purpose for promotion of commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment and the profit can not be distributed among the members.']
                    },
                    {
                        title: 'Company Limited by Guarantee',
                        description: ['Majority of cases, section 8 company will be a company limited by guarantee not having share capital. The liability of members only arose at the time of winding up of the company.']
                    },
                    {
                        title: 'Name',
                        description: ['Section 8 company name need not end with the word "Limited" or "Private Limited".']
                    },
                    {
                        title: 'License for Section 8 company',
                        description: ['Section 8 company can only formed after getting license from Registrar of Companies. After approval of name, promoters shall file application with respective registrar of companies for license.']
                    }
                ]
            },
        ]
    },
    TRUST_REGISTRATION: {
        title: 'Trust Registration',
        description: 'To obtain the benefits of a Trust, it needs to meet certain prerequisites, and the registration process is one of the prerequisites. Are you planning to register the trust? Contact us and get the Trust registration done. We will assist you from the advisory till guidance on compliance related to trust registration.',
        navigationContainers: [
            {
                title: 'Overview - Trust Registration',
                description: 'Trust registration is a completely online process that can be created by the execution of the Trust deed. The very first requirement in the Trust registration is the Trust deed. Before, knowing the detailed process of Trust Registration it is important to know what Trust is.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A Trust is registered under The Indian Trust Act 1882 and provides for the provision related to Trust. The trust is a harmonization where the owner of the Trust transfers the property to a trustee. Here, the objective of transferring the property is to provide the benefit to a third party. The property is transferred to the trustee by the trustor along with a proclamation that the property should be held by the trustee for the beneficiaries of the trust.",
                            "To obtain the benefits of a Trust, it needs to meet certain prerequisites and the registration process is one of the prerequisites. Before registration, Trust Deed must be formed on the non-judicial stamp paper. Every state has fixed its rate on stamp duty."
                        ]
                    }
                ]
            },
            {
                title: 'Types of Trusts',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "There are two types of trusts in India: private trusts and public trusts. While private trusts are governed by the Indian trusts Act, 1882, public trusts are divided into charitable and religious trusts. The Charitable and Religious Trust Act, 1920, the Religious Endowments Act, 1863, the Charitable Endowments Act, 1890, the Bombay Public Trust Act, 1950 are some of the statutes for the enforcement of public trusts in India."
                        ],
                        innerList: [
                            {
                                title: 'Private Trust',
                                description: [
                                    "A Private trust is a trust that is constituted for the benefit of 1 or more individuals who are, or within a given time may be, definitely ascertained. Private Trusts are regulated by the Indian Trusts Act 1882. These trusts may be created inter vivos or by will."
                                ]
                            },
                            {
                                title: 'Public Trust',
                                description: [
                                    "A Public Trust is a trust which is established wholly for the benefit of Public at large. Key points for Public Trusts are given bellow:-"
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "Public trusts are basically charitable or religious trusts and are regulated by the general Law.",
                                            "The regulations of Indian Trusts Act do not apply on Public Trusts.",
                                            "Similar as the private trusts, public trusts may be established inter vivos or by will."
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'Public-Cum-Private Trusts',
                                description: [
                                    "The trusts whose part of the income may be utilized for public purposes and a part may go to a private person or persons are known as Public-cum-Private Trusts."
                                ]
                            },
                            {
                                title: 'Classification In Terms Of Motive Of Formation',
                                description: [
                                    "Recently, trusts can also be used as a vehicle for investments, such as mutual funds and venture capital funds. These trusts are governed by Securities and Exchange Board of India (SEBI). Classification in terms of motive of formation is as follows:-"
                                ],
                                innerList: [
                                    {
                                        title: 'Private Trust',
                                        description: [
                                            "Settlor creates a Trust primarily for benefit of one or more particular individuals as its Beneficiary."
                                        ]
                                    },
                                    {
                                        title: 'Public Trust',
                                        description: [
                                            "Beneficiaries are the general public or a class as a whole. It has some charitable end as its Beneficiary."
                                        ]
                                    },
                                    {
                                        title: 'Simple Trust',
                                        description: [
                                            "Trustee is just a passive depository of the Trust property. There are no active duties expected from Trustee and no directions are given to him."
                                        ]
                                    },
                                    {
                                        title: 'Special Trust',
                                        description: [
                                            "Trustee is active and acts as an agent to execute the Grantor’s wishes. This Trust is operative."
                                        ]
                                    },
                                    {
                                        title: 'Express Trust',
                                        description: [
                                            "Here, the Settlor creates a Trust over his assets either in present or upon his death. It can be either by way of a will or Trust deed."
                                        ]
                                    },
                                    {
                                        title: 'Implied Trust',
                                        description: [
                                            "It is created where some legal requirements for an Express Trust are not met, but intention on behalf of the parties is to create a Trust that is presumed to exist."
                                        ]
                                    },
                                    {
                                        title: 'Others depending on the type of object(s).'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Trust Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Select An Appropriate Name',
                        description: [
                            "The very first step while registering the Trust is to select an appropriate name for the trust. An applicant must take into consideration that the name so suggested should not come under the restricted list of names as per the provisions of the Emblems and Names Act, 1950."
                        ]
                    },
                    {
                        title: 'Drafting Of Trust Deed',
                        description: [
                            "For Trust registration, the Trust deed should be drafted. A trust deed is a document that contains all the important information related to the registration and the deed must be present before the Registrar at the time of registration."
                        ]
                    },
                    {
                        title: 'Selecting Settlers And Trustees Of Trust',
                        description: [
                            "The next step is to select the settlor and Trustees of the Trust. However, there is no specific provision with regards to the number of settlers/authors. Further, there must be a minimum of two trustees to form a Trust."
                        ]
                    },
                    {
                        title: 'Preparing Memorandum Of Association',
                        description: [
                            "For Trust registration it is important to formulate the Memorandum of Association as it represents the charter of the Trust."
                        ]
                    },
                    {
                        title: 'Paying The Requisite Fees',
                        description: [
                            "The next step is to pay a requisite fee for Trust registration."
                        ]
                    },
                    {
                        title: 'Collection Of A Copy Of Trust Deed',
                        description: [
                            "Once an applicant submits the papers, he/she can collect a certified copy of the Trust Deed within 1 week from the registrar’s office."
                        ]
                    },
                    {
                        title: 'Submission Of Trust Deed To Registrar',
                        description: [
                            "After obtaining a certified copy of the Trust Deed, submit the same with the local registrar. The Trust deed shall be submitted along with properly attested photocopies."
                        ]
                    },
                    {
                        title: 'Obtain Registration Certificate',
                        description: [
                            "After submitting the Trust Deed with the registrar, the registrar keeps the photocopy and returns the original registered copy of the Trust Deed to the applicant, and also issues the certificate within seven working days."
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
                        description: [
                            'Below-mentioned documents are required for Trust Registration-'
                        ],
                        innerList: [
                            {
                                title: 'Proof of Identity for Trustor & Trustee-Aadhaar Card, Voter ID, Passport, Driving License',
                            },
                            {
                                title: 'Address Proof of Registered Office- Copy of Certificate of Property/Utility Bills (Telephone, Water, Electricity Bill)',
                            },
                            {
                                title: 'In the case of rented property, NOC from the Landlord is required.',
                            },
                            {
                                title: 'Objective of the Trust Deed.',
                            },
                            {
                                title: 'Particulars of the Trustee and settlor (Self-attested copy Id and Address Proof along with the information related to occupation).',
                            },
                            {
                                title: 'Trust Deed on Proper Stamp Value.',
                            },
                            {
                                title: 'Photographs of Trustee and settlor.',
                            },
                            {
                                title: 'PAN Card of Trustee and settlor.',
                            }
                        ]
                    },
                    {
                        description: [
                            'In addition to that, the Trust deed contains the following information:-'
                        ],
                        innerList: [
                            {
                                title: 'Total number of trustees.',
                            },
                            {
                                title: 'The Registered address of the trust.',
                            },
                            {
                                title: 'Proposed name of the trust.',
                            },
                            {
                                title: 'Rules and regulations to be strictly followed by the Trust.',
                            },
                            {
                                title: 'Presence of settlor and 2 witnesses at the time of registration of Trust.',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Trust Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'To Involve In Charitable Activities',
                        description: ['Charitable trusts are set up with the common objective of getting involved in charitable activities while collecting certain benefits for him, his heirs, and successors.']
                    },
                    {
                        title: 'Registered Trust Avails Tax Exemptions',
                        description: ['The other main reason for setting up the registered Trust is to avail tax exemptions. Such charitable trusts are nonprofit organizations and to avail all these perquisites, the charitable trust should have a legal entity.']
                    },
                    {
                        title: 'Provides Benefits To Poor People',
                        description: ['The registered trust provides the advantage to the poor people and the public by exercising the charitable activities fairly.']
                    },
                    {
                        title: 'Compliance With Law',
                        description: ['By registering the trust, compliance would be maintained under the provisions of the Indian Trusts Act, 1882, which will directly keep the Trust safe from any legal hindrance.']
                    },
                    {
                        title: 'Preservation Of Family Wealth',
                        description: ['Trusts may be utilized to own specific assets, such as land/an interest in a family based company, which would not be suitable or practical for a settlor to split between individuals. The usage of a trust allows such individuals to benefit from the assets despite the fact that they do not own them. A trust will also assist to preserve the capital value of such assets for potential generations.']
                    },
                    {
                        title: 'Avoid Probate Court',
                        description: [
                            'As legal title of the assets surpasses from the settlor to the Trustee when they are “settled”, there is consequently no change of ownership when the settlor get dies, thus evading the need for probate of a will in terms of trust assets.',
                            'Moreover, Grants of probate is a matter of public record, while a trust is a private agreement which does not have to be registered anyplace. The use of a trust can also avoid the economic adversity sometimes undergone by a surviving spouse even as waiting for probate to be granted.'
                        ]
                    },
                    {
                        title: 'Immigration/Emigration Of Family',
                        description: ['When a person and her/his family shift to another country, it is frequently an ideal/only time to set up a trust in order to evade taxation in the destination nation, thereby protecting the family wealth & providing flexibility in its organization. Such organization requires detailed professional advice and guidance.']
                    },
                    {
                        title: 'Forced Heirship',
                        description: ['The Residents of countries with fixed laws of legacy may be able to utilize trusts to get the flexibility they offer in respect of distribution of part/all of their assets to beneficiaries who could otherwise not be permitted to benefit under the laws of their country of the residence. Such planning must be made under a detailed professional guidance from legal experts in their nation of residence/nationality.']
                    },
                    {
                        title: 'Tax Mitigation',
                        description: ['Trusts can be very effective in reducing taxation on capital and income. The trust may provide effective protection for the settlor, the beneficiaries and the trust assets from punitive taxation. A frequent use for trusts is the mitigation or avoidance of inheritance tax in the settlor’s jurisdiction although this will, naturally, be subject to appropriate tax advice being obtained.']
                    },
                    {
                        title: 'Managing Assets',
                        description: ['Trusts can be very effective in reducing taxation on capital and income. The trust may provide effective protection for the settlor, the beneficiaries and the trust assets from punitive taxation.']
                    }
                ]
            },
        ]
    },
    SOCIETY_REGISTRATION: {
        title: 'Society Registration',
        description: 'Chase the Vision for Society Registration & Have a Million Dollar Dream of Social Entrepreneurship.',
        navigationContainers: [
            {
                title: 'Overview - Society Registration',
                description: 'The piece of equipment of "society" evolved to complete the need of an organization of non-commercial character for the sustainability of repeated charitable activities like education, art, religion, culture-music, and sport, etc. Associations or societies are fashioned to help further these causes since they work on a non-profit base. The call for a legal entity is to own, possess and handle the finances and assets for the accomplishment of liberal or promotional objects, as laid behind by donors, is the result of these actions. Moreover, a society can be shaped to realize this end.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Society is an institution of persons who come together to on purpose and co-operated on mutual consent to attain a universal objective. Society Registration Act 1860 governs the procedures of action of a society registered in India. Members of the community shall preserve the mutual thoughtfulness and follow the guidelines of this Act to keep up the harmony to increase and add to social welfare."
                        ],
                        innerList: [
                            {
                                title: "The Purpose for which Societies are Formed",
                                description: [
                                    "Societies are regulated for the promotion of literature, science or the fine arts and the diffusion of useful knowledge/political education or charitable purposes. Section 20 of the principal Act specifies the following objectives for which society registration can be done under the Act:"
                                ],
                                innerList: [
                                    {
                                        description: ["Funding for charitable assistance"]
                                    },
                                    {
                                        description: ["Formation of Military orphan funds"]
                                    },
                                    {
                                        description: ["Societies recognized at the General Presidencies of India"]
                                    },
                                    {
                                        description: ["Endorsement of Science,"]
                                    },
                                    {
                                        description: ["Literature,"]
                                    },
                                    {
                                        description: ["Fine Arts,"]
                                    },
                                    {
                                        description: ["commands or diffusion of useful knowledge,"]
                                    },
                                    {
                                        description: ["Dissemination of political education,"]
                                    },
                                    {
                                        description: ["groundwork or maintenance of libraries or reading rooms,"]
                                    },
                                    {
                                        description: ["Public museum and galleries of paintings,"]
                                    },
                                    {
                                        description: ["Works of Act,"]
                                    },
                                    {
                                        description: ["Collections of innate history,"]
                                    },
                                    {
                                        description: ["Mechanical and philosophical inventions,"]
                                    },
                                    {
                                        description: ["Instruments,"]
                                    },
                                    {
                                        description: ["Designs"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Society Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "Connect to concerned state authority for society registration online as the state executives deal with society registration.",
                value: [
                    {
                        description: [
                            "The name of the society shall be different and not resembling the certified society as per the guidelines of the Indian Society Act. The name shall be commonly agreed and admitted by all the members. No title shall be prevented under statutory provisions of any act nor shall it violate a requirement of any law."
                        ]
                    },
                    {
                        description: [
                            "After deciding the title, the society shall have a memorandum of association that outlines the rules and regulations to be adhered to by the society and its members. The protocol shall be signed and attested by the members along with witness by oath commissioner, notary and first-class magistrate with their stamp and complete address."
                        ]
                    },
                    {
                        description: [
                            "Apply accompanying with the below-stated documents (Two copies of each document) to the Registrar of the society of the concerned state with authority for society registration. Authority shall sign the first copy as confirmation and shall return the second copy to the applicant on permission. After receipt of the request, the Registrar shall examine the demand for its accuracy and on support shall allot Certificate of Registration by designating registration number on it."
                        ]
                    }
                ]
            },
            
            {
                title: 'Checklist of Society Registration',
                navigationTitle: 'Checklist',
                containerKey: 'checklist',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        innerList: [
                            {
                                title: "Covering letter entreating for society registration stating in the body of message various records annexed to it."
                            },
                            {
                                title: "Memorandum of Association in copy along with a verified copy."
                            },
                            {
                                title: "In matters of existing places of worship like a temple, masjid, gurdwara, etc. sufficient documentary proof authenticating legal competence and control of applicant society over such sites should be filed."
                            },
                            {
                                title: "Affidavit valued by President or Secretary of the service."
                            },
                            {
                                title: "Documentary proof of house tax receipt, rent receipt of the registered office of a society or 'No Objection Certificate' from the keeper of the society."
                            },
                            {
                                title: "PAN identification of all the members of the society"
                            },
                            {
                                title: "Residency proof of members such as 'Aadhar card/electricity bill/bank statement/gas bill' etc"
                            },
                            {
                                title: "List of all the members like name, address, contact details, etc."
                            },
                            {
                                title: "Copy of rules & regulations of society,"
                            },
                            {
                                title: "Minutes of the previous meeting of society confirming the society registration."
                            },
                            {
                                title: "Declaration by the president of the society stating his willingness and competency to hold the post of president"
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Society Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Each certified society procures legal status."
                    },
                    {
                        title: "Registered society can legitimately open its current account"
                    },
                    {
                        title: "Can get delegation and regards under the Income Tax Act"
                    },
                    {
                        title: "Certified society gets the legal status that is necessary for statutory vesting of the wealth of society"
                    },
                    {
                        title: "Registered society gets legal identification before all forums and authorities"
                    },
                    {
                        title: "Members of the registered society are constitutionally bound to the same extent as if they had signed the Memorandum"
                    },
                    {
                        title: "A certified society can sue or sued."
                    }
                ]
            }
        ]
    }
}