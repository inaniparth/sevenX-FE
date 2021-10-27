export interface FooterFaqScreenWiseDataModel {
    question: string;
    answer: string[];
}

export const FooterFaqScreenWiseData: { [key: string]: FooterFaqScreenWiseDataModel[] } = {
    LTD_COMPANY: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                'DIN is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP.  For obtaining DIN, an online application has to be submitted to the Ministry of Corporate Affairs with a copy of Identity and Address Proof of the Applicant and a declaration by the applicant. The Online DIN Application has to be signed by a Practicing Company Secretary / Chartered Accountant / Cost Accountant. Now DIN is alloted alone with incorporation of new company or in case of appointment of directors, with the proposal from respective company.'
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "DSC is a legally recognised method of signing documents electronically. A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. The output of the signature process is called digital signature.",
                "Digital signature certificates are used by programs on the Internet and local machines to confirm the identity of a third party.",
                "Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum.",
                "MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company digitally. They will also have to enter name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness digitaly who knows the subscribers.",
                "The details of subscribers to the MOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA is the bylaws of a company and can be filed along with the incorporation document.",
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors.",
                "In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company.",
                "The AOA will be subscribed by the initial promoters of the company  digitally. Promoters will have to enter their names, father's name, residential address, and occupation.  The AOA should also bear the signature of the witness (digitally)  who knows the subscribers.",
                "The details of subscribers to the AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the AOA."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company.",
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Now there is no minimum paid up capital requirements applicable for a company."
            ]
        },
        {
            question: 'What are Incorporation Forms?',
            answer: [
                "1. SPICe -INC-32:",
                "Statutory declaration should be filed at the time of incorporation of a company, confirming the compliance of legal requirements under the Companies Act for registration of a new company. The form also contain first directors details and registered office of the company.",
                "2. INC-33  eMOA:",
                "Electronic Memorandum of Association of the company.",
                "3. INC-34  eAOA:",
                "Articles of Association of the company in electronic form.",
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India.",
                "CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)."
            ]
        }
    ],
    PARTERSHIP_FIRM: [
        {
            question: 'Who can become a Partner?',
            answer: [
                'An Individual who is an Indian National and has completed 18 years of age and a Company or LLP Registered in India can become a partner of a partnership firm.'
            ]
        },
        {
            question: 'How many Partners required for Partership?',
            answer: [
                '2 Persons (Individual or Company/LLP) are required to make a Partnership.'
            ]
        },
        {
            question: 'How to make Partnership?',
            answer: [
                'A Partnership is made by executing an agreement between the Partners.'
            ]
        },
        {
            question: 'Is the Partership Agreement necessary?',
            answer: [
                'Yes. A Partnership it self is created by the agreement between the partners. So, there is no partnership without an agreement.'
            ]
        },
        {
            question: 'Is Registration Partership Mandatory?',
            answer: [
                'No. Registration is not mandatory for a Partnership. But for better acceptance under various authorities including Bank, the Partnership deed is required to be registered under respective State Partnership Act.'
            ]
        },
        {
            question: 'How to register a Partership?',
            answer: [
                'Registration of Partnership is to be done under State Partnership Act and Rules and is done by the Registrar of Firms in respective State.'
            ]
        },
        {
            question: 'What is Liability of Partners?',
            answer: [
                'Liability of Partners in a Partnership Firm is unlimited. The personal assets of partners are also legally exposed to meet the business liabilities.'
            ]
        },
        {
            question: 'Can a Partership open Bank Account without Registration?',
            answer: [
                'Yes. Registration of Partnership is not a pre-condition for opening a Bank Account.'
            ]
        },
        {
            question: 'Separate PAN required for Partership?',
            answer: [
                'Yes. Partnership must apply for separate Permanent Account Number (PAN) under Income Tax Law.'
            ]
        }
    ],
    PROPRIETORSHIP_REGISTRATION: [
        {
            question: 'What is a Proprietorship?',
            answer: [
                "Proprietorship is a business concern owned and operated by an individual. Proprietorship is nothing but the Individual carrying the business himself."
            ]
        },
        {
            question: 'What is the status of Proprietorship?',
            answer: [
                "Proprietorship is an unincorporated business. It does not have any separate status other than individual."
            ]
        },
        {
            question: 'Can Proprietorship acquire a separate PAN?',
            answer: [
                "Proprietorship can not obtain a separate PAN as there is no separate entity status to it. So, the PAN of Individual Proprietor will be used for Income tax purpose."
            ]
        },
        {
            question: 'How to Register a Proprietorship?',
            answer: [
                "In India, there is specific Registration for a Proprietorship."
            ]
        },
        {
            question: 'Can Proprietorship open Current Account?',
            answer: [
                "Yes. Proprietorship can open Current Account with a Bank with individual details of proprietor"
            ]
        },
        {
            question: 'Can one individual operate multiple Proprietorships?',
            answer: [
                "Yes. One individual can operate multiple Proprietorships. There is no limit of number of Proprietorships by an Individual"
            ]
        },
        {
            question: 'Can Proprietorship be operated with a Brand Name or Business Name?',
            answer: [
                "Yes. A Proprietorship can be operated with a Brand Name or Business Name. Also, the Current Account can be operated with a Business Name."
            ]
        },
        {
            question: 'Can Proprietorship obtain GST Registration?',
            answer: [
                "Yes. A Proprietorship can obtain GST Registration with individual details of proprietor or with a Business Name."
            ]
        },
        {
            question: 'What all registrations can be obtained for a Proprietorship?',
            answer: [
                "Though there is no specific registration as such, the proprietorship needs to obtain ancillary registration related to business operations such as MSME Registration, Shops and Establishment Registration, Professional Tax Registration, Goods and Service Tax Registration etc."
            ]
        }
    ],
    LLP: [
        {
            question: 'How many Parters / Designated Parters are required for registering LLP?',
            answer: [
                "Minimum Number of 2 Partners and 2 Designated Partners required for registering a Limited Liability Partnership (LLP)"
            ]
        },
        {
            question: 'Who can become a Designated Partner?',
            answer: [
                "Every LLP must have minimum 2 designated partners who will be responsible for compliance under LLP Act. A partner who is an individual can be appointed as Designated partner and if LLP have only entities as partners their nominee who is a natural person appointed as designated partner."
            ]
        },
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registeting a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: 'What is LLP Agreement?',
            answer: [
                "LLP agreement is an agreeent between the paners of LLP. LLP agreement defines the mutual rights and duties of each partner, the relationships among individual partners and that of each partner with the LLP. The LLP Agreement should be in accordance with first schedule of LLP Act."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of an LLP or its principal place of business. The address of the Registered Office will be used for all official communications of the LLP. The LLP shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the LLP can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Contribution?',
            answer: [
                "Contribution means the amount contributed by each partner in the LLP as per the LLP agreement. The contribution is the liability of each partner and an LLP can recover the agreed contribution from the partner. A partner can contribute to the capital by cash, goods or services subject to applicable valuation."
            ]
        },
        {
            question: 'Who is a partner of an LLP?',
            answer: [
                "A partner in relation to an LLP means any person who becomes a partner in the liability partnership in accordance with the LLP agreement. An individual (who is capable of entering in to an agreement) or a body corporate can become a partner in an LLP. A body corporate means an LLP registered under the LLP Act, limited company registered under the Companies Act, a registered legal entity in any country registered under relevant laws of that country. However, it does not include a society or a corporation sole."
            ]
        },
        {
            question: 'Who can become a partner of an LLP?',
            answer: [
                "An individual (who is capable of entering in to an agreement) or a body corporate can become a partner in an LLP. A body corporate means an LLP registered under the LLP Act, limited company registered under the Companies Act, a registered legal entity in any country registered under relevant laws of that country. However, it does not include a society or a corporation sole."
            ]
        },
        {
            question: 'What is LLPIN?',
            answer: [
                "LLPIN is a 7-digit alpha numeric registration number allotted by Ministry of Corporate Affairs, Government of India, to an LLP. For example, AAA-0002 is the number allotted by the Ministry of Corporate Affairs to CompaniesInn Consulting LLP, the first LLP registered online in India."
            ]
        }
    ],
    OPC: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registeting a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: 'How many Persons required for registering an OPC?',
            answer: [
                "ONE Person who is an Indian National and resident in India can register an OPC. Also it requires another person as Nominee Shareholder. So, in effect you need TWO People for registering an OPC. The Primary Shareholer can also be a Director."
            ]
        },
        {
            question: 'Who can become a Shareholder or Nominee Shareholder in an OPC?',
            answer: [
                "An India National (Individal), who is resident in India can only become a Shareholder or Nominee Shareholde in an OPC. Foreign Nationals, Non Resident Indians, Companies and LLPs cannot become a Shareholder or Nominee Shareholde in an OPC."
            ]
        },
        {
            question: 'Who can become a Director in an OPC?',
            answer: [
                "Only individuals can become directors of the company. There is no restrictions for Foreign Nationals or Non Resident Indians to become a director of an OPC."
            ]
        },
        {
            question: "How many OPC's a person can register or become Nominee?",
            answer: [
                "A Person can register only ONE OPC. Also a person can not become nominee in more than one OPC."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum. MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company in their own handwriting. They will also have to write their name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors. In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company. The AOA will be subscribed by the initial promoters of the company in their own handwriting. Promoters will have to write their names, father's name, residential address, and occupation. The AOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'Can the details of subscribers to the MOA & AOA can be amended?',
            answer: [
                "The details of subscribers to the MOA & AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA & AOA"
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital. There is no requirement as to minimum Authorised Capital for registration of Company."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Subscribers to the It is not necessary that subscribers should bring in the subscribed capital immediately after ncorporation. However, at the time of closing accounts for the first financial year, there should be a mimimum paid up capital of Rs.1,00,000."
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)"
            ]
        },
        {
            question: 'Can a Minor be a Shareholder or Nominee?',
            answer: [
                "No. A minor can not become member or nominee of the One Person Company. Also a Minor cannot hold share with beneficial interest in an OPC."
            ]
        },
        {
            question: 'Whether OPC can do Non-Banking Financial and Investement?',
            answer: [
                "An OPC is prohibited from carrying Non-Banking Financial activites ad and Investment in securities of other body corporates."
            ]
        },
        {
            question: 'When an OPC can be converted to Private Limited Company?',
            answer: [
                "An OPC can be converted voluntarily into any other kind of company (Private Limited or Public Limited) only after 2 years from the date of incorporation. An OPC can be converted to any other kind of company with in 2 years of IncorporationIn only if the the Paid up Capital of OPC exceeds Rupees Fifty Lakhs of or its average annual turnover during a period of three consecutive financial years exceeds Rupees Two Crore."
            ]
        },
        {
            question: 'Why a Nominee is required in OPC?',
            answer: [
                "The subscriber to the memorandum shall nominate another person as nominee after obtaining a written consent from such person. In the event of the shareholder death or incapacity to contract, the Nominee shall become the member of that OPC."
            ]
        },
        {
            question: 'Can the shareholder OPC change Nominee?',
            answer: [
                "Yes. The sharehodder can change the nominee with an intimation in writing to the company at any time for any reason and can and nominate another person after obtaining the prior consent of new nominee."
            ]
        },
        {
            question: 'Can the Nominee withdraw his consent from OPC?',
            answer: [
                "Yes. The Nominee can withdraw his consent by giving a notice in writing to the sole member and to the One Person Company. In such case, the sole member shall nominate another person as nominee within fifteen days of the receipt of the notice of withdrawal."
            ]
        }
    ],
    PVT_LTD: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
            ]
        },
        {
            question: 'How to Obtain a DIN?',
            answer: [
                "New DIN will be allotted to a Director / Designated Partner while registeting a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
            ]
        },
        {
            question: "How many Shareholder(s) and Director(s) are required for registering a Private Limited Company?",
            answer: [
                "Minimum Number of 2 Shareholder and 2 Directors required for registering a Private Limited Company."
            ]
        },
        {
            question: "Who can become a Shareholder / Director in a Company?",
            answer: [
                "Shareholders could be Individuals, Companies or LLPs, but only individuals can become directors of the company."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum. MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company in their own handwriting. They will also have to write their name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors. In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company.",
                "The AOA will be subscribed by the initial promoters of the company in their own handwriting. Promoters will have to write their names, father's name, residential address, and occupation. The AOA should also bear the signature of the witness who knows the subscribers."
            ]
        },
        {
            question: 'Can the details of subscribers to the MOA & AOA can be amended?',
            answer: [
                "The details of subscribers to the MOA & AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA & AOA"
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: 'Whether the Registered Office can be changed?',
            answer: [
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
            ]
        },
        {
            question: 'What is Authorised Capital?',
            answer: [
                "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital. There is no requirement as to minimum Authorised Capital for registration of Company."
            ]
        },
        {
            question: 'What is subscribed capital?',
            answer: [
                "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
            ]
        },
        {
            question: 'What is paid up capital?',
            answer: [
                "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Subscribers to the It is not necessary that subscribers should bring in the subscribed capital immediately after ncorporation. However, at the time of closing accounts for the first financial year, there should be a mimimum paid up capital of Rs.1,00,000."
            ]
        },
        {
            question: 'What is Corporate Identification Number (CIN)?',
            answer: [
                "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state (for example, U74110KA2008PTC046914)"
            ]
        },
        {
            question: "Can a Private Company Accept Deposits?",
            answer: [
                "Private company cannot accept deposits from the public. However, it can accept loans and deposits only from its shareholders, directors and directors' relatives subject to conditions."
            ]
        },
        {
            question: "What is AGILE Application SPICe for Company Registration?",
            answer: [
                "GILE application (SPICe) for incorporation of a company shall be accompanied by a linked e-form AGILE (Application for registration of the Goods and Services Tax Identification Number (GSTIN), Employees’ State Insurance Corporation (ESIC) registration pLus Employees’ Provident Fund Organisation(EPFO) registration) with effect from 31st March 2019, as notified vide the Companies (Incorporation) Third Amendment Rules, 2019 dated 29th March 2019."
            ]
        },
        {
            question: "What is the government fee payable for registration?",
            answer: [
                "At present no government fee is applicable is the authorised capital is Rs.15 lakhs. State government stamp duty applicable as per respective state government stamp duty"
            ]
        },
        {
            question: "Commencement of Business",
            answer: [
                "Every company shall file commencement of business with Registrar within 180 days from the date of incorporation. Before filing commencement of business, all subscribers shall bring subscription capital into companies' account."
            ]
        },
        {
            question: "What is the Corporate Tax application?",
            answer: [
                "In order to promote growth and investment, a new provision has been added to Income-tax Act with effect from FY 2019-20 which allows any domestic company an option to pay income-tax at the rate of 22% subject to condition that they will not avail any exemption/incentive. The effective tax rate for these companies shall be 25.17% inclusive of surcharge & cess. Also, such companies shall not be required to pay Minimum Alternate Tax."
            ]
        },
        {
            question: "Corporate Tax at 15%",
            answer: [
                "In order to attract fresh investment in manufacturing and to boost ‘Make-in-India’ initiative of the Government, any new domestic company incorporated on or after 1st October 2019 making fresh investment in manufacturing, will have an option to pay income-tax at the rate of 15%. This benefit is available to companies which do not avail any exemption/incentive and commences their production on or before 31st March, 2023. The effective tax rate for these companies shall be 17.01% inclusive of surcharge & cess. Also, such companies shall not be required to pay Minimum Alternate Tax."
            ]
        }
    ],
    SECTION_8_COMPANY_NGO: [
        {
            question: 'What is Directors Identification Number (DIN)?',
            answer: [
                'DIN is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP.  For obtaining DIN, an online application has to be submitted to the Ministry of Corporate Affairs with a copy of Identity and Address Proof of the Applicant and a declaration by the applicant. The Online DIN Application has to be signed by a Practicing Company Secretary / Chartered Accountant / Cost Accountant. Now DIN is alloted alone with incorporation of new company or in case of appointment of directors, with the proposal from respective company.'
            ]
        },
        {
            question: 'What is Digital Signature Certificate (DSC)?',
            answer: [
                "DSC is a legally recognised method of signing documents electronically. A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. The output of the signature process is called digital signature.",
                "Digital signature certificates are used by programs on the Internet and local machines to confirm the identity of a third party.",
                "Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
            ]
        },
        {
            question: 'What is Memorandum of Association (MOA)?',
            answer: [
                "MOA is the charter document of a company. A company is created by registering a memorandum.",
                "MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company digitally. They will also have to enter name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness digitaly who knows the subscribers.",
                "The details of subscribers to the MOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA."
            ]
        },
        {
            question: 'What is Articles of Association (AOA)?',
            answer: [
                "AOA is the bylaws of a company and can be filed along with the incorporation document.",
                "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors.",
                "In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company.",
                "The AOA will be subscribed by the initial promoters of the company  digitally. Promoters will have to enter their names, father's name, residential address, and occupation.  The AOA should also bear the signature of the witness (digitally)  who knows the subscribers.",
                "The details of subscribers to the AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the AOA."
            ]
        },
        {
            question: 'What is Registered Office?',
            answer: [
                "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company.",
                "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
            ]
        },
        {
            question: "Is Name of Section 8 Company end with Limited?",
            answer: [
                "No, section 8 company name need not end with limited as last last world. This is an exemption given by companies act to section 8 company as such type of company is formed for charitable or non profit motive business"
            ]
        }
    ],
    TRUST_REGISTRATION: [
        {
            question: "Is it mandatory for the trust to get the registration done under section 12AB?",
            answer: [
                "Yes, a trust must get the registered under section 12AB of Income Tax Act, 1961 to claim an exemption under section 11."
            ]
        },
        {
            question: "Is trust a separate Legal Entity?",
            answer: [
                "In a strict legal sense, a trust is not a separate legal entity, unlike a company. A trust gets created when the settlor hands over any property to the trustee to be used and employed for the benefit of the beneficiary. This legal arrangement is codified vide a trust deed."
            ]
        },
        {
            question: "What are the Parties of a Trust?",
            answer: [
                "Settlor",
                "Trustee",
                "Beneficiaries"
            ]
        },
        {
            question: "What are the different types of Trust?",
            answer: [
                "Private Trust",
                "Public Trust"
            ]
        },
        {
            question: "What is the Difference between Trustee and Trustor?",
            answer: [
                "Trustor is the person who creates the trust, whereas the person who has the responsibility of managing the trust for the beneficiary is known as Trustee."
            ]
        },
        {
            question: "What is the governing law for a Trust?",
            answer: [
                "The Indian Trusts Act, 1882, is a governing law for a Trust in India"
            ]
        },
        {
            question: "What is a Public Trust and what is the purpose behind forming it?",
            answer: [
                "By and large an public trust is made for setting up a school, universities, other instructive activities, clinic, mature age homes, halfway house, for advancement of kid wellbeing and their strengthening, government assistance of more fragile segment of society, and for satisfaction of Corporate Social Responsibilities (CSR) by organizations."
            ]
        },
        {
            question: "What are the Documents Required During Trust Registration process?",
            answer: [
                "Proof of Identity for Trustor & Trustee",
                "Address Proof of Registered Office",
                "NOC from the Landlord is required",
                "Particulars of the Trustee and settlor",
                "Trust Deed on Proper Stamp Value.",
                "Photographs & PAN of Trustee and settlor."
            ]
        },
        {
            question: "How do I register a trust under Indian Trust Act 1882?",
            answer: [
                "Select an Appropriate Name",
                "Drafting of Trust Deed",
                "Selecting Settlers and Trustees of Trust",
                "Preparing Memorandum of Association",
                "Paying the Requisite Fees",
                "Collection of a Copy of Trust Deed",
                "Submission of Trust Deed to Registrar",
                "Obtain Registration Certificate"
            ]
        },
        {
            question: "What about Amendment in Private trust Deed?",
            answer: [
                "It is extremely difficult to amend a trust deed since a trust by its inherent nature is irrevocable. Therefore, it is important to provide the amendment clauses in the trust deed itself. However, if the amendment clauses provided in the trust deed are too wide, then the trust may not be treated as irrevocable."
            ]
        }
    ],
    SOCIETY_REGISTRATION: [
        {
            question: "Who is required to sign to the memorandum of society?",
            answer: [
                "Individual, Foreigners, Companies, Partnership firm, Other certified organisation."
            ]
        },
        {
            question: "Do the members of society have any rights in society?",
            answer: [
                "Yes, there are the following rights available to the members of society:",
                "They are entitled to vote",
                "They have the right to receive the notice of every meeting",
                "They have the right to receive a copy of bye-laws",
                "They have the right to receive financial statements",
                "They have the right to attend general meetings of societies"
            ]
        },
        {
            question: "Do the members have a share in the profit?",
            answer: [
                "No, members of society are not entitled to profit incurred by the organisation in any form."
            ]
        },
        {
            question: "What is the quorum required for a meeting of a society?",
            answer: [
                "Quorum’ implies the minimum number of members who must be present in the meeting to make the proceedings of the conference valid"
            ]
        },
        {
            question: "What is the General Body of a Society?",
            answer: [
                "General Body of a society comprises of all the members who have subscribed to the memorandum of the organisation."
            ]
        },
        {
            question: "Can Memorandum of Society Be Amended?",
            answer: [
                "Memorandum can be reformed by approval in an extraordinary General Body Meeting called for the purpose after giving due notice. By permission, another extraordinary General Body Meeting called after 30 days. Byelaws can be amended by approval of the majority of members in Special General Body Meeting. Such amended shall be filed with the Registrar within one month."
            ]
        },
        {
            question: "Do I need to have my office property to register an NGO?",
            answer: [
                "No. You can register an NGO in a rented property with a rested lease deed."
            ]
        },
        {
            question: "Can a government servant become a trustee?",
            answer: [
                "Yes, a government servant can become a trustee in an Indian trust."
            ]
        },
        {
            question: "What is 35ac?",
            answer: [
                "There is a special provision for people in the business. If they donate to those NGOs having 35ac registration, they get a tax rebate of 100%."
            ]
        }
    ]
}