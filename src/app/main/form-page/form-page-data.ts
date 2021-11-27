import { FormPageContainerType, FormPageScreenCode } from "./form-page-constants";
import { FormPageScreenWiseDataModel } from "./form-page-interface";

export const FormPageScreenTitleMap: { [key: string]: string } = {
    PARTERSHIP_FIRM: 'Partership Firm',
    LLP: 'Limited Liability Partnership (LLP)',
    OPC: 'One Person Company (OPC)',
    PVT_LTD: 'Private Limited Company Registration',
    LTD_COMPANY: 'Public Limited Company Registration',
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
    PAN_APPLICATION: 'PAN Application',
    TAN_APPLICATION: 'TAN Application',
    COPYRIGHT: 'Copyright',
    ADD_DIRECTOR: 'Add a Director',
    REMOVE_DIRECTOR: 'Remove a Director',
    CHANGE_IN_REGISTRED_OFFICE: 'Change in Registered Office',
    REGISTERED_OFFICE_CHANGE: 'Registered Office Change',
    MOA_AMENDMENT: 'MOA Amendment',
    CHANGE_IN_SHAREHOLDING: 'Change in Shareholding',
    CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED: 'Conversion from LLP to Private Limited',
    ADD_REMOVE_PARTNER: 'Add/Remove a partner',
    CHANGE_IN_LLP_AGREEMENT: 'Change in LLP Agreement',
    CONVERSION_FROM_PARTNERSHIP_TO_LLP: 'Conversion from Partnership to LLP',
    CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP: 'Conversion from Private Limited to LLP',
    ITR_FILING: 'Income Tax Return Filing',
    TDS_RETURN_FILING: 'TDS Return Filing',
    INCOME_TAX_ADVISORY: 'Income Tax Advisory',
    GST_RETURN_FILING: 'GST Return Filing',
    GST_ADVISORY: 'GST Advisory',
    COMPANY: 'Annual Compliances for Private Limited Company',
    ROC_LLP: 'Annual Compliance for LLP',
    PF: 'Provident Fund',
    ESIC: 'Employee State Insurance',
    PROFESSIONAL_TAX: 'Professional Tax Registration',
    CLRA: 'CLRA',
    ALTERNATIVE_INVESTMENT_FUND_REGISTRATION: 'Alternative Investment Fund Registration',
    MERGERS_AND_ACQUISITIONS: 'Mergers and Acquisitions',
    NBFC_REGISTRATION: 'Non-banking financial company (NBFC) Registration',
    NBFC_TAKEOVER: 'Non-banking financial company (NBFC) Takeover',
    FFMC_LICENSE: 'FFMC License',
    NBFC_COLLABORATION: 'Non-banking financial company (NBFC) Collaboration',
    MICROFINANCE_COMPANY_REGISTRATION: 'Microfinance Company Registration',
    HOUSING_FINANCE_COMPANY_REGISTRATION: 'Housing Finance Company Registration',
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: 'NBFC Account Aggregator License',
    PREPAID_WALLET_LICENSE: 'Prepaid Wallet License',
    PEER_TO_PEER_LENDING_LICENSE: 'Peer to Peer Lending License',
    PAYMENT_BANK_LICENSE: 'Payment Bank License',
    PAYMENT_GATEWAY_LICENSE: 'Payment Gateway License',
    FEMA_COMPLIANCES: 'Foreign Exchange Management Act (FEMA) Compliances',
    PROPRIETORSHIP_REGISTRATION: 'Proprietorship Registration',
    HUF: 'HUF'
};

export const FormPageScreenDescriptionMap: { [key: string]: string } = {
    PARTERSHIP_FIRM: 'A partnership is a special type of contract and is a relation between two or more persons who have agreed to share profits of a business run by all or any one of them acting for all. The essence of a partnership is a contract between partners. It is mandatory for partners to share profits among themselves.',
    LLP: "Limited Liability Partnership (LLP) is a hybrid form of incorporated business structure with 'Limited Liability' and features of a 'Partnership'. Register your LLP from the house of First LLP* in India.",
    OPC: "One Person Company (OPC) is a new concept in India from 2013. A Single Person, who is an Indian National and Resident in India can incorporate a Limited Company. CompaniesInn provides cost effective OPC Registration with India’s First and State of the Art E-Lawyering Process.",
    PVT_LTD: "Company Registration web-based filing. Pvt Ltd Company Registration is the most used structure registration in India. Private Limited Company in India is registered under the Companies Act 2013 with limited liability. Get your company registered with the help of Artificial Intelligence and the power of e-Lawyering from CompaniesInn.",
    LTD_COMPANY: 'Incorporating a Public Company will provide you security & enjoys far more credibility than other business forms. Count on Corpbiz, and allow us to assist you in Registering Public Limited Company seamlessly in India!',
    SECTION_8_COMPANY_NGO: 'Section 8 company or NGO company can be formed for charitable purpose after getting license from registrar of companies. These companies can be private limited or public limited and liability of members are limited by guarantee.',
    NIDHI_COMPANY: 'Nidhi Company',
    PRODUCER_COMPANY: 'Producer Company',
    TRUST_REGISTRATION: 'To obtain the benefits of a Trust, it needs to meet certain prerequisites, and the registration process is one of the prerequisites. Are you planning to register the trust? Contact us and get the Trust registration done. We will assist you from the advisory till guidance on compliance related to trust registration.',
    SOCIETY_REGISTRATION: 'Chase the Vision for Society Registration & Have a Million Dollar Dream of Social Entrepreneurship.',
    MSME_UDYAM: 'MSME Registration is a registration for enterprises are reaping various benefits out of it. MSME Registration opens the new prospect of opportunities for the enterprises registered under it. Are you planning to get your enterprise registered under MSME? Contact us and get MSME Registration done!',
    IEC: 'IEC Registration is required to be obtained by anyone willing to start an import/export business in India. IEC is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT) online.',
    STARTUP_REGISTRATION: 'Under this scheme the government has taken several vital steps for building a robust startup ecosystem and making India a country of job creators instead of job seekers. Department for Industrial Policy and Promotion (DPIIT) manages the programs under Startup India Scheme.',
    TRADEMARK: 'A trademark can be defined as the unique identity that makes your company, product, or service stand out from the rest.',
    GST_REGISTRATION: 'Goods and Service (GST) is a single and comprehensive tax on the supply of goods and services across India, right from the manufacturer to the Consumer.',
    PAN_APPLICATION: 'Permanent Account Number (PAN) is the primary identity of any individual or business entity in India. Any person carrying business must apply for PAN within 30 days of its establishment.',
    TAN_APPLICATION: 'Tax Account Number is used for deducting tax or collecting tax from a source in prescribed cases. Every person required to deduct TDS and collect TCS must obtain TAN first.',
    COPYRIGHT: 'Registering for copyright is important because it makes you the legal owner of the rights over the work. You then have control over communicating it to the public, reproducing rights, any adaptations or translations of the works.',
    ADD_DIRECTOR: 'It is possible to add or remove a director from the company at any time. While the articles of incorporation should have provisions allowing it, the Articles of Association and Companies Act provisions dictate how and who can be appointed as a new director.',
    REMOVE_DIRECTOR: 'It is possible to add or remove a director from the company at any time. There are different reasons why a director is removed and there are three different procedures based on the reason.',
    CHANGE_IN_REGISTRED_OFFICE: 'Section 12 of the Companies Act 0f 2013 mandates all companies or LLPs to have a registered office at the time of or within 30 days of incorporation. The registered office address of a company or LLP is the principal place of business and all official correspondence from the Ministry of Corporate Affairs (MCA) is sent to the mentioned address only. Therefore, any change of address to the registered office should be intimated to the RoC or MCA.',
    REGISTERED_OFFICE_CHANGE: 'Promoters of the company decide the location and place of the registered office. Once registered office is declared via filling INC 22, any changes in the registered office of the company is intimated to the ROC.',
    MOA_AMENDMENT: 'MOA Amendment',
    CHANGE_IN_SHAREHOLDING: 'Change in Shareholding',
    CONVERSION_FROM_LLP_TO_PRIVATED_LIMITED: 'Conversion from LLP to Private Limited',
    ADD_REMOVE_PARTNER: 'Add/Remove a partner',
    CHANGE_IN_LLP_AGREEMENT: 'Change in LLP Agreement',
    CONVERSION_FROM_PARTNERSHIP_TO_LLP: 'Conversion from Partnership to LLP',
    CONVERSION_FROM_PRIVATE_LIMITED_TO_LLP: 'Conversion from Private Limited to LLP',
    ITR_FILING: 'ITR Filing is a mandatory process which has to be followed by the taxpayer for multiple reasons for instance, maintenance of the financial records and for availing loan.',
    TDS_RETURN_FILING: 'Any individual or entity making a payment is required to deduct TDS if the payment exceeds a prescribed threshold limit at the rates prescribed by the tax department.',
    INCOME_TAX_ADVISORY: 'Tax is a pivot to most business decisions and, at times, gets into a tussle with commercial considerations. It is hence, imperative to maintain the right balance between the two in order to maximize stakeholder value.',
    GST_RETURN_FILING: 'Goods and Service Tax law now governs the major portion of the indirect tax system in India.',
    GST_ADVISORY: 'Goods and Service Tax (GST), one of the major tax reforms in India, finally became a reality when it was introduced in July 2017. Given the magnitude of the change, it comes with its own set of challenges and complexities. The change is not only in the law but also an attempt to infuse technology for reporting requirements.',
    COMPANY: 'A Private Company is an entity enjoying a separate identity which requires maintaining its active status through the regular filing with MCA. For every company, it is compulsory to file an annual return and audited financial statements with MCA for every financial year. The RoC filing is mandatory irrespective of the turnover, whether it is zero or in crore.',
    ROC_LLP: 'A Limited Liability Partnership enjoys a separate status. Thus, an organization needs to maintain its active status by regularly filing with the Ministry of Corporate Affairs (MCA). Annual compliance filing is mandatory for any LLP, whether having a business or not.',
    PF: 'The Act extends to the whole of India and is applicable to all establishments with 20 or more employees. The employer is required to file returns in prescribed forms or using Form 5/10/12A/3A or 6A for provident contributions declared or made.',
    ESIC: 'Applies to all factories and establishments with 10 or more workers except where the establishment is engaged in the Construction Sector.',
    PROFESSIONAL_TAX: 'Professional Tax is a tax collected by State Governments from the professionally occupied business entities. A person earning income from salary or professions such as Chartered Accountants, Company Secretaries, Lawyers, etc. is required to pay professional tax.',
    CLRA: 'CLRA',
    ALTERNATIVE_INVESTMENT_FUND_REGISTRATION: 'Alternative investment funds mean establishment which is privately pooled investment. AIF collect Funds from investors to provide return.',
    MERGERS_AND_ACQUISITIONS: 'Merger is the collaboration of two or more companies to form a new company. The acquisition, on the other hand, is defined as a process of selling one company to another. M & A have multiple strategic benefits for the concerned entities such as new market opportunities, increased profitability, operational excellence, etc.',
    NBFC_REGISTRATION: 'Non-banking financial company (NBFC) is a company registered under the Companies act 2013 that requires the approval of the RBI before rendering the financial services. It is considered as one of the fastest growing business.',
    NBFC_TAKEOVER: 'A Non-Banking Financial Company (NBFC) is a form of business entity registered under The Companies Act 1956 or The Companies Act 2013. NBFCs are incorporated to engage in the business of financial lending and other financial functions.',
    FFMC_LICENSE: 'All the Individuals or Business Entities who want to deal in Foreign Currencies need to obtain FFMC License from the Apex Bank, i.e., RBI. Such a license gives the holders the authority to purchase foreign exchange from NRIs (Non Resident Indians) and sell the same for business and travel purposes to the Indians visiting abroad.',
    NBFC_COLLABORATION: 'NBFC Collaboration is a sort of association where NBFC License holders partner with the Fintech companies and banks intending to raise funds and enhance financial inclusion in the country. In simple words, collaboration means joining hands for a common set of objectives.',
    MICROFINANCE_COMPANY_REGISTRATION: 'The term Microfinance Company (MFC) basically means an entity that is engaged in providing financial assistance and help to the rural people, low income strata, and the backward and undeveloped section of the society.',
    HOUSING_FINANCE_COMPANY_REGISTRATION: 'According to section 29A of the National Housing Bank Act, 1987 it is mandatory for each proposed housing finance organization to secure an authentication of enrolment from NHB before commencing activities in the housing finance sector.',
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: 'Account Aggregators are such kind of entities which acts as a consent broker that enables sharing of the financial data among the financial institutions in the financial sector.',
    PREPAID_WALLET_LICENSE: 'Prepaid Payment Instruments, otherwise called PPIs, works as a payment instruments which encourages the products and ventures transactions directed by the shopper, including financial administrations, settlement offices and so forth against the worth put away on such instruments.',
    PEER_TO_PEER_LENDING_LICENSE: 'Peer to Peer (P2P) is essentially an online platform which works with the motive of raising loans which are to be repaid with intrigue. The borrower may either be an individual or a lawful entity. The online platform may set the financing cost to be charged on the loans or it might be chosen commonly between the parties. Peer to Peer lending has become a primary and comfortable choice of most of the start-ups and entrepreneurs during the initial days of their business when they are looking for venture funding.',
    PAYMENT_BANK_LICENSE: 'The concept of Payment Bank is introduced by the Reserve Bank of India (RBI). The maximum deposit amount to these banks is currently limited to INR 1 lakh for each customer, though there are chances that this amount will be expanded further. Payment Bank operates both the current as well savings account. Those banks who have payment bank license can also offer services like debit cards, internet, mobile banking and furthermore ATM cards.',
    PAYMENT_GATEWAY_LICENSE: 'As we are aware of the fact that the popularity of online shopping in India has increased immensely due to the benefits of ease and flexibility offered by this platform. The term Payment Gateway denotes a financial service that is provided by way of an e-commerce application service provider.',
    FEMA_COMPLIANCES: 'A need emerges with the Corporate to watch out for outside trade exchanges, in the setting of sectoral tops, investment tops, to go around from the enormous penalties. FEMA compliance plays an essential role in the growth and success of various sectors in India. The purpose of introducing the Foreign Exchange Management Act, 1999 (FEMA) is to smooth external trade, maintaining a healthy foreign exchange market in India, promote the importance of balance payments.',
    PROPRIETORSHIP_REGISTRATION: 'Proprietorship is a business concern owned and operated by an individual. Proprietorship is nothing but the Individual carrying the business himself.',
    HUF: 'HUF'
};

