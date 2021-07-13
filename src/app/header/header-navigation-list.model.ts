import { HeaderNavigationInterface } from "./header.interface";

export const headerNavigationList: HeaderNavigationInterface[] = [
    {
        label: 'Startup',
        items: [
            {
                label: 'Business Registration',
                items: [
                    {
                        label: 'Public Limited Company Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Private Limited Company Registration',
                        showInSearch: true
                    },
                    {
                        label: 'One Person Company Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Limited Liability Partnership',
                        showInSearch: true
                    },
                    {
                        label: 'Partnership Firm',
                        showInSearch: true
                    },
                    {
                        label: 'Sole Proprietorship',
                        showInSearch: true
                    }
                ],
                width: "50"
            },
            {
                label: 'Special Entity',
                items: [
                    {
                        label: 'Udyam/MSME Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Nidhi Company Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Section 8 Company Registration',
                        showInSearch: true
                    }
                ],
                width: "50"
            }
        ]
    },
    {
        label: 'Regulatory',
        items: [
            {
                label: 'Registration & License',
                items: [
                    {
                        label: 'GST Registration Online',
                        showInSearch: true
                    },
                    {
                        label: 'FSSAI Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Udyam/MSME Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Import Export Code License',
                        showInSearch: true
                    },
                    {
                        label: 'Trade License',
                        showInSearch: true
                    }
                ],
                width: "50"
            },
            {
                label: 'Others',
                items: [
                    {
                        label: 'ISO Certification',
                        showInSearch: true
                    },
                    {
                        label: 'Startup India Portal Registration',
                        showInSearch: true
                    },
                    {
                        label: 'Digital Signature Certificate',
                        showInSearch: true
                    }
                ],
                width: "50"
            }
        ]
    },
    {
        label: 'Tax & Compliance',
        items: [
            {
                label: 'Goods & Service Tax',
                items: [
                    {
                        label: 'GST Monthly Filing',
                        showInSearch: true
                    },
                    {
                        label: 'GST Quarterly Filing under QRMP',
                        showInSearch: true
                    },
                    {
                        label: 'GST Filings under Composition Scheme',
                        showInSearch: true
                    },
                    {
                        label: 'GST Annual Return Filing',
                        showInSearch: true
                    },
                    {
                        label: 'GST Registration',
                        showInSearch: true
                    }
                ],
                width: "25"
            },
            {
                label: 'Corporate Compliance',
                items: [
                    {
                        label: 'Company Annual Filing',
                        showInSearch: true
                    },
                    {
                        label: 'LLP Annual Filing',
                        showInSearch: true
                    },
                    {
                        label: 'DIN KYC',
                        showInSearch: true
                    },
                    {
                        label: 'Appointment/Removal of Auditor',
                        showInSearch: true
                    },
                    {
                        label: 'Change in Director',
                        showInSearch: true
                    }
                ],
                width: "25"
            },
            {
                label: 'Income Tax',
                items: [
                    {
                        label: 'PAN/TAN Application',
                        showInSearch: true
                    },
                    {
                        label: 'Hindu Undivided Family (HUF)',
                        showInSearch: true
                    },
                    {
                        label: 'Income Tax Return for Individuals',
                        showInSearch: true
                    },
                    {
                        label: 'Income Tax return for Businesses Owners',
                        showInSearch: true
                    },
                    {
                        label: 'TDS Return Filing',
                        showInSearch: true
                    }
                ],
                width: "25"
            },
            {
                label: 'Accounting & Others',
                items: [
                    {
                        label: 'Accounting Services',
                        showInSearch: true
                    }
                ],
                width: "25"
            }
        ]
    },
    {
        label: 'About Us'
    },
    {
        label: 'Contact Us'
    }
]