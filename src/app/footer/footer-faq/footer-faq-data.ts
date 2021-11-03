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
    ],
    NBFC_REGISTRATION: [
        {
            question: "Does RBI registration mandatory for NBFCs?",
            answer: [
                "Yes, RBI registration is mandatory for setting up NBFC in India under section 45-IA of the RBI Act, 1934."
            ]
        },
        {
            question: "Is there any type of NBFC which is exempt from RBI registration?",
            answer: [
                "On the basis of their nature of activity, different types of NBFCs are regulated by different type of financial bodies such as RBI, SEBI, IRDA, and MCA. Thus, it is clear that it is not important for every NBFC to obtain license from RBI but surely they have to apply for registration with their respective regulatory body."
            ]
        },
        {
            question: "Can existing company apply for NBFC license?",
            answer: [
                "Yes, existing company can apply for license if it is registered under Companies Act."
            ]
        },
        {
            question: "How much capital is required for NBFC registration?",
            answer: [
                "There is a requirement of minimum capital of Rs. 2 cr which will be reserved in the form of fixed deposit in the current account of the company."
            ]
        },
        {
            question: "What will be the total fees for NBFC registration?",
            answer: [
                "Well, as per the government rules & regulations there is a basic need of minimum capital of Rs. 2 Cr consequently applicant first have to apply for company registration with minimum capital along with the government fees of filing necessary forms."
            ]
        },
        {
            question: "Is NBFC eligible to accept deposits?",
            answer: [
                "Yes, NBFC is eligible to accept deposits but at least for a period of 12 months and maximum for a period of 60 days on the other hand demand deposits cannot be accepted by NBFC."
            ]
        },
        {
            question: "Can NBFC applicant take loan to meet the minimum capital requirement?",
            answer: [
                "No, to meet the minimum capital requirement loan cannot be taken."
            ]
        },
        {
            question: "Is it mandatory to posses’ financial experience in order to apply for NBFC license?",
            answer: [
                "Yes, it is important to have financial sector exposure to minimum 1/3rd directors to apply for NBFC license."
            ]
        },
        {
            question: "Is there any cap on interest rate for NBFCs?",
            answer: [
                "Interest rate will be mentioned in the business plan submitted by the applicant to the RBI at the time of registration subject to the limit prescribed by the RBI."
            ]
        },
        {
            question: "What type of loans can be given by NBFCs?",
            answer: [
                "NBFC-ND can give unsecured personal loan & business loan, Secured loan against property, loan against securities, loan to MSMEs, Gold loan etc. however it should be mentioned in the business plan."
            ]
        },
        {
            question: "Can I apply for NBFC license without taking help of professional consultant?",
            answer: [
                "No, professional expertise is crucial to apply for NBFC license."
            ]
        },
        {
            question: "What can happen in case of carrying NBFC activities without obtaining license from RBI?",
            answer: [
                "In this case, RBI can impose heavy fine penalty and can prosecute defaulter in the court of law."
            ]
        },
        {
            question: "Does the NBFC license is valid for lifetime?",
            answer: [
                "Yes, but it can be cancelled by RBI at any time in case of non-compliance."
            ]
        },
        {
            question: "What if NBFC license got cancelled by RBI?",
            answer: [
                "RBI is empowered to cancel NBFC license but in this case applicant can file an appeal against the RBI order within the defined time duration i.e. within 30 days from the date of order received regarding cancellation of certificate of registration."
            ]
        }
    ],
    NBFC_TAKEOVER: [
        {
            question: "What is an NBFC Takeover?",
            answer: [
                "In simple language, when a business entity purchases, any other NBFC business entity is called NBFC Takeover."
            ]
        },
        {
            question: "Is it mandatory to have RBI registration for NBFCs?",
            answer: [
                "Yes, it is necessary to have RBI registration for NBFCs set up under section 45-IA of the RBI Act, 1934."
            ]
        },
        {
            question: "Is there any need to submit income proof at the time of the takeover of NBFC?",
            answer: [
                "Yes, you have to submit income tax returns for the last three years to RBI."
            ]
        },
        {
            question: "What is RBI NOD?",
            answer: [
                "NOD has to acquire from RBI before proceeding for sale of NBFC, or change in management or transfer."
            ]
        },
        {
            question: "What should be the CIBIL score at the time of Takeover of NBFC?",
            answer: [
                "The minimum CIBIL score should be more than 700, and there shouldn't be any dispute or write-off of loans with banks in the previous two years."
            ]
        },
        {
            question: "What are the functions of NBFC?",
            answer: [
                "Infrastructure development, Wealth Creation, Providing customized loan solutions, Providing employment opportunities, and financial assistance to marginalized communities of India."
            ]
        },
        {
            question: "What is the time required for the completion of the Scrutinization process?",
            answer: [
                "After an application gets filed, the Scrutinization process requires around 2-3 months."
            ]
        },
        {
            question: "What are the different types of loans that NBFC provides?",
            answer: [
                "NBFCs can grant loans like loans against securities, business loans, unsecured personal loans, Gold loans, loans to MSMEs, etc."
            ]
        },
        {
            question: "What are the merits of NBFC Takeover?",
            answer: [
                "Increase in sales and revenues.",
                "Escalating the profitability of the target company reduces the scope of competition."
            ]
        },
        {
            question: "Give two main differences between Banks and NBFCs?",
            answer: [
                "NBFCs cannot issue demand drafts, while Banks can issue demand drafts.",
                "NBFCs cannot issue the cheque to their customers, while Banks can issue the cheque."
            ]
        }
    ],
    FFMC_LICENSE: [
        {
            question: "What is a Full Fledged Money Changer?",
            answer: [
                "Authorized entities that have got the approval from Reserve Bank of India to enter into Foreign Exchange Business in consonance with section 10 of Foreign Exchange Management Act, 1999."
            ]
        },
        {
            question: "What is the Central Objective of FFMC concerning its Business?",
            answer: [
                "The central objective of FFMC to do business is to ensure the customers that they will get effective and best in the market services despite the competitive environment. Also, FFMC endeavors to widen the foreign exchange facilities to tourists visiting India, and even the NRIs will be benefitted."
            ]
        },
        {
            question: "What are the Conditions for a Company Applying for FFMC License in India?",
            answer: [
                "The first and foremost step for the company applying for FFMC License is that it should get itself registered with the Companies Registrar under Companies Act, 2013. The object clause should state that the primary activity of the entity will be the Forex currency exchange. At the same time, the company should ensure that the corporation is free from any legal cases, and no ongoing case is pending with the Department of Enforcement or Revenue Intelligence."
            ]
        },
        {
            question: "Is There any Requirement of Yearly Renewal of the FFMC License?",
            answer: [
                "Yes, FFMC License must go through the renewal process every year by submitting the application documents to RBI."
            ]
        },
        {
            question: "Is there any Possibility of Carrying out Money changing Business without the License of FFMC?",
            answer: [
                "No, there is zero possibility to work as a money changer without getting the FFMC Licensing."
            ]
        },
        {
            question: "Where is one supposed to submit the Application for FFMC License?",
            answer: [
                "Under Section 10(1) of FFEMA, 1999, Application in the prescribed form, as well as required documents, must be submitted towards the respective Regional Office of Foreign Exchange Department of RBI."
            ]
        },
        {
            question: "Name the Three Types of FFMC Licenses?",
            answer: [
                "The three types of FFMC Licenses are classified as-",
                "Authorized Dealer Category- 1(Banks)",
                "Authorized Dealer Category- 2(Authorized Dealers)",
                "Full Fledge Money Changers (FFMC)"
            ]
        },
        {
            question: "Are the Franchisees authorized to carry out all the Activities of the Authorized Dealer (2) Category?",
            answer: [
                "No, the franchisees are allowed to carry out limited money changing activities as per the master circular of RBI."
            ]
        },
        {
            question: "Apart from Getting FFMC License Approval, What are the Other Registrations required?",
            answer: [
                "Submit all these copies to the Regional Office of RBI before commencing business",
                "A copy of lease agreement",
                "A copy of registration under shops",
                "Rent receipt or Establishment Act"
            ]
        },
        {
            question: "For What Purpose FFMC has got the Authority to Sell Foreign Exchange?",
            answer: [
                "Business Visits",
                "Private Visits",
                "Forex Prepaid Cards"
            ]
        }
    ],
    NBFC_COLLABORATION: [
        {
            question: "What is NBFC Collaboration?",
            answer: [
                "NBFC Collaboration is an exercise in which active collaboration between NBFC and Fintech firms/banks takes place for funding and sourcing of leads."
            ]
        },
        {
            question: "What is the principal purpose behind NBFC Collaboration?",
            answer: [
                "The principal purpose of this collaboration is to raise funds."
            ]
        },
        {
            question: "Classify all the models of Fintech-NBFC Collaboration?",
            answer: [
                "The various models of Fintech-NBFC Collaboration are",
                "Lead-Based Model",
                "Co-Lending Model",
                "Fintech-Led Model"
            ]
        },
        {
            question: "What is this Fintech-Led Model all about?",
            answer: [
                "A Fintech-Led Model is a setup where Fintech Company enters into the shoes of the lending company by joining hands with NBFC under the First Loss Default Guarantee Cover."
            ]
        },
        {
            question: "Why NBFC opens a separate bank account?",
            answer: [
                "NBFC opens a separate bank account to meet out the loaning needs."
            ]
        },
        {
            question: "Is there any requirement for NBFCs to check the financial strength and background of Fintech Companies before any collaboration?",
            answer: [
                "Yes, NBFCs should go for proper checking of financial health and background of Fintech firms."
            ]
        },
        {
            question: "In NBFC Collaboration Business Model, who provides FLDG and fund?",
            answer: [
                "Fintech Company provides FLDG and funds at the initial step of the NBFC Collaboration Business Model."
            ]
        },
        {
            question: "To whom Fintech Company will render collection services?",
            answer: [
                "It will render collection services to Non-Banking Financial Company."
            ]
        },
        {
            question: "If a Fintech Company has raised foreign funds as debt, what shall be its compliance requirements?",
            answer: [
                "A Fintech Company shall conform to the guidelines of External Commercial Borrowings (ECB) in case if a Fintech Company has raised foreign funds as loan/debt."
            ]
        }
    ],
    MICROFINANCE_COMPANY_REGISTRATION: [
        {
            question: "What do you mean by Micro-finance company?",
            answer: [
                "Microfinance is also coined as 'microcredit'. It is a financial service that provides loans, savings, and insurance to entrepreneurs and small business owners who don’t have access to traditional sources of capital, like banks or investors. Microfinance is also named as microcredit."
            ]
        },
        {
            question: "How to register a micro-finance company?",
            answer: [
                "File Name Approval Application",
                "Apply for DIN & DSC",
                "Certificate of Incorporation",
                "Online Application to RBI",
            ]
        },
        {
            question: "What are the basic Documents required to register microfinance companies?",
            answer: [
                "Copy of PAN Card,",
                "Aadhar Card,",
                "Address Proof (Bank Statement, Mobile Bill, Telephone Bill),",
                "Passport Size Photo,",
                "Ownership Proof (Electricity bill etc.),",
                "Utility Bill (Gas bill, Electricity bill),",
                "NOC"
            ]
        },
        {
            question: "State the advantages of registering a microfinance company?",
            answer: [
                "It benefits in fostering self-reliance and entrepreneurship.",
                "Constant and smooth access to funding",
                "High-grade overall loan repayment rate in correlation to traditional bank"
            ]
        },
        {
            question: "What are the registration fees?",
            answer: [
                "The starting registration fees for Microfinance Company is Rs.1,190,000/-"
            ]
        },
        {
            question: "Can Microfinance companies provide loans for the personal use of borrowers?",
            answer: [
                "Yes, the loan can be provided for the personal purpose of the borrowers by Microfinance companies; the still aggregate amount cannot exceed 30% of the total investment."
            ]
        },
        {
            question: "Does the Prepayment penalty be imposed by Microfinance companies?",
            answer: [
                "No, the prepayment penalty cannot be imposed by Microfinance companies."
            ]
        },
        {
            question: "What are the limitations of interest rate & loan processing charges of Microfinance companies?",
            answer: [
                "Microfinance Companies are not available to charge a higher rate of interest from the directed rate of interest, and most variation cannot exceed 4%. In comparison, if we talk about loan processing costs, then it cannot exceed 1% of the gross loan amount. Microfinance Companies can levy loan insurance charges individually."
            ]
        },
        {
            question: "What are the Methods of Recovery?",
            answer: [
                "NBFC MFIs shall ensure that the Fair Practices Code is followed during recruitment, training, and supervision of field staff.",
                "Recovery should be non-coercive and be made only at a central designated place. If the borrower fails to come to the first designated place on two or more successive occasions, then field staff shall be allowed to recover the loan."
            ]
        },
        {
            question: "What do you mean by Net Assets?",
            answer: [
                "Net assets are described as Total Assets other than cash and bank balances and money market devices."
            ]
        },
        {
            question: "What do you mean by “Qualifying Assets?",
            answer: [
                '“Qualifying Assets” are loans disbursed to a borrower with an annual household income of less than Rs.1,00,000 in rural areas or Rs. 1,60,000 in urban and semi-urban regions.'
            ]
        },
        {
            question: "What about the restrictions on the remaining 15% of the assets that an NBFC-MFI holds?",
            answer: [
                "No, there are no restrictions."
            ]
        },
        {
            question: "Is it possible that NBFC-MFIs should lend funds for personal use/accidents?",
            answer: [
                "Apart (i.e., a maximum of 50 percent) of the cumulative amount of loans may be judged for other purposes such as housing repairs, education, medical, and other emergencies. However aggregate amount of loans given to a borrower for income generation should constitute at least 50 percent of the total loans from the NBFC-MFI."
            ]
        }
    ],
    HOUSING_FINANCE_COMPANY_REGISTRATION: [
        {
            question: "What is Housing Finance Company?",
            answer: [
                'The Housing Finance Company is a sort of Non-Banking Financial Company (NBFC) which is involved in the vital business of "financing of obtaining or development of houses". For the most part, Housing Finance Companies are those kinds of organizations who have the primary object of conveying business of giving money for housing whether straightforwardly or in a roundabout way. They are controlled by the National Housing Bank (NHB).'
            ]
        },
        {
            question: "Is Housing Finance Company a NBFC?",
            answer: [
                "Housing Finance Companies, Merchant Banking Companies, Stock Exchanges, Companies engaged in the business of stock-broking/sub-broking, Venture Capital Fund Companies, Nidhi Companies, Insurance companies and Chit Fund Companies are NBFCs but they have been exempted from the requirement of registration under Section 45."
            ]
        },
        {
            question: "Are Housing Finance Companies regulated by RBI?",
            answer: [
                "With the aim to materialize this sector there is a need to conduct synchronization between the Government, Reserve Bank of India (RBI) and National Housing Bank (NHB).",
                "RBI regulates – lending to the housing by Banks",
                "NHB regulates - lending to the housing by HFCs"
            ]
        },
        {
            question: "Why Housing Finance Companies are down?",
            answer: [
                "The housing finance sector growth has slowed down in the last one year due to liquidity crunch. In case the liquidity situation does not improve, HFCs may start seeing stress in the commercial real estate segment. The housing finance sector growth has slowed down in the last one year due to liquidity crunch."
            ]
        },
        {
            question: "Can a company take housing loan?",
            answer: [
                "That decision depends on the lender's assessment of the creditworthiness of the person or entity who is attempting to borrow money. However, yes — in general — a business can get a mortgage just like anything else. Getting a loan (even a mortgage — no difference) is legal; it would not be a problem, legally."
            ]
        }
    ],
    NBFC_ACCOUNT_AGGREGATOR_LICENSE: [
        {
            question: "What is the core function of NBFC-Account Aggregator?",
            answer: [
                "Record aggregators gather data about clients' money related resources and give the data in a united, sorted out and retrievable way based on the guidelines of the client. Financial specialists would have the option to take the administrations of the record aggregators on their own circumspection."
            ]
        },
        {
            question: "Is it necessary for existing business of account aggregation to apply for NBFC-AA?",
            answer: [
                "Truly, it was required for all the current organizations of record aggregator to apply for enlistment inside the time of one month from the date of issue of ace bearings by RBI. Bearings were given by RBI on second September 2018."
            ]
        },
        {
            question: "Who regulates NBFC-AA?",
            answer: [
                "The RBI is enabled to take care of the action of record aggregators and guarantees that exercises are in similarity with the recommended guidelines."
            ]
        },
        {
            question: "Is NBFC-AA registration is still necessary if the entity is regulated by another financial sector regulator?",
            answer: [
                "Elements which are managed by other monetary area controllers are excluded from the prerequisite of NBFC-AA. Such exclusion is permitted to just those elements which are engaged with collection of records of a client of another money related area."
            ]
        },
        {
            question: "Do I need to increase the limit of NOF (Net Owned Fund) upto Rs 2 crores before applying for NBFC-AA registration?",
            answer: [
                "No, it isn't obligatory to expand the constraint of NOF up to Rs. 2 crores before applying for enlistment, be that as it may, the organization needs to meet the rules of NOF of at least Rs. 2 crores inside the time of a year from acquiring a CoR by RBI."
            ]
        },
        {
            question: "Is it necessary to put operations on hold till the CoR is granted if the existing businesses of account aggregator have made application for NBFC-AA registration?",
            answer: [
                "Subsequent to applying for enlistment, they are allowed to convey tasks of NBFC account aggregator till the CoR is dismissed by the power or a year from date recording of the application, whichever is prior."
            ]
        },
        {
            question: "Which entities can participate in the AA ecosystem?",
            answer: [
                "Organizations enrolled or directed by any of the 4 controllers – Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA) can be a FIP or FIU."
            ]
        },
        {
            question: "Is it compulsory for all banks to join AA ecosystem?",
            answer: [
                "No, players managed by Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA) are not ordered to be a piece of AA environment. Be that as it may, the upsides of being a piece of AA will probably drive a draw based choice to join the AA biological system."
            ]
        },
        {
            question: "What is an FIU?",
            answer: [
                "FIU means 'Financial Information User'. A FIU expends the information from a FIP to offer different types of assistance to the end shopper. For example a loaning Bank needs access to the borrower's information to decide whether a borrower meets all requirements for an advance. The loaning Bank is the FIU. Banks assume a double job – both as a FIP and a FIU."
            ]
        },
        {
            question: "What kind of data can an FIU access through an AA?",
            answer: [
                "Presently only assets based information is accessible (ledgers, stores, shared assets, protection strategies, annuity reserves). Other information types are probably going to be included after some time."
            ]
        },
        {
            question: "What is the difference between banks and NBFCs?",
            answer: [
                "NBFC and bank both are monetary organizations. However, the significant distinction is not normal for banks NBFC cannot give self drawn checks and demand draft. NBFC represents non banking budgetary organization as the name recommends NBFC isn't a bank, perform just loaning capacities to open and NBFC can't acknowledge stores from public."
            ]
        },
        {
            question: "How do account aggregator work?",
            answer: [
                "Account Aggregator works by arranging data from various records which may incorporate financial balances, credit card accounts, venture accounts, and other shopper or business accounts."
            ]
        }
    ],
    PREPAID_WALLET_LICENSE: [
        {
            question: "What is prepaid payment system?",
            answer: [
                "Prepaid payment instruments are methods that facilitate purchase of goods and services against the value stored on such instruments. The value stored on such instruments represents the value paid for by the holder, by cash, by debit to a bank account, or by credit card."
            ]
        },
        {
            question: "What is a closed wallet?",
            answer: [
                "A closed wallet is a mobile wallet or an e-Wallet which is designed for making full or part payment for the services directly provided by the wallet issuer. A Closed wallet cannot be used for making payments to any third party service providers or for money transfer."
            ]
        },
        {
            question: "What is semi closed card?",
            answer: [
                "Semi-closed wallets which have a specific contract with the issuer to accept the payment instruments but do not permit cash withdrawal or redemption by the holder & which enables the procuring of goods & services which consist of financial services at a group of clearly recognized merchant locations/ establishments."
            ]
        },
        {
            question: "How do I start an e-wallet business?",
            answer: [
                "There are two types of enterprises which can start an e-wallet - Banks and Non-Banking Financial Companies (NBFCs). Hence, the first step towards creating an e-wallet is to get your company registered as an NBFC with the Reserve Bank of India (RBI)."
            ]
        },
        {
            question: "How can I get PPI license from banks?",
            answer: [
                "Open System PPIs can be issued only by banks, who have RBI approval to issue such PPIs. There is only one type of open system PPI i.e. PPI upto ₹1,00,000/- after completing KYC of the PPI holder (KYC compliant PPI)."
            ]
        },
        {
            question: "What is a payment wallet?",
            answer: [
                "A wallet is a small software program used for online purchase transactions. Many payment solution companies, such as CyberCase, offer free Wallet software that allows several methods of payment to be defined within the wallet (for example, several different credit cards)."
            ]
        },
        {
            question: "How many types of e-wallets are there?",
            answer: [
                "There are five types of digital storage available for your use: Online Wallet: Online wallets run on the cloud so they can be accessed from multiple devices with an Internet connection. Online wallets are practical and convenient too."
            ]
        },
        {
            question: "What is a PPI license?",
            answer: [
                "Pre-paid Payment Instruments (PPIs) are defined in the RBI Guidelines issued under the Payment and Settlements Systems Act, 2005 as payment instruments that facilitate purchase of goods and services, including funds transfer, against the value stored on such instruments. PPIs are one component of the Payment System."
            ]
        },
        {
            question: "What is M wallet?",
            answer: [
                "A mobile wallet is a virtual wallet that stores payment card information on a mobile device. Mobile wallets are a convenient way for a user to make in-store payments and can be used at merchants listed with the mobile wallet service provider."
            ]
        },
        {
            question: "What is the cheapest payment gateway?",
            answer: [
                "PayPal is another cheap payment gateway. In addition, it is a secure payment platform, so you have to enter your bank details in each online store where you want to buy."
            ]
        },
        {
            question: "What are the documents required to obtain Prepaid Wallet License?",
            answer: [
                "Name of the applicant",
                "Constitution of the applicant",
                "Address proof of registered office",
                "Certificate of Incorporation",
                "Main business of the company",
                "Management Information",
                "Statutory auditor of Company",
                "Audited balance sheet",
                "Name and address of bankers of Company",
                "Any other documents as may be required"
            ]
        },
        {
            question: "What is digital wallet?",
            answer: [
                'A digital wallet also known as "e-Wallet" refers to an electronic device or online service that allows an individual to make electronic transactions. This can include purchasing items on-line with a computer or using a smartphone to purchase something at a store.'
            ]
        },
    ],
    PEER_TO_PEER_LENDING_LICENSE: [
        {
            question: "What is P2P lending platform?",
            answer: [
                "P2P lending platform is a type of lending platform which connects borrower and lender with each other. Peer to Peer lending has become a primary and comfortable choice of most of the start-ups and entrepreneurs during the initial days of their business when they are looking for venture funding. On this stage, business people can without much of a stretch obtain money from people."
            ]
        },
        {
            question: "Is P2P lending safe?",
            answer: [
                "The safety of P2P lending depends upon the factor like lending money to the low risk borrowers after proper verification."
            ]
        },
        {
            question: "Is cash transaction permitted to transfer the funds?",
            answer: [
                "No."
            ]
        },
        {
            question: "What is the validity of P2P lending license?",
            answer: [
                "The in principal approval given by RBI would be valid for 12 months from the date approval is granted."
            ]
        },
        {
            question: "What are the cons of Peer-to-Peer lending platform for both the borrowers and lenders?",
            answer: [
                "Amount of loan is quite low in comparison to banks",
                "Often you experience more borrowers and less lenders",
                "Less Security",
                "Regardless of whether the credit rating assessment done by the stage is dependable or not, is a worry. In this way the hazard related isn't sure.",
                "With the P2P business still in its incipient stage, it would be too soon to arrive at a complete resolution.",
                "Returns are lower in contrast with traded on an open market list finance",
            ]
        },
        {
            question: "What are the eligibility criteria for obtaining Peer-to-Peer License?",
            answer: [
                "Company must be registered in India",
                "It is essential for applicant to have technological, entrepreneurial and managerial resources",
                "So as to complete P2P lending platform, a candidate must have satisfactory capital structure;",
                "Proposed Directors must satisfy the fit and legitimate models",
                "There must be a legitimate arrangement for proficient Information Technology System",
                "A feasible Business Plan",
                "Thought process to serve in public interest"
            ]
        },
        {
            question: "How do you get Peer-to-Peer lending license?",
            answer: [
                "Organization ought to be registered in India as Private Limited Company or Public Limited Company with the principal motive of financing;",
                "Least net possessed assets of INR 2 crores.",
                "WebSite/Mobile App Work Flow",
                "The online application is accessible on RBI's site (COSMOS).",
                "Accommodation of printed copy of the application alongside joined documents will be submitted to RBI Office.",
                "The permit will be allowed simply after watchful review of the application and documents connected with it."
            ]
        },
        {
            question: "Can I make money out of P2P lending?",
            answer: [
                "P2P lending can be similarly as protected as some other investment. No investment is ensured to give you benefit each and every year. The chances of gaining a benefit with P2P loaning are a lot higher when you put resources into borrowers with great credit."
            ]
        },
        {
            question: "Is P2P lending legal in India?",
            answer: [
                "In India, peer-to-peer lending is as of now managed by the Reserve Bank of India, India's Central Bank. It has distributed a discussion paper on guideline of P2P loaning and the final guidelines were discharged in 2017. There were more than 30 peer-to-peer lending platforms in India in 2016."
            ]
        },
        {
            question: "Can I lend money for profit?",
            answer: [
                "It is workable for instance to loan money for benefit through different social lending sites. For this situation, you don't generally need to think a lot about how to advance cash."
            ]
        }
    ],
    PAYMENT_BANK_LICENSE: [
        {
            question: "Who issues the Payment Bank License?",
            answer: [
                "Under section 22 of the Banking Regulation Act, 1949, the Reserve Bank of India issues the Payment Bank License to the applicants."
            ]
        },
        {
            question: "What RBI guideline on is minimum Paid-up Capital for payment bank license?",
            answer: [
                "According to the RBI guidelines, the minimum required paid-up equity capital for opening a payment bank and receiving a Payment Bank License is Rs. 100 Cr."
            ]
        },
        {
            question: "Who can get Payment Bank License?",
            answer: [
                "Existing PPI, Professionals/Individuals, NBFCs (Non-Banking Financial Company), Supermarket chains, Corporate Business Correspondents, Companies, Mobile Telephone Companies, Real-Estate sector Co-operatives, and Public Sector units can get the Payment Bank License."
            ]
        },
        {
            question: "What are the Documents required for Payment Bank License Application?",
            answer: [
                "There are many documents and Information that need to be furnished for getting the Payment License Application. To know in detail, kindly refer to the above context for better understanding."
            ]
        },
        {
            question: "What should the Proposed Structure include?",
            answer: [
                "Detailed Information about the persons/entities, ",
                "A subscriber to 5 % or more of the paid-up equity capital (shareholding arrangement) of the proposed payment bank, ",
                "Show foreign equity participation, ",
                "Details of the sources of capital of the proposed investors and proposed bank "
            ]
        },
        {
            question: "What should a Project Report include along with the application?",
            answer: [
                "A project report must show the viability of the proposed and bank business potential, the business plan, any other financial services planned to be offered, etc. as per the RBI guidelines, and any other information that is reflected as relevant."
            ]
        },
        {
            question: "What is the Guiding policy for foreign shareholding?",
            answer: [
                "The Foreign Direct Investments policy for private banks must be the guiding policy for foreign shareholding."
            ]
        },
        {
            question: "What are the Regulatory Frameworks for Payment Bank in India?",
            answer: [
                "Those are:- Reserve Bank of India, 1934; The Companies Act, 2013; Banking Regulation Act, 1949, Foreign Exchange Management Act, 1999, Payment and Settlement System Act, 2007; Deposit Insurance and Credit Guarantee Corporation Act, 1961, and Other Statutes and Directives, Prudential Regulations and other Guidelines issued by RBI that may apply from time to time."
            ]
        },
        {
            question: "Can NRI Deposit in Payment Banks?",
            answer: [
                "No. NRIs are not permitted to make any deposit in the Payment Banks"
            ]
        },
        {
            question: "Should Payment Banks Embark on KYC and CFT?",
            answer: [
                "Yes, a Payments Bank must embark on its own CFT (Combating Financial Terrorism) exercise and KYC (Know Your Customer)/AML (Anti Money Laundering) as any other bank."
            ]
        },
        {
            question: "Can Payment Banks opt for RTGS/IMPS/NEFT?",
            answer: [
                "Yes. Under the payment system approval by the Reserve Bank of India, a Payment Bank can operate as a channel of accepting 'remittances' from banks, such as RTGS/IMPS/NEFT."
            ]
        },
        {
            question: "Does the Payment Bank Comply with Cyber Security norms?",
            answer: [
                "Yes. A Payment Bank needs to agree to take RBI (Reserve Bank of India) Compliances on Web-Banking, Technology Risk Management, Cyber Laws, Data Security, and Electronic Banking."
            ]
        },
        {
            question: "To whom the Payment Bank License application shall be addressed?",
            answer: [
                'The payment bank license application shall be addressed to the "Chief General Manager" of the Department of Banking Regulation, RBI.'
            ]
        },
        {
            question: "Who all consists of the External Advisory Committee to assess the applications?",
            answer: [
                "An EAC (External Advisory Committee), consisting of distinguished professionals like Chartered Accountants, Finance Professionals, Bankers, etc. shall assess the applications. They may call for Information and have deliberations and negotiations with applicants as may be deemed fit by it."
            ]
        },
        {
            question: "What is a Business plan in terms of the Payment Bank License?",
            answer: [
                "All the applicants for the payments bank's license will be obligatory to furnish their project reports and business plans with their applications. The business plan for the application should address how the bank aims to achieve the purposes of setting up payment banks in India."
            ]
        },
        {
            question: "Do I need to consult a Legal representative to get a Payment Bank license?",
            answer: [
                'Yes. It is advisable that an attorney with "Banking experience" must be appointed to overwhelm many of the potential pitfalls that creep around within the Payment Bank License, and to understand the requirement in detail.'
            ]
        },
        {
            question: "Should I get a Payment Bank License?",
            answer: [
                "Yes. You should. The payment banks are predictable enough to be a game-changer and transform the current banking system. It will fetch the banking on a broader scale in India and delivers a hugely profitable business."
            ]
        }
    ],
    PAYMENT_GATEWAY_LICENSE: [
        {
            question: "What are Payment Gateways?",
            answer: [
                "Payment Gateways are intermediary elements in between the banks and the websites promoting the delivery of Transaction reports."
            ]
        },
        {
            question: "Why the Security Standards are important in Payments Gateways?",
            answer: [
                "The sensitive information needs to be protected from any fraud and misrepresentations such as Debit/Credit Card Numbers, internet banking ids, and passwords, etc. For this reason, governing security standards to be followed by anyone get access to card information such as payment gateways by the card associations along with various rules and regulations."
            ]
        },
        {
            question: "What types of business of payment gateways is suited in India?",
            answer: [
                "Any business can take the form of sole-proprietorship, partnership, or the structure of a company; however, the business of payment gateways is suited if formed as a private limited company in India."
            ]
        },
        {
            question: "What is Second Party Providers in payment gateways?",
            answer: [
                "Parties starting from Rs 30,000 (setup costs are very high), Like HDFC, ICICI, and Axis having low Transaction Discount Rate (TDR) with lower transaction fees."
            ]
        },
        {
            question: "What is Third-Party Provider in payment gateways?",
            answer: [
                "Third-Party Providers such as EBS, CCAvenue, Payzippy, PayU, Direct Pay, which charges setup and annual fee; however, some even don’t charge that."
            ]
        },
        {
            question: "What do you mean by PCI DSS?",
            answer: [
                "PCI DSS contained rules and regulations and has launched on September 7, 2006. It intends to optimize the security of credit, debit, and cash card transactions and protect cardholders from facing any scams."
            ]
        },
        {
            question: "How the Secure Electronic Transactions (SET) is connected with the customers’ payment?",
            answer: [
                "SET allows merchants to verify their customers’ payment information protecting the customer without actually seeing it."
            ]
        },
        {
            question: "What is Merchant Agreement",
            answer: [
                "Merchant Agreement is a contract between the payment and business service provider."
            ]
        },
        {
            question: "How the Payment gateways comply with IT Regulations?",
            answer: [
                "A separate Website Privacy Policy and Terms and Conditions Policy must also be completed to comply with IT regulations up for the company's lawyer's portal."
            ]
        },
        {
            question: "What is Authorization Certificate in Form ‘B’?",
            answer: [
                "RBI may issue the Authorization Certificate in Form ‘B’ for commencing and carrying on a payment system to the applicant only if RBI is satisfied that all the requirements laid down in Section 7(1) gets fulfilled."
            ]
        }
    ],
    FEMA_COMPLIANCES: [
        {
            question: "What is the FEMA limit?",
            answer: [
                "FEMA's LSR plan allows a resident Indian, NRI, or overseas citizen to transmit funds from India to other countries up to USD 250,000 in a single monetary year without the need for RBI or central government approval."
            ]
        },
        {
            question: "What is a FEMA violation?",
            answer: [
                'The Foreign Exchange Management Act, 1999 (FEMA) is an Act of the Parliament of India "to consolidate and amend the law relating to foreign exchange to facilitate external trade and payments and promote the orderly development and maintenance of foreign exchange market in India."'
            ]
        },
        {
            question: "What is Form FC-GPR?",
            answer: [
                "RBI issues this form under Foreign Exchange Management Act, 1999. When the organization gets foreign investment and against such investment, it distributes its shares to such outside investors. It becomes the organization's obligation to file subtleties of such allotment of shares with the RBI within 30 days and for that organization needs to utilize the form FC-GPR (Foreign Currency-Gross Provisional Return) for submitting subtleties with RBI."
            ]
        },
        {
            question: "Who is an authorized dealer?",
            answer: [
                "An Authorized Dealer (AD) is any individual explicitly approved by the Reserve Bank under Section 10(1) of FEMA, 1999, to deal in foreign exchange or remote securities and regularly incorporates banks."
            ]
        },
        {
            question: "What are the main objectives of FEMA?",
            answer: [
                "The principle objective behind the Foreign Exchange Management Act (1999) is to unite and revise the law identifying with outside trade with the target of encouraging outer exchange and payment. It was also figured to advance the efficient turn of events and support outside trade showcases in India."
            ]
        },
        {
            question: "What is the LRS limit?",
            answer: [
                "The Liberalized Remittance Scheme (LRS) of the Reserve Bank of India (RBI) permits occupant people to transmit a specific cash flow during a budgetary year to another nation for venture and consumption. As per the predominant guidelines, inhabitant people may dispatch up to $250,000 per money-related year."
            ]
        },
        {
            question: "What is Form FC-TRS?",
            answer: [
                "Form FC-TRS stands for Foreign Currency Transfer. This form is filed at the time of transfer of shares or convertible debentures of an Indian company from a resident to a non-resident/non-resident Indian or vice versa with the purpose of sale."
            ]
        },
        {
            question: "What are the guidelines of FEMA compliance?",
            answer: [
                "FEMA will not apply to Indian citizens who live outside India. To check the residency of an Indian citizen, a method is adopted based on which number of days an individual lived in India is calculated during the preceding financial year (182 days or more to be a resident). An office, a branch, or an agency can be considered a person to calculate Indian residency.",
                "FEMA grants the authority to the central government to impose restrictions on three things and supervise those things as well. These are payment given to any individual outside India, payment received from any individual outside India, forex, and foreign security deals.",
                "It indicates the territories around acquisition/holding of forex that requires the Reserve Bank of India (RBI) or the government.",
                "FEMA classifies foreign exchange transactions into two categories:",
                "Capital Account",
                "Current Account"
            ]
        },
        {
            question: "Why is A2 form required?",
            answer: [
                "The model arrangement requires the remitter to announce what the remitter proposes and not what he won't do. Therefore, the A2 structure ought to be abstained from for settlements up to the US $ 25,000 for each annum, and any answering to the RBI for parity of installments ought to be filled by the AD and not the remitter."
            ]
        },
        {
            question: "What is the penalty for violation of FEMA?",
            answer: [
                "Any contradiction, under FEMA, may welcome after sorts of punishments: If the sum against which offense is amounts, at that point punishment will be 'THRICE,' the total associated with negation. Where the sum can't be measured, the punishment might be forced up to two lakh rupees."
            ]
        },
        {
            question: "How much does LRS cost?",
            answer: [
                "The Municipal Administration and Urban Development (MA&&UD) office reported Layout Regularization Scheme (LRS) for the 68 recently shaped districts and civil organization, with fundamental guideline charges beginning from ₹200 per sq ft for under 100 sq meters plot to ₹750 for plots over 500 sq meters."
            ]
        },
        {
            question: "Why was FERA replaced?",
            answer: [
                "The Foreign Exchange Regulation Act (FERA) was passed in 1973; the fundamental reason was to guarantee the utilization of outside trade. Unfortunately, the FERA made snags in the nation's advancement, so the government supplanted it by FEMA in 1999."
            ]
        },
        {
            question: "What is the difference between FPI and FDI?",
            answer: [
                "The genuine distinction between the two is that while FDI intends to assume responsibility for the organization in which venture is made, FPI means to procure benefits by putting resources into offers and obligations of the contributed element without controlling the organization."
            ]
        }
    ],
    MSME_UDYAM: [
        {
            question: "What schemes are launched by the government under MSME ?",
            answer: [
                "Technology and Quality Up gradation Scheme.",
                "Grievance Monitoring System",
                "Incubation",
                "Credit Linked Capital Subsidy Scheme.",
            ]
        },
        {
            question: "Who is eligible for MSME registration?",
            answer: [
                "Following entities are eligible for MSME registration-",
                "Sole Proprietorship",
                "Partnership Firm",
                "Limited Liability Partnership (LLP)",
                "Private Limited Company",
                "Public Limited Company",
                "Co-Operative Society and Trust.",
            ]
        },
        {
            question: "Within how many days MSME Certificate will be Issued?",
            answer: [
                "MSME Certificate is issued within 1-2 working days from the date of submission of application."
            ]
        },
        {
            question: "Are there any Chances of Rejection of the Online MSME Application?",
            answer: [
                "There can be various reasons for rejection of MSME application-i.e.",
                "Low CIBIL score,",
                "Unpaid debts,",
                "Loan defaults,",
                "Low cash flow,",
                "Lack of business plan,",
                "Incomplete documentation and False details, etc.",
            ]
        },
        {
            question: "How can an applicant get a copy of the MSME certificate?",
            answer: [
                "Once the MSME registration is complete, the applicant will receive a copy of the MSME certificate at the registered email address."
            ]
        },
        {
            question: "Is there any difference between Udyam Registration and MSME Certificate?",
            answer: [
                "Udyam Registration is a registration to start a business under the Ministry of Micro, Small, and Medium Enterprises approved by the Government of India. Whereas MSME Certificate is a 12-digit Unique Identification Number (UIN) provided by the Ministry of Micro, Small, and Medium Enterprises for Small and Medium Enterprises (SMEs)."
            ]
        },
        {
            question: "Is it mandatory to have an Aadhar number for MSME registration?",
            answer: [
                "Yes, Aadhaar card is mandatory for MSME registration."
            ]
        },
        {
            question: "Can a person applies for hard copy of the MSME certificate?",
            answer: [
                "No, As the Government has initiated the scheme for paperless work, so no physical copy is issued."
            ]
        },
        {
            question: "Can registered MSME’s get collateral free loans from financial institutions?",
            answer: [
                "Yes, MSME borrowers get collateral free loans from financial institutions."
            ]
        },
        {
            question: "Is credit score necessary for the MSME borrowers?",
            answer: [
                "No, credit score is not required for MSMEs."
            ]
        }
    ],
    IEC: [
        {
            question: "What are the provisions relating to the surrender of the IEC?",
            answer: [
                "IEC can be surrender by intimating the intention to the authority who earlier issued the license. Upon the receipt of an application for license surrender, issuing authority shall cancel the same after noting the reason thereof. Thereafter, DGFT is notified about the same who in return transmit it to custom, RBI or any such other authorities intimating about IEC becomes inoperative."
            ]
        },
        {
            question: "Who are exempted from obtaining IEC registration?",
            answer: [
                "Following is the exception for IEC registration:",
                "IEC is not an obligation for the traders registered under Goods & Service Tax (GST)",
                "If there is export or import of any product merely for personal consumption and not for commercial purpose, there will be no need to obtain IEC Registration",
                "There is no requirement to obtain IEC Registration in case the import or export is done on behalf of the Government of India by any department, ministry, or notified charitable institute.",
            ]
        },
        {
            question: "Is there any tax imposed based on IE Code?",
            answer: [
                "Import-Export code is not a tax registration; however, depending upon the product, the certain custom duty can be imposed."
            ]
        },
        {
            question: "Can the import-export be made without getting a license?",
            answer: [
                "No, any individual, company or sole proprietor engaged in the business of import-export needs to obtain an IEC license. It is the necessary recognition provided by the GovernmentGovernment to exporters and importer of goods or services. However, if the value of the good transacted is too low, the authority may permit first export after imposing nominal charges."
            ]
        },
        {
            question: "How to modify IEC application?",
            answer: [
                "You can modify your application numerous times before it is submitted to the next department."
            ]
        },
        {
            question: "What are the benefits of IEC?",
            answer: [
                "With the help of IEC Registration, you can obtain various benefits from the DGFT, Customs, export promotion council, etc."
            ]
        },
        {
            question: "Is it necessary to provide PAN Card?",
            answer: [
                "Yes, it is mandatory to provide PAN Card. You need to furnish the self-attested copy of your PAN Card along with the application."
            ]
        },
        {
            question: "What are the documents required to prove the genuineness of the firm in case the IEC is returned undelivered?",
            answer: [
                "You would need to provide proof of address copy of ownership title, registered copy of lease deed, copy of telephone bill, electricity bill, registered copy of rent deed, etc. need to be provided to prove the genuineness of your firm."
            ]
        },
        {
            question: "Do I need to provide the copy of only one side of PAN Card or both, and why?",
            answer: [
                "You need to provide a copy of both sides of your PAN Card to identify the issuing authority’s address."
            ]
        },
        {
            question: "Is there any need to revalidate at any point in time?",
            answer: [
                "No, the validity of IEC Registration is of a lifetime. Therefore there is no requirement to revalidate it."
            ]
        },
        {
            question: "What does an exporter need to do if he wishes to cancel the allotted IEC?",
            answer: [
                "Cancellation of the allotted IEC can be made by surrendering the same."
            ]
        },
        {
            question: "Is the requirement of IEC Registration, item-based?",
            answer: [
                "No, Import Export Code is a permanent document and is not item based."
            ]
        },
        {
            question: "What to do to obtain new or amended IEC?",
            answer: [
                "You need to check the status of your BIN or Business Identification Number on the official site."
            ]
        },
        {
            question: "What is the technical prerequisite for filing an IEC?",
            answer: [
                "The technical prerequisite for filing an IEC are :- Digital Signatures Token, PAN, Address Details of Branch Office, Bank Account in IEC Holder, Mobile Number and Email ID, Aadhar Card matching the details along with PAN Card."
            ]
        },
        {
            question: "How to apply for new online IEC application?",
            answer: [
                'Login to DGFT website > Proceed with registration process by clicking on Login > Register as user > Register as “Importer/Exporter”, Go to My Dashboard after registration > Importer Exporter Code (IEC) > Apply for IEC.'
            ]
        },
        {
            question: "Why is the registration of IEC required on DGFT Website?",
            answer: [
                "It enables you to have your own user profile. It helps to Apply / Link IEC and View IEC Dashboard under a single window as well as Apply and track applications easily. It also enables you to receive notifications over the dashboard, mobile and email."
            ]
        },
        {
            question: "How to register IEC on DGFT Website?",
            answer: [
                "Kindly go through the context as mentioned above for your detailed understanding on this issue."
            ]
        },
        {
            question: "What do you mean by Bank Details Validation?",
            answer: [
                "(a) Bank Details will be validated through ‘PFMS’ and its outcome will be made available the next day. (b) Risk shall be marked in RMS and User will be issued the IEC Immediately. (c) On the Successful bank details Validation– ‘RMS’ Flag will be removed. (d) On its Failure – ‘RMS’ Flag will be on hold."
            ]
        },
        {
            question: "How long it takes to issue new online IEC Certificate?",
            answer: [
                "The Normal time to receive is immediate from successfully submission of the IEC application."
            ]
        },
        {
            question: "The New IEC application or System is compatible with which suitable Browsers?",
            answer: [
                "The New IEC application or new portal is compatible with Chrome 70 + / Firefox 70 + / IE 11 + browsers."
            ]
        },
        {
            question: "Does Foreign Directors the PAN details is mandatory?",
            answer: [
                "No. For Foreign Directors the PAN details are not mandatory for the application."
            ]
        },
        {
            question: "What if the Name of the firm and Bank Account Name doesn’t match?",
            answer: [
                "You need to please check for the white spaces, if any, needs to be separate or remove to proceed. Moreover, the user needs to upload the supporting document for the Bank Account in accurate manner."
            ]
        }
    ],
    STARTUP_REGISTRATION: [
        {
            question: "What is Startup India?",
            answer: [
                "Start-up India Scheme is an initiative by the Government of India to promote the startup eco-system in India and to drive sustainable economic growth in India."
            ]
        },
        {
            question: "Is it an official Registration from Govt. of India?",
            answer: [
                "Yes. Start-up India Scheme is implemented through the Department of Industrial Policy & Promotions (DIPP), Government of India. After approval of application, DIPP, Government of India will issue a Certificate of Registration to the Startup"
            ]
        },
        {
            question: "Who can apply for Start-up India Scheme?",
            answer: [
                "Any business that is registered as a Private Limited Company or Limited Liability Partnership or a Partnership Firm can apply for recognition as a Startup"
            ]
        },
        {
            question: "What is are the requirements for Start-up India?",
            answer: [
                "The Business must be working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of employment generation or wealth creation."
            ]
        },
        {
            question: "What are the advantages of Start-up registration?",
            answer: [
                "The following are the benefits declared by the Government of India to recognised Startups.",
                "1. Self-Certification of documents to be submitted to government authorities for various schemes",
                "2. Eligibility for application of Income Tax exemption and exemptions on Angel Tax.",
                "3. Easy winding up of company under insolvency & Bankruptcy code 2016.",
                "4. Fast track & up to 80% rebate in filling patents.",
                "5. Exemption on EMD and minimum requirements for Public Procurement Norms",
                "6. Access to Funds for investment into startups through Alternate Investment Funds.",
            ]
        },
        {
            question: "Whether all recognised Start-ups are exempted from Income Tax?",
            answer: [
                "No. Recognised start-ups those who are eligible can make an application for Income tax exemption or 3 years. Only after approval of the application, the startups are eligible for income tax exemption."
            ]
        },
        {
            question: "Whether all recognised Start-ups are exempted from Angel Tax?",
            answer: [
                "No. Recognised start-ups those who are eligible can make an application for exemption from Angel Tax. Only after approval of the application, the startups are eligible for Angel Tax exemption."
            ]
        }
    ],
    TRADEMARK: [
        {
            question: "What is a trademark class?",
            answer: [
                "The Trademark Registry has classified goods and services under 45 classes. Each class lists a host of goods/services and depending on those you are offering, you need to mention the class(es) on your trademark application. The trademark would be registered and protected under those classes only."
            ]
        },
        {
            question: "What trademark applications are commonly rejected?",
            answer: [
                "If your trademark is similar to an existing application, would hurt religious sentiments, contains geographical names, or common words. It would also be rejected if it is likely to confuse."
            ]
        },
        {
            question: "When can I use the ™ symbol?",
            answer: [
                "As soon as you file the application and receive an acknowledgement, you can use the ™ symbol. Once the registration process is complete, you can use the ® symbol."
            ]
        },
        {
            question: "What if my trademark is taken, but under a different class?",
            answer: [
                "If your brand name has already been registered, but under a different class, you're still in luck. Unless the brand is too well known (like McDonald’s or Fiat), your application is likely to be approved."
            ]
        },
        {
            question: "What if someone has a similar word trademarked?",
            answer: [
                "You can't get the word, but all is not lost. You could instead design a unique logo for your business and include the name in it. So there is a way out, but it is best to have a unique name."
            ]
        },
        {
            question: "Do you guarantee approval of my trademark?",
            answer: [
                "It depends entirely on the government's judgement. But if it is unique, it is highly likely that it will be granted."
            ]
        },
        {
            question: "Should I file the trademark in my own name?",
            answer: [
                "Many start-up founders register it in their own names, while large businesses would prefer to do so in the name of the company. This is because the future of a start-up is always in doubt. If owned by the founder, the trademark would be valid regardless of the state of the company. A trademark license agreement is, however, needed in this case."
            ]
        },
        {
            question: "How long does it take to get my trademark?",
            answer: [
                "It can take anywhere between 6 months to 1 year for your trademark to be approved. However, we can apply and start using the ™ symbol within few days if we can get all the details and documents at the earliest."
            ]
        }
    ],
    GST_REGISTRATION: [
        {
            question: "What is GST?",
            answer: [
                "GST stand for Goods and Service Tax. It is a single and comprehensive tax on the supply of goods and services across India, right from the manufacturer to the Consumer. GST is applicable to the whole of India except the state of Jammu & Kashmir."
            ]
        },
        {
            question: "Who is liable for GST Registration?",
            answer: [
                "Every person needs to get registered under GST in the state from where he makes taxable supply of goods and/or services, if his aggregate turnover in a financial year exceeds Rs.20 Lakhs (Rs.10 Lakhs in North Eastern States including Sikkim)"
            ]
        },
        {
            question: "When is GST Registration Applicable?",
            answer: [
                "Every person needs to get registered under GST in the state from where he makes taxable supply of goods and/or services, if his aggregate turnover in a financial year exceeds Rs.20 Lakhs."
            ]
        },
        {
            question: "How can I get GST number?",
            answer: [
                "An application is to be filed online with GST Portal with required business registration details and supporting documents. GST Department will review the application. On approval of application, hte GST Certificate can be downloaded from the portal."
            ]
        },
        {
            question: "How many days it will take to get GST number?",
            answer: [
                "When all the required documents are submitted online, generally it takes 4-5 days for approval from GST Portal. If the documents are defective, the process may be delayed further."
            ]
        },
        {
            question: "What documents are required for GST registration?",
            answer: [
                "The following are the documents for GST Registration",
                "1. Incorporation Certificate Company / LLP",
                "2. PAN of Company / LLP",
                "3. Cancelled Cheque Leaf with Company name / Bank Statement",
                "4. Directors / Promotes",
                "5. PAN and Address Proof of all the Promoters",
                "6.Photograph of all the Promoters / Directors (jpeg format)",
                "7. Authorisation letter to the Primary Signatory",
                "8. Digital Signature Certificate Authorised Signatory / Signatories",
                "9. Business Address Proof - Electricity Bill or Tax Paid Receipt with the address and NOC From the Owner of Premises / Rental Agreement (Commercial Purpose) in Business Name"   
            ]
        },
        {
            question: "Who is exempted from Registration?",
            answer: [
                "The following persons shall not be liable to registration, namely:–",
                "1. any person engaged exclusively in the business of supplying goods or services or both that are not liable to tax or wholly exempt from tax under this Act or under the Integrated Goods and Services Tax Act;",
                "2. An agriculturist, to the extent of supply of produce out of cultivation of land.",
                "3. The Government may, on the recommendations of the Council, by notification, specify the category of persons who may be exempted from obtaining registration under this Act.",
            ]
        },
        {
            question: "What is the ARN number in GST?",
            answer: [
                "Application Reference Number (ARN) is a unique number assigned by the GST portal after successful submission of a transaction at GST Portal. ARN will be generated on successful submission of an application for registration with GST Portal."
            ]
        },
        {
            question: "Can ARN be used for GST Billing?",
            answer: [
                "No. Application Reference Number (ARN) is only a reference / confirmation that the application is filed for GST Registration."
            ]
        },
        {
            question: "What are the contents of GSTIN?",
            answer: [
                "Goods and Services Tax Identification Number-GSTIN is a 15-digit State wise and PAN based unique code issued by the GST Portal to each registration. The format of 15 digit GSTIN is as follows:",
                "First 2 Digits - State Code",
                "3-12 Digits - PAN number of a business",
                "13th Digit - Number of registrations of a business entity within a state. It will be an alpha numeric number (1-9 and A-Z) depends on the number of registrations.",
                "14th Digit - It will be by default as Z.",
                "15th Digit - A check code which is be used for detection of errors.",
            ]
        },
        {
            question: "After GST Registration, Is it mandatory to add GST to bill when the turnover is less than Rs.20 lakhs?",
            answer: [
                "Yes. Though the turnover is less that Rs.20 Lakhs, businesses will be compelled to obtain GST Registration on customer requirements for vendor empanelment. In that case, it is mandatory to add GST to bills and collect and pay the same to Government even if the company does not come under GST bracket as per business turnover criteria."
            ]
        },
        {
            question: "Is there any fee payable for obtaining GST Registration?",
            answer: [
                "No. There is no fee payable to the GST Department for obtaining the Registration."
            ]
        }
    ],
    PAN_APPLICATION: [
        {
            question: "Who can apply for PAN card?",
            answer: [
                "Any Indian citizen, including a minor, can apply for allotment of Permanent Account Number by furnishing valid proof and documents. Foreign individual or entity can also apply for PAN allotment."
            ]
        },
        {
            question: "Whether new business requires PAN card?",
            answer: [
                "Yes, every business established in India must apply for PAN card online or offline within the 30 days of establishment. However, sole proprietorship firm does not need so as it does not have a separate identity from its owner."
            ]
        },
        {
            question: "In how much time is the PAN allotted?",
            answer: [
                "Once the application for PAN Card is forwarded, generally it takes 5 – 7 working days for allotment of PAN. However, receipt of physical PAN card may take time."
            ]
        },
        {
            question: "What is the validity of PAN card?",
            answer: [
                "The Permanent Account Number, once allotted, comes with lifetime validity for individuals and business entities. If the businesses entities are dissolved or closed, it must surrender the allotted PAN."
            ]
        },
        {
            question: "Can I hold more than one PAN card?",
            answer: [
                "A Person cannot hold more than one PAN card. If a person holds more than one PAN, a penalty of Rs. 10,000/- may be imposed under section 272B. Therefore, the person holding more than one PAN must surrender it immediately."
            ]
        }
    ],
    TAN_APPLICATION: [
        {
            question: "Within how much time is the Tax Account Number (TAN) is allotted by NSDL?",
            answer: [
                "Once applied generally, it takes 7-10 working days for TAN allotment by NSDL. However, receipt of a physical TAN letter may take time depending upon the processing time by the department. Once the application for TAN number is made, it is always possible to know your TAN status."
            ]
        },
        {
            question: "Can a PAN be used instead of TAN?",
            answer: [
                "No, a PAN cannot be used instead of TAN. PAN and TAN serve two different purposes. Therefore, it is mandatory for those deducting tax at source to obtain a TAN."
            ]
        },
        {
            question: "How and when should the TDS be deposited?",
            answer: [
                "Tax Deducted at Source (TDS) must be deposited through banks using Challan 281, quoting the TAN number of the entity. The deadline for payment of TDS is the 7th day of every month."
            ]
        },
        {
            question: "What are the due dates to files TDS Returns?",
            answer: [
                "TDS Return should be filed quarterly on the 31st day of July, October, January and May. The TDS return filed on these months will correspond to the transaction of the preceding three months."
            ]
        }
    ]
}