export const FormPageScreenWiseData: { [key: string]: FormPageScreenWiseDataModel } = {
    LTD_COMPANY: {
        title: FormPageScreenTitleMap['LTD_COMPANY'],
        description: FormPageScreenDescriptionMap['LTD_COMPANY'],
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
        title: FormPageScreenTitleMap['PARTERSHIP_FIRM'],
        description: FormPageScreenDescriptionMap['PARTERSHIP_FIRM'],
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
        title: FormPageScreenTitleMap['PROPRIETORSHIP_REGISTRATION'],
        description: FormPageScreenDescriptionMap['PROPRIETORSHIP_REGISTRATION'],
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
        title: FormPageScreenTitleMap['LLP'],
        description: FormPageScreenDescriptionMap['LLP'],
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
        title: FormPageScreenTitleMap['OPC'],
        description: FormPageScreenDescriptionMap['OPC'],
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
        title: FormPageScreenTitleMap['PVT_LTD'],
        description: FormPageScreenDescriptionMap['PVT_LTD'],
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
        title: FormPageScreenTitleMap['SECTION_8_COMPANY_NGO'],
        description: FormPageScreenDescriptionMap['SECTION_8_COMPANY_NGO'],
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
        title: FormPageScreenTitleMap['TRUST_REGISTRATION'],
        description: FormPageScreenDescriptionMap['TRUST_REGISTRATION'],
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
        title: FormPageScreenTitleMap['SOCIETY_REGISTRATION'],
        description: FormPageScreenDescriptionMap['SOCIETY_REGISTRATION'],
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
    },
    NBFC_REGISTRATION: {
        title: FormPageScreenTitleMap['NBFC_REGISTRATION'],
        description: FormPageScreenDescriptionMap['NBFC_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - NBFC Registration',
                description: 'Non-banking financial company (NBFC) is a kind of financial institution which provides financial services to individuals as well as to business entities. Such financial services similar to that of the banks but it doesn’t necessitate banking license but such company owns NBFC License. NBFCs act as an alternative to the banks as they provide financial solutions to the unorganized part of the society.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        innerList: [
                            {
                                title: 'Regulated Authority Of NBFC',
                                description: [
                                    'The Reserve Bank of India (RBI) formulates rules & regulations for NBFCs therefore license from RBI is required for starting NBFC in India as per Section 45-IA of the RBI Act, 1934. The RBI is authorized to regulate NBFCs by ensuring that they are complying with the prescribed rules & regulations.'
                                ]
                            },
                            {
                                title: 'Principal Business Requirement For NBFC',
                                description: [
                                    'The principal business of NBFCs is to provide financial services which involves lending, investments in shares, stocks, bonds, debentures, leasing, hire-purchase, P2P Market Place lending business, financial information service provider (NBFC-AA) insurance business, chit business or involved in the receiving of deposits under any scheme or arrangement. Besides this, following below mentioned conditions must be fulfilled in order to continue NBFC License:'
                                ],
                                innerList: [
                                    {
                                        description: [
                                            'Total Assets comprises more than 50% financial assets',
                                            'More than 50% of the gross income should be generated from financial assets'
                                        ]
                                    }
                                ]
                            },
                            {
                                title: 'Restricted Activities',
                                innerList: [
                                    {
                                        description: ['Agricultural Activity']
                                    },
                                    {
                                        description: ['Industrial Activity']
                                    },
                                    {
                                        description: ['Sale / Purchase of Goods and Services']
                                    },
                                    {
                                        description: ['Sale / Purchase of construction of immovable property']
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Types of NBFCs',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "NBFCs are classified into two types:"
                        ],
                        innerList: [
                            {
                                title: 'On The Basis Of Liabilities',
                                description: [
                                    "All NBFCs – ND whose asset size is Rs. 500 Crore and more as per the last audited balance sheet is considered as Systemically Important NBFC (NBFC-ND-SI).",
                                    "Asset size of the group companies to be clubbed",
                                    "NBFC-ND-SI has to follow the policies prescribed by RBI mandatorily and exempt from Credit Concentration Norms.",
                                    "NBFC-ND-Non SI is exempt from observing Prudential Norms, 2015 (except Annual Certificate)"
                                ]
                            },
                            {
                                title: 'On The Basis Of Activities',
                                innerList: [
                                    {
                                        title: 'NBFC-Investment And Credit Company (NBFC-ICC)',
                                        description: [
                                            "It is a kind of NBFC which deals with the lending and investment activities. Previously there were three categories which were later merged into one to provide greater operational flexibility.",
                                            "[Asset Finance Company + Loan Company + Investment Company = Investment and Credit Company]"
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Infrastructure Finance Company (NBFC-IFC)',
                                        description: [
                                            "This type of financial institutions is primarily engaged in providing infrastructure loans."
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Systemically Important Core Investment Company (CIC-ND-SI)',
                                        description: [
                                            "Its activities are mainly involved in investment in equity shares, preference shares, debt or loans of group companies."
                                        ]
                                    },
                                    {
                                        title: 'Infrastructure Debt Fund-NBFC (IDF-NBFC)',
                                        description: [
                                            "Activities of NBFC-IDF are mainly concerned with facilitation of flow of long-term debt into infrastructure projects."
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Micro Finance Institution (NBFC-MFI)',
                                        description: [
                                            "NBFC-MFI is mainly formed to provide credit to economically disadvantaged groups."
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Factor',
                                        description: [
                                            "Their main activity is concerned with acquisition of receivables of an assignor or extending loans against the security interest of the receivables at a discount."
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Non-Operative Financial Holding Company (NOFHC)',
                                        description: [
                                            "Facilitation of promoters/ promoter groups in setting up new banks"
                                        ]
                                    },
                                    {
                                        title: 'Mortgage Guarantee Company (MGC)',
                                        description: [
                                            "Undertaking of mortgage guarantee business"
                                        ]
                                    },
                                    {
                                        title: 'NBFC-Account Aggregator (NBFC-AA)',
                                        description: [
                                            "Collecting and providing information about a customer’s financial assets in a consolidated, organized and retrievable manner to the customer or others as specified by the customer."
                                        ]
                                    },
                                    {
                                        title: 'NBFC–Peer To Peer Lending Platform (NBFC-P2P)',
                                        description: [
                                            "It provides an online platform to bring lenders and borrowers together to help mobilize funds"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'NBFC Registration Procedure',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        description: [
                            "Hire experienced NBFC registration consultant who is having at least 10 year’s experience and having a team of experienced professionals like CA, CS, lawyers and senior bankers."
                        ]
                    },
                    {
                        description: [
                            'The proposed name of the company must include Finance, FinServ, Final, Investment, Capital, Fintech, and Leasing etc.'
                        ]
                    },
                    {
                        description: [
                            'Register a Private Limited or Public company'
                        ]
                    },
                    {
                        description: [
                            'Plan your Registered office, City and Area of Operations'
                        ]
                    },
                    {
                        description: [
                            'Obtain certificate of Incorporation from Registrar of Companies'
                        ]
                    },
                    {
                        description: [
                            'Deposit Net Owned Funds in bank account opened for company'
                        ]
                    },
                    {
                        description: [
                            'Documentation for obtaining NBFC license'
                        ]
                    },
                    {
                        description: [
                            'Drafting of Business Plan for the next 5 years consisting:',
                            'a. Executive Summary',
                            'b. Product Plan',
                            'c. Lending Model',
                            'd. Risk Model',
                            'e. Peer Analysis',
                            'f. SWOT Analysis',
                            'g. Financial Projections'
                        ]
                    },
                    {
                        description: [
                            'Apply for registration with RBI under RBI Act, 1934.'
                        ]
                    },
                    {
                        description: [
                            'Applicant Company has to file an online application with the RBI on its official website.'
                        ]
                    },
                    {
                        description: [
                            'After this, an applicant will get a reference number (CARN) to facilitate inquiry in the future.'
                        ]
                    },
                    {
                        description: [
                            'After this, it is required to submit the duplicate hard copies to the concerned regional office of RBI.'
                        ]
                    },
                    {
                        description: [
                            'The regional office shall check the accuracy of all submitted documents.'
                        ]
                    },
                    {
                        description: [
                            'The regional office will send the application for NBFC registration to the central office.'
                        ]
                    },
                    {
                        description: [
                            'The central office of RBI grants NBFC registration only when applicant company fulfills prescribed requirements under section 45-IA.'
                        ]
                    },
                    {
                        description: [
                            'NBFC must commence its business within 6 months from the date of Certificate of Registration'
                        ]
                    }
                ]
            },
            {
                title: 'Pre-requisites for NBFC Registration',
                navigationTitle: 'Pre-requisites',
                containerKey: 'prerequisites',
                type: FormPageContainerType.CARD_LIST,
                description: 'For NBFC registration, below mentioned conditions must be fulfilled as per Section 45-IA of the RBI Act, 1934:',
                value: [
                    {
                        title: 'Company Registration',
                        description: ['An applicant must be a company registered under companies Act 1956 or Companies Act 2013.']
                    },
                    {
                        title: "Director’s Experience",
                        description: ['1/3rd Directors of the applicant company must possess experience in finance field in order to apply for NBFC license.']
                    },
                    {
                        title: 'Five Year Business Plan',
                        description: ['An applicant company needs to draft detailed business plan for the next five years.']
                    },
                    {
                        title: 'Minimum NOF (Net Owned Fund) Requirement',
                        description: ['The applicant company must possess minimum NOF of Rs. 2 Cr & Tax must be paid on it. However, based on increase in prices, real GDP and regulatory judgment, the entry point norms proposed to be revised from ₹2 crore to ₹20 crore. Applicable immediately for new registration however, existing may be given time, say 5 years.']
                    },
                    {
                        title: 'Qualify Capital Test',
                        description: ['The RBI undertakes quality of capital test to check that invested capital is free non-compliance with the prescribed laws.']
                    },
                    {
                        title: 'Credit History',
                        description: ['The credit score of the company, directors & its shareholders must be fine and they must have not defaulted loan re-payment deliberately to banks or to NBFCs.']
                    },
                    {
                        title: 'Quality Of Capital',
                        description: ['An applicant company must have complied with the mandatory compliances.']
                    },
                    {
                        title: 'FEMA Compliances',
                        description: ['In case of involvement of foreign investment, an applicant company must have complied with the FEMA Act. 100% FDI is allowed from FATF member countries.']
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
                        innerList: [
                            {
                                title: 'Certified copy of COI (Certificate of Incorporation) / MOA / AOA',
                            },
                            {
                                title: 'Net Worth Certificate of Directors, Shareholders & Company',
                            },
                            {
                                title: 'Educational qualification documents of the proposed directors',
                            },
                            {
                                title: 'Highest Experience certificates',
                            },
                            {
                                title: 'Directors & Shareholders business profile',
                            },
                            {
                                title: 'Credit report of directors & shareholders',
                            },
                            {
                                title: 'KYC details, PAN of the company, GST number, address proof of the company',
                            },
                            {
                                title: 'Bank account details of the company [Rs. 2 Cr must have deposited as NOF]',
                            },
                            {
                                title: 'Audited balance sheet of last 3 years or from the date of incorporation',
                            },
                            {
                                title: 'Related Party Disclosures',
                            },
                            {
                                title: 'Income tax Returns',
                            },
                            {
                                title: 'Banker’s Report confirming no lien on fixed deposit',
                            },
                            {
                                title: 'Related Party DisclosuresFormat of board resolution regarding NBFC registration',
                            },
                            {
                                title: 'Underwriting model - Detailed action plan of next 5 years including Fair Practice Code and risk assessment policy',
                            },
                            {
                                title: 'Business Structure & Loan Structure',
                            },
                            {
                                title: 'IT Policy',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of NBFC Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Provides Loan Facilities To Needy',
                        description: ['NBFC offers various services such as loan and credit facilities, retirement planning, currency exchange, money market, underwriting, and various related activities.']
                    },
                    {
                        title: 'Offer Wealth Management Services',
                        description: ['NBFCs can offer services related to wealth management such as managing portfolios of shares and stocks.']
                    },
                    {
                        title: 'Services Related To Underwriting',
                        description: ['NBFCs can underwrite stock and shares and related liabilities. Also, NBFC provides a hassle-free option to the customers for availing of the quick loan.']
                    },
                    {
                        title: 'Last Resort Of Borrowing',
                        description: ['NBFCs offers services where banks are not offering. NBFCs are more profitable because of their lower costs and this as a result helps in providing cheaper loans to the customer.']
                    },
                    {
                        title: 'Trading In Money Market',
                        description: ['NBFCs serves the benefits of trading in money market instruments.']
                    },
                    {
                        title: 'Quick In Functioning',
                        description: [
                            'NBFC performs in such a quick way as it sets the banks apart. It is easier to get a loan from NBFCs as compared to the Banks. As the banks have strict regulations and more paperwork as compared to NBFCs.'
                        ]
                    },
                    {
                        title: 'Provides Multiple Choices Reaching Audience',
                        description: ['Because of the technological advancement, NBFCs are offering multiple choices to reach the larger audience at a quicker step. NBFC covers both the large businessperson and small sectors by providing them multiple choices to avail themselves the credit facilities.']
                    },
                    {
                        title: 'Strong Regulations And Compliance',
                        description: ['Due to the strong regulation and compliance system, it serves the best authenticity and trust among the society.']
                    },
                    {
                        title: 'Allowed FDI',
                        description: ['Under NBFC, up to 100% Foreign Direct Investment is also an amazing benefits of its registration. NBFCs are the largest propellants of initiating finance into the country. Also, the financing process is faster and easier as compared to Banks.']
                    },
                    {
                        title: 'Low Operation Cost',
                        description: ['Having specifically built innovative and low-cost business models that are driven by a technology platform and low operating expenses, it is evident that the room for growth is wide-open.']
                    },
                    {
                        title: 'Protection By Law For Recovery Of Loan',
                        description: ['NBFCs is allowed to use SARFAESI law for minimum loan size for debt recovery from the existing level.']
                    },
                    {
                        title: 'Loans To People Having A Poor Credit Score',
                        description: ['Banks usually check the credit score while offering loan facilities. In case of a poor credit score, the bank rejects the loan application. However, NBFCs offers loan to people having less credit score.']
                    }
                ]
            }
        ]
    },
    NBFC_TAKEOVER: {
        title: FormPageScreenTitleMap['NBFC_TAKEOVER'],
        description: FormPageScreenDescriptionMap['NBFC_TAKEOVER'],
        navigationContainers: [
            {
                title: 'Overview - NBFC Takeover',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A Non-Banking Financial Company (NBFC) is a form of business entity registered under The Companies Act 1956 or The Companies Act 2013. NBFCs are incorporated to engage in the business of financial lending and other financial functions. They are defined under section 45-IA of the RBI Act 1934. Such companies need to obtain a Certificate of Registration (COR) from RBI in order to commence financial business activity. This process is also known as NBFC registration or obtaining of NBFC license from RBI. Another way to commence such business activity is to go for the NBFC Takeover process.",
                            "NBFC takeover is a process of acquiring a functioning RBI registered NBFC and not going for the NBFC registration process from the initial stage. NBFC takeover is a suitable but complex process.",
                            "This process is suitable for individuals or corporates who want to opt for a speedy and confirmed functioning of their financial business.",
                            "This process is complex and goes through multiple stages, requiring the highest level of professionalism and diligent working. At Corpbiz, we have 150+ professionals, including CA, CS, CMA, and Lawyers who are proficient in RBI registrations and NBFC takeover Procedure. We can serve your NBFC takeover requirement in less than 60 days."
                        ],
                        innerList: [
                            {
                                title: 'What Business activities can you do after the NBFC takeover?',
                                description: [
                                    'Financial services that NBFC offers are asset financing, acquisition of shares, debentures, securities, bonds, and stocks, granting loans as well as advances, and investing in various commercial securities.',
                                    "NBFC is not only limited to previously mentioned points but also extends to providing credit facilities and working capital loans."
                                ]
                            },
                            {
                                title: 'How NBFC Takeover works?',
                                description: [
                                    'The Non-Banking Financial Company Takeover Revolves Around Two Entities'
                                ],
                                innerList: [
                                    {
                                        title: 'Target Company',
                                        description: [
                                            "An acquirer company is keeping its eyes on a 'to be acquired' company known as the Target Company."
                                        ]
                                    },
                                    {
                                        title: 'Acquirer Company',
                                        description: [
                                            "A company that has got the ability to acquire the target company is renowned as Acquirer Company."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Types of NBFC Takeover',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "NBFC Takeover Can Be Of Two Types"
                        ],
                        innerList: [
                            {
                                title: 'Hostile Takeover',
                                description: [
                                    "The name hostile takeover is itself indicating this term. A Hostile takeover is a type of takeover in which the acquirer or acquiring company uses different tactics to gain ownership of the target company without the nod of the board of directors associated with that target company.",
                                    "During such kinds of takeovers, entities get involved in reaching out to shareholders by putting a tender offer on their table, and they even don't hesitate to indulge in a proxy fight to replace the management to get the acquisition accepted. For acquirers, the target company's board of directors' support and approval don't matter at all."
                                ]
                            },
                            {
                                title: 'Friendly Takeover',
                                description: [
                                    "A friendly takeover is a scenario that depicts the story of the acquisition of a target NBFC company by another company peacefully as this takeover is subject to the assistance and approval of the management and board of directors. The shareholders of the target company's say yes to the deal only if they feel that the price per share is better as compared to the current market price.",
                                    "The benefits of the friendly takeover are not only limited to the better per-share price, but it's more and beyond that. The target companies get opportunities to fuel their business growth. Furthermore, they can explore different spheres of the market as well. In brief, a friendly takeover is all about mutual consent."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Procedure for NBFC Takeover in India',
                navigationTitle: 'Steps',
                containerKey: 'process',
                description: 'The procedure for NBFC takeover is as follows;',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: '1. Memorandum Of Understanding',
                        description: [
                            "The procedure for Non-Banking Financial Company Takeover triggers off from the Memorandum of Understanding (MOU) to get signed with the proposed company.",
                            "It defines that both of the companies are ready to move into a takeover agreement. The Director of the acquirer company and the target company come on board and sign the MOU.",
                            "Memorandum of Understanding touches upon the needs and responsibilities of all the companies. At the time when MOU gets approved, the acquirer company pays the token money to the target company."
                        ]
                    },
                    {
                        title: '2. Prior Approval Requirement Of RBI Is The Most Crucial Step If Required'
                    },
                    {
                        title: '3. Publish The Public Notice Bilingually',
                        description: [
                            'The public notice should be published in two regional languages. The first language should be English, and the second, in regional language, should be released within 30 days of receiving RBI clearance.'
                        ]
                    },
                    {
                        title: '4. Set Foot In The Formal Agreement',
                        description: [
                            'From here on, two concerned parties can think of entering into a formal agreement, and they can now purchase share/transfer of administration/transfer of shares/ or before-mentioned concerns for takeover.'
                        ]
                    },
                    {
                        title: '5. Publish The Second Public Notice',
                        description: [
                            'The requirement is to publish the second public notice in two different regional languages. English should get weightage as the first language while get published the other one in regional language. Before moving into an agreement, public notice should be posted before 30 days for the purchase of share/transfer of authority/transfer of shares or before-divulged concerns for takeover.'
                        ]
                    },
                    {
                        title: '6. Public Notice Engirdle The Following Significant Things',
                        description: [
                            'Intention to transfer or sell direction/ownership.',
                            'To the point particulars of the transferee.',
                            'The purpose behind the act of sale or transfer of authority/ownership'
                        ]
                    },
                    {
                        title: '7. Commencement Of Liquidation Process',
                        description: [
                            'The public notice should be published in two regional languages. The first language should be English, and the second, in regional language, should be released within 30 days of receiving RBI clearance.',
                            "The acquirer will get to see a fair balance in the bank in the company's name. Calculation on this part considers net worth as the basis as it was on the takeover day."
                        ]
                    },
                    {
                        title: '8. Obtain NOC From Creditors End',
                        description: [
                            'Before the transfer of business takes place, Target Company Shall acquire NOC from the creditors.'
                        ]
                    },
                    {
                        title: '9. Assets Transfer',
                        description: [
                            'Once the scheme gets approved by the Reserve Bank of India without any kind of objections, the transfer of assets shall take place.'
                        ]
                    },
                    {
                        title: '10. Entity Valuation In Agreement To The RBI Prescribed Rules',
                        description: [
                            "As RBI has provided a set of rules and regulations, the valuation of the entity can be made possible following them. The discounted cash flow (DCF) method is the technique that supports the valuation process. It's a method that is known for portraying the net present value of any entity."
                        ]
                    }
                ]
            },
            {
                title: 'Pros and Cons of NBFC Takeover',
                navigationTitle: 'Pros and Cons',
                containerKey: 'prosandcons',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: 'Pros',
                        innerList: [
                            {
                                title: 'Hiking up profits of Target Company',
                            },
                            {
                                title: 'Sales and Revenue climbing up',
                            },
                            {
                                title: 'The scale of the economy showing a positive and upward trend',
                            },
                            {
                                title: 'Reduction in the level of competition and competitive pressure',
                            },
                            {
                                title: 'Expansion in market share when two companies in the same domain unite',
                            },
                            {
                                title: 'Wide expansion of distribution channels',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    FFMC_LICENSE: {
        title: FormPageScreenTitleMap['FFMC_LICENSE'],
        description: FormPageScreenDescriptionMap['FFMC_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - FFMC License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "All the Individuals or Business Entities who want to deal in Foreign Currencies need to obtain FFMC License from the Apex Bank, i.e., RBI. Such a license gives the holders the authority to purchase foreign exchange from NRIs (Non Resident Indians) and sell the same for business and travel purposes to the Indians visiting abroad.",
                            "Based on the provisions and stipulations of Section 10 of the FEMA 1999, it shall be noted that only an AMC (Authorised Money Changer) is eligible to deal in the activities concerning Money Changing and Foreign Exchange.",
                            "Some of the firms and hotels have also been provided Full Fledged Money Changer License by the RBI to deal in Foreign Currency, Traveller’s Cheques, and Coins. The same is done to avoid the difficulties faced by the foreign tourists and visitors."
                        ],
                        innerList: [
                            {
                                title: 'Role of Authorised Money Changers in Forex Transactions',
                                description: [
                                    'Authorised Money Changers play a pivotal role in the transactions concerning Foreign Exchange. The Reserve Bank of India grants approval to the banks in the form of Licenses to deal in activities of foreign exchanges. The said license is granted to only those banks which are well equipped to carry out foreign exchange transactions in India.',
                                    'Also, it shall be noted that other than banks, certain financial institutions are granted authorisation by the apex bank to undertake prescribed types of foreign exchange transactions that are incidental to their main business.'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Procedure for Obtaining Full Fledged Money Changer License from RBI',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: 'The steps included in the procedure for obtaining Full Fledged Money Changer License from RBI are as follows:',
                value: [
                    {
                        title: 'Submit An Application To The Reserve Bank Of India',
                        description: [
                            "In the first step of the procedure, the applicant company needs to submit an application along with the required documents at the regional office of the Apex Bank in the format prescribed. Annexure-II deals with the format prescribed by the RBI."
                        ]
                    },
                    {
                        title: 'Fulfil The Fit And Proper Criteria',
                        description: [
                            'For acquiring an Authorised Money Changer License from the Reserve Bank of India, a company needs to fulfil a Fit and Proper Criteria. Consequently, the Board of Directors needs to undergo the process of Due Diligence to confirm that the prescribed Fit and Proper criteria is duly met.',
                            'Further, one of the main functions of the Fit and Proper Criteria is to assist in determining the expertise, integrity, qualifications, and previous track record of the person proposed to be appointed as Director.'
                        ]
                    }
                ]
            },
            {
                title: 'Process for Renewal of the FFMC License in India',
                navigationTitle: 'Steps for Renewal',
                containerKey: 'processforrenewal',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "To renew the expired FFMC or Full Fledged Money License, the directors of the License Holder Company requires to submit an application for the renewal one month prior to the expiry date of such license.",
                            "However, if, in case the said company is not able to submit the application for renewal within the stipulated time frame, the RBI will then reject it whenever filed.",
                            "It shall be considerate to mention that the previously issued license will remain in existence till the time company receives the rejection notice. However, the said company will not be eligible to furnish the application for license renewal after the expiry date."
                        ]
                    }
                ]
            },
            {
                title: 'Key Requirements of the Fit and Proper Criteria',
                navigationTitle: 'Fit & Proper Criteria',
                containerKey: 'fitandpropercriteria',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The key requirements of the Fit and Proper Criteria can be summarised as:"
                        ],
                        innerList: [
                            {
                                title: "The proposed individual shall not be more than the age of 70 years;"
                            },
                            {
                                title: "He/ she must not be a Member of Legislative Assembly;"
                            },
                            {
                                title: "Must not have any history of Fraudulent Practices;"
                            },
                            {
                                title: "He/ she should not be an MP (Member of Parliament);"
                            },
                            {
                                title: "Should not have any previous Criminal Record;"
                            },
                            {
                                title: "Shall not have received any Sanction or Permission from Regulatory Bodies;"
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Post Approval Requirements of FFMC License',
                navigationTitle: 'Post Approval Requirements',
                containerKey: 'postapprovalrequirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The Post-approval Registration Requirements of Full Fledged Money Changer License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'The directors of the applicant company need to submit a duplicate copy of the Possession Certificate, Shop and Establishment License, and Lease Agreement with the Reserve Bank of India before the commencement of business operations;'
                            },
                            {
                                title: 'The applicant company requires to adhere to all the directions, guidelines, and circulars as issued by the Apex Bank;'
                            },
                            {
                                title: 'The license holder company needs to display a copy of the acquired Money Changer License at every place of its registered office;'
                            },
                            {
                                title: 'For undertaking the activities and operations of forex exchange smoothly and hassle free, the applicant company needs to implement a robust mechanism of Concurrent Audit;'
                            },
                            {
                                title: 'The registered license holder company requires to furnish its Annual Audited Balance Sheet and last three years Profit and Loss Account at the RBI’s regional office.'
                            }
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
                            "The documents required for applying FFMC License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'A copy of the COI (Certificate of Incorporation);',
                            },
                            {
                                title: 'A copy of the MOA (Memorandum of Association), having the relevant provisions concerning the activities of Money Changing Business;',
                            },
                            {
                                title: 'A copy of the AOA (Articles of Association), having the relevant provisions concerning the activities of Money Changing Business;',
                            },
                            {
                                title: 'A copy of the latest Audited Accounts, together with the certificates from the Statutory Auditors confirming the NOF as on the date of application;',
                            },
                            {
                                title: 'A copy of the latest Audited Balance Sheet;',
                            },
                            {
                                title: 'A copy of the last three years Profit and Loss Account;',
                            },
                            {
                                title: 'A Sealed Confidential Report from the applicant’s bank;',
                            },
                            {
                                title: 'Details of all the associated/ sister concerns operating in the financial market, such as NBFCs;',
                            },
                            {
                                title: 'A duly certified copy of the Board Resolution passed for carrying out the operations of money changing business;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of FFMC License',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: 'The key benefits of the Full Fledged Money Changer License are as follows:',
                value: [
                    {
                        description: [
                            "An AMC License Holder has the Capability to provide sale facilities and services for foreign exchange;"
                        ]
                    },
                    {
                        description: [
                            "FFMC license holder can offer encashment certificates in case of the Travellers Cheques, Foreign Currency Notes from the Non Residents and Residents;"
                        ]
                    },
                    {
                        description: [
                            "An FFMC License Holder can undertake foreign exchange activities for the foreign tourists visiting India;"
                        ]
                    },
                    {
                        description: [
                            "An AMC License Holder is able to address dealings in coins, travellers’ cheques, foreign currency, at the prevailing exchange rate;"
                        ]
                    }
                ]
            }
        ]
    },
    NBFC_COLLABORATION: {
        title: FormPageScreenTitleMap['NBFC_COLLABORATION'],
        description: FormPageScreenDescriptionMap['NBFC_COLLABORATION'],
        navigationContainers: [
            {
                title: 'Overview - NBFC Collaboration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "NBFC Collaboration is a sort of association where NBFC License holders partner with the Fintech companies and banks intending to raise funds and enhance financial inclusion in the country. In simple words, collaboration means joining hands for a common set of objectives. In India, there are more than 9000 active licensed NBFCs. Talking about the book size of more than 40 crores, only 954 NBFCs fits into this category. Remaining NBFCs are entitled to meet the regulatory cap of INR 20 million. These remaining NBFCs are just holding a certificate.",
                            "The term NBFC Collaboration is a newly introduced concept to enhance economic growth. Fintech companies, along with NBFC license holders, will fund the NBFC for an acceptable fee amount, as a consideration, they will be using the NBFC License. Both the parties decide the consideration and share revenue with each other. The success of NBFC Collaboration depends upon the combination of innovative loan products and the most advanced technology, making the process of loan disbursement easy and quick.",
                            "In the year 2019, due to strict governance norms of Reserve Bank of India, the NBFCs operating on a massive scale suffered from the economic crisis. However, Medium-scale and Small-scale NBFC faced a difficult time, they have been progressing, and they are readily raising a handsome amount of FDI for retail lending. It's not wrong to say that they are becoming commercially successful. The collaboration of large scale NBFCs with Fintech entities and banks are bringing the palmy days for the companies involved in all these processes. Furthermore, the NBFC collaboration will help in finding new ways to acquire clients and fulfilling the primary objective i.e., raising funds."
                        ]
                    }
                ]
            },
            {
                title: 'NBFC Collaboration with Fintech Company - Process of Collaboration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: 'The NBFC Collaboration with Fintech Firms is Following this Process',
                value: [
                    {
                        description: [
                            "It is mandatory for both the NBFC Company and Fintech Company to sign the co-origination scheme agreement"
                        ]
                    },
                    {
                        description: [
                            "Fintech Company must agree to sign Inter-corporate deposit agreements with a fund manager"
                        ]
                    },
                    {
                        description: [
                            "The NBFC that is a part of the collaboration should sign a platform service agreement that supports the payment of technology services rendered by the Fintech organization"
                        ]
                    },
                    {
                        description: [
                            "For meeting out the loaning purpose, NBFC needs to open a separate bank account"
                        ]
                    },
                    {
                        description: [
                            "The NBFC leap ahead and opens an Escrow Account (a segregate Escrow Account for disbursement coupled with re-payment purpose)"
                        ]
                    },
                    {
                        description: [
                            "Appoint a highly skilled and well experienced Chartered Accountant for managing and handling funds and services of Escrow Bank Account"
                        ]
                    },
                    {
                        description: [
                            "After the commencement of business, the Fintech Companies should thoroughly observe and keep their eyes on regular compliance (CKYC, TDS, GST, Credit Reporting, and others)"
                        ]
                    },
                    {
                        description: [
                            "Reconciliation on a monthly basis and Credit Information Company (CIC) Reporting"
                        ]
                    },
                    {
                        description: [
                            "Following NPA provisioning Norms of 45/90 days is a mandatory point to consider for NBFC"
                        ]
                    }
                ]
            },
            {
                title: 'Minimum Desired Technology with Fintech Company',
                navigationTitle: 'Minimum Desired Technology',
                containerKey: 'minimumdesiredtechnology',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        innerList: [
                            {
                                title: 'Mandatory to have a mobile app in conformity with the Indian market'
                            },
                            {
                                title: 'Should be equipped with systems such as Loan management system, Loan origination, and Collection system'
                            },
                            {
                                title: 'Fintech Company must own credit and underwriting software'
                            },
                            {
                                title: "Fintech Company must ensure that there is no lag in terms of IT security as it will safeguard the borrower's personal information"
                            },
                            {
                                title: 'Loan App must be capable enough to integrate the various APIs but not confined to PAN, Aadhaar, and Driver License'
                            },
                            {
                                title: "It must have the verification of live borrowers’ profile"
                            },
                            {
                                title: "Analysis of bank statement becomes a necessity for checking income process"
                            },
                            {
                                title: "The face of borrowers and the IDs submitted online by them must be resembling each other"
                            },
                            {
                                title: "Verification of Employment Profile Online"
                            },
                            {
                                title: "As directed by Indian law, following of privacy norms is a requisite in case of using social scoring technology"
                            },
                            {
                                title: "The server should be in India and shouldn't be outside the Indian boundaries."
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of NBFC Collaboration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: "NBFCs are looking at Fintech Companies with an eye of fire and it's a fact that Fintech Companies are the next big thing, and thus, collaborating with them would bring unexpected and extraordinary results. NBFC's are walking out of the woods to increase their lending capabilities. Not only NBFCs will get benefitted from this collaboration, but also Fintech Companies would be dominating newbie in the industry after joining hands with NBFCs. In brief, we can say that it's going to be a win-win situation for both of them. The benefits that NBFCs gains by the partnership with Fintech Companies are as follows",
                value: [
                    {
                        title: "Mount Up Productivity",
                        description: [
                            "Fintech has simplified the internal as well as external functions of NBFC. Also, it helps in the smooth functioning of the Non-Banking Financial Companies. Furthermore, it boosts NBFCs to revise their activities related to back-office, resulting in mounting up of productivity."
                        ]
                    },
                    {
                        title: "Launching Unique And Latest Product Offerings",
                        description: [
                            "By taking the help of Fintech's latest technology-based tools, the Non-Banking Financial Companies are bringing innovative changes in their new products. The collaboration of NBFCs with Fintech Players assists in launching unique and In-trend product offerings such as Payday Loans, POS Financing, Consumer Durable Loans, Invoice Financing, etc."
                        ]
                    },
                    {
                        title: "Embracing The Paper-Less And Modernized Digital Modes",
                        description: [
                            "After coming together on board along with a Fintech Company, NBFCs become familiar with the exceptional techniques. It dragoons NBFC into choosing the paper-less digital modes instead of the traditional, outdated manual process. Most importantly, digital onboarding and verification saves the costs incurred on operations."
                        ]
                    }
                ]
            }
        ]
    },
    MICROFINANCE_COMPANY_REGISTRATION: {
        title: FormPageScreenTitleMap['MICROFINANCE_COMPANY_REGISTRATION'],
        description: FormPageScreenDescriptionMap['MICROFINANCE_COMPANY_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - Microfinance Company Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The term Microfinance Company (MFC) basically means an entity that is engaged in providing financial assistance and help to the rural people, low income strata, and the backward and undeveloped section of the society. That means the main objective of this business model is to offer access of the banking facilities to every section of the society. However, to start a MFC in India, one needs to first acquire a Microfinance Company Registration from the RBI.",
                            "Further, it shall be noted that a microfinance institution or a company is a Non Deposit Taking NBFC and is separate and distinct from section 8 company. Also, the operations and affairs of a Microfinance Institution are governed and regulated by the provisions of the Reserve Bank of India Act 1934 and the directions issued thereunder."
                        ]
                    }
                ]
            },
            {
                title: 'Types of MFC Registration in India',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The different types of MFC Registration applicable in India can be summarised as:"
                        ],
                        innerList: [
                            {
                                title: 'RBI Registered MFIs',
                                description: [
                                    "To incorporate a Microfinance Company or Institution as an NBFC (Non Banking Financial Company), the applicant requires to get a company registered either as a Private Limited or Public Limited Company under the Companies Act 2013.",
                                    "Thereafter, the said applicant company requires to comply with all the steps needed for obtaining microfinance company registration, starting from the minimum capital requirement to the actual filing of the application for registration at the regional office of the Reserve Bank of India."
                                ]
                            },
                            {
                                title: 'Section 8 Registered MFIs',
                                description: [
                                    "To start a Microfinance Institution in India, as a section 8 company, the applicant company requires to firstly apply for acquiring the Digital Signature Certificate (DSC) & Directors Identification Number (DIN) for all the proposed directors.",
                                    "Thereafter, it needs to furnish an application for obtaining Name Approval in form INC – 1. Also, it requires to draft of the MOA (Memorandum of Association) & AOA (Articles of Association) for the said company and the need to submit INC – 12, along with the needed documents to acquire Microfinance Company Registration."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process for Obtaining Microfinance Company Registration in India',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The steps involved in the process for obtaining Microfinance Company Registration in India are as follows:",
                value: [
                    {
                        title: "Register A Company",
                        description: [
                            "In the first and foremost step of the process for obtaining Microfinance Company Registration in India, the applicant needs to register a company under the stipulations of the Companies Act 2013.",
                            "Further, for the purpose of incorporation, the applicant needs to file a SPICe + Form with the Ministry of Corporate Affairs.",
                            "Also, it shall be noted that when the company is initially incorporated, the best type of business structure which is utilized for this type of organisation will either be a public limited company or a private limited company. Further, through Companies (Incorporation) Act 2015, the Ministry of Corporate Affairs have removed the requirement of the minimum capital required for incorporating a company in India."
                        ]
                    },
                    {
                        title: "SPICe Plus Service",
                        description: [
                            "Usually the above mentioned SPICe Plus Service will be easily carried out by the respective applicant as the whole procedure of the registration procedure is online.",
                            "Further, the said service will offer name reservation, Director Identification Number, Mandatory Issuance of the Permanent Account Number, Tax Deduction & Collection Account Number, EPFO, ESIC, and other forms of registration which are required.",
                            "Furthermore, the compliances as follows have to be duly carried out after the completion of the above process:",
                            "If the company has been incorporated as a new business entity, then, in that case, the name has to be reserved;",
                            "It shall be noted that all the other compliances concerning the EPFO (Employee Provident Fund Organisation), GST (Goods and Service Tax), Income Tax, PAN (Permanent Account Number), TAN (Tax Deduction and Collection Account Number), Bank Account, and Professional Tax Registration (if required) needs to be carried out in accordance with the required law."
                        ]
                    }
                ]
            },
            {
                title: 'Perquisites for Obtaining MFC Registration in India',
                navigationTitle: 'Pre-requisites',
                containerKey: 'prerequisites',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The perquisites for Obtaining MFC Registration in India can be summarised as:"
                        ],
                        innerList: [
                            {
                                title: "The company must have a registration under the provisions of the Companies Act 1956 and 2013;"
                            },
                            {
                                title: "It should have the Net Owned Funds (NOF) of Rs 5 crores;"
                            },
                            {
                                title: "It is eligible to offer loan only between Rs 50 thousand to Rs 1.25 lakh;"
                            },
                            {
                                title: "Need to Furnish details concerning Promoters;"
                            },
                            {
                                title: "85% of the Total NOF needs to be the Qualifying Assets;"
                            },
                            {
                                title: "Does not require any amount of minimum capital;"
                            }
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
                            "The documents required for obtaining Microfinance Company Registration are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'A copy of the Certificate of Incorporation (COI) of the Company;'
                            },    
                            {
                                title: 'Permanent Account Number (PAN) Card details of the Applicant Entity;'
                            },    
                            {
                                title: 'PAN Card details of the proposed Directors;'
                            },    
                            {
                                title: 'Digital Signature Certificates (DSCs) for all the proposed Directors;'
                            },    
                            {
                                title: 'Director Identification Number (DIN) for all the proposed Directors;'
                            },    
                            {
                                title: 'Latest passport sized photographs for all the proposed Directors;'
                            },    
                            {
                                title: 'Address Proof for the premise being utilised as the Registered Office of the company;'
                            },    
                            {
                                title: 'A copy of the duly stamped Lease Deed or Rental Agreement, in the case property being used is Rented;'
                            },    
                            {
                                title: 'A copy of the Sale Deed or Ownership Certificate, in the case property being used is the Self Owned Property;'
                            },    
                            {
                                title: 'A certified copy of the Memorandum of Association (MOA);'
                            },    
                            {
                                title: 'A certified copy of the company’s Articles of Association (AOA);'
                            },    
                            {
                                title: 'A copy of the certified Banker’s Report;'
                            },    
                            {
                                title: 'A duly certified copy of the passed Board Resolution;'
                            },    
                            {
                                title: 'A copy of the Auditors Report displaying the minimum Net Owned Funds (NOF);'
                            },    
                            {
                                title: 'A duly certified copy of the Compliance Certificate from a Practising Chartered Accountant;'
                            },    
                            {
                                title: 'A Structured Business Plan of the Applicant Company;'
                            },    
                            {
                                title: 'A copy of the latest Financial Report concerning Directors;'
                            },    
                            {
                                title: 'A copy of the Income Proof of all the Key Managerial Personnel (KMP) and proposed Directors;'
                            },    
                            {
                                title: 'No Objection Certificate from the Company;'
                            },    
                            {
                                title: 'Bankers Certificate regarding No Lien;'
                            },    
                            {
                                title: 'A copy of the Credit Statement of the company;'
                            },    
                            {
                                title: 'A copy of the Passport if the proposed director is an Indian National. However, in the case of Foreign Nationals, apostil or notarised copies of the passports is required to be submitted;'
                            },    
                            {
                                title: 'Net worth certificate for all the proposed directors;'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Microfinance Company Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: 'The key benefits of obtaining Microfinance Company Registration in India are as follows:',
                value: [
                    {
                        description: [
                          'No Need for Collateral Security for Borrowing Funds;'
                        ]
                      },
                      {
                        description: [
                          'Facilitates Employment Generation;'
                        ]
                      },
                      {
                        description: [
                          'Contributes in Rural Development;'
                        ]
                      },
                      {
                        description: [
                          'Renders Opportunity to Earn Income;'
                        ]
                      },
                      {
                        description: [
                          'No Need to fulfil any Minimum Capital Requirement Criteria;'
                        ]
                      },
                      {
                        description: [
                          'Provides better Interest Rate of Repayment;'
                        ]
                      },
                      {
                        description: [
                          'Aims to make people Self Sufficient;'
                        ]
                      },
                ]
            }
        ]
    },
    HOUSING_FINANCE_COMPANY_REGISTRATION: {
        title: FormPageScreenTitleMap['HOUSING_FINANCE_COMPANY_REGISTRATION'],
        description: FormPageScreenDescriptionMap['HOUSING_FINANCE_COMPANY_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - Housing Finance Company Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Housing Finance Company is a sort of NBFC that is principally indulged in the business of constructing houses and financing acquisition that includes the improving of plots from the building of new houses. It is compulsory for a Housing Finance Company to have a housing finance business or a business of offering housing finance as its primary objective in the Memorandum of Association (MOA). Further, it shall be noted that only the National Housing Bank (NHB) has the utmost authority to grant Housing Finance Company Registration.",
                            "The term NHB or National Housing Bank means the apex financial institution for dealing in housing finance. It has been established with an aim to function as a principal agency to encourage and promote housing finance institutions, both at regional and ground levels. Further, this institution also works to provide financial and other assistance incidental to such financial institutions and for the matters connected therewith.",
                            "All the Housing Finance Companies are governed and regulated by the National Housing Bank. It is mandatory for every HFC to acquire a Certificate of Registration (COR) from the National Housing Bank. That means the Registration Certificate plays a significant for an HFC to start its business operations and activities concerning Housing Finance.",
                            "Further, based on the guidelines specified in the National Housing Bank Act 1987, if any housing finance company has not obtained the Certificate of Registration but is carrying out the operations and activities of housing finance, then, in that case, the same will be liable to for the levy of hefty penalties.",
                            "It shall be taken into consideration that a Registration Certificate is issued by the National Housing Bank based on the prescribed classifications of Housing Finance Companies. The term prescribed classification is bifurcated in terms of types of liabilities, such as National Housing Bank, into non-deposit and deposit accepting Housing Finance Companies."
                        ]
                    }
                ]
            },
            {
                title: 'Process for Obtaining Housing Finance Company Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The stages involved in the procedure for obtaining the Housing Finance Company Registration are as follows:",
                value: [
                    {
                        title: "Download The Application For Registration",
                        description: [
                            "In the first step of the process for obtaining Housing Finance Company Registration, the applicant is required to download the application form from the official website of the National Housing Bank at nhb.org.in."
                        ]
                    },
                    {
                        title: "Attach All The Documents With Application",
                        description: [
                            "Now, in the next step, the applicant company needs to attach all the pertinent documents together with the application form.",
                            "Also, it needs to annex the demand draft in favour of the National Housing Bank. The same is required to be submitted to the Head Office of the National Housing Bank."
                        ]
                    },
                    {
                        title: "Checking Of Authenticity",
                        description: [
                            "Further, the officials of the National Housing Bank will check the authenticity and legitimacy of the documents and application submitted by the applicant."
                        ]
                    },
                    {
                        title: "Issuance Of Housing Finance Company Registration",
                        description: [
                            "After being satisfied with the documents, annexures, and application form submitted, the National Housing Bank will grant the Certificate of Registration to the applicant company. The same will act as the proof for the Housing Finance Company Registration."
                        ]
                    }
                ]
            },
            {
                title: 'Eligibility Criteria for Obtaining Housing Finance Company Registration',
                navigationTitle: 'Eligibility Criteria',
                containerKey: 'eligibilitycriteria',
                type: FormPageContainerType.CARD_LIST,
                description: "Based on the provisions of section 29A of the National Housing Bank Act 1987, no Housing Finance Company shall start to carry out its operations of providing housing loans unless the same had met all the accompanying guidelines. The following list is the eligibility criterion that has to be considered for obtaining the Housing Finance Company Registration:",
                value: [
                    {
                        title: "Must Be An NBFC",
                        description: [
                            "The business entity that wants to operate as a Housing Finance Company must acquire registration as the Non-Banking Financial Company from the Apex Bank, i.e., RBI."
                        ]
                    },
                    {
                        title: "Net Owned Funds",
                        description: [
                            "It shall be noted that the Net owned fund of a Housing Finance Company must be at least Rs 20 Crores. Therefore, an applicant needs to satisfy the requirements of net worth for obtaining Housing Finance Company Registration."
                        ]
                    },
                    {
                        title: "Must Be Registered Under The Companies Act 2013",
                        description: [
                            "The said Company requires to satisfy the requirements of a private limited company under the provisions of the Companies Act 2013 or the Companies Act 1956."
                        ]
                    },
                    {
                        title: "Housing Finance Activities As Object Clause",
                        description: [
                            "It is the last but the most important requirement of all that the objects of this type of company must mention for financing housing loans and other commercial complexes. Besides providing finance, the said company must also have the predictions of earning.",
                            "The management and operations of the company must act in good faith and in the interest of the public and other consumers. That means they need to work in the interests of the public."
                        ]
                    }
                ]
            },
            {
                title: 'Mandatory Compliances for Housing Finance Company',
                navigationTitle: 'Mandatory Compliances',
                containerKey: 'mandatorycompliances',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The mandatory compliances for a Housing Finance Company are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'It is necessary for every Housing Finance Company to file its annual return, half yearly return, and quarterly return in regard of prudential norms, maintenance of the liquid assets correspondingly;'
                            },    
                            {
                                title: 'Annual submission of the Certificate given by the Auditor, certifying the said Housing Finance Company has the capability to repay deposits;'
                            },    
                            {
                                title: 'A copy of the audited financial statements;'
                            },    
                            {
                                title: 'A copy of the audited annual report;'
                            },    
                            {
                                title: 'Timely filing of return in respect of the change of the registered office;'
                            },    
                            {
                                title: 'Timely filing of return in respect of the change in directors etc.;'
                            },    
                            {
                                title: 'Furnishing a copy of the advertisement soliciting regarding public deposits or a statement in lieu thereof;'
                            },    
                            {
                                title: 'Housing Finance Companies have to comply with the all the provisions relating to IND-AS;'
                            }
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
                            "The documents required for obtaining Housing Finance Company Registration in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Furnish a copy of the Article of Association (AOA) and Memorandum of Association (MOA) of the said company;'
                            },    
                            {
                                title: 'Details about the Company’s profile;'
                            },    
                            {
                                title: 'Demand Draft of Rs 10,000/- for National Housing Bank, New Delhi;'
                            },    
                            {
                                title: 'Furnish a Board Resolution (BR) mentioning that the Company’s aim and approval to record registration application before the National Housing Bank;'
                            },    
                            {
                                title: 'Comprehensive Business Plan stating the next three years goals and objectives of the Company;'
                            },    
                            {
                                title: 'Acquiesce a certificate issued by any professional stating that the said company has duly met the conditions of minimum NOF (Net Owned Fund) of Rs 20 crores;'
                            },    
                            {
                                title: 'Business profile of CEO (Chief Executive Officer) or Directors or MD (Managing Director), etc.;'
                            },    
                            {
                                title: 'Details of all the companies to which the directors are related;'
                            },    
                            {
                                title: 'Financial Audit of the last three years;'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Housing Finance Company Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: 'The key benefits of the Housing Finance Company Registration are as follows:',
                value: [
                    {
                        title: "Offers Housing Loans To Individuals",
                        description: [
                            "The main reason behind the registration of such companies is to offer housing loans to individuals that, too, at affordable rates."
                        ]
                    },
                    {
                        title: "Offers Housing Loans To Company",
                        description: [
                            "The main reason behind the registration of such companies is to offer housing loans to companies that, too, at affordable rates so that they can lease out the premises to their employee."
                        ]
                    },
                    {
                        title: "Redevelopment",
                        description: [
                            "The main reason behind the registration of such companies is to carry out redevelopment activities, such as the development and betterment of slums and rural areas."
                        ]
                    }
                ]
            }
        ]
    },
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: {
        title: FormPageScreenTitleMap['NBFC_ACCOUNT_AGGREGATOR_LICENSE'],
        description: FormPageScreenDescriptionMap['NBFC_ACCOUNT_AGGREGATOR_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - NBFC Account Aggregator License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Account Aggregators are such kind of entities which acts as a consent broker that enables sharing of the financial data among the financial institutions in the financial sector. Hence, Account Aggregation is the gathering of all the financial data that includes assembling of all the information on a single platform from different accounts like the investment accounts, bank accounts, consumer accounts, business accounts and other related financial accounts.",
                            "Account Aggregators are the financial organizations that grant structured allocation of financial data from the Financial Information Providers to the Financial Information Users. For transmitting this information, the approval request is taken from the users. The right of administering and revoking the assent lies with the users."
                        ],
                        innerList: [
                            {
                                title: 'What is NBFC Account Aggregator?',
                                description: [
                                    "NBFC Account Aggregator is that financial entity which functions as the Account Aggregator for the customers of NBFC. NBFC-AA accumulates and provides information concerning multiple accounts which are held by the customers in various NBFC entities. The information of the customer account information will be in the form of organized, consolidated and retrievable data that would reveal the financial engagement of the customer in different NBFC products like mutual funds, insurance etc.. This was conceptualized by the RBI in the year 2015. For Non-Banking Finance Companies - Account Aggregators (NBFC-AA), RBI has declared master directions.",
                                    "NBFC-AA (NBFC Account Aggregator) is a kind of budgetary element which is involved in the process of giving data to NBFC clients identified with accounts held by clients in various NBFCs. Such data will be in a united and sorted out way. The data will be related to the financial involvement of the customer with the various products of NBFC."
                                ]
                            },
                            {
                                title: "For Your Better Understanding Let Us Clarify The Importance Of Both The Terms:",
                                innerList: [
                                    {
                                        title: "Financial Information Provider (FIP):",
                                        description: [
                                            "These are those financial organizations that grant user’s account information upon the request of another individual or organization and are harmonized under the financial sector."
                                        ]
                                    },
                                    {
                                        title: "Financial Information User (FIU):",
                                        description: [
                                            "These organizations need information regarding the users from the FIP for many purposes such as customer analysis, market evaluation, etc. This includes both individuals and organizations. These entities are regulated by the financial sector regulators such as RBI, IRDA, SEBI, PFRDA."
                                        ]
                                    },
                                    {
                                        description: [
                                            "The sharing of the Financial Information has to be according to the direction issued by the RBI-DNBR."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of NBFC Account Aggregator Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "NBFC-AA registration is done on the basis of directions given by the RBI. This kind of entity will not have any public fund or any sort of interference by the client.",
                            "For NBFC-AA (NBFC Account Aggregator) Registration the following Steps Should Be Embraced:"
                        ],
                        innerList: [
                            {
                                title: 'The primary step is the registration of Company according to the Companies Act, 2013.'
                            },    
                            {
                                title: 'The organization must have the essential resource to offer such type of services.'
                            },    
                            {
                                title: 'To undertake the matter of account aggregator, the Company had to be prepared with the appropriate plan regarding adequate capital structure.'
                            },    
                            {
                                title: 'The common character of the management should not be biased for any public interest.'
                            },    
                            {
                                title: 'It is compulsory to get Certificate of Registration (CoR) from RBI for the activities of account aggregator.'
                            },    
                            {
                                title: ' For obtaining the Certificate of Registration (CoR), it is required to make an application to the RBI by the applicant.'
                            },    
                            {
                                title: 'There is a minimum requirement of at least Rs. 2 crore.'
                            },    
                            {
                                title: 'Equipped with the system of information technology and data innovation framework so as to conduct services related to account aggregation.'
                            },    
                            {
                                title: 'The leverage ratio must not be more than 7 times.'
                            },    
                            {
                                title: 'Promoters of the NBFC-AA must be fit and legitimate.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Requirements For NBFC-AA Registration',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        description: ["There is a minimum requirement of Rs. 2 crore for NBFC-AA (NBFC Account Aggregator) license. Nonetheless, the company will be having a time period of 12 months after obtaining the principle approval of RBI for the purpose to raise money. No other services can be provided by NBFC-AA (NBFC Account Aggregator) other than for account aggregation."]
                    },
                    {
                        description: ["After receiving the approvals from the regulator, NBFC-AA will have time duration of 12 months to set up all the essential technologies and tie-ups that are compulsory to carry out the business of aggregation."]
                    },
                    {
                        description: ["NBFC-AA will give information to the financial user concerning the customer. NBFC-AA is not competent to do fund based activity like the other NBFCs. Prima facie it cannot be considered as NBFCs. NBFC Account Aggregators cannot use the information of the customer’s financial assets for any different purpose."]
                    },
                    {
                        description: ["According to RBI, an entity which is involved in aggregating accounts of a particular financial sector which is regulated by the other regulators can be given exemption from obtaining RBI’s approval. These types of entities are not permitted to carry financial activities like other NBFCs."]
                    }
                ]
            },
            {
                title: 'Advantages of NBFC Account Aggregator',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        description: ["The principle function of the NBFC-Account Aggregator is to give data with respect to the accounts held by clients. Data is held in a sorted, merged and retrievable way. For a client, it is totally purposeful to enjoy the services of the account aggregator."]
                    },
                    {
                        description: ["The NBFC-AA performs IT-oriented activities which imply that client will get advanced data. The primary job of NBFC-AA (NBFC Account Aggregator) is collection of account and in this way they will not go into the monetary resources exchange with its clients, unlike other NBFCs. An aggregator is allowed to convey investible surplus in instruments and not for exchanging. Board-affirmed approach of the record aggregator will choose the estimating of administrations. Such rules and approach embraced by the account aggregator must be transparent and accessible in the public space."]
                    },
                    {
                        description: ["The administrations rendered by the NBFC-AA (NBFC Account Aggregator) must ensure regarding the suitability of understanding between the aggregator, client and financial service provider. The terms and states of the permit must be followed by NBFC-AA (NBFC Account Aggregator) like insurance of client, corporate governance, complaint redressal, data security, audit control, and risk management framework. The Financial Stability and Development Council (FSDC) support the function of NBFC-AA."]
                    },
                    {
                        description: ["Absolutely, NBFC-AA (NBFC Account Aggregator) gathers data in regards to the client's monetary resources and gives it to the clients in a sorted, merged and retrievable way. The set of rules drafted by the RBI which must be tracked by them properly."]
                    }
                ]
            }
        ]
    },
    PREPAID_WALLET_LICENSE: {
        title: FormPageScreenTitleMap['PREPAID_WALLET_LICENSE'],
        description: FormPageScreenDescriptionMap['PREPAID_WALLET_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - Prepaid Wallet License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The term PPIs or Prepaid Payment Instruments means the Instruments that store high monetary value in them, and one can purchase goods and services by transferring the amount stored. The pecuniary value stored in the Prepaid Payment Instruments is the amount that the holder actually needs to pay, either in the form of cash, credit card, or by debit to the bank account. Further, it shall be noted that to start a Prepaid Payment Instrument, one needs to obtain Prepaid Wallet License from RBI. The same is also known as Payment Wallet License.",
                            "In recent years, Prepaid Payment Instruments have become really popular and a convenient alternative to cash transactions. The other name for Payment Instrument is E-wallets. One of the most prominent examples of Prepaid Payment Instruments is Paytm. Some of the major benefits of the Payment Wallet License are that it facilitates transparency, is convenient to use, and promotes accountability.",
                            "Further, it shall be noted that nowadays, the Reserve Bank of India is taking several initiatives to promote fast track money transfer. The main function of a Prepaid Wallet License is to permit its users to buy items or to carry out transactions by using the digital platform.",
                            "However, it shall be considered that a company or business entity that is willing to obtain a Prepaid Wallet License requires to comply with the rules, regulations, and guidelines prescribed by the Apex Bank."
                        ],
                        innerList: [
                            {
                                description: [
                                    "Moreover, the various forms of Payment Wallet License are as follows:"
                                ],
                                innerList: [
                                    {
                                        description: ["Closed system payment instruments;"]
                                    },
                                    {
                                        description: ["Semi-Closed system payment instruments;"]
                                    },
                                    {
                                        description: ["Semi-Open system payment instruments;"]
                                    },
                                    {
                                        description: ["Open system payment instruments;"]
                                    },
                                    {
                                        description: ["Mobile Prepaid Instruments;"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Types of Payment Wallet License',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The different types of Payment Wallet License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Closed Wallet Or Closed Payment Wallet Instrument',
                                description: [
                                    "Closed Wallet or Closed Payment Wallet Instruments are those which are issued by a company to its users exclusively for the objective of buying goods of that particular company. Further, this kind of Prepaid Payment Instrument is used for the purchase of goods and services of only that company which has granted it.",
                                    "For Example: Reliance Supermarkets, etc."
                                ]
                            },
                            {
                                title: 'Semi Closed Wallet Or Semi Closed Payment Wallet License',
                                description: [
                                    "This particular category of Prepaid Payment Instruments in which a holder is allowed to purchase good and services only from a particular group of sellers who have joined hand for this specific objective. Further, the facilities of cash redemption & withdrawal are not offered to the holders of such instruments.",
                                    "For Example: Mobiwik and Paytm."
                                ]
                            },
                            {
                                title: 'Semi Open Wallet Or Semi Open Payment Wallet License',
                                description: [
                                    "This type of payment instrument can be used by those holders who are purchasing goods and services at those seller locations that accept digital cards.",
                                    "However, it shall be noted that in these instruments, the facilities of cash withdrawal and redemption is not allowed to the holder."
                                ]
                            },
                            {
                                title: 'Open Wallet',
                                description: [
                                    "The term Open Wallet means those prepaid payment instruments that are used to purchase goods & services anywhere. Also, the holders of these wallets have the permission of withdrawing cash from Automated Teller Machines (ATMs)."
                                ]
                            },
                            {
                                title: 'Mobile Prepaid Instruments:',
                                description: [
                                    "The value of prepaid talk time issued by mobile service providers can also be used for purchase of 'value addedservice' from the mobile service provider or 3rd party service providers."
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Process for Obtaining Prepaid Wallet License',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        description: ["Making an Application in Form A for approval as per under Regulation 3(2) of the Payment and Settlement System Regulations, 2008, with the prescribed government fee and all the documents and details to the Reserve Bank of India to obtain the PPI License."]
                    },
                    {
                        description: ["The RBI shall initiate the Screening process to ensure prima facie eligibility of the applicants."]
                    },
                    {
                        description: ["RBI shall also apply checks, inter-alia, on certain essential aspects like customer service and efficiency, technical and other related requirements, safety, and security aspects."]
                    },
                    {
                        description: ["After the RBI is satisfied regarding the Applicant’s eligibility criteria after checking its fit & proper status, it issues an ‘in-principle approval. The validity of the issued in-principal approval shall be six months from the date of granting such approval."]
                    },
                    {
                        description: ["The Company needs to submit a satisfactory Audit Report to RBI, within six months. The company has to submit the System Audit Report (SAR), otherwise, the in-principal approval shall lapse automatically. The Company can receive a one-time extension of six months by making an appeal in writing in advance with all the valid reasons."]
                    },
                    {
                        description: ["After considering all the particulars furnished by entities, the Company will be granted final approval. The company has to commence business within six months from the grant of Certificate of Authorization."]
                    }
                ]
            },
            {
                title: 'Minimum Requirements of Payment Wallet License',
                navigationTitle: 'Minimum Requirements',
                containerKey: 'minimumrequirements',
                type: FormPageContainerType.CARD_LIST,
                description: "The minimum requirements of Payment Wallet License are as follows:",
                value: [
                    {
                        title: "Schedule Banks And NBFCs",
                        description: [
                            "It shall be noted that no minimum capital requirement has been specified by the RBI for Schedule Banks or NBFCs, who want to obtain prepaid wallet license.",
                            "However, prior to the issuance of the license, all the prepaid instruments need to acquire approval as well from the Reserve Bank of India."
                        ]
                    },
                    {
                        title: "Capital Requirement",
                        description: [
                            "All non-bank entities seeking authorisation from RBI under the PSS Act shall have a minimum positive net-worth of Rs. 5 crore.",
                            "Thereafter, by the end of the third financial year from the date of receiving final authorisation, the entity shall achieve a minimum positive net-worth of Rs. 15 crore which shall be maintained at all times."
                        ]
                    },
                    {
                        title: "Authorised Entities Of FEMA",
                        description: [
                            "It shall be noted that all the entities that have authorised under the Foreign Exchange and Management Act 1999 to grant foreign exchange prepaid wallet are relieved from the requirements of Minimum Capital. However, the entities can use these types of payment instruments only for a limited permitted current account."
                        ]
                    }
                ]
            },
            {
                title: 'Pre-requisites for NBFC Registration',
                navigationTitle: 'Pre-requisites',
                containerKey: 'prerequisites',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "RBI has set clear-cut criteria for permitting the entities to set up prepaid wallets:"
                        ],
                        innerList: [
                            {
                                title: 'Banks and Non-Bank Finance Companies (NBFC), who comply with the eligibility criteria, would be permitted to issue all categories of prepaid payment instruments.',
                            },
                            {
                                title: 'Only banks provide Mobile Banking Transactions are permitted to launch mobile based prepaid payment instruments (mobile wallets & mobile accounts). Other entities are permitted to issue only closed system prepaid payment instruments and semi-closed system prepaid payment instruments.',
                            },
                            {
                                title: 'Mobile Prepaid value: Mobile Service Providers are permitted to issue mobile prepaid value. In addition to talk-value the use of such prepaid value as a payment instrument shall be restricted to the purchase of only such value-added digital contents/services which are for use on the mobile phones. The use of mobile prepaid value for purchase of other goods and services is not permitted',
                            }
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
                            "The documents required for obtaining a Prepaid Wallet License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Applicant’s Name;',
                            },
                            {
                                title: 'Address Proof of the Registered Office;',
                            },
                            {
                                title: 'Certificate of Incorporation (COI);',
                            },
                            {
                                title: 'Objects of the Company;',
                            },
                            {
                                title: 'Information concerning Management;',
                            },
                            {
                                title: 'Details regarding the Statutory Auditors;',
                            },
                            {
                                title: 'Audited Balance Sheet;',
                            },
                            {
                                title: 'Name of the Bankers to the said Company;',
                            },
                            {
                                title: 'Address of the Bankers to the said Company;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Prepaid Wallet License',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The benefits of the Prepaid Wallet License can be summarised as follows:"
                        ],
                        innerList: [
                            {
                                title: 'It is one of the most Convenient and Safe ways of making Monetary Transactions;',
                            },
                            {
                                title: 'Payment Wallet Instruments are Time Saving in nature as through them one can make the payment of electricity bills, mobile charges, telephone bills from anywhere and at any time;',
                            },
                            {
                                title: 'Provides Ease of making a transaction from any place;',
                            },
                            {
                                title: 'Facilitates Transparency and Accountability to the user of E-wallet;',
                            },
                            {
                                title: 'These application does not require any extra cost or activation fees;',
                            },
                            {
                                title: 'Offers Reward, Cashbacks, and Incentives to its users;',
                            }
                        ]
                    }
                ]
            }
        ]  
    },
    PEER_TO_PEER_LENDING_LICENSE: {
        title: FormPageScreenTitleMap['PEER_TO_PEER_LENDING_LICENSE'],
        description: FormPageScreenDescriptionMap['PEER_TO_PEER_LENDING_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - Peer to Peer Lending License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The term P2P (Peer to Peer) basically denotes an online platform or portal that works as an intermediary between the lenders and borrowers. To start a P2P Lending Business in India, one needs to acquire a Peer to Peer Lending License from the Reserve Bank of India. Further, the borrower of a Peer to Peer (P2P) can be both a lawful business entity and an individual.",
                            "Nowadays, entrepreneurs and start-ups tend to choose Peer to Peer Lending for the growth in their initial days, as it assists them in growing them that, too, without obtaining money from any person. Therefore, it has become one of the most comfortable and primary choice for everyone who are looking for the venture funding."
                        ],
                        innerList: [
                            {
                                title: "Concept of Peer to Peer Lending",
                                description: [
                                    "The concept of Peer to Peer Lending means a process of lending out an amount of money to the people or business houses by way of online services, which assist match between the lenders and borrowers. Also, the process of P2P lending is mostly carried out online.",
                                    "Further, Peer to Peer Lending is a mode of debt financing which permits the individuals to lend & borrow money without the actual participation and involvement of a financial institution as an intermediary. That means the process of Peer to Peer Lending removes the intermediary from the lending and both the borrower and the lender save on the charges that are charged by the intermediary. The only authority to issue a Peer to Peer Lending License is with the Reserve Bank of India."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Types of Payment Wallet License',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The different types of Payment Wallet License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Closed Wallet Or Closed Payment Wallet Instrument',
                                description: [
                                    "Closed Wallet or Closed Payment Wallet Instruments are those which are issued by a company to its users exclusively for the objective of buying goods of that particular company. Further, this kind of Prepaid Payment Instrument is used for the purchase of goods and services of only that company which has granted it.",
                                    "For Example: Reliance Supermarkets, etc."
                                ]
                            },
                            {
                                title: 'Semi Closed Wallet Or Semi Closed Payment Wallet License',
                                description: [
                                    "This particular category of Prepaid Payment Instruments in which a holder is allowed to purchase good and services only from a particular group of sellers who have joined hand for this specific objective. Further, the facilities of cash redemption & withdrawal are not offered to the holders of such instruments.",
                                    "For Example: Mobiwik and Paytm."
                                ]
                            },
                            {
                                title: 'Semi Open Wallet Or Semi Open Payment Wallet License',
                                description: [
                                    "This type of payment instrument can be used by those holders who are purchasing goods and services at those seller locations that accept digital cards.",
                                    "However, it shall be noted that in these instruments, the facilities of cash withdrawal and redemption is not allowed to the holder."
                                ]
                            },
                            {
                                title: 'Open Wallet',
                                description: [
                                    "The term Open Wallet means those prepaid payment instruments that are used to purchase goods & services anywhere. Also, the holders of these wallets have the permission of withdrawing cash from Automated Teller Machines (ATMs)."
                                ]
                            },
                            {
                                title: 'Mobile Prepaid Instruments:',
                                description: [
                                    "The value of prepaid talk time issued by mobile service providers can also be used for purchase of 'value addedservice' from the mobile service provider or 3rd party service providers."
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Process for Obtaining Peer to Peer Lending License',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The steps involved in the process for obtaining Peer to Peer Lending License in India can be summarised as:"
                        ],
                        innerList: [
                            {
                                title: 'The applicant company must be registered in India either as a Private Limited Company or as a Public Limited Company that, too, with the principal agenda of financing;',
                            },
                            {
                                title: 'The minimum NOF (Net Owned Funds) required for obtaining Peer to Peer Lending License is of Rs 2 crores;',
                            },
                            {
                                title: 'Now, in the next step, submit the work flow for the main Website and Mobile Application;',
                            },
                            {
                                title: "After that, the applicant company needs to file an online application, which is available on the RBI's website named COSMOS;",
                            },
                            {
                                title: 'Now, the applicant company needs to submit the hard copy of the application drafted, together with the attached documents at the regional office of the Reserve Bank of India Office.',
                            },
                            {
                                title: 'Lastly, the Peer to Peer Lending License will be issued by the apex bank only after carrying out a vigilant inspection of the submitted application and the documents attached with it;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Peer to Peer Lending License',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The benefits of Peer to Peer Lending License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Application for the Procedure of obtaining Peer to Peer Lending License can be filed online;',
                            },
                            {
                                title: 'P2P Lending is a Fast and Convenient mode of Lending and Borrowing money;',
                            },
                            {
                                title: 'People are able to access loans at lower interest rates;',
                            },
                            {
                                title: 'Getting an Initial Quote will not have any impact on the credit score;',
                            },
                            {
                                title: 'Acts as an alternative option for providing loan to traditional lenders;',
                            },
                            {
                                title: 'Loans given by the Peer to Peer Lending Platforms are more flexible in nature than Traditional Loans;',
                            },
                            {
                                title: 'P2P Digital Platforms matches the borrowers with the appropriate Lenders;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Eligibility Criteria to Start Peer to Peer Digital Lending Platform in India',
                navigationTitle: 'Eligibility Criteria',
                containerKey: 'eligibilitycriteria',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The Eligibility Criteria to obtain Peer to Peer Lending License in India can be summarised as:"
                        ],
                        innerList: [
                            {
                                title: 'A company that wishes to acquire Peer to Peer Lending License in India needs to first obtain a Certificate of Registration under the provisions of the Companies Act 2013;',
                            },
                            {
                                title: 'A company that wishes to acquire a P2P Lending License in India must have the NOF (Net Owned Funds) of at least Rs 2 crores;',
                            },
                            {
                                title: 'If in case a Company or a business entity was already running such type of business before the obtaining of Certificate of Registration was made mandatory, then, in that case, such type of Company will fulfil all the conditions prescribed and laid down by the Reserve Bank of India;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Responsibilities of Peer to Peer Digital Lending Platform in India',
                navigationTitle: 'Responsibilities',
                containerKey: 'responsibilities',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The responsibilities of the Peer to Peer Digital Lending Platforms in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Undertaking the process of due diligence on its proposed participants before approving them as participants on the P2P platform;',
                            },
                            {
                                title: 'Carrying out the risk profiling & credit assessment of the listed borrowers & disclosing the same to the registered lenders;',
                            },
                            {
                                title: 'Necessitating explicit & prior consent of the participants to have access to its credit information;',
                            },
                            {
                                title: 'Carrying out the process of documentation of the loan agreements & other pertinent documents;',
                            },
                            {
                                title: 'Rendering assistance in repayments & disbursement of the loan amount;',
                            },
                            {
                                title: 'Offering services concerning the loan recovery of the loans that are originated on the platform;',
                            }
                        ]
                    }
                ]
            }
        ]   
    },
    PAYMENT_BANK_LICENSE: {
        title: FormPageScreenTitleMap['PAYMENT_GATEWAY_LICENSE'],
        description: FormPageScreenDescriptionMap['PAYMENT_GATEWAY_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - Payment Bank License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "In the recent era, the concept of Payment Bank has received both remarkable and reachable hooks in its banking circle business. The term Payment Bank denotes a newly introduced RBI model, which had accelerated transactions, such as a regular bank, except for issuing credit cards and lending. However, to start an online Payment Bank in India, a company or an NBFC needs to acquire Payment Bank License from the RBI.",
                            "Further, the main reason due to which the concept of Payment Bank has got much significance is the said model has the capability to give extensions to the Government’s Financial Targets. Also, it shall be noted that the concept of Demonetization had completely recast the Indian Economic System. As a result, people now rely more on digital payment portals and paperless transactions, which has ultimately given a significant boost to the E-wallets or Mobile Wallets that were earlier outcasted."
                        ],
                        innerList: [
                            {
                                title: "Laws Governing the Concept of Payment Banks",
                                description: [
                                    "The concept of a specialised bank model was introduced by the Reserve Bank of India in the year 2013. The same was termed as Payments Bank. It shall be noted that similar to the services offered by other Banks, a Payment Bank provides a range of financial services, except for offering credit cards and facilitating loans.",
                                    "To open a Payment Bank in India, it is mandatory for the applicant company to obtain a Payment Bank License from the Apex Bank.",
                                    "Further, based on the provisions of section 22 of the Banking Regulations Act 1949, the Reserve Bank of Bank will issue the Payment Bank License to the applicant company. The said license allows the applicant to carry out banking activities. The term banking activities have the same meaning as specified under the provisions of section 5 (b) and 6 (1) (a) to (o) of the Banking Regulation Act."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Regulatory Structure of Payment Bank License',
                navigationTitle: 'Regulatory Structure',
                containerKey: 'regulatorystructure',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The regulatory structure of Payment Bank License are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Companies Act 2013;',
                            },
                            {
                                title: 'Banking Regulation Act 1949;',
                            },
                            {
                                title: 'Deposit Insurance & Credit Guarantee Corporation Act 1961.',
                            },
                            {
                                title: 'Foreign Exchange Management Act 1999;',
                            },
                            {
                                title: 'Reserve Bank of India 1934;',
                            },
                            {
                                title: 'Payment & Settlement System Act 2007;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Obtaining Payment Bank License',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The steps involved in the process for obtaining Payment Bank License are as follows:"
                        ],
                        innerList: [
                            {
                                title: "In the first step, there is a need for the applicant to get a Public Limited Company registered under the provisions of the Companies Act 2013;"
                            },
                            {
                                title: "Now, file an application for authorisation to the CGM (Chief General Manager) of the Apex Bank to issue the Payment Bank License;"
                            },
                            {
                                title: "In the next step, the EAC (External Advisory Committee) is required to assess the filed application. After that, it need to summon the applicant to authenticate the information given by them;"
                            },
                            {
                                title: "RBI will issue the Payment Bank License if the applicant company is able to fulfil all the specified criteria;"
                            },
                            {
                                title: "Subsequent to the last step, the name of the said applicant will be displayed on the official website of RBI;"
                            },
                            {
                                title: "Lastly, after obtaining the principal approval to work as a payment bank from Apex Bank, the said applicant company needs to establish a bank within a period of 18 months, starting from the date of issuance of the license."
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Payment Bank License',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: "The key benefits of the Payment Bank License in India are as follows:",
                value: [
                    {
                        title: "Zero Account Balance",
                        description: [
                            "One of the major benefits of a payment bank is that it is not mandatory and obligatory for the account holder to maintain a certain amount as the minimum required amount. That means one can have zero account balance as well."
                        ]
                    },
                    {
                        title: "Higher Interest Rate",
                        description: [
                            "The cost-saving benefit, due to operational efficiency, is further passed to the customer through higher interest."
                        ]
                    },
                    {
                        title: "Convenience",
                        description: [
                            "Another significant benefit of a Payment Bank is that due to its wide distribution network, the telecom services providers and mobile wallet are able to convert its retail outlets to separate banking points."
                        ]
                    },
                    {
                        title: "Safe And Secure",
                        description: [
                            "Due to 4 factor authentication, the concept of a payment bank is one of the secured models of online transaction introduced by the Reserve Bank of India."
                        ]
                    },
                    {
                        title: "Account No Is Same As Mobile No",
                        description: [
                            "Normally, this is not that significant feature, but it does increase the level of ease for the holders, who are an especially small business trader, merchants, etc., as there is no need for them to remember any other number as account number for carrying out transactions."
                        ]
                    },
                    {
                        title: "Cashback And Discount Offers",
                        description: [
                            "Similar to any other mobile wallet, a payment bank provides various discount and cashback offers to the holder."
                        ]
                    },
                    {
                        title: "Additional Benefits",
                        description: [
                            "A Payment Bank offers various benefits to its account holders other than the cashback and discount offers."
                        ]
                    }
                ]
            },
            {
                title: 'Eligibility Criteria to Obtain Payment Bank License in India',
                navigationTitle: 'Eligibility Criteria',
                containerKey: 'eligibilitycriteria',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The ones who are qualified to obtain Payment Bank License in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Individuals or Professionals;',
                            },
                            {
                                title: 'Mobile Telephone Companies;',
                            },
                            {
                                title: 'Non-Banking Financial Company (NBFC);',
                            },
                            {
                                title: 'Real Estate Sector Cooperatives;',
                            },
                            {
                                title: 'Supermarket Chains;',
                            },
                            {
                                title: 'Public Sector Entities;',
                            },
                            {
                                title: 'A Promoter or a Group of Promoters, who owns a Joint Venture, that, too, with an existing Scheduled Commercial Bank;',
                            },
                            {
                                title: 'Existing Non-bank PPIs (Prepaid Payment Instrument) under the Payment & Settlement Systems Act 2007;',
                            },
                            {
                                title: 'Corporate Business Correspondence;',
                            },
                            {
                                title: 'Public Companies;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Capital Requirements for Obtaining Payment Bank License',
                navigationTitle: 'Capital Requirements',
                containerKey: 'capitalrequirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The capital requirements for obtaining Payment Bank License in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: "The applicant company must have a minimum paid up equity of Rs 100 crore to start payment in India;"
                            },
                            {
                                title: "In India, a payment bank is required to maintain a minimum CAR (Capital Adequacy Ratio) of 15 percent of its total RWA (Risk Weighted Assets). The same is subject to any such higher amount as specified by the RBI from time to time;"
                            },
                            {
                                title: "Tier I Capital needs to be at least 7.5 percent of the total Risk Weighted Assets;"
                            },
                            {
                                title: "Tier II Capital needs to be limited to a maximum of 100% of the whole Tier I Capital;"
                            },
                            {
                                title: "A Payment Bank is not eligible to deal with sophisticated items. That means the Capital Adequacy Ratio (CAR) is identified based on the Basel Committee’s Standardised approaches."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    PAYMENT_GATEWAY_LICENSE: {
        title: FormPageScreenTitleMap['PAYMENT_GATEWAY_LICENSE'],
        description: FormPageScreenDescriptionMap['PAYMENT_GATEWAY_LICENSE'],
        navigationContainers: [
            {
                title: 'Overview - Payment Gateway License',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "As we are aware of the fact that the popularity of online shopping in India has increased immensely due to the benefits of ease and flexibility offered by this platform. The term Payment Gateway denotes a financial service that is provided by way of an e-commerce application service provider. However, to start a Payment Gateway service in India, one needs to obtain Payment Gateway License from the Reserve Bank of India.",
                            "Apart from shopping, this digital platform facilitates the payment of bills and recharges. Over the period of time, the same has taken an online route as well. Further, it shall be noted that whenever a person purchases one or the other thing online or even pay a bill, he/ she clicks on the option ‘Pay Now’, and is redirected to a new page. The page to which that person is redirected is known as the Payment Gateway Website, this is used for making the payment of goods and services purchased."
                        ],
                        innerList: [
                            {
                                title: "Concept of Payment Gateway",
                                description: [
                                    "The term Payment Gateway means an intermediary, which works between the website that facilitates communication concerning transaction and the banks. That means it generates information from the respective buyer bank and supplies the same transaction information to the receiving bank, after that it notes the feedback as to whether the said transaction has been duly approved or declined."
                                ]
                            },
                            {
                                title: "License for Starting Payment Gateway Business in India",
                                description: [
                                    "Based on the provisions of section 4 of the Payment and Settlement System Act 2007, no individual except the Reserve Bank of India can either operate or start a payment mechanism. Further, if an individual or a business entity want to commence the same, then, in that case, they need to file an application for authorization to the Apex Bank. The same must be based on the provisions of section 5 of the PSS Act 2007."
                                ]
                            },
                            {
                                title: "Laws Governing Payment Gateway License in India",
                                description: [
                                    "The main reason behind the enactment of the Payment and Settlement System Act, 2007 (PSS Act) was to regulate and supervise the payments system and mechanisms operating in India by the Reserve Bank of India. The same shall be the primary regulatory authority for the purposes and all the incidental matters that fall under the ambit of this Act.",
                                    "Further, there are two regulations that have been passed under this Act by the Reserve Bank of India, namely:"
                                ],
                                innerList: [
                                    {
                                        title: "Board For Regulation & Supervision Of Payment & Settlements System Regulations 2008",
                                        description: [
                                            "This particular regulation mainly deals with the constitution & composition of the Board for Regulation & Supervision of the Payment and Settlement System and a Committee of the RBI’s Central Board of Directors."
                                        ]
                                    },
                                    {
                                        title: "Payment & Settlements System Regulations 2008",
                                        description: [
                                            "The same deals with all the matters, such as the application for authorization of starting payment system, issuing such authorization, instructions concerning to payments, standards to be maintained in the payment system, timely submission of relevant documents and financial information, etc."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Obtaining Payment Gateway License',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The steps involved in the Registration Procedure for obtaining Payment Gateway License in India are as follows:",
                value: [
                    {
                        title: "File Application For Registration",
                        description: [
                            "In the first step, the applicant needs to file an application for authorisation in the prescribed Form A. The same is done based on the provisions of section 5(1) of the PSS Act.",
                            "Further, the said application will be made to the “Chief General Manager” of the “Department of Payment & Settlement Systems” at the Central Offices of the Reserve Bank of India at Mumbai, or at other offices of the RBI, as may be prescribed by it from time to time."
                        ]
                    },
                    {
                        title: "RBI Checks Authenticity",
                        description: [
                            "Based on the provisions of section 6 of the Payment and Settlement System Act 2007, obtaining RBI’s approval for the issuance of the authorisation is discretionary.",
                            "Further, the Reserve Bank of India (RBI) has the authority to hold such type of inquiries as it may consider required for the purpose of satisfying itself regarding the authenticity of the details and information that have been furnished by the applicant and for verifying the credentials of the involved participants."
                        ]
                    },
                    {
                        title: "Compliance Of Conditions For Authorization",
                        description: [
                            "The Reserve Bank of India will take the conditions as follows into the account prior to issuing the authorization:",
                            "a) The necessity for the proposal payment mechanism or the services that have been declared to be undertaken by it;",
                            "b) All the technical standards that have been decided for the payment mechanism or the structure of the decided payment system;",
                            "c) The terms and conditions, inclusive of the security procedure, for the operation of the proposed payment system;",
                            "d) The method in which the assignment is done in the provided payment system;",
                            "e) The manner or the way for getting of payment instructions that will affect the payment conditions under the payment system;",
                            "f) The overall management’s financial status, experience, and the integrity of the applicant;",
                            "g) The terms & conditions that govern and regulate the relationship of the customers with the respective payment providers;",
                            "h) The credit & monetary policies;",
                            "i) Time frame for authorization;",
                        ]
                    },
                    {
                        title: "Issuance Of Authorization Certificate",
                        description: [
                            "If the Reserve Bank of India (RBI) is satisfied that all the requirements laid down in section 7(1) are duly fulfilled, it may issue the Authorization Certificate in Form ‘B’ for commencing and carrying on a payment system to the applicant. Further, the authorization will take effect from the date as mentioned by the RBI and as per the conditions that have been imposed by the RBI."
                        ]
                    },
                    {
                        title: "Authorization Within 6 Months",
                        description: [
                            "Based on the provision of section 4 of the Payment and Settlement System Act 2007, the Reserve Bank of India is needed to process the application filed for authorization at the earliest, with a maximum time frame of six months, starting from the date on which the said application for the authorization has been filed."
                        ]
                    }
                ]
            },
            {
                title: 'Basic Requirements of Payment Gateway License',
                navigationTitle: 'Basic Requirements',
                containerKey: 'basicrequirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The basic requirements of Payment Gateway License in India:"
                        ],
                        innerList: [
                            {
                                title: 'The said entity or company must be incorporated under the provisions of the Companies Act 2013 or the Companies Act 1956;',
                            },
                            {
                                title: 'A Minimum of 2 Members;',
                            },
                            {
                                title: 'A Minimum of 2 Directors;',
                            },
                            {
                                title: 'Address Proof of the Business;',
                            },
                            {
                                title: '5 years Business Plan;',
                            },
                            {
                                title: 'PAN of the Company;',
                            },
                            {
                                title: 'Current Bank Account details of the Company;',
                            },
                            {
                                title: 'System Flow & Code Testing Report by the Software Certifying Agency;',
                            },
                            {
                                title: 'Service Tax Registration Number;',
                            },
                            {
                                title: 'Compliance with the PCI DSS;',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Capital Requirements of Payment Gateway License',
                navigationTitle: 'Capital Requirements',
                containerKey: 'capitalrequirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The capital requirements of Payment Gateway License in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: "It shall be noted that only the Non Banking Financial Companies (NBFCs) and the schedule banks need to comply with the Capital Adequacy Requirements prescribed by the Reserve Bank of India. Also, only these will be permitted to issue the prepaid payment instruments;"
                            },
                            {
                                title: "All the entities that are authorized under the provisions of the Foreign Exchange Management Act 1999 (FEMA) to issue the foreign exchange PPI (Prepaid Payment Instrument) are relieved from the scope of RBI guidelines. Further, the use of such instruments will be restricted to the permissible current account dealing and transactions, and are subject to the prescribed restrictions under the provisions of the Foreign Exchange Management (Current Account Transactions) Rules 2000, as amended from time to time;"
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'IT Requirements for Obtaining Payment Gateway License',
                navigationTitle: 'IT Requirements',
                containerKey: 'itrequirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The different IT Requirements for obtaining Payment Gateway License in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'Information Security Governance;',
                            },
                            {
                                title: 'Data Security Standards;',
                            },
                            {
                                title: 'Security Incident Reporting;',
                            },
                            {
                                title: 'Merchant On-boarding;',
                            },
                            {
                                title: 'Cyber Security Audit & Reports;',
                            },
                            {
                                title: 'Staff Competency;',
                            },
                            {
                                title: 'Vendor Risk Assessment;',
                            },
                            {
                                title: 'Maturity & Roadmap;',
                            },
                            {
                                title: 'Cryptographic Requirement;',
                            },
                            {
                                title: 'Data Sovereignty;',
                            },
                            {
                                title: 'Data Security in Outsourcing;',
                            },
                            {
                                title: 'Payment Application Security;',
                            }
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
                            "The documents needed for obtaining Payment Gateway License in India are as follows:"
                        ],
                        innerList: [
                            {
                                title: 'A copy of the issued Certificate of Incorporation (COI) to the Company by the Registrar of Companies (ROC);',
                            },
                            {
                                title: 'Details of PAN Card of the Directors;',
                            },
                            {
                                title: 'Address Proof of the Directors;',
                            },
                            {
                                title: 'Digital Signature Certificate (DSC) of the Directors;',
                            },
                            {
                                title: 'Director Identification Number (DIN) of the Directors;',
                            },
                            {
                                title: 'Registered Office’s Address Proof;',
                            },
                            {
                                title: 'Comprehensive Details of the Company’s Current Bank Account;',
                            },
                            {
                                title: 'Business Plan of the Company for the Next Five Financial Years;',
                            },
                            {
                                title: 'Report regarding the Testing Code by a Software Agency;',
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Advantages of Payment Gateway License',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: "The benefits of obtaining Payment Gateway License are as follows:",
                value: [
                    {
                        title: "PCI – DSS Wallet",
                        description: [
                            "The PCI – DSS Wallet compliance provides security to the users of the application by securing their personal data in the portal or gateway for recurring payments.",
                            "For example, an individual who is a regular customer on the Amazon Application can save his/ her bank account details on it or on its official website, and the gateway safeguards the same from every sort of cyber security threat."
                        ]
                    },
                    {
                        title: "White Label Wallet",
                        description: [
                            "It shall be noted that some of the payment gateways permit customers to make digital transactions from the mobile wallet applications. It is the latest trend, as it allows the users to carry all their operations and transactions from one place.",
                            "Further, one can easily transfer the amount from the bank account to his/ her mobile wallet application, and can then use the same for making payments on other mobile applications or websites."
                        ]
                    },
                    {
                        title: "Fraud Screening Tools",
                        description: [
                            "Some of the payment gateways gives their customer the benefit of FST (Fraud Screening Tools) for the purpose of reducing the risk of losing personal data.",
                            "The term Fraud Screening Tools comprises of the CCV (Card Code Value), AVS (Address Verification Service), and CVV (Card Verification Value).",
                            "Further, it shall be noted that the primary objective of these tools is to confirm that there is no fraudulent transaction going on.",
                            "Also, another significant benefit of a payment gateway is that it permits transactions and dealings from multiple users that, too at the same time. This itself makes the same feasible for a customer to buy or sell goods & services whenever he or she wants."
                        ]
                    }
                ]
            },
        ]
    },
    FEMA_COMPLIANCES: {
        title: FormPageScreenTitleMap['FEMA_COMPLIANCES'],
        description: FormPageScreenDescriptionMap['FEMA_COMPLIANCES'],
        navigationContainers: [
            {
                title: 'Overview - FEMA Compliance',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The Foreign Exchange Management Act (FEMA) acts as the guiding law to regulate the flow of funds flowing from foreign countries to India and vice versa. The act came into existence in 1999, and apart from regulation of funds, it also mentions FEMA compliances that a corporate body should follow.",
                            "This act helped smooth the functioning of cross-border trade, increased foreign investment, transparency of international financial transactions, and balance of trade payments.",
                            "The importance of FEMA filing becomes more relevant due to globalization and the fast pace growth of international trade investments. Moreover, to keep a check on sectoral caps, investment caps and avoids penalties in FEMA's non-compliances.",
                            "Therefore, it is essential for corporate to stay compliant with the rules and regulations mentioned in FEMA. Furthermore, this practice can smooth international business activities and favorably manage their regulatory liabilities."
                        ]
                    }
                ]
            },
            {
                title: 'Types of Services offered for Compliance under FEMA',
                navigationTitle: 'Services',
                containerKey: 'services',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Compliance Advisory Of ECB",
                        description: [
                            "External Commercial Borrowings are those commercial loans that are taken by the Public Sector Undertakings and Companies. These loans are borrowed from the foreign companies and foreign institutional investors. ECB offers an interest of higher rate in comparison to the loans which are borrowed in India."
                        ]
                    },
                    {
                        title: "Acquisition Of Immovable-Property",
                        description: [
                            "Any individual residing outside India is eligible to acquire property in India. The Foreign Exchange Management Act, 1999 (FEMA) allows the acquisition of immovable property. FEMA and RBI also regulate the purchase of property outside India."
                        ]
                    },
                    {
                        title: "Exit Options By Foreign Investors",
                        description: [
                            "The foreign investors use the exit option when there is no adequate rate of return on investment done by them. It is compulsory for the foreign investors to complete a minimum lock-in period for using such options."
                        ]
                    },
                    {
                        title: "Establishment Of Global Business Under FEMA",
                        description: [
                            "Companies can establish their existence outside India."
                        ]
                    },
                    {
                        title: "NBFC Compliance Under FEMA",
                        description: [
                            "The foreign investors have to be in compliance with the appropriate regulations that are related to Foreign Exchange Management Act for investment in an NBFC."
                        ]
                    },
                    {
                        title: "NRI Bank Accounts",
                        description: [
                            "There is option for the Non-Resident Indians to set up various bank accounts in India, like FCNR, NRE and NRO Accounts."
                        ]
                    },
                    {
                        title: "Business And Share Valuation Under FEMA",
                        description: [
                            "Business and share valuation is the process which calculates the real value of the business or the share. The process of calculation is done according to the internationally established methods and carried out by a SEBI registered merchant banker or a chartered accountant."
                        ]
                    },
                    {
                        title: "Loan To NRIs",
                        description: [
                            "NRIs are permitted to receive loans from an Indian Company or any resident Indian."
                        ]
                    },
                    {
                        title: "NRI Investment FEMA Compliance",
                        description: [
                            "The routes for NRI investments have to be made in compliance with FEMA law."
                        ]
                    },
                    {
                        title: "NRI Investments Which Are On Non-Repatriable Basis",
                        description: [
                            "NRI’s investments that cannot be sent back to the home country of the investor."
                        ]
                    },
                    {
                        title: "FEMA Compliance For Foreign Investment In India",
                        description: [
                            "This will include the foreign direct investment and route under the foreign direct investment."
                        ]
                    },
                    {
                        title: "Investment By A Foreign Company Or Partnership In India",
                        description: [
                            "This specifies the various investment modes that are permitted for the foreign companies to invest in India."
                        ]
                    }
                ]
            },
            {
                title: 'Eligibility criteria under FEMA Compliance',
                navigationTitle: 'Eligibility criteria',
                containerKey: 'eligibilitycriteria',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The following are eligible to use services under FEMA:"
                        ],
                        innerList: [
                            {
                                title: "Individuals."
                            },
                            {
                                title: "Non-Resident Indians (NRIs)."
                            },
                            {
                                title: "Companies."
                            },
                            {
                                title: "Foreign Individuals."
                            },
                            {
                                title: "High Net worth Individuals."
                            },
                            {
                                title: "Partnerships/ proprietorship concerns."
                            },
                            {
                                title: "Foreign Institutional Investors."
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'FEMA Compliance Guidelines and Features',
                navigationTitle: 'Guidelines & Features',
                containerKey: 'guidelinesandfeatures',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "FEMA considers all forex-associated offenses as civil offenses, whereas FERA considers them as criminal offenses. Therefore, it can be counted as one of the features of FEMA."
                        ],
                        innerList: [
                            {
                                title: "Other Essential Features And Guidelines Of FEMA Compliance Are As Follows:",
                                description: [
                                    "FEMA will not apply to Indian people living in foreign countries. To determine an Indian citizen's residence, a technique is used. First, the number of days an individual spent in India during the previous fiscal year is determined (182 days or more to be a resident). To calculate Indian residence, an office, a branch, or an agency might be considered a person.",
                                    "FEMA gives the federal government the power to place limitations on three items while also overseeing them. These include payments made to people outside of India, payments received from India, currencies, and foreign security arrangements.",
                                    "It indicates the territories around acquisition/holding of forex that requires the Reserve Bank of India (RBI) or the government.",
                                    "FEMA classifies foreign exchange transactions into two categories:",
                                ],
                                innerList: [
                                    {
                                        title: "1. Capital Account"
                                    },
                                    {
                                        title: "2. Current Account"
                                    }
                                ]
                            },
                            {
                                description: [
                                    "The purpose of capital account transaction is to adjust the assets and liabilities outside or inside India and an individual who resides outside India. Thus, any transaction that has led to a change in overseas assets and liabilities for an Indian resident in a remote nation or vice versa falls under the category of capital account transaction. Any other sort of transaction falls into the category of a current account."
                                ]
                            },
                            {
                                title: "Penalty For Non-Compliance Under FEMA",
                                description: [
                                    "Individuals and corporates who do not follow FEMA's rules, instructions, and restrictions are subject to penalties. The penalty might be up to triple the amount involved in the violation of up to Rs 2 lakhs. In addition, additional penalties may be imposed, with the maximum penalty being Rs. 5,000 each day following the first day of the violation. As a result, it is prudent of you to follow all FEMA regulations."
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    MSME_UDYAM: {
        title: FormPageScreenTitleMap['MSME_UDYAM'],
        description: FormPageScreenDescriptionMap['MSME_UDYAM'],
        navigationContainers: [
            {
                title: 'Overview - MSME Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Before understanding, what is MSME Registration; it is important to know what MSME is? MSME stands for Micro, Small, and Medium Enterprises and is the backbone of the economy. MSME is the apex executive body for the implementation and administration of rules, regulations, and laws relating to Micro, Small, and Medium Enterprises. Both the Manufacturing and Service sectors can apply for MSME Registration.",
                            "Now, if we talk about MSME Registration, MSME Registration is a simple and less time-consuming process for registering the MSMEs and SMEs. It provides various benefits to the enterprises like by providing financial support and also excess to government subsidies. It helps in improving the infrastructure and in expanding the business."
                        ]
                    }
                ]
            },
            {
                title: 'Process to Obtain the MSME Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "An applicant shall comply with the below-mentioned procedure to obtain the MSME Registration-",
                value: [
                    {
                        title: "Visit The Page",
                        description: [
                            "An applicant needs to Visit the Page https://www.msmeregistration.org/."
                        ]
                    },
                    {
                        title: "Enter The Aadhar Number",
                        description: [
                            "An applicant shall enter the Aadhar No. and click on generate OTP. The OTP will be sent to the Mobile Number linked to the Aadhar card."
                        ]
                    },
                    {
                        title: "Fill The Application Form",
                        description: [
                            "An applicant has to fill in the requisite details along with the personal details in the application form.",
                            "Here, the Personal details include Name, address, PAN Card, Bank account details, and some relevant information that is mandatory during the MSME registration process. Also, a photograph of the applicant needs to be uploaded.",
                            "Also, few things are taken into consideration while applying i.e. the MSME Registration can be done under the following categories-",
                            "1. New registration.",
                            "2. For those having registration as EMI-II or Udyog Aadhar Memorandum.",
                            "Further, New registration is done by entering Aadhar details of the applicant in 2 ways:-",
                            "1. Registration with PAN Card",
                            "2. Registration without PAN Card.",
                        ]
                    },
                    {
                        title: "Submission Of Application",
                        description: [
                            "Once the details are filed, an applicant shall apply."
                        ]
                    },
                    {
                        title: "Processing Of Application",
                        description: [
                            "Once the application is submitted, the executive will review the application. In case of any discrepancies, the executive will intimate the same to the applicant on his/her registered E-mail id and number to make the relevant changes."
                        ]
                    },
                    {
                        title: "Receiving The MSME Certificate",
                        description: [
                            "After reviewing the application, the authority will issue the certificate for MSME Registration."
                        ]
                    }
                ]
            },
            {
                title: 'Eligible for MSME Registration',
                navigationTitle: 'Eligibility',
                containerKey: 'eligibility',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The Below-mentioned entities are eligible for MSME Registration-",
                            "All the micro, small and medium level business entities falling in the prescribed parameter, can apply for MSME registration in India. Apart from Micro, small, and medium level enterprises-"
                        ],
                        innerList: [
                            {
                                title: 'Limited liability partnerships (LLP),',
                            },
                            {
                                title: 'A private limited company (Pvt. Ltd.),',
                            },
                            {
                                title: 'One-person companies (OPC),',
                            },
                            {
                                title: 'Proprietorship firms and',
                            },
                            {
                                title: 'Public companies can also apply for MSME registration. Also, if the Company is in the manufacturing or the service sector can go for MSME Registration.',
                            },
                            {
                                title: 'Any entity having a valid Aadhar Number can apply for MSME Registration.As Aadhaar Number is mandatory for issuance of MSME Certificate.',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Essential Components of Application for MSME Registration',
                navigationTitle: 'Essential Components',
                containerKey: 'essentialcomponents',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "The essential components of MSME Application for MSME Registration are:-"
                        ],
                        innerList: [
                            {
                                title: "Name of Individual/Entity as per Aadhar card."
                            },
                            {
                                title: "Social category (General, OBC, SC/ST)"
                            },
                            {
                                title: "Gender"
                            },
                            {
                                title: "Physically Handicapped"
                            },
                            {
                                title: "Name and type of the Organization."
                            },
                            {
                                title: "PAN Card of Individual and Enterprise"
                            },
                            {
                                title: "Location/Address of Plant."
                            },
                            {
                                title: "Country, State, District, City, Tehsil, PIN Code"
                            },
                            {
                                title: "Address Proof of office."
                            },
                            {
                                title: "Mobile Number and Email ID of the Applicant."
                            },
                            {
                                title: "Date of Commencement of Business"
                            },
                            {
                                title: "Bank account number and IFSC code"
                            },
                            {
                                title: "Business activity of the enterprise"
                            },
                            {
                                title: "NIC 2 Digit Code – Based on primary activity."
                            },
                            {
                                title: "Additional information of enterprise if any"
                            },
                            {
                                title: "Number of employees"
                            },
                            {
                                title: "Investment amount in Plant & Machinery"
                            }
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
                            "Apart from the above-mentioned details, requisite documents are also required for MSME Registration-"
                        ],
                        innerList: [
                            {
                                title: 'Id and Address Proof of the Applicant.',
                            },
                            {
                                title: 'Photograph of the Applicant.',
                            },
                            {
                                title: 'Aadhar Card of the Applicant.',
                            },
                            {
                                title: 'Documents related to the Business entity.',
                            },
                            {
                                title: 'Address Proof of Working premise. In the case of a Self-owned property-Sale deed is required. In the case of rented property-Rent Agreement and NOC from the owner is required.',
                            },
                            {
                                title: 'Bank related documents.',
                            },
                            {
                                title: 'In the case of Partnership Firm-Partnership Deed is required.',
                            },
                            {
                                title: 'In the case of Company-PAN Card, MOA, AOA ,and Certificate of Incorporation',
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Advantages of Availing the MSME Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: "MSME Registration provides various benefits to Micro, Small, and Medium Enterprises. A Few of them are mentioned below:-",
                value: [
                    {
                        title: "Helps In Obtaining The Government Tenders",
                        description: [
                            "MSME registration assist to acquire government tenders with no trouble as Udyam Registration Portal is incorporated with Government e-Marketplace & various other State Government portals which present easy access to their marketplace & e-tenders."
                        ]
                    },
                    {
                        title: "Exemptions Under Direct Tax Laws",
                        description: [
                            "Enterprises that enclose MSME Registration can benefit from Direct Tax Exemption in the early year of business, as stated in the scheme by Government & depending on business activity too."
                        ]
                    },
                    {
                        title: "Collateral Free Loans From Banks",
                        description: [
                            "The Government of India has authorized collateral-free credit available to all small & micro business sectors. This scheme guarantees funds to micro and small division enterprises. Under this very scheme, both the old and new enterprises can seek the benefits.",
                            "The ‘Credit Guarantee Fund Scheme’ (CGS) for Micro & Small Enterprises was launched by the Government of India to make accessible collateral-free credit to the micro & small enterprise sector. Both the existing & the new enterprises are entitled to be covered under this scheme."
                        ]
                    },
                    {
                        title: "Exemption On The Overdraft Interest Rate",
                        description: [
                            "Enterprises or Businesses registered under MSME can gain a benefit of 1% on the Over Draft as stated in a scheme that varies from bank to bank."
                        ]
                    },
                    {
                        title: "Claim The Expenses For The ISO Certification",
                        description: [
                            "The registered MSME can seek the reimbursement of the operating cost that was spent for recognition of ISO certification."
                        ]
                    },
                    {
                        title: "Concession In Electricity Bills",
                        description: [
                            "This concession is accessible to all the Enterprises that have the MSME Registration Certificate by providing an application to the department of the electricity along with the certificate of registration by MSME."
                        ]
                    },
                    {
                        title: "Subsidy On Patent Registration",
                        description: [
                            "A hefty 50% subsidy is given to the Enterprise that has the certificate of registration granted by MSME. This subsidy can be availed for patent registration by giving application to respective ministry."
                        ]
                    },
                    {
                        title: "Industrial Promotion Subsidy Eligibility",
                        description: [
                            "Businesses registered under MSME are also qualified for getting a subsidy for Industrial Promotion as recommended by the Government."
                        ]
                    },
                    {
                        title: "Protection Against Delayed Payments",
                        description: [
                            "Sometimes, the buyers of services and products from the MSME’s/SSIs tend to delay the payments. The Ministry of MSME lends a helping hand to such Businesses by giving them the power to collect interest on the payments that are deferred or delayed from the buyer’s side. The completion of such disputes has to be done in minimum time through reconciliation and adjudication."
                        ]
                    },
                    {
                        title: "Special Consideration On International Trade Fairs",
                        description: [
                            "Financial assistance is provided on a reimbursement under the International Cooperation Scheme basis to the industries/enterprises Associations and registered societies/trusts, State/Central Government organizations, and organizations connected with MSME for delegation of MSME business to other countries. It is for discovering new areas of MSMEs, contribution by Indian MSMEs in trade fairs, international exhibitions, buyer-seller meet & for holding international conference & seminars which are in the concern of MSME sectors."
                        ]
                    },
                    {
                        title: "Waiver Of Stamp Duty And Registration Fees",
                        description: [
                            "All new industrial units containing MSME Registration & expansions will be exempted from payments of Stamp Duty & Registration fees in India."
                        ]
                    },
                    {
                        title: "Bar Code Registration Subsidy",
                        description: [
                            "All Enterprises that have MSME Registration can gain Bar Code Registration subsidy as declared in the scheme."
                        ]
                    },
                    {
                        title: "Subsidy On NSIC Performance And Credit Ratings",
                        description: [
                            "Enterprises that encompasses MSME Registration can gain Subsidy on NSIC Performance & Credit ratings as stated in the scheme."
                        ]
                    },
                    {
                        title: "Eligible For Industrial Promotion Subsidy",
                        description: [
                            "All Enterprises that are registered under MSME Registration are qualified for Industrial Promotion Subsidy (IPS) as stated in the scheme."
                        ]
                    },
                    {
                        title: "Access To Tenders",
                        description: [
                            "There are numerous government tenders that are disclosed only to MSMEs to encourage small business involvement in India."
                        ]
                    },
                    {
                        title: "Benefits Of Reservation Policy",
                        description: [
                            "It ensures increased production of consumer goods in the small scale enterprises as well as enlarge employment opportunities throughout setting up small scale industries."
                        ]
                    },
                    {
                        title: "15% CLCSS Subsidy To Purchase Of Plant & Machinery",
                        description: [
                            "The Ministry of MSME is operating a scheme particularly CLCSS “Credit Linked CGSTI Subsidy Scheme” for technology up-gradation of MSE.",
                            "The revised scheme aims at assisting technology up-gradation of MSEs by giving a 15% capital subsidy (limited to maximum Rs.15 lakhs) for the purchase of Plant & Machinery."
                        ]
                    },
                    {
                        title: "Reservation Policies To Manufacturing/Production Sector",
                        description: [
                            "Reservation of items for exclusive manufacture in SSI sector statutorily provided for in the Industries (Development and Regulation) Act, 1951, has been one of the important policy measures for promoting this text-center sector."
                        ]
                    }
                ]
            },
        ]
    },
    IEC: {
        title: FormPageScreenTitleMap['IEC'],
        description: FormPageScreenDescriptionMap['IEC'],
        navigationContainers: [
            {
                title: 'Overview - IEC Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industries, issues IEC registration. It is necessary for Indian companies to have IEC registration if companies want to expand their business via Import and Export. Import Export Code is a ten digit code which is issued by DGFT, the purpose of Import Export License Certificate is to regulate and monitor the foreign trade activities in India.",
                            "For carrying out Import Export activities in India obtaining IEC registration is compulsory, without having IEC license no business can involve in import export activity. Plus, if any business wants to entertain the benefits provided by the government then getting IEC registration is must. Reserve Bank of India has made it compulsory for all the traders to provide their Import Export Code during any payment transfer.",
                            "In the present era of ever-growing competition, businesses, in order to survive their substitutes available in the domestic market, are stepping out of their local presence. With back to back innovations and the generation of new ideas in business, the emergence of e-commerce, business operating in local limits finds it important to operate globally by stepping abroad.",
                            "There are several methods to go beyond the domestic level, such as amalgamation for foreign brands, opening franchisee abroad, starting subsidiary or branch office abroad, or through import-export business. Doing business at the global level is not that easy as it sounds.",
                            "Import Export Code (IEC) once gave can be utilized by the entity all through its existence and it doesn’t necessarily need any renewal. When the organization has gotten IEC, at that point the organization can involve in import export necessities with no issues."
                        ]
                    }
                ]
            },
            {
                title: 'New Online Procedure of IEC Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "One can apply for IEC on its website WWW.DGFT.GOV.IN as DGFT is an only authority to issue IEC. At present, DGFT with effect from 1st July 2020 has introduced an updated procedure & a new way to apply IEC online in which DSC would be obligatory to upload. DSC requirement has been announced by DGFT to reinforce IEC issuance procedure and to stop fraud.",
                            "IEC or Import export code is issued by DGFT (Director General of Foreign Trade), Department of Commerce, Government of India, which is a ten digit identification number. It possesses lifetime validity. It is also known as “Importer and exporter code” which helps a person import and export goods officially. Importer cannot import goods having no valid IEC. Also, the exporter cannot avail the export scheme benefit accessible from DGFT deprived of having proper IEC Registration."
                        ],
                        innerList: [
                            {
                                title: "The Procedures For IEC Registration Are As Follows:",
                                innerList: [
                                    {
                                        title: "Step 1: Click On https://dgft.gov.in/CP . After that, click on the “Apply For IEC” button."
                                    },
                                    {
                                        title: "Step 2: You need to enter the Registration Details which are stated below:-",
                                        innerList: [
                                            {
                                                description: [
                                                    "Register User as “Importer/ Exporter”",
                                                    "First and Last Name",
                                                    "Email id & Mobile number of the applicant",
                                                    "Pincode, District, State and City",
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        description: [
                                            "Click on the “Send OTP” button after inserting the details. Put the OTP received on mobile no. and mail id. You shall receive a notification comprising the temporary password on your mail id upon Successful validation of the OTP, which you need to change upon your first login. Now, click on “Apply IEC” button &apm; click on start fresh application option once the user registers and log - in to the “Customer Portal” using the identifications entered in step 2."
                                        ]
                                    },
                                    {
                                        title: "Step 3: Now, you start filing the details in the IEC registration form which are as follows:-",
                                        innerList: [
                                            {
                                                title: "1. General Information",
                                                description: [
                                                    "Nature of the Concern",
                                                    "Firm/Company Name",
                                                    "PAN of the Establishment",
                                                    "Insert Name as per PAN Card",
                                                    "Incorporation of the entity/Date of Birth",
                                                    "The category of exporter i.e. whether it is a Manufacturer exporter or Merchant exporter or Service provider or Merchant cum Manufacturer exporter or any other category.",
                                                    "Select the option, whether the firm is located in the Special Economic Zone (SEZ) or not.",
                                                    "Select the option, whether the firm is located in Electronic Hardware Technology Park (EHTP) Scheme, Export Oriented Unit (EOU) Scheme, Bio-Technology Park (BTP) scheme or Software Technology Park (STP) Scheme)?",
                                                    "Enter the CIN/ LLPIN in case of LLP/company",
                                                    "Enter the GST Number",
                                                    "Enter the mobile no and mail for communication purpose",
                                                    "Upload proof of incorporation/establishment/ registration for the given entity. This subsidiary document is mandatory for Registered Society, HUF, Partnership, Trust, Others.",
                                                    "Enter the details of the firm address",
                                                    "You need to upload supporting documents as “Proof of Address”. This can be any of the following document:",
                                                ],
                                                innerList: [
                                                    {
                                                        description: [
                                                            "i. Rent agreement, Sale Deed, lease deed, mobile, electricity bill, MoU, telephone landline bill, post-paid bill.",
                                                            "ii. Other suitable documents (for proprietorship only): passport, Aadhar card, voter id.",
                                                            "iii. A NOC (no-objection certificate) by the firm premises owner in favour of the firm along with the address proof may be uploaded if the address proof is not in the name of the applicant firm.",
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                description: [
                                                    "Select “Save and Next” option after filling the above details successfully."
                                                ]
                                            },
                                            {
                                                title: "2. Now, You Need To Add Details Of Proprietor/ Director/ Karta/ Partner/ Managing Trustee Of The Entity/Establishment Which Includes The Following Agendas:-",
                                                description: [
                                                    "Insert name as per PAN record",
                                                    "Insert PAN no of the person i.e. Proprietor/ Director/ Karta/ Partner/ Managing Trustee",
                                                    "Insert Date of birth as per PAN Card",
                                                    "Address of the Proprietor/ Director/ Karta/ Partner/ Managing Trustee",
                                                    "Mobile no of the Proprietor/ Director/ Karta/ Partner/ Managing Trustee",
                                                ]
                                            },
                                            {
                                                description: [
                                                    "Select “Save and Next” button after filling the above details successfully."
                                                ]
                                            },
                                            {
                                                innerList: [
                                                    {
                                                        title: "A. Enter Bank Information Of The Entity",
                                                        description: [
                                                            "Bank Information’s like Account holder Name, Bank and Branch name account number, IFSC code. You need to also upload cancelled cheque of the bank account or Bank certificate as per the prescribed Performa.",
                                                            "Select “Save and Next” button after filling the above details successfully."
                                                        ]
                                                    },
                                                    {
                                                        title: "B. Now, You Need To Select Other Details I.E. Preferred Sectors Of Operations.",
                                                        description: [
                                                            "Click on the “Save and Next” button after filling the above details successfully."
                                                        ]
                                                    },
                                                    {
                                                        title: "C. Select The Acceptance Of Undertaking/Declaration And Fill The Place As Well.",
                                                        description: [
                                                            "After that, click on “Save and Next” button to proceed further"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        title: "Step 4: Concluding Submission:-",
                                        description: [
                                            "Click on “Sign” button at the lowermost part of the page - after step 3."
                                        ],
                                        innerList: [
                                            {
                                                description: [
                                                    "Now, you need to select the mode of submission i.e. either through Aadhaar OTP or Digital signature certificate. Enter the ‘Virtual ID/ Aadhaar number’ and click on get OTP in case of Aadhaar OTP, and submit the form",
                                                    "Confirm it and proceed to make the payment against application after the signing of prescribed form is done. For Payment (The Application of IEC Fee is Rs 500) you shall be redirected to ‘Bharatkosh’ Payment Gateway.",
                                                    "Page will be redirected to the DGFT Website after Successful Payment and the receipt shall be displayed to you. You can also download the receipt for your future reference. However, please wait for an hour to reflect the payment from the ‘BharatKosh’ Payment Gateway in case of payment failure."
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Explanation For The Users",
                        description: [
                            "The user will receive the IEC Certificate in the email (used at the time of applying for IEC). However, if required, after login the DGFT Website and using “Print Certificate” feature in “Manage IEC” - the User can also download the IEC Certificate. After that, the IEC shall be communicated to CBIC. Moreover, the transmission status can be seen by directing to navigate “My IEC” and checking the ‘IEC Status bar’ with “CBIC Transmission Status”."
                        ]
                    },
                    {
                        title: "Reminder",
                        description: [
                            "The applicant must update the PAN of the Signatory under “My Dashboard” tab as well as select “View register digital signature Token” In order SIGN the IEC form."
                        ]
                    }
                ]
            },
            {
                title: 'Key Features of IEC Registration',
                navigationTitle: 'Key Features',
                containerKey: 'keyfeatures',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        innerList: [
                            {
                                title: "No business can indulge in Import/Export activities without taking IEC registration"
                            },
                            {
                                title: "It works as a proof that a firm is involve in import/export of goods and products"
                            },
                            {
                                title: "Once obtained, an IEC exists for a lifetime. This implies it does not require any renewal."
                            },
                            {
                                title: "It is not mandatory to involve in import or export of goods for individual or legislative purposes."
                            },
                            {
                                title: "IEC is obligatory for making foreign bank transfers"
                            },
                            {
                                title: "It is substantial for all parts of importers or exporters business."
                            }
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
                            "The documents needed for IEC registration are as follows:-"
                        ],
                        innerList: [
                            {
                                title: 'Scanned copy of proof of incorporation/establishment/ registration for the specified entity. This supporting document is mandatory for Registered Society, HUF, Partnership, Trust, Others.',
                            },
                            {
                                title: 'Scanned copy of Photograph (Passport Size)',
                            },
                            {
                                title: 'Pan of company/individual/ partnership firm/ LLP',
                            },
                            {
                                title: 'ID proof of individual - Aadhar card, passport, voter id, Mobile no. and email-id',
                            },
                            {
                                title: 'You must have a Current or Savings bank account in a bank which contracts and transacts in Foreign Exchange.',
                            },
                            {
                                title: 'You should have scanned copy of rental/lease deed, sale deed, electricity/phone bill for address verification',
                            },
                            {
                                title: 'You are needed to submit the scanned copy of RBI approval letter if an applicant is Non-Resident Indian (NRI) or there is Non-Resident interest in the Company/firm.',
                            },
                            {
                                title: 'You should have ‘Bankers Certificate’ in the prescribed format OR he should have a scanned copy of ‘Cancelled Cheque’ with Entity’s or Individual’s name pre-printed on it.',
                            },
                            {
                                title: 'You should have a ‘Debit/Credit card or Net Banking account’ for Online payment of Government Fees of Rs. 500/- only.',
                            },
                            {
                                title: 'In case of company as applicable, you must have the details of Proprietor and all partners in case of firm or Director',
                            },
                            {
                                title: 'User should have an active Aadhaar or DSC of the firm’s member for submission.',
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Advantages of IEC Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                description: "Till now it is clear that Import Export Code is a ten digit code which is essential for every business to obtain who wants to indulge in import export activities. In India DGFT issues IEC. IEC Registration is the first thing that businesses need to import or export any item from India to some other nation. IEC registration paves the way for many new opportunities for business personnel.",
                value: [
                    {
                        title: "Expansion Of Business",
                        description: [
                            "With the help of IEC business can expand its reach in the global market. IEC provide the opportunity to business to export its goods and products outside the nation’s territory and create a name for oneself in the international market."
                        ]
                    },
                    {
                        title: "Availing Several Benefits",
                        description: [
                            "On the basis of IEC registration businesses can enjoy several benefits given by Export Promotion Council, DGFT, and Customs."
                        ]
                    },
                    {
                        title: "No Need Of Return Filing",
                        description: [
                            "IEC doesn't include in the filing of return. Once IEC is allocated, there isn't any necessity to follow any kind of procedures for supporting its legitimacy. In any event, of export transaction, DGFT doesn't order for filing any return."
                        ]
                    },
                    {
                        title: "Hassle-Free Processing",
                        description: [
                            "Acquiring IEC from DGFT is genuinely simple and same can be gotten within a time of 10-15 days in the wake of presenting the application. No evidence of export or import is required subsequent to getting IEC Registration."
                        ]
                    },
                    {
                        title: "Free For Lifetime",
                        description: [
                            "Once you have obtained IEC you can enjoy its validity till eternity since it is free for lifetime plus there is no need of any renewal."
                        ]
                    },
                    {
                        title: "Government Authorizes Proof",
                        description: [
                            "Import Export Code is a government identity which is issued by the DGFT. At the time of clearance of shipment one can show this identity number."
                        ]
                    }
                ]
            },
        ]
    },
    STARTUP_REGISTRATION: {
        title: FormPageScreenTitleMap['STARTUP_REGISTRATION'],
        description: FormPageScreenDescriptionMap['STARTUP_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - Start-up India Registration',
                description: 'Start-up India Scheme is an initiative by the Government of India to promote the startup eco-system in India and to drive sustainable economic growth in India.',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Start-up India Scheme is a flagship initiative of the Government of India, intended to build a strong eco-system for nurturing innovation and Start-ups in the country that will drive sustainable economic growth and generate large scale employment opportunities.",
                            "Start-up India Scheme is implemented through the Department of Industrial Policy & Promotions (DIPP), Government of India.",
                            "A business will be recognised as a ‘Start-up’ under this scheme only after obtaining a Certificate of Registration from Start-up India Hub at www.startupindia.gov.in."
                        ],
                        innerList: [
                            {
                                title: "CONDITIONS FOR RECOGNITION AS A ‘START-UP’",
                                innerList: [
                                    {
                                        description: ["1. To get recognised as a Start-up under the Startup India Scheme, a business entity must full fill the following conditions:"],
                                        innerList: [
                                            {
                                                description: [
                                                    "a. Private Limited Company under Companies Act, 2013",
                                                    "b. Limited Liability Partnership under the Limited Liability Partnership Act, 2008",
                                                    "c. Partnership Firm under the Partnership Act, 193",
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        description: ["2. The business must be registered must be registered as a"]
                                    },
                                    {
                                        description: ["3. The turnover of business for any of the financial years since incorporation/ registration has not exceeded Rupees 25 crores"]
                                    },
                                    {
                                        description: ["4. The Business is working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of employment generation or wealth creation."]
                                    },
                                    {
                                        description: ["5. The business will be recognised as Start-up is for a period of 7 years from the date of its incorporation/ registration; however, in the case of Start-ups in the biotechnology sector, the period shall be up to ten years from the date of its incorporation/ registration. Any entity formed by splitting up or reconstruction of a business already in existence shall not be considered a ‘Start-up’."]
                                    },
                                ]
                            },
                            {
                                title: "IMPORTANT NOTES",
                                innerList: [
                                    {
                                        description: [
                                            "The business entity shall cease to be a Start-up on the following conditions:"
                                        ],
                                        innerList: [
                                            {
                                                description: [
                                                    "On completion of seven years from the date of its incorporation/registration",
                                                    "if its turnover for any previous year exceeds Rupees 25 crores."
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        description: [
                                            "However, in respect of Start-ups in the biotechnology sector, an entity shall cease to be a Start-up on completion of ten years from the date of its incorporation/ registration or if its turnover for any previous year exceeds Rupees 25 crores."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Startup India Registration - Requirements',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: "Register business as Company / LLP / Partnership"
                    },
                    {
                        title: "Apply to 'StartupIndia'"
                    },
                    {
                        title: "Get Recognised as a ‘Startup’"
                    },
                    {
                        title: "'Recognised Startups' only can Apply for Tax Exemption"
                    },
                    {
                        title: "'Recognised Startups' only can Apply for Angel Tax Exemption"
                    }
                ]
            },
            {
                title: 'Process of Start-up India Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Register the business as a Private Limited Company / Limited Liability Partnership / Partnership Firm"
                    },
                    {
                        title: "Obtain PAN for the Business"
                    },
                    {
                        title: "Obtain MSME Registration for the Business"
                    },
                    {
                        title: "Make a brief writeup on the following:",
                        description: [
                            "a. What is the problem the startup is solving?",
                            "b. How does the startup propose to solve this problem?",
                            "c. What is the uniqueness of solution by the startup?",
                            "d. How does the startup generate revenue? ",
                            "e. Details of any awards/recognition received by the startup",
                        ]
                    },
                    {
                        title: "File application at www.startupindia.gov.in"
                    },
                    {
                        title: "Submit supporting documents such as Certificate of Incorporation / Registration"
                    },
                    {
                        title: "Start-Up India Hub will review the application and if the application fulfils the Start-up India guidelines and conditions, will grant recognition as a Startup and will issue the Certificate of Recogn"
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
                        title: 'Registration Certificate(s)',
                        innerList: [
                            {
                                title: 'Certificate of Incorporation as Private Limited Company Or',
                            },
                            {
                                title: 'Certificate of Incorporation as LLP Or',
                            },
                            {
                                title: 'Certificate of Registration as a Partnership',
                            }
                        ]
                    },
                    {
                        title: 'Other Documents',
                        innerList: [
                            {
                                title: 'Permanent account Number (PAN)',
                            },
                            {
                                title: 'MSME Registration Number',
                            }
                        ]
                    },
                    {
                        title: 'Details Required',
                        innerList: [
                            {
                                title: 'Details of Directors / Partners',
                            },
                            {
                                title: 'Profile of Promoters',
                            },
                            {
                                title: 'A detailed write up on the Start-Up',
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Start-up India Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'Income Tax Exemption for 3 Years',
                        description: [
                            'After obtaining the recognition as a ‘Start-up’ under the Start-up India Scheme, a Private Limited Company or a Limited Liability Partnership incorporated on or after 1st day of April 2016 but before 1st day of April 2021 can apply for this exemption.',
                            'After review of application the Department will issue a Tax Exemption Certificate to the Start-up.',
                            'Only after obtaining the Certificate, the Start-up can avail the exemption of Income tax.'
                        ]
                    },
                    {
                        title: 'Exemption from Angel Tax',
                        description: [
                            'After obtaining the recognition as a ‘Start-up’ under the Start-up India Scheme, a Private Limited Company who complies certain specific conditions can apply for exemption of Angel Tax (Tax on Share Premium) Under Section 56(2)(viib) of Income Tax Act',
                            'After review of application the Department will issue a Tax Exemption Certificate Under Section 56(2)(viib) to the Start-up. Only after obtaining the Certificate, the Start-up can avail the exemption of Angel Tax.'
                        ]
                    }
                ]
            },
        ]
    },
    TRADEMARK: {
        title: FormPageScreenTitleMap['TRADEMARK'],
        description: FormPageScreenDescriptionMap['TRADEMARK'],
        navigationContainers: [
            {
                title: 'Overview - Trademark',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A trademark can be defined as the unique identity that makes your company, product, or service stand out from the rest. A registered trademark is your business’s intellectual property/ intangible asset. It protects the investment made into creating trust and loyalty among your customers.",
                            "The registration provides the right to sue against others who try to copy your trademark and prevents others from using a similar trademark to the one registered by you."
                        ],
                        innerList: [
                            {
                                title: "What Can You Register As a Trademark?",
                                description: [
                                    "Many aspects of your brand image can be registered as a trademark. The aspect you need to consider is which aspect of your brand stands out to your customers. Pick that aspect(s) for registering."
                                ],
                                innerList: [
                                    {
                                        title: "1. Name",
                                        description: [
                                            "a. Product Name: You can register a particular product’s name as a trademark. Apple’s iPod is a product name trademark.",
                                            "b. Business Name: Registering a company name as a trademark is the most common route businesses take. Ex: Bajaj.",
                                            "c. Person’s Name/Surname: If your name plays an important part in generating revenue, then you can even trademark your name! Ex: Shah Rukh Khan has trademarked his name.",
                                            "d. Abbreviations: Abbreviations of a company or brand name can also be a trademark. Ex: BMW.",
                                        ]
                                    },
                                    {
                                        title: "2. Logo/Symbol",
                                        description: [
                                            "It is highly recommended to trademark a logo because it visually represents your brand. Your customers can recollect a logo faster than a name. A great example of a logo trademark is the ‘swoosh’ of Nike."
                                        ]
                                    },
                                    {
                                        title: "3. Tagline",
                                        description: [
                                            "If you have a tagline for your brand, you can go ahead and trademark that as well. A tagline tells your customers what you stand for as a business. For example, KFC’s ‘It's finger lickin' good’."
                                        ]
                                    },
                                    {
                                        title: "4. Other Options",
                                        description: [
                                            "a. Colour Mark: You can trademark a colour or a combination of colours. (Ex: Cadbury has trademarked the colour royal blue)",
                                            "b. Sound Mark: Musical notes or sounds can be trademarked if we can prove that it's distinctive. Nokia has trademarked its tune.",
                                            "c. Scent Mark: Even scents can be trademarked.",
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "Why Is Trademark Registration Important?",
                                description: [
                                    "Trademark registration is important and necessary for a business because:"
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "It showcases your unique identity",
                                            "It helps you build trust and loyalty among your customers",
                                            "It offers legal protection for your brand’s identity",
                                            "It is an asset in itself",
                                            "It prevents unauthorized usage of your brand’s identity.",
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Trademark',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The process of trademark registration online is more complicated than it appears. It involves a number of processes and government follow-up. Vakilsearch has made it easier for you by breaking it down into three parts and doing the majority of the work. Register your trademark today to protect your company's logo, slogan, and brand.",
                value: [
                    {
                        title: "Step 1: Trademark Search",
                        description: [
                            "Once you give us the basic information about what you want to trademark and the industry you operate in, our experts will do a thorough search across the trademark database. This is to check whether the mark you want to register is available or not.",
                            "Once you decide on an available trademark, we move to step 2."
                        ]
                    },
                    {
                        title: "Step 2: Class Selection and Document Collection",
                        description: [
                            "The next task is to select the appropriate class(es) for your business. You need not worry too much though. Our experts will guide you in selecting the right classes to cover all aspects of your business. Simultaneously, you can start uploading all the required documents (list given below) for trademark registration in your dashboard."
                        ]
                    },
                    {
                        title: "Step 3: Trademark Application Filing",
                        description: [
                            "Once you upload all the documents, our team will proceed to verify them. Then the trademark application form will be filled on your behalf and submitted along with the documents. Our team will ensure that your application is accurate and error-free.",
                            "We will keep you updated throughout the process and watch out for any notifications from the Trademark Registry until the registration is complete."
                        ]
                    },
                    {
                        title: "Step 4: Trademark Objection (in some cases)",
                        description: [
                            "Sometimes the examiner might have some questions about your application. This is sent to you as a trademark objection notice and you need to respond to it within 30 days. Our experts can craft a strong objection response and guide you in submitting the right documents and proofs."
                        ]
                    },
                    {
                        title: "Step 5: Trademark Opposition (in some cases)",
                        description: [
                            "There is also a chance for a third party to oppose your application. In that case, you have to submit a counter-statement to the Registrar within 2 months stating why the opposition isn’t valid. Based on your response the Registrar may either dismiss the opposition or call for a hearing."
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
                            "Initially, you have to provide us with the following details:"
                        ],
                        innerList: [
                            {
                                title: "Applicant’s name"
                            },
                            {
                                title: "Business type"
                            },
                            {
                                title: "Business objectives"
                            },
                            {
                                title: "Brand/logo/slogan name"
                            },
                            {
                                title: "Registration address"
                            },
                            {
                                title: "Signed Form-48"
                            },
                            {
                                title: "Identification proof of the signatory"
                            },
                            {
                                title: "Address proof of the signatory"
                            },
                            {
                                title: "Business proof (depends on the type of business)"
                            },
                            {
                                title: "Udyog Aadhar/MSME registration certificate (optional)"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    GST_REGISTRATION: {
        title: FormPageScreenTitleMap['GST_REGISTRATION'],
        description: FormPageScreenDescriptionMap['GST_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - GST Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                description: "Goods and Service (GST) is a single and comprehensive tax on the supply of goods and services across India, right from the manufacturer to the Consumer.",
                value: [
                    {
                        description: [
                            "GST is a single comprehensive tax on the supply of goods and services across India, right from the manufacturer to the Consumer. GST is applicable to the whole of India except the state of Jammu & Kashmir. GST would be levied on Supply of goods and services or both and hence the present prevalent concepts of levy of Excise Duty on manufacture, VAT on sales, Central sales Tax on sales, Service tax on services, Entry tax on entry of goods in local area would no longer be in existence."
                        ],
                        innerList: [
                            {
                                title: "Who is Liable for GST Registration?",
                                description: [
                                    "Every person needs to get registered under GST in the state from where he makes taxable supply of goods and/or services, if his aggregate turnover in a financial year exceeds Rs.20 Lakhs (Rs.10 Lakhs in North Eastern States including Sikkim)",
                                    "Generally, the liability to register under GST arises when you are a supplier within the meaning of the term, and also your aggregate turnover in the financial year is above the Exemption threshold of Rs.20 lakh rupees. However, the GST law enlists certain categories of suppliers who are required to get compulsory registration irrespective of their turnover that is to say, the threshold exemption of 20 lakh is not available to them. ",
                                    "The Following suppliers are required to obtain GST Registration compulsorily irrespective of the size of their turnover are:"
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "Inter-state suppliers",
                                            "A person receiving supplies on which tax is payable by recipient on reverse charge basis",
                                            "Casual taxable person who is not having fixed place of business in the State or Union Territory from where he wants to make supply",
                                            "Non-resident taxable persons who are not having fixed place of business in India",
                                            "A person who supplies on behalf of some other taxable person (i.e. an Agent of some Principal)",
                                            "E-commerce operators, who provide platform to the suppliers to supply through it",
                                            "Suppliers who supply through an e-commerce operator",
                                            "Those ecommerce operators who are notified as liable for GST payment under Section 9(5)",
                                            "TDS Deductor",
                                            "Those supplying online information and database access or retrieval services from outside India to a non-registered person in India.",
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of GST Registration',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Business Registration",
                        description: [
                            "Before obtaining the GST Registration, the required business entity registration is required to be obtained except the case of Sole Proprietorship, The business to be registered as Partnership or One Person Company (OPC) or Limited Liability Partnership (LLP) or as Private Limited Company. Sole Proprietorship does not require any specific registration before obtaining GST Registration."
                        ]
                    },
                    {
                        title: "Business PAN",
                        description: [
                            "Obtain PAN for the business. PAN is must for registering under GST. In case of sole proprietorship, the PAN of Individual is enough"
                        ]
                    },
                    {
                        title: "Opening Current Account",
                        description: [
                            "A current Account is required to be opened and the details of Current Account Number and Bank details are mandatory for obtaining GST Registration."
                        ]
                    },
                    {
                        title: "Online Application to ww.gst.gov.in",
                        description: [
                            "Submit application online at ww.gst.gov.in with documents required for GST Registration"
                        ]
                    },
                    {
                        title: "Obtaining Application Reference Number (ARN)",
                        description: [
                            "On successful filing of Application, an Application Reference Number (ARN) will be generated by the GST Portal. With the ARN, we can track"
                        ]
                    },
                    {
                        title: "Generation of User ID and Password at ww.gst.gov.in",
                        description: [
                            "Once Registration is approved, generate a user id and Password at GST Portal"
                        ]
                    },
                    {
                        title: "Download the GST Registration Certificate",
                        description: [
                            "GST Registration Certificate can be downloaded from GST Portal"
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
                        title: 'Business Registration',
                        description: [
                            "The following are the documents for GST Registration"
                        ],
                        innerList: [
                            {
                                title: 'Incorporation Certificate Company / LLP',
                            },
                            {
                                title: 'PAN of Company / LLP',
                            },
                            {
                                title: 'Cancelled Cheque Leaf with Company name / Bank Statement',
                            }
                        ]
                    },
                    {
                        title: 'Directors / Promotes',
                        innerList: [
                            {
                                title: 'PAN and Address Proof of all the Promoters',
                            },
                            {
                                title: 'Photograph of all the Promoters / Directors (jpeg format)',
                            },
                            {
                                title: 'Authorisation letter to the Primary Signatory',
                            },
                            {
                                title: 'Digital Signature Certificate Authorised Signatory / Signatories',
                            }
                        ]
                    },
                    {
                        title: 'Business Address Proof',
                        innerList: [
                            {
                                title: 'Electricity Bill or Tax Paid Receipt with the address and NOC From the Owner of Premises / Rental Agreement (Commercial Purpose) in Business Name',
                            }
                        ]
                    }
                ]
            },
        ]
    },
    PAN_APPLICATION: {
        title: FormPageScreenTitleMap['PAN_APPLICATION'],
        description: FormPageScreenDescriptionMap['PAN_APPLICATION'],
        navigationContainers: [
            {
                title: 'Overview - Permanent Account Number (PAN)',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "PAN or Permanent Account Number is a 10 digit alpha-numeric identity issued by the Income Tax Department of India. It is a unique account number allocated by the Income Tax Department, which is used to track and manage all the Income Tax assessee in India.",
                            "Although the PAN card application is voluntary, it must be obtained before engaging in certain transactions. For entering into a financial transaction exceeding a specified amount, quoting PAN is compulsory. Also, every business entity must apply for PAN card application within the 30 days of its formation or incorporation."
                        ]
                    }
                ]
            },
            {
                title: 'Requirements of Permanent Account Number',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Compulsory for opening Bank Accounts",
                        description: [
                            "Every individual or business entrepreneur requires to open a savings/current bank account, needs to submit some specified KYC documents among which PAN is the most essential document."
                        ]
                    },
                    {
                        title: "Mandatory for filing ITR",
                        description: [
                            "For filing individual’s or businesses  ITR, quoting Permanent Account Number is a must. All the information filed is associated with PAN for faster assessment and processing."
                        ]
                    },
                    {
                        title: "Nationalized Identity Card",
                        description: [
                            "Pan Card is accepted as identity proof for every individual and all the way to the businesses. From opening a bank account to Government registration, PAN card of individual or business is a primary requirement."
                        ]
                    },
                    {
                        title: "For TDS and TCS transactions",
                        description: [
                            "Every person, deducting or collecting tax at source must mention own PAN and also of the deductee. By quoting a PAN, the tax credit will be associated with concerned person’s account."
                        ]
                    },
                    {
                        title: "Mention PAN in specified cases",
                        description: [
                            "Government has specified certain transactions where quotation of PAN is mandatory. Amount is specified for property transfer, bank deposit, payment of bills and more."
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
                        title: "Copy of Aadhar Card or other address proof, in case of individual"
                    },
                    {
                        title: "Two passport size photograph, in case of individual"
                    },
                    {
                        title: "Copy of Birth Certificate, in case of Minor"
                    },
                    {
                        title: "ID proof and Address proof of any of the parent"
                    },
                    {
                        title: "CoI (Certificate of Incorporation) in case of company and LLP"
                    },
                    {
                        title: "Agreement in case of LLP and Partnership Firm"
                    }
                ]
            },
        ]
    },
    TAN_APPLICATION: {
        title: FormPageScreenTitleMap['TAN_APPLICATION'],
        description: FormPageScreenDescriptionMap['TAN_APPLICATION'],
        navigationContainers: [
            {
                title: 'Overview - Tax Account Number (TAN)',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Tax Account Number is commonly referred as Tax Deduction Account Number or Tax Collection Account Number, or simply TAN. TAN registration leads to a generation of 10 digits alpha-numeric code that is issued by the Income Tax Department of India. As the name suggests, it is obtained by the person responsible for deduction or collection of tax at source (TDS or TCS). Businesses while deducting the salaries of employees must obtain and mention the number. Specified criteria to collect and deduct tax at source are already prescribed by the Government. Also, it is compulsory to quote TAN of the assessee in TDS/ TCS statements and challan for payment of TDS/ TCS."
                        ]
                    }
                ]
            },
            {
                title: 'Requirements of Tax Account Number',
                navigationTitle: 'Requirements',
                containerKey: 'requirements',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Mandatory for deduction & collection of tax",
                        description: [
                            "The government has specified certain transactions including salary where the assessee needs to collect or deduct the tax from the source itself. While entering into such transactions, Tax Account Number is mandatory to be mentioned."
                        ]
                    },
                    {
                        title: "TDS Certificate and Filing",
                        description: [
                            "Every person deducting TDS at source must issue a certificate to the effect that the tax has been deducted with other required particulars. The certificate of TDS must quote the TAN of the deductors. Also, while filing TDS returns online, providing TAN is mandatory."
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
                        title: "Copy of Aadhar Card or other address proof"
                    },
                    {
                        title: "Name, contact details and signature of the applicant"
                    },
                    {
                        title: "Certificate of Incorporation in case of company and LLP"
                    },
                    {
                        title: "Agreement in case of LLP and Partnership Firm"
                    }
                ]
            },
        ]
    },
    COPYRIGHT: {
        title: FormPageScreenTitleMap['COPYRIGHT'],
        description: FormPageScreenDescriptionMap['COPYRIGHT'],
        navigationContainers: [
            {
                title: 'Overview - Copyright',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Copyright is the legal right creators are entitled to for their literary, dramatics, music, and artistic work. Producers of films and recordings enjoy this right too. When a proprietor registers for a copyright, it gives them an exclusive right to reproduce, replicate, and distribute the work. Further, they can grant authority to some other entity for the same purpose.",
                            "Registering for copyright is important because it makes you the legal owner of the rights over the work. You then have control over communicating it to the public, reproducing rights, any adaptations or translations of the works."
                        ]
                    }
                ]
            },
            {
                title: 'Copyright Registration Online',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "You can register a copyright online through Vakilsearch. While we make copyright registration a simple 3-step process for you, the actual registration process is elaborate and is explained below for your knowledge:",
                value: [
                    {
                        title: "Step 1: Details and document collection",
                        description: [
                            "Based on the type of work, we will pick the right copyright application for you. We will collect all the necessary information and documents that will be required for the process. The authorisation letter will be sent to you to be signed."
                        ]
                    },
                    {
                        title: "Step 2: Filling and filing copyright application",
                        description: [
                            "Once all the details have been collected and verified by us, our experts will prepare the copyright application and submit the necessary forms with the Registrar electronically."
                        ]
                    },
                    {
                        title: "Step 3: Dairy number and copyright examination",
                        description: [
                            "You will get a diary number once the application is submitted. Using this, you can track your application.",
                            "There is a waiting period of 30 days within which the Copyright Examiner reviews the application for potential discrepancies and/or objections. If there is a discrepancy, a notice will be issued and the same needs to be responded to within 30 days from the date of issuance of the notice."
                        ]
                    },
                    {
                        title: "Step 4: Copyright registration",
                        description: [
                            "Once the discrepancy has been removed or there are no discrepancies or objections with the application, the copyright shall be registered. The Copyright Office shall issue the Extracts from the Register of Copyrights (ROC)/registration certificate.",
                            "Registration of copyright might take up to 12 months from the date of issuance of the diary number. Our team will keep you informed of the changes in the status of your application throughout that time. If there are some clarifications and/or some defects in the application on your account that have to be addressed, we will do it for you at an additional cost.",
                            "In case of an objection to your application, from interested parties, or the examiner, you would need to file a response within 45 days."
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
                            "To register for copyright you need to give us the following details and documents."
                        ],
                        innerList: [
                            {
                                title: "Personal details:",
                                innerList: [
                                    {
                                        title: "Name, address, and nationality of the applicant"
                                    },
                                    {
                                        title: "Name, address, and nationality of the author of the work"
                                    },
                                    {
                                        title: "Nature of the applicant’s interest in the copyright - whether the applicant is the author of the work or the representative of the author"
                                    },
                                    {
                                        title: "Copies of the original work"
                                    },
                                    {
                                        title: "ID proof of the owner and incorporation certificate if it is for business"
                                    }
                                ]
                            },
                            {
                                title: "Nature of the work:",
                                innerList: [
                                    {
                                        title: "Class & description of the work"
                                    },
                                    {
                                        title: "Title of the work"
                                    },
                                    {
                                        title: "Language of the work"
                                    },
                                    {
                                        title: "Date of publication - publication in internal magazines, like a company magazine or a research paper submitted to a professor does not count as publication."
                                    }
                                ]
                            },
                            {
                                title: "Documents:",
                                innerList: [
                                    {
                                        title: "Three copies of your work"
                                    },
                                    {
                                        title: "Authorisation letter (we will send you)"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Advantages of Copyright Registration',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: 'A public record of ownership',
                        description: [
                            "When a work is copyrighted, it is registered on a public record, thereby establishing ownership."
                        ]
                    },
                    {
                        title: 'Copyright infringement',
                        description: [
                            "In the case of copyright infringement, the authors can sue infringers to secure their work and claim statutory compensation."
                        ]
                    },
                    {
                        title: 'Prevents importing of duplicates',
                        description: [
                            "The owners can record the registration with the Indian customs and prevent importing duplicate copies of the work."
                        ]
                    },
                    {
                        title: 'Commercial use of by-products',
                        description: [
                            "Have control over by-products or derivatives created from the original registered work for commercial purposes."
                        ]
                    },
                    {
                        title: 'Transfer of copyright',
                        description: [
                            "The rights can be passed or sold to a third party by the original copyright holder."
                        ]
                    },
                    {
                        title: 'Ensures protection',
                        description: [
                            "Copyright protection enables the owners to exhibit their work without the fear that it will be replicated without authorisation."
                        ]
                    }
                ]
            },
        ]
    },
    ALTERNATIVE_INVESTMENT_FUND_REGISTRATION: {
        title: FormPageScreenTitleMap['ALTERNATIVE_INVESTMENT_FUND_REGISTRATION'],
        description: FormPageScreenDescriptionMap['ALTERNATIVE_INVESTMENT_FUND_REGISTRATION'],
        navigationContainers: [
            {
                title: 'Overview - Alternative Investment Fund',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Alternative investments collectively represent the many asset classes that fall outside the traditional investment instruments of direct investment in stocks and bonds. This category includes hedge funds, private equity, real estate, commodities, infrastructure, and other alternative investment funds.",
                            "Alternative Investment funds represent a form of a pooled investment vehicle where collective investments are made into different nontraditional investment options. Any person who wants to invest in an alternative investment fund in India can do it via SEBI-registered AIF entities.",
                            "Here, a group of qualified individuals form a fund and collect money from eligible investors to invest them in lucrative investment opportunities.",
                            "These investors can be domestic or foreigners. The SEBI registered AIF can exist in the Form of Trust, LLP, or body corporate. The nature and risk of investments made via AIF are different from traditional investment options. The registration of an AIF shall be valid till the lifetime of the AIF."
                        ]
                    }
                ]
            },
            {
                title: 'Types of AIFs registration',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Category- I AIF:",
                        description: [
                            "AIFs which invest in start-up or early-stage ventures or social ventures or SMEs or infrastructure or other sectors or areas which the government or regulators consider as socially or economically desirable and shall include venture capital funds, SME Funds, social venture funds, infrastructure funds, and such other Alternative Investment Funds as may be specified."
                        ]
                    },
                    {
                        title: "Category-II AIF:",
                        description: [
                            "These funds are not allowed to borrow for any purpose other than to carry day-to-day transactions. These funds invest in any form of combination and include private equity funds, real estate private equity funds, debt funds, etc."
                        ]
                    },
                    {
                        title: "Category-III AIF:",
                        description: [
                            "Under these funds, there are short-term investments made, and later they are sold as hedge funds to make short-term benefits. Various hedge funds, PIPE funds, etc., form this category of AIFs."
                        ]
                    }
                ]
            },
            {
                title: 'Registration Process of AIF',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "Following are the step by a step registration process of Alternative Investment Fund:",
                value: [
                    {
                        title: "Apply To SEBI:",
                        description: [
                            "An applicant shall apply in Form A of SEBI (Alternative Investment Funds) Regulations, 2012, along with necessary documents and business plan."
                        ]
                    },
                    {
                        title: "Authorization Letter:",
                        description: [
                            "Furnish an authorization letter in case an applicant or entity has authorized any director/promoter/or any such officer to act as an authorized signatory."
                        ]
                    },
                    {
                        title: "SEBI Compliances:",
                        description: [
                            "To know whether an applicant is eligible or ineligible to be registered as AIF shall study the SEBI guidelines thoroughly."
                        ]
                    },
                    {
                        title: "Cover Letter:",
                        description: [
                            "In case the applicant is registered with SEBI as a venture capital fund, it shall provide the details regarding the same in the cover letter as well as it needs to report in a covering letter whether it has been undertaking any activity as AIF or is applying registration for the new fund."
                        ]
                    },
                    {
                        title: "Final Submission Of Application:",
                        description: [
                            "Online application is filed as per the guidelines of SEBI on this behalf. Properly filled, numbered, duly signed, and stamped Form A accompanied by necessary documents and application fee of INR 100000 by way of a draft drawn in favor of The Securities and Exchange Board of India, payable at Mumbai shall be submitted for the grant of certificate of registration."
                        ]
                    },
                    {
                        title: "Scrutinizing Of Application:",
                        description: [
                            "SEBI, within 21 days of receipt of an application, shall verify and reply to the applicant. Application is evaluated for its correctness by SEBI, and SEBI, on being satisfied with the same, shall approve the application."
                        ]
                    },
                    {
                        title: "Grant Of Registration Certificate:",
                        description: [
                            "Once satisfied with the application, SEBI will grant the registration certificate against the charge of registration fees."
                        ]
                    }
                ]
            },
            {
                title: 'Eligibility for Alternative Investment Fund Registration',
                navigationTitle: 'Eligibility',
                containerKey: 'eligibility',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "Following conditions are necessary to be fulfilled for getting registered as AIFs:"
                        ],
                        innerList: [
                            {
                                title: "An entity shall be restricted through its MOA & AOA to invite the public to subscribe to its shares."
                            },
                            {
                                title: "A maximum number of investors shall not at any time exceed 1000."
                            },
                            {
                                title: "Trust deed duly registered under Registration Act 1908 shall also be furnished in case of an applicant for AIF registration is registered trust."
                            },
                            {
                                title: "A partnership deed is compulsorily furnished in case the applicant is LLP, and such deed shall be duly registered under the LLP Act 2008."
                            },
                            {
                                title: "Investors of AIF shall be either Indian or Non-Resident Indian."
                            },
                            {
                                title: "The minimum corpus for any AIF must be a minimum of 20 crores."
                            }
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
                        innerList: [
                            {
                                title: "Details of registered addresses such as name, address, etc."
                            },
                            {
                                title: "Registration certificate of the company, in case of body corporate"
                            },
                            {
                                title: "Name and Contact details of applicant such as contact number, E-mail Id, residential address"
                            },
                            {
                                title: "Partnership deed, in case the applicant is registered LLP"
                            },
                            {
                                title: "Trust deed, in case an applicant is a trust"
                            },
                            {
                                title: "Business strategies and investment plans"
                            },
                            {
                                title: "A draft copy of the placement memorandum"
                            },
                            {
                                title: "Self-declaration by the directors/partner/members"
                            },
                            {
                                title: "Financial statements of the previous years"
                            },
                            {
                                title: "Sponsor or Directors are registered with the Board or not."
                            },
                            {
                                title: "Previously registered AIF by the sponsors."
                            },
                            {
                                title: "Past Work profile of the sponsors."
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Business Plan',
                navigationTitle: 'Business Plan',
                containerKey: 'businessplan',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "Details of Business Plan and Investment Strategy constitutes:"
                        ],
                        innerList: [
                            {
                                title: "Objective of the fund"
                            },
                            {
                                title: "2 Investment style/ strategy of the fund."
                            },
                            {
                                title: "Tenure of the Fund or scheme"
                            },
                            {
                                title: "The target industries/ Sectors, if any"
                            },
                            {
                                title: "Proposed Corpus"
                            },
                            {
                                title: "The target Investors"
                            },
                            {
                                title: "Proposed Fee structure to compensate the Sponsor and Manager"
                            },
                            {
                                title: "Any regulatory proceeding against the sponsors or director."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    MERGERS_AND_ACQUISITIONS: {
        title: FormPageScreenTitleMap['MERGERS_AND_ACQUISITIONS'],
        description: FormPageScreenDescriptionMap['MERGERS_AND_ACQUISITIONS'],
        navigationContainers: [
            {
                title: 'Overview - Mergers and Acquisitions',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Strategies of Mergers and Acquisitions are globally adopted by the companies to excel in this competitive business environment. Mergers and Acquisitions are also known as M&A in acronyms.",
                            "A merger can be defined as the collaboration of two or more companies to form a new company in an expanded form. Here, one company will cease to exist, and the other company will absorb the former. For example, Company A merges with Company B to form a bigger company A, and company B ceases to exist.",
                            "Acquisition, on the other hand, is defined as a process of selling one company to another. Example Company A acquires company B. Both these entities exist but control of management is in the hands of company A for both companies.",
                            "In amalgamation, both the company cease to exist and a new company (the new name would be given) raises out. Company A and B form a new company C and cease to exist individually."
                        ],
                        innerList: [
                            {
                                title: "The reason behind Mergers and Acquisitions",
                                description: [
                                    "Merger and Acquisition are fundamental tools that are considered by organizations to flare their business around the globe and furthermore to render sustainable development for business. Subsequently, coming up next is the reason behind the prevalent practice of mergers & acquisitions."
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Types of Merger & Acquisition',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Horizontal Merger",
                        description: [
                            "A merger between two companies who deal in the same product or services"
                        ]
                    },
                    {
                        title: "Vertical Mergers",
                        description: [
                            "This type of merger happens between those entities who are involved in the dealing of complementary goods and services."
                        ]
                    },
                    {
                        title: "Co-Generic Mergers",
                        description: [
                            "A merger between two parties that are somehow related to each other"
                        ]
                    },
                    {
                        title: "Conglomerate Mergers",
                        description: [
                            "A merger between organizations that deal in different types of business"
                        ]
                    },
                    {
                        title: "Cash Mergers",
                        description: [
                            "A kind of merger where shareholders get cash instead of shares of the merged entity"
                        ]
                    },
                    {
                        title: "Forward Mergers",
                        description: [
                            "When an organization decides to merge with its buyers"
                        ]
                    },
                    {
                        title: "Reverse Mergers",
                        description: [
                            "When an entity decided to merge with its suppliers of raw material"
                        ]
                    }
                ]
            },
            {
                title: 'Process of Mergers & Acquisitions',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Companies Act 2013 defines the whole process of mergers and Acquisitions in India. During the process of mergers and acquisitions, analysis of the companies is done, which includes accessing the company's information, going through its insights, and coming to a conclusion regarding implementing the process of mergers and acquisitions.",
                            "Effective and complete execution of mergers and acquisition process includes technique which is structured with the aim to maximize the profit and minimize the level of risk."
                        ]
                    },
                    {
                        title: "Steps To Follow While Going Through Mergers And Acquisition In India",
                        innerList: [
                            {
                                innerList: [
                                    {
                                        title: "Dig Into Memorandum To Examine The Object Clause",
                                        description: [
                                            "The primary and paramount thing to do while going for M&A in India is to scrutinize the memorandum of association of the company with the purpose of carrying a search and check whether the power of the merger is endowed in it or not."
                                        ]
                                    },
                                    {
                                        title: "Share A Word With Stock Exchange",
                                        description: [
                                            "It is a good idea to illuminate the stock exchange about the proposed merger and Acquisition occurring and send all the relevant documents such as notices, resolutions, and orders to the stock exchange within a stipulated time."
                                        ]
                                    },
                                    {
                                        title: "Draft A Merger Proposal",
                                        description: [
                                            "The Board of the Director of both the organizations will introduce an affirmation on the draft of the merger proposition and furthermore pass the resolution for approving its key administrative staff and different administrators to further pursue the issue."
                                        ]
                                    },
                                    {
                                        title: "File An Application To The High Courts",
                                        description: [
                                            "In the wake of getting the affirmation on a proposal by the Board of the Director, the merger organizations should record an application to the Hon'ble High court of the individual state where the organizations headquarter is situated."
                                        ]
                                    },
                                    {
                                        title: "Notice Dispatched To Shareholders And Creditors",
                                        description: [
                                            "With the earlier approval of the High court, a notification ought to be sent to all the investors and creditors of the organizations about the gathering to be held, and 21 days of timely notification is required. The notification will be distributed in two papers, one in the vernacular language of the state, and the other one is an English paper."
                                        ]
                                    },
                                    {
                                        title: "Filing Of The Orders With The Registrar Of Companies",
                                        description: [
                                            "The genuine confirmed copy of the request for the High Court of the state must be documented with the registrar of companies within the limited time period as indicated by the High Court."
                                        ]
                                    },
                                    {
                                        title: "Assets And Liabilities Of Both The Company Should Be Merged",
                                        description: [
                                            "The assets and the liabilities of both the organization ought to be passed on to the blended organization."
                                        ]
                                    },
                                    {
                                        title: "Issue For Subscription Of Shares And Debentures",
                                        description: [
                                            "When the merged organizations go to the present as a different lawful substance, then the organization can give offers and debentures after listing on the stock exchange."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ] 
    },
    ITR_FILING: {
        title: FormPageScreenTitleMap['ITR_FILING'],
        description: FormPageScreenDescriptionMap['ITR_FILING'],
        navigationContainers: [
            {
                title: 'Overview - Income Tax Return Filing',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The income earned by the individuals and businesses are subject to tax. The tax levied on the income of a person is Income tax, which is levied and collected by the Central Government. Such tax on income earned is payable in the same financial year wherein it is accrued in the form of advance tax. But the intimation and calculation of the income as well the tax liability is provided in the Assessment Year. This intimation form is called Income Tax Return. The form and time limit for filing ITR are different for different taxpayers based on the criteria.",
                            "Income Tax Return forms are recently modified, to simplify the user experience. But through these new or modified schedules, it is apparent that taxpayers are responsible to prove a claim of expenses, exemptions and deductions. Hence,  online filing of income tax return requires assistance from experienced professionals to make sure the correct filing of your return."
                        ]
                    }
                ]
            },
            {
                title: 'Benefits of Income Tax Return Filing',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Allows carry forward of losses",
                        description: [
                            "Most businesses in their initial years face losses from the business. The business loss or capital losses can be carried forward up to 8 years if the ITR is filed. This loss can also be adjusted against the future income that lowers taxable income in the future. If ITR is not filed, the taxpayer is deprived of this benefit."
                        ]
                    },
                    {
                        title: "Define financial worth",
                        description: [
                            "The ITR filed with the Government defines the financial worth of the taxpayer. The track of ITR shows the financial capacity and also increases the capital base of a person. Hence, the track of income and financial worth is decided by the previously filed ITR. The investors and institutions look forward for returns filed to know the capacity of the business."
                        ]
                    },
                    {
                        title: "Loan Processing and high risk cover",
                        description: [
                            "The numbers and the capital base defined by the income tax return is helpful for the loan processing. Higher the financial worth, easier the loan processing. The same applies to high-risk cover insurance. The ITR is a considerable document for making decisions in this regards."
                        ]
                    },
                    {
                        title: "Claim refund of TDS paid from salary",
                        description: [
                            "Salaried personnel receives the income after deduction of applicable TDS. It may happen that after the eligible deductions, the tax liability is lower than the amount of TDS actually deducted. In such cases, the excessive payment can be claimed in the form of refund only if ITR is filed by the person."
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
                        title: "PAN Card of the taxpayer"
                    },
                    {
                        title: "In case of company or firm, PAN card of all directors or partners is required"
                    },
                    {
                        title: "In case of company or firm, Aadhar card of all directors or partners is required"
                    },
                    {
                        title: "Cancelled cheque of the taxpayer’s bank account is required"
                    },
                    {
                        title: "The statement for concerned Financial Year is required to assess other incomes"
                    },
                    {
                        title: "For business entities, except proprietorship, financial statements are required"
                    },
                    {
                        title: "Details about the investments made or expenditure u/s 80 must be provided"
                    },
                    {
                        title: "The salaried person should provide the TDS Certificate, known as Form 16"
                    }
                ]
            },
            {
                title: 'Types of ITR forms',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.CARD_LIST,
                description: "Form for ITR filing are different based on type of income and business structure",
                value: [
                    {
                        title: "ITR 1 (Sahaj)",
                        description: [
                            "For Income from Salary & Interest"
                        ]
                    },
                    {
                        title: "ITR 2",
                        description: [
                            "For all incomes other than business income"
                        ]
                    },
                    {
                        title: "ITR 4",
                        description: [
                            "For all incomes including business income"
                        ]
                    },
                    {
                        title: "ITR 4S (Saral)",
                        description: [
                            "For Presumptive tax, 8% is deemed income of turnover"
                        ]
                    },
                    {
                        title: "ITR 5",
                        description: [
                            "For Partnerships business, this ITR is used for all income"
                        ]
                    },
                    {
                        title: "ITR 6",
                        description: [
                            "For Companies, this ITR is used for all the incomes"
                        ]
                    }
                ]
            },
        ]
    },
    TDS_RETURN_FILING: {
        title: FormPageScreenTitleMap['TDS_RETURN_FILING'],
        description: FormPageScreenDescriptionMap['TDS_RETURN_FILING'],
        navigationContainers: [
            {
                title: 'Overview - TDS Return filing',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A person who is liable to deduct tax at source has to file the TDS return as part of compliance. A TDS return is submitted by Tax Deductor in respect of every quarter with the Income Tax Department. The return is a statement that entails the details of the tax collected, source of collection and tax paid to Government for the reporting period.",
                            "Generally, tax is deducted on transactions such as Salaries, payment to professionals and contractual basis, payment of rents exceeding certain amount, etc. For every such type of transaction and payment, there is prescribed rate of interest. The deductee can claim the benefit of the tax deducted while ITR filing, only if the deductor has filed the TDS return on time."
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
                        title: "The Tax Account Number of the deductor"
                    },
                    {
                        title: "Acknowledgement receipt of the tax paid to Government"
                    },
                    {
                        title: "Provide us details of the tax deducted"
                    },
                    {
                        title: "Details of the inward and outward taxable supplies along with details of invoice"
                    }
                ]
            },
            {
                title: 'Types of TDS return',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.CARD_LIST,
                description: "Depends on nature of income or type of deductee",
                value: [
                    {
                        title: "Form 24Q",
                        description: [
                            "TDS on Salary"
                        ]
                    },
                    {
                        title: "Form 27Q",
                        description: [
                            "TDS where deductee is a non-resident, foreign company"
                        ]
                    },
                    {
                        title: "Form 26QB",
                        description: [
                            "TDS on payment for transfer of certain immovable property"
                        ]
                    },
                    {
                        title: "Form 26Q",
                        description: [
                            "TDS in other case"
                        ]
                    }
                ]
            },
        ]
    },
    INCOME_TAX_ADVISORY: {
        title: FormPageScreenTitleMap['INCOME_TAX_ADVISORY'],
        description: FormPageScreenDescriptionMap['INCOME_TAX_ADVISORY'],
        navigationContainers: [
            {
                title: 'Tax Advisory',
                navigationTitle: 'Tax Advisory',
                containerKey: 'taxadvisory',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Tax is a pivot to most business decisions and, at times, gets into a tussle with commercial considerations. It is hence, imperative to maintain the right balance between the two in order to maximize stakeholder value. Sustainability of a business is heavily dependent upon a sound business decision and that makes it critical to have a comprehensive view of each business situation. Team Transaction Square’s experience of working across industries/ sectors helps us think beyond the obvious and provide customized solutions to problems that impact businesses. This differentiator provides that ‘something more’ to clients that adds real value, thereby assisting clients in taking decisions which best suit their business needs.",
                            "At Transaction Square, we help clients with effective tax strategies and hand-hold them during execution of the same. Our experienced professionals understand the tax environment in India and can provide focussed advice on every client situation – whether an investment, divestment, M&A, planning supply chain, funding, tax cost optimisation, compliances and disclosures or any other business or commercial transaction. Please see our Key Services for in-depth information."
                        ]
                    }
                ]
            },
            {
                title: 'Regulatory Advisory',
                navigationTitle: 'Regulatory Advisory',
                containerKey: 'regulatoryadvisory',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Over the last several years, the Regulatory environment in India has become severely complex. On one hand the Government is looking at the ease of doing business in India to attract foreign capital, on the other, market dynamics and business environment are often forcing regulators and law makers to adopt tough positions in the implementation of these regulations. The regulators have, in last few years, substantially enhanced the onus of compliance on the business houses and / or their management teams, that acts as an inherent motivation to pro-actively ensure compliances.",
                            "Our experienced professionals in the field of Exchange Control laws including Foreign Direct Investment (FDI), Overseas Direct Investment (ODI), other FEMA aspects, Companies Act, SEBI Regulations, Competition Law, Insolvency law, Real Estate laws (RERA), SEZ Rules, Transfer Taxes – specifically Stamp Duties etc. help clients achieve their business objectives in line with the applicable regulations. Our team partners with clients in providing overall guidance, assist in decision making, seeking necessary approvals, overall compliances etc."
                        ]
                    }
                ]
            },
            {
                title: 'Business Advisory',
                navigationTitle: 'Business Advisory',
                containerKey: 'businessadvisory',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "There is always a fear of the unknown when embarking on an uncharted journey. Present times are very dynamic where orthodox approach of evaluation is not enough to take decisions, and many a times decisions are made to disrupt the status quo. Our approach in business advisory is to help clients Think Outside the Box, shift gears and take their businesses to the next level. We endeavour to answer the client’s 5Ws (who, what, where, when, why) and 1H (how) on every business situation which assists the clients in evaluating every business situation well and exploit their full potential to move in the right direction.",
                            "Our business advisory services encompasses the entire spectrum be it business planning, strategy, corporate restructurings (like mergers, acquisitions, divestments), funding solutions (including REIT’s, InvIT’s, NBFC’s etc.) value creation and unlocking (including AIF), support in newer endeavours (such as IBC, ARCs etc.), evolving regulations (such as SEBI regulations, corporate laws, tax etc) and most importantly in areas like business transformation, succession planning, family offices, wealth protection, trusts, wills etc. "
                        ]
                    }
                ]
            },
        ]
    },
    GST_RETURN_FILING: {
        title: FormPageScreenTitleMap['GST_RETURN_FILING'],
        description: FormPageScreenDescriptionMap['GST_RETURN_FILING'],
        navigationContainers: [
            {
                title: 'Overview - GST Return Filing',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Goods and Service Tax law now governs the major portion of the indirect tax system in India. The suppliers registered under this regime need to fulfill the compliance requirement regularly. Based on the turnover and the activities, the requirements and period of filing returns are prescribed under law.",
                            "With online GST return filing, the taxpayers intimate the Goods and Service Tax Network (GSTN) about the inflow and outflow of supplies including the amount of tax paid and collected. While recording the taxable transactions with Government, the taxpayer is also required to pay the amount of tax collected from an outward supplier of goods or services after the deduction of Input Tax Credit (ITC)."
                        ]
                    }
                ]
            },
            {
                title: 'Benefits of GST Return Filing',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Seamless flow of ITCC",
                        description: [
                            "The tax already paid by the supplier is deducted from the liability to pay taxes. If the tax paid and collected transaction is recorded through filing return by both the parties, the Input Tax Credit can be passed on to the buyer and not otherwise. The registered person cannot claim the input credit if the return is not filed on time."
                        ]
                    },
                    {
                        title: "Simple and common form for all taxes",
                        description: [
                            "Under the GST regime, three different types of taxes are collected – IGST, CGST & SGST. The information about all three taxes paid or collected is required to be recorded in a single form itself. The online filing system is simplified under this regime which and is further proposed to be more simplified through one form of filing for recording all transactions."
                        ]
                    },
                    {
                        title: "Score higher compliance rating",
                        description: [
                            "To monitor the compliance structure, the GST Network has introduced the mechanism of compliance rating. This is where all the registered persons are provided ratings based on their regularity of fulfilling the compliance and payment of taxes. The compliance ratings are publicly available on the website. The regular taxpayer is ranked with higher compliance ratings."
                        ]
                    },
                    {
                        title: "Avoid penalty and interest",
                        description: [
                            "For delay in filing return, the taxpayer is charged with a late fee of ₹ 50 for each day of a delay till the actual date of filing. To avoid such heavy penalties, the return must be filed without any delay. The taxpayers with no tax liability also have to file the returns to avoid the late fee of ₹ 20 for each day of delay. Interest at the rate of 18% p.a. is payable on the outstanding tax liability."
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
                        title: "DSC of Authorised Partner or Director, in case of LLP and Company only"
                    },
                    {
                        title: "GST Registration Certificate"
                    },
                    {
                        title: "Log-in credentials of the registered person"
                    },
                    {
                        title: "Details of the inward and outward taxable supplies along with the invoice details"
                    }
                ]
            },
            {
                title: 'Types of Return under GST',
                navigationTitle: 'Types',
                containerKey: 'types',
                type: FormPageContainerType.CARD_LIST,
                description: "GSTN has prescribed different types of forms for return filing return based on nature of transactions",
                value: [
                    {
                        title: "GSTR - 1",
                        description: [
                            "Details of outward supplies"
                        ]
                    },
                    {
                        title: "GSTR - 2",
                        description: [
                            "Details of inward supplies (Suspended temporarily)"
                        ]
                    },
                    {
                        title: "GSTR - 3",
                        description: [
                            "Finalised details of the supplies with payment of taxes"
                        ]
                    },
                    {
                        title: "GSTR - 4",
                        description: [
                            "Quarterly return by Composition Taxpayers"
                        ]
                    },
                    {
                        title: "GSTR - 5",
                        description: [
                            "Return by Non-Resident Foreign Taxpayer"
                        ]
                    },
                    {
                        title: "GSTR - 6",
                        description: [
                            "Monthly return by Input Tax Distributor (ISD)"
                        ]
                    },
                    {
                        title: "GSTR - 7",
                        description: [
                            "Monthly return by Tax deductor"
                        ]
                    },
                    {
                        title: "GSTR - 8",
                        description: [
                            "Monthly return by e-commerce operator"
                        ]
                    },
                    {
                        title: "GSTR - 9",
                        description: [
                            "GST Annual Return for normal taxpayers"
                        ]
                    }
                ]
            },
        ]
    },
    GST_ADVISORY: {
        title: FormPageScreenTitleMap['GST_ADVISORY'],
        description: FormPageScreenDescriptionMap['GST_ADVISORY'],
        navigationContainers: [
            {
                title: 'Overview - GST Advisory',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Goods and Service Tax (GST), one of the major tax reforms in India, finally became a reality when it was introduced in July 2017. Given the magnitude of the change, it comes with its own set of challenges and complexities. The change is not only in the law but also an attempt to infuse technology for reporting requirements.",
                            "The government has been very proactive in trying to streamline its processes and adjusting to the demands of the industry. Given the frequent clarifications / changes in the law, and interpretation issues, it is imperative for the businesses to re-visit the positions taken at the time of introduction of GST to ensure that the businesses does not get affected in the longer run.",
                            "We assist our clients by providing a wide gamut of services including conducting GST diagnostic review, advising on various GST related issues, assistance in litigation and representation before the GST Council, etc. Additionally, we also assist in obtaining GST refunds, undertaking GST compliances and audits."
                        ]
                    }
                ]
            },
            {
                title: 'Our Service offerings',
                navigationTitle: 'Services',
                containerKey: 'services',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        title: "GST Advisory and other services:",
                        innerList: [
                            {
                                title: "Advising on various GST related queries"
                            },
                            {
                                title: "Tender / pre-bid and post-bid assistance"
                            },
                            {
                                title: "Identify key issues / areas of representations and making representations before the GST Council"
                            }
                        ]
                    },
                    {
                        title: "GST diagnostic review:",
                        innerList: [
                            {
                                title: "Review as-is position of the Company as to whether the same is in consonance with the existing GST provisions"
                            },
                            {
                                title: "Identify risks and opportunities viz. areas of non-compliance and potential tax exposures, areas of savings, etc. and providing suggestions on the same"
                            },
                            {
                                title: "Review of various processes followed by Company from GST perspective"
                            }
                        ]
                    },
                    {
                        title: "GST litigation services:",
                        innerList: [
                            {
                                title: "Preparing replies to various notices, drafting appeals, etc."
                            },
                            {
                                title: "Drafting and filing applications seeking advance rulings"
                            },
                            {
                                title: "Representation services"
                            },
                            {
                                title: "Litigation review exercise to formulate strategy for swift resolution of matters"
                            }
                        ]
                    },
                    {
                        title: "GST Compliance and audits:",
                        innerList: [
                            {
                                title: "Computation of tax payments and filing of various returns"
                            },
                            {
                                title: "Assist in reconciliation of input tax credits as per the GST system and as appearing in records maintained by the Company"
                            },
                            {
                                title: "Preparation of compliance tracker"
                            },
                            {
                                title: "Assist in queries related to e-Way bills generation"
                            },
                            {
                                title: "Assistance in undertaking GST audits"
                            }
                        ]
                    },
                    {
                        title: "GST Refunds:",
                        innerList: [
                            {
                                title: "Preparation and filing of refund claims"
                            },
                            {
                                title: "Providing end to end support including liaising with the authorities and obtaining refund orders"
                            }
                        ]
                    },
                    {
                        title: "GST Suvidha Provider (GSP) and Application Service Provider (ASP):",
                        description: [
                            "Tax automation is critical to meet regulatory requirements under GST. The high level of synchronisation that is required between the taxpayers’ systems and the GST Network (GSTN) system can be achieved only with automation."
                        ],
                        innerList: [
                            {
                                title: "Item-level details in invoices, along with reconciliation of sales registers, auto-populated purchase registers, and auto reversals will be key data-processing requirements under GST"
                            },
                            {
                                title: "Accurate data entry of key fields will therefore be very important for availment of appropriate credit"
                            },
                            {
                                title: "GSPs and ASPs will provide much needed support to taxpayers in the IT ecosystem for GST"
                            },
                            {
                                title: "ASPs will focus on taking taxpayers’ raw data on sales and purchases and converting them into the GST returns. These GST returns will then be filed via the GSP on behalf of the assessee with GSTN"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    COMPANY: {
        title: FormPageScreenTitleMap['COMPANY'],
        description: FormPageScreenDescriptionMap['COMPANY'],
        navigationContainers: [
            {
                title: 'Overview - Annual Compliance for Private Company',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A Private Company is an entity enjoying a separate identity which requires maintaining its active status through the regular filing with MCA. For every company, it is compulsory to file an annual return and audited financial statements with MCA for every financial year. The RoC filing is mandatory irrespective of the turnover, whether it is zero or in crore. Whether a single transaction is undertaken or none, annual compliances for private limited are mandatory for every registered company.",
                            "Both the forms are filed to report the activities and financial date for concerned Financial Year. The due dates for annual filing of a company are based on the date of the Annual General Meeting. The continuous failure may lead to the removal of the company’s name from RoC’s register, including disqualification of directors. Also, it has been observed that MCA has actively taken bold steps for dealing with any such failures."
                        ]
                    }
                ]
            },
            {
                title: 'Benefits of Annual Compliance',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Raising Company’s Credibility",
                        description: [
                            "Compliance of law is the primary requirement for any business. The date of the company’s annual return filing displayed on the Master Data on MCA portal. Government tenders, loan approval or for similar other purposes, the regularity in compliance is a major criterion to measure the credibility of an organization."
                        ]
                    },
                    {
                        title: "Attract Investors",
                        description: [
                            "While pulling funds for a company from the investors, the investors demand all financial records and date before finalizing the proposal. The investors may either approach the company directly or can also check the financial records from the MCA portal. Investors also tend to favour the companies with regular compliance records."
                        ]
                    },
                    {
                        title: "Maintain Active Status and avoid penalties",
                        description: [
                            "Continuous failure in filing the return turns the company status to default and charges it with heavy penalties. The company may also be declared as defunct or removed from the RoC. The concerned directors are also disqualified and debarred from their further appointment. Since July 2018, an additional fee of ₹100 for each day of delay will be levied till the date of filing."
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
                        title: "PAN Card, Certificate of Incorporation and MoA – AoA of Private Company"
                    },
                    {
                        title: "Financial Statements must be audited by independent auditor"
                    },
                    {
                        title: "Independent auditor’s report and Board report must be provided"
                    },
                    {
                        title: "Valid and active DSC of one of the directors must be provided"
                    }
                ]
            }
        ]
    },
    ROC_LLP: {
        title: FormPageScreenTitleMap['ROC_LLP'],
        description: FormPageScreenDescriptionMap['ROC_LLP'],
        navigationContainers: [
            {
                title: 'Overview - Annual Compliance for LLP',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "A Limited Liability Partnership enjoys a separate status. Thus, an organization needs to maintain its active status by regularly filing with the Ministry of Corporate Affairs (MCA). Annual compliance filing is mandatory for any LLP, whether having a business or not. Annual compliance for LLP requires filing two separate forms. One of which is for Annual Return, whereas another one is for Statement of Accounts and Solvency.",
                            "The forms are filed for reporting the activities and financial data for each financial year in the upcoming year. The failure to fulfill LLP Annual Compliance requirements levies an additional fee of ₹ 100 each day of a delay till the actual date of filing. Hence, apart from the mandate, the heavy penalty compels the Designated Partners to fulfill the requirements."
                        ]
                    }
                ]
            },
            {
                title: 'Benefits of Annual Compliance',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Higher Credibility",
                        description: [
                            "Legal compliance is a primary requirement for any business. The status of LLP annual filing is displayed at the Master Data of the LLP on MCA portal and the same can be accessed by any person. For loan approvals or any other similar requirements, compliance is a major criterion to measure the credibility of the organization."
                        ]
                    },
                    {
                        title: "Record of Financial Worth",
                        description: [
                            "The forms filed by the LLP are accessible by companies. Hence, while entering into contracts or major projects, the concerning party may also inspect the financial worth. LLP annual filing provides the record of its financial worth and capacity to an interested person or party."
                        ]
                    },
                    {
                        title: "Maintain Active Status and avoid penalties",
                        description: [
                            "In case of consecutive default in annual filing, the LLP can be declared as defunct or receive default status. Also, the partners can be declared as defaulters and may also be disqualified from their further appointment in LLP or company. Hence, LLP needs to file the return to maintain active status. Regular filing also saves the LLP from heavy additional fee and penalties."
                        ]
                    },
                    {
                        title: "Easy conversion and closure",
                        description: [
                            "For conversion of the LLP into any other organization, annual filing is very essential. The regular compliance records ease the conversion task. The same applies in case of closure of LLP. Even if the LLP was non-operational, the Registrar may ask to fulfill annual compliance, with additional LLP filing fee, if applicable."
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
                        title: "PAN Card and Certificate of Incorporation of LLP"
                    },
                    {
                        title: "The LLP Agreement along with any supplementary agreement, if any"
                    },
                    {
                        title: "Financial Statement of LLP duly signed by the Designated Partners"
                    },
                    {
                        title: "DSC of all Designated Partners is required"
                    }
                ]
            }
        ]
    },
    PROFESSIONAL_TAX: {
        title: FormPageScreenTitleMap['PROFESSIONAL_TAX'],
        description: FormPageScreenDescriptionMap['PROFESSIONAL_TAX'],
        navigationContainers: [
            {
                title: 'Overview - Professional Tax Registration',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Professional Tax is a tax collected by State Governments from the professionally occupied business entities. A person earning income from salary or professions such as Chartered Accountants, Company Secretaries, Lawyers, etc. is required to pay professional tax. For the purpose of this registration, the employers, professionals, traders, etc. come under the purview of registration.",
                            "This tax is deducted from the salary of the employer, which is later eligible for deduction from the computation of taxable income. The registration is obtained by the employers and business owners with the respect Municipal Corporation. Being it State based registration, the rate of tax and method of registration is different. Further, there are two types of registrations being – PTEC and PTRC registrations."
                        ]
                    }
                ]
            },
            {
                title: 'Benefits of Professional Tax Registration in India',
                navigationTitle: 'Advantages',
                containerKey: 'advantages',
                type: FormPageContainerType.CARD_LIST,
                value: [
                    {
                        title: "Be compliant",
                        description: [
                            "Helps you in keeping your company actively running and legally compliant with state laws."
                        ]
                    },
                    {
                        title: "Safeguard from paying penalties",
                        description: [
                            "Employer and employee are secured from heavy penalties."
                        ]
                    },
                    {
                        title: "Nominal Payables",
                        description: [
                            "The taxes deducted as per the state government are nominal and they are structured according to a salary range, hence the burden on taxpayers is nominal."
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
                        title: "A self-attested copy of ID proof of Proprietor/ Partner/ Director"
                    },
                    {
                        title: "Self-attested copy of address proof of Proprietor/ Partner/ Director. Shop and Establishment Certificate(if any )"
                    },
                    {
                        title: "3 copy of passport size photograph of the Proprietor/ Partner/ Director"
                    },
                    {
                        title: "MoA – AoA of Company, Partnership Deed/ LLP Agreement, etc. along with the registration  certificate, if any"
                    }
                ]
            }
        ]
    },
    ADD_DIRECTOR: {
        title: FormPageScreenTitleMap['ADD_DIRECTOR'],
        description: FormPageScreenDescriptionMap['ADD_DIRECTOR'],
        navigationContainers: [
            {
                title: 'Overview - Adding a Director',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "It is possible to add or remove a director from the company at any time. While the articles of incorporation should have provisions allowing it, the Articles of Association and Companies Act provisions dictate how and who can be appointed as a new director. Adding new directors to the company involves following a bunch of procedures and Vakilsearch is here to help you make the whole process easy for you."
                        ],
                        innerList: [
                            {
                                title: "Why Add/Change Directors?",
                                description: [
                                    "The following are the common reasons why people choose to add or change directors in a company:"
                                ],
                                innerList: [
                                    {
                                        title: "To get new talent on board",
                                        description: [
                                            "As your company grows and evolves, you will need to bring new talent on board to meet the new requirements and challenges. It is natural to want to add or make changes in the top-level management."
                                        ]
                                    },
                                    {
                                        title: "No dilution of ownership",
                                        description: [
                                            "Directors are primarily responsible for the day-to-day operations of a company. Adding or appointing an additional director helps the shareholders assign more operational responsibilities without losing any strategic control."
                                        ]
                                    },
                                    {
                                        title: "Inefficiency of existing directors",
                                        description: [
                                            "It could be that the existing directors cannot meet the requirements of the work or maybe even due to retirement, family problems, physical ailments or other personal reasons. In such cases, you need to add new directors."
                                        ]
                                    },
                                    {
                                        title: "To meet the statutory limit",
                                        description: [
                                            "Every type of company needs a certain number of directors. In case of sudden death or plans of retirement from existing directors, you will have to add another director to your company."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Process of Adding a Director',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The process of adding a director is more complicated than one might think it to be.",
                value: [
                    {
                        description: [
                            "Step 1: Check if the articles (AOA) of the company supports adding an additional director. If there are no such provisions in the AoA of the company, then modify the AoA of the company in a way that allows adding an additional company director."
                        ]
                    },
                    {
                        description: [
                            "Step 2: The proposed director must give his or her consent to act as the director via Form DIR-2."
                        ]
                    },
                    {
                        description: [
                            "Step 3: The company must pass a board resolution for appointing a particular person as a director of the company."
                        ]
                    },
                    {
                        description: [
                            "Step 4: Get DSC (digital signature certificate) and DIN (director identification number) for the new director."
                        ]
                    },
                    {
                        description: [
                            "Step 5: Collect the basic documents and information required for the process and get Form DIR-2, Form DIR-12 and Form DIR-8 at ROC done."
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
                        innerList: [
                            {
                                title: "Passport"
                            },
                            {
                                title: "Identification proof (PAN card)"
                            },
                            {
                                title: "Proof of residence (electricity bill, rental agreement, Aadhar Card, voter ID, passport, driving licence)"
                            },
                            {
                                title: "Passport size photograph"
                            },
                            {
                                title: "Digital signature certificate of the proposed director"
                            },
                            {
                                title: "PAN card: mandatory for an Indian applicant"
                            },
                            {
                                title: "Passport: mandatory for a foreign applicant."
                            }
                        ]
                    }
                ]
            },
        ]
    },
    REMOVE_DIRECTOR: {
        title: FormPageScreenTitleMap['REMOVE_DIRECTOR'],
        description: FormPageScreenDescriptionMap['REMOVE_DIRECTOR'],
        navigationContainers: [
            {
                title: 'Overview - Removing a Director',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "It is possible to add or remove a director from the company at any time. There are different reasons why a director is removed and there are three different procedures based on the reason. Irrespective of that, Vakilsearch can help you with removing a director from your company and make the whole process easy for you."
                        ],
                        innerList: [
                            {
                                title: "Reasons to Remove a Director",
                                description: [
                                    "A director can be removed for any of the following reasons:"
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "If they incur any of the disqualifications specified under the Companies Act",
                                            "If they absent themselves from board meetings over 12 months",
                                            "If they enter into contracts or arrangements against the provisions of Section 184 of the Companies Act",
                                            "If they are disqualified by an order of a court or tribunal",
                                            "If they are convicted by a court of any offence and sentenced to imprisonment for not less than six months",
                                            "If they have not abided by the terms and protocols mentioned in the Companies Act of 2013",
                                            "If they have resigned voluntarily from their position."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Ways to Remove a Director',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "There are 3 ways to remove a director from a company:",
                value: [
                    {
                        title: "1. When the Directors Tender Their Resignation",
                        description: [
                            "Step 1: Holding a board meeting by giving seven days of clear notice",
                            "Step 2: In the meeting, the board members will take note of the resignation",
                            "Step 3: Then they have to pass a resolution in a particular format to that effect",
                            "Step 4: After that, Form DIR-11 needs to be filed by the resigning director in his individual capacity",
                            "Step 5: The company has to file Form DIR-12 with the registrar of companies (RoC) along with the registration letter and the board resolution",
                            "Step 6: When all the forms are filled and the formalities for the removal of the director are done, the name of the director will be removed from the master data of the company on the Ministry of Corporate Affairs (MCA) website.",
                        ]
                    },
                    {
                        title: "2. Director Remains Absent from the Board Meetings for 12 Months",
                        description: [
                            "Step 1: If a director absents himself from all the meetings of the board of directors held over a period of twelve months, with or without seeking leave of absence from the board, they are considered to have vacated their office as per Section 167",
                            "Step 2: A Form (DIR-12) must be filed",
                            "Step 3: Upon completion of the formalities, the concerned director’s name will be removed from the database of the Ministry of Corporate Affairs (MCA).",
                        ]
                    },
                    {
                        title: "3. Removal of Director by Shareholders",
                        description: [
                            "Step 1: A notice is sent to all the shareholders for a board meeting required to be conducted within seven days from the date of the issue",
                            "Step 2: A resolution is passed to have a general meeting and then for the removal of the director, subject to the approval of the shareholders on the day of the meeting",
                            "Step 3: After providing a 21-day notice, the second meeting of shareholders is held to vote on the resolution passed earlier and the director who is being removed by the shareholders will be allowed to speak on their removal",
                            "Step 4: The shareholders must file Form DIR-12, along with the attachments of the board resolution, and an ordinary resolution",
                            "Step 5: Once all the formalities are over, the name of the concerned director is removed from the database of the Ministry of Corporate Affairs (MCA) and its website.",
                        ]
                    }
                ]
            },
            {
                title: 'Consequences of Not Filing Form DIR-12:',
                navigationTitle: 'Consequences',
                containerKey: 'consequences',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        description: [
                            "DIR-12 has to be filed within 30 days from the date of resignation. If the company fails to do so, the following penalties will apply:"
                        ],
                        innerList: [
                            {
                                title: "After 30 days - within 60 days: twice the government fees"
                            },
                            {
                                title: "After 60 days - within 90 days: 4 times the government fees"
                            },
                            {
                                title: "If it exceeds 90 days: 10 times the government fees"
                            },
                            {
                                title: "If it exceeds 180 days: 12 times the government fees and will be booked for the compounding offence as well"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    CHANGE_IN_REGISTRED_OFFICE: {
        title: FormPageScreenTitleMap['CHANGE_IN_REGISTRED_OFFICE'],
        description: FormPageScreenDescriptionMap['CHANGE_IN_REGISTRED_OFFICE'],
        navigationContainers: [
            {
                title: 'Overview - Change in Registered Office Address',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "Section 12 of the Companies Act 0f 2013 mandates all companies or LLPs to have a registered office at the time of or within 30 days of incorporation. The registered office address of a company or LLP is the principal place of business and all official correspondence from the Ministry of Corporate Affairs (MCA) is sent to the mentioned address only. Therefore, any change of address to the registered office should be intimated to the RoC or MCA.",
                            "A company can have other offices such as an administrative office, a corporate office, a branch office, and so on. However, only the registered office address should be notified to the MCA. No intimation to the RoC or MCA is required regarding the establishment or change of address of other offices belonging to the company."
                        ]
                    }
                ]
            },
            {
                title: 'Procedure for changing a registered office address',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "The procedure for a change in the registered office of LLP or a company is mentioned below-",
                value: [
                    {
                        title: "change in registered office address within the local limits of the city, town or village",
                        description: [
                            "• With a board resolution",
                            "• By filing Form INC- 22 within 30 days of the Board Resolution"
                        ]
                    },
                    {
                        title: "change in the registered office of the company outside the local limits of the city, town or village- but within the same RoC and the same state",
                        description: [
                            "• With a board resolution and a special resolution",
                            "• By filing Form MGT-14 within 30 days of the Special Resolution",
                            "• By filing Form INC- 22 within 30 days of the Special Resolution"
                        ]
                    },
                    {
                        title: "Change in registered office address from one RoC to another within the same state",
                        description: [
                            "• With a board resolution, a special resolution and the approval from the Regional Director",
                            "• By filing Form MGT-14 within 30 days of the Special Resolution",
                            "• By filing Form INC- 23",
                            "• By filing Form INC- 28 within 60 days from the order of the Regional Director",
                            "• By filing Form INC- 22 within 30 days from the order of the Regional Director",
                        ]
                    },
                    {
                        title: "change of address from one state to another, outside the existing RoC jurisdiction",
                        description: [
                            "• With a board resolution, a special resolution and the approval from the Regional Director",
                            "• After a necessary alteration in the Memorandum of Association (MoA)",
                            "• By filing Form MGT-14 within 30 days of the Special Resolution",
                            "• By filing Form INC- 23, after at least 1 month of publishing newspaper Ads ( as per Form INC -26) and serving notices to the creditors",
                            "• By filing Form INC- 28 within 30 days from the receipt of the order of the Regional Director",
                            "• By filing Form INC- 22 within 30 days from the order of the Regional Director",
                            "• Necessary alteration is required in the Memorandum of Association (MoA)"
                        ]
                    },
                ]
            },
            {
                title: 'Documents required',
                navigationTitle: 'Documents',
                containerKey: 'requiredDocuments',
                type: FormPageContainerType.LIST,
                value: [
                    {
                        innerList: [
                            {
                                title: "List of company directors"
                            },
                            {
                                title: "List of company shareholders"
                            },
                            {
                                title: "List of creditors duly certified by the auditors of the company"
                            },
                            {
                                title: "Copy of public notice published"
                            },
                            {
                                title: "Copy of Certificate of Incorporation MoA, and AoA"
                            },
                            {
                                title: "Latest audited financial statements of the company"
                            },
                            {
                                title: "Rent agreement in the name of the company under the new address"
                            },
                            {
                                title: "Utility bill ( not older than two months ) as proof of premises and a NOC certificate (NOC) from the owner of the promises."
                            }
                        ]
                    }
                ]
            },
        ]
    },
    REGISTERED_OFFICE_CHANGE: {
        title: FormPageScreenTitleMap['REGISTERED_OFFICE_CHANGE'],
        description: FormPageScreenDescriptionMap['REGISTERED_OFFICE_CHANGE'],
        navigationContainers: [
            {
                title: 'Overview - Change in Registered Office',
                navigationTitle: 'Overview',
                containerKey: 'overview',
                type: FormPageContainerType.TEXT,
                value: [
                    {
                        description: [
                            "The registered office of a company is counted as a place where all the official connections related to the company is sent. Apart from registered office, a company owns many different offices such as corporate office, administrative office, branch office, and factory. Though, it is necessary for the registered office to register itself with the Ministry of Corporate Affairs. Promoters of the company decide the location and place of the registered office. Once registered office is declared via filling INC 22, any changes in the registered office of the company is intimated to the ROC.",
                            "The domicile of the company is determined by the registered office of the company. Registrar of Company (ROC) is also decided by the location in which the registered office of the company is situated. Any change in relation to the address of registered office must be informed to the Registrar of Company (ROC) within 15 days."
                        ],
                        innerList: [
                            {
                                title: "Reason for Change in Registered Office Address",
                                description: [
                                    "Stakeholders and the board of directors’ residential area often decide the location of the registered office. The only reason considered is their comfort. Although, in some cases need arises to change the registered office location from one place to another."
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "• Company required to change their registered office address when it is growing at a faster pace and the office space and infrastructure does not fit in as per the company’s current position.",
                                            "• If you are in the last period of your company’s lease and you are thinking of hiring another office space at lease.",
                                            "• If company is planning to explore new genres for business growth and hence planning to shift their registered office to a place where they can explore better market opportunities.",
                                            "• If another company is investing in your company you registered office address will bound to shift.",
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "Registered Office Requirement During Company Registration",
                                description: [
                                    "It is necessary to announce the registered office the company at the time of incorporation of the company. Submit below-mentioned necessary documents at the time of finalizing a place for your company’s registered office:"
                                ],
                                innerList: [
                                    {
                                        description: [
                                            "• Water Bill/Electricity Bill",
                                            "• Property Tax Receipt",
                                            "• NOC obtained from landlord regarding Registered Office",
                                            "• Lease agreement between landlord and the company",
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Procedure for changing a registered office',
                navigationTitle: 'Steps',
                containerKey: 'process',
                type: FormPageContainerType.CARD_LIST,
                description: "Let’s dig in and go through the procedure that needs to be followed during the change in registered office address as provided in the Companies Act, 2013:",
                value: [
                    {
                        title: "Change In Private Limited Company’s Registered Office Within The Same State",
                        description: [
                            "The below-mentioned procedure is followed, in case of any change in the address of registered office of a Private Limited Company from one place to another within the boundaries of same state:",
                            "1. A Board meeting is conducted and a decision is made on the same",
                            "2. An applicant is required to file Form INC-22 with the ROC and that’s too within 15 days from the date of passing the resolution."
                        ]
                    },
                    {
                        title: "Change In The Registered Office Of A Private Limited Company Outside The Boundaries Of Existing Town, City Or Village",
                        description: [
                            "When the Private Limited Company shifts its registered office from outside the boundaries of existing city, town or village, following procedure is required to be followed:",
                            "1. A board meeting is conducted in which the date, day, time and venue of the Extra Ordinary General meeting is fixed.",
                            "2. A decision regarding the change in office address is passed in the Extra-Ordinary General meeting.",
                            "3. With the Registrar of Companies Form MGT-14 is filed within 30 days from the date of passing the resolution."
                        ]
                    },
                    {
                        title: "Change In The Registered Office Of A Company Within The Same State But From One Registrar Of Companies (ROC) To Another Registrar Of Companies (ROC)",
                        description: [
                            "In case of change in the current registered office address of a private limited company from one ROC to another but within the boundary limits of a same state, following norms are need to be followed according to the Companies Act, 2013:",
                            "1. A Board meeting is conducted which will finalize the day, date, time and venue of the Extra Ordinary meeting",
                            "2. In the Extra Ordinary General meeting a special decision is made for the alteration of MOA and the shifting of the Registered Office.",
                            "3. Publish an advertisement both in an English newspaper and another in Vernacular newspaper mention the updated address of the company’s registered office.",
                            "4. Form MGT-14 is filed with the ROC of the companies within 30 days from the date of coming to a conclusion",
                            "5. A certified copy of the Extra Ordinary General Meeting’s decision."
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
                        innerList: [
                            {
                                title: "Certified True Copy of the Notice of EGM( Extra-Ordinary General Meeting)."
                            },
                            {
                                title: "Certified True Copy of the resolution passed at EGM."
                            },
                            {
                                title: "Minutes of EGM"
                            },
                            {
                                title: "Copy of Newspaper Advertisement."
                            },
                            {
                                title: "Copy of Altered MOA."
                            },
                            {
                                title: "An Affidavit verifying the application."
                            },
                            {
                                title: "List of creditors and Debenture holders entitled to the objections."
                            },
                            {
                                title: "Declaration from the Key Managerial Personnel"
                            },
                            {
                                title: "Declaration from any two Directors that the company has not defaulted in payments of due to its workmen."
                            }
                        ]
                    },
                    {
                        description: [
                            "Regional Director will serve you his confirmation within 30 days from the date of receiving the application.",
                            "The next thing the company has to do is file Form INC-28 with the ROC within 30days from the date of submission.",
                            "Thereafter, Form INC-22 is filed with the ROC within 15 days of the change in the registered office of the company along with the following documents:"
                        ],
                        innerList: [
                            {
                                title: "Copy of the Registered Office Address"
                            },
                            {
                                title: "Copy of the Utility Bills (not older than 2 months)."
                            },
                            {
                                title: "NOC from the owner for the use of Premises."
                            }
                        ]
                    }
                ]
            },
        ]
    }
}