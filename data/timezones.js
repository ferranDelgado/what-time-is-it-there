const timezones = [
    {
        "Abbreviation": "ACDT",
        "Time zone name": "Australian Central Daylight Savings Time",
        "Offset": "+10:30"
    },
    {
        "Abbreviation": "ACST",
        "Time zone name": "Australian Central Standard Time",
        "Offset": "+09:30"
    },
    {
        "Abbreviation": "ACT",
        "Time zone name": "Acre Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "ACT",
        "Time zone name": "ASEAN Common Time",
        "Offset": "+06:30 - +09"
    },
    {
        "Abbreviation": "ADT",
        "Time zone name": "Atlantic Daylight Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "AEDT",
        "Time zone name": "Australian Eastern Daylight Savings Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "AEST",
        "Time zone name": "Australian Eastern Standard Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "AFT",
        "Time zone name": "Afghanistan Time",
        "Offset": "+04:30"
    },
    {
        "Abbreviation": "AKDT",
        "Time zone name": "Alaska Daylight Time",
        "Offset": "-08"
    },
    {
        "Abbreviation": "AKST",
        "Time zone name": "Alaska Standard Time",
        "Offset": "-09"
    },
    {
        "Abbreviation": "AMST",
        "Time zone name": "Amazon Summer Time (Brazil)[1]",
        "Offset": "-03"
    },
    {
        "Abbreviation": "AMT",
        "Time zone name": "Amazon Time (Brazil)[2]",
        "Offset": "-04"
    },
    {
        "Abbreviation": "AMT",
        "Time zone name": "Armenia Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "ART",
        "Time zone name": "Argentina Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "AST",
        "Time zone name": "Arabia Standard Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "AST",
        "Time zone name": "Atlantic Standard Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "AWST",
        "Time zone name": "Australian Western Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "AZOST",
        "Time zone name": "Azores Summer Time",
        "Offset": "±00"
    },
    {
        "Abbreviation": "AZOT",
        "Time zone name": "Azores Standard Time",
        "Offset": "-01"
    },
    {
        "Abbreviation": "AZT",
        "Time zone name": "Azerbaijan Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "BDT",
        "Time zone name": "Brunei Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "BIOT",
        "Time zone name": "British Indian Ocean Time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "BIT",
        "Time zone name": "Baker Island Time",
        "Offset": -12
    },
    {
        "Abbreviation": "BOT",
        "Time zone name": "Bolivia Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "BRST",
        "Time zone name": "Brasilia Summer Time",
        "Offset": "-02"
    },
    {
        "Abbreviation": "BRT",
        "Time zone name": "Brasilia Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "Bangladesh Standard Time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "Bougainville Standard Time[3]",
        "Offset": "+11"
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "British Summer Time (British Standard Time from Feb 1968 to Oct 1971)",
        "Offset": "+01"
    },
    {
        "Abbreviation": "BTT",
        "Time zone name": "Bhutan Time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "CAT",
        "Time zone name": "Central Africa Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "CCT",
        "Time zone name": "Cocos Islands Time",
        "Offset": "+06:30"
    },
    {
        "Abbreviation": "CDT",
        "Time zone name": "Central Daylight Time (North America)",
        "Offset": "-05"
    },
    {
        "Abbreviation": "CDT",
        "Time zone name": "Cuba Daylight Time[4]",
        "Offset": "-04"
    },
    {
        "Abbreviation": "CEST",
        "Time zone name": "Central European Summer Time (Cf. HAEC)",
        "Offset": "+02"
    },
    {
        "Abbreviation": "CET",
        "Time zone name": "Central European Time",
        "Offset": "+01"
    },
    {
        "Abbreviation": "CHADT",
        "Time zone name": "Chatham Daylight Time",
        "Offset": "+13:45"
    },
    {
        "Abbreviation": "CHAST",
        "Time zone name": "Chatham Standard Time",
        "Offset": "+12:45"
    },
    {
        "Abbreviation": "CHOT",
        "Time zone name": "Choibalsan Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "CHOST",
        "Time zone name": "Choibalsan Summer Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "CHST",
        "Time zone name": "Chamorro Standard Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "CHUT",
        "Time zone name": "Chuuk Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "CIST",
        "Time zone name": "Clipperton Island Standard Time",
        "Offset": "-08"
    },
    {
        "Abbreviation": "CIT",
        "Time zone name": "Central Indonesia Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "CKT",
        "Time zone name": "Cook Island Time",
        "Offset": -10
    },
    {
        "Abbreviation": "CLST",
        "Time zone name": "Chile Summer Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "CLT",
        "Time zone name": "Chile Standard Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "COST",
        "Time zone name": "Colombia Summer Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "COT",
        "Time zone name": "Colombia Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "Central Standard Time (North America)",
        "Offset": "-06"
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "China Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "ACST",
        "Time zone name": "Central Standard Time (Australia)",
        "Offset": "+09:30"
    },
    {
        "Abbreviation": "ACDT",
        "Time zone name": "Central Summer Time (Australia)",
        "Offset": "+10:30"
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "Cuba Standard Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "CT",
        "Time zone name": "China time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "CVT",
        "Time zone name": "Cape Verde Time",
        "Offset": "-01"
    },
    {
        "Abbreviation": "CWST",
        "Time zone name": "Central Western Standard Time (Australia) unofficial",
        "Offset": "+08:45"
    },
    {
        "Abbreviation": "CXT",
        "Time zone name": "Christmas Island Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "DAVT",
        "Time zone name": "Davis Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "DDUT",
        "Time zone name": "Dumont d'Urville Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "DFT",
        "Time zone name": "AIX specific equivalent of Central European Time[5]",
        "Offset": "+01"
    },
    {
        "Abbreviation": "EASST",
        "Time zone name": "Easter Island Summer Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "EAST",
        "Time zone name": "Easter Island Standard Time",
        "Offset": "-06"
    },
    {
        "Abbreviation": "EAT",
        "Time zone name": "East Africa Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "ECT",
        "Time zone name": "Eastern Caribbean Time (does not recognise DST)",
        "Offset": "-04"
    },
    {
        "Abbreviation": "ECT",
        "Time zone name": "Ecuador Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "EDT",
        "Time zone name": "Eastern Daylight Time (North America)",
        "Offset": "-04"
    },
    {
        "Abbreviation": "AEDT",
        "Time zone name": "Eastern Summer Time (Australia)",
        "Offset": "+11"
    },
    {
        "Abbreviation": "EEST",
        "Time zone name": "Eastern European Summer Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "EET",
        "Time zone name": "Eastern European Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "EGST",
        "Time zone name": "Eastern Greenland Summer Time",
        "Offset": "±00"
    },
    {
        "Abbreviation": "EGT",
        "Time zone name": "Eastern Greenland Time",
        "Offset": "-01"
    },
    {
        "Abbreviation": "EIT",
        "Time zone name": "Eastern Indonesian Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "EST",
        "Time zone name": "Eastern Standard Time (North America)",
        "Offset": "-05"
    },
    {
        "Abbreviation": "AEST",
        "Time zone name": "Eastern Standard Time (Australia)",
        "Offset": "+10"
    },
    {
        "Abbreviation": "FET",
        "Time zone name": "Further-eastern European Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "FJT",
        "Time zone name": "Fiji Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "FKST",
        "Time zone name": "Falkland Islands Summer Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "FKT",
        "Time zone name": "Falkland Islands Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "FNT",
        "Time zone name": "Fernando de Noronha Time",
        "Offset": "-02"
    },
    {
        "Abbreviation": "GALT",
        "Time zone name": "Galapagos Time",
        "Offset": "-06"
    },
    {
        "Abbreviation": "GAMT",
        "Time zone name": "Gambier Islands",
        "Offset": "-09"
    },
    {
        "Abbreviation": "GET",
        "Time zone name": "Georgia Standard Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "GFT",
        "Time zone name": "French Guiana Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "GILT",
        "Time zone name": "Gilbert Island Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "GIT",
        "Time zone name": "Gambier Island Time",
        "Offset": "-09"
    },
    {
        "Abbreviation": "GMT",
        "Time zone name": "Greenwich Mean Time",
        "Offset": "±00"
    },
    {
        "Abbreviation": "GST",
        "Time zone name": "South Georgia and the South Sandwich Islands",
        "Offset": "-02"
    },
    {
        "Abbreviation": "GST",
        "Time zone name": "Gulf Standard Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "GYT",
        "Time zone name": "Guyana Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "HADT",
        "Time zone name": "Hawaii-Aleutian Daylight Time",
        "Offset": "-09"
    },
    {
        "Abbreviation": "HAEC",
        "Time zone name": "Heure Avancée d'Europe Centrale francised name for CEST",
        "Offset": "+02"
    },
    {
        "Abbreviation": "HAST",
        "Time zone name": "Hawaii-Aleutian Standard Time",
        "Offset": -10
    },
    {
        "Abbreviation": "HKT",
        "Time zone name": "Hong Kong Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "HMT",
        "Time zone name": "Heard and McDonald Islands Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "HOVST",
        "Time zone name": "Khovd Summer Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "HOVT",
        "Time zone name": "Khovd Standard Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "ICT",
        "Time zone name": "Indochina Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "IDT",
        "Time zone name": "Israel Daylight Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "IOT",
        "Time zone name": "Indian Ocean Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "IRDT",
        "Time zone name": "Iran Daylight Time",
        "Offset": "+04:30"
    },
    {
        "Abbreviation": "IRKT",
        "Time zone name": "Irkutsk Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "IRST",
        "Time zone name": "Iran Standard Time",
        "Offset": "+03:30"
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Indian Standard Time",
        "Offset": "+05:30"
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Irish Standard Time[6]",
        "Offset": "+01"
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Israel Standard Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "JST",
        "Time zone name": "Japan Standard Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "KGT",
        "Time zone name": "Kyrgyzstan time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "KOST",
        "Time zone name": "Kosrae Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "KRAT",
        "Time zone name": "Krasnoyarsk Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "KST",
        "Time zone name": "Korea Standard Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "LHST",
        "Time zone name": "Lord Howe Standard Time",
        "Offset": "+10:30"
    },
    {
        "Abbreviation": "LHST",
        "Time zone name": "Lord Howe Summer Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "LINT",
        "Time zone name": "Line Islands Time",
        "Offset": "+14"
    },
    {
        "Abbreviation": "MAGT",
        "Time zone name": "Magadan Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "MART",
        "Time zone name": "Marquesas Islands Time",
        "Offset": "-09:30"
    },
    {
        "Abbreviation": "MAWT",
        "Time zone name": "Mawson Station Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "MDT",
        "Time zone name": "Mountain Daylight Time (North America)",
        "Offset": "-06"
    },
    {
        "Abbreviation": "MET",
        "Time zone name": "Middle European Time Same zone as CET",
        "Offset": "+01"
    },
    {
        "Abbreviation": "MEST",
        "Time zone name": "Middle European Summer Time Same zone as CEST",
        "Offset": "+02"
    },
    {
        "Abbreviation": "MHT",
        "Time zone name": "Marshall Islands",
        "Offset": "+12"
    },
    {
        "Abbreviation": "MIST",
        "Time zone name": "Macquarie Island Station Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "MIT",
        "Time zone name": "Marquesas Islands Time",
        "Offset": "-09:30"
    },
    {
        "Abbreviation": "MMT",
        "Time zone name": "Myanmar Standard Time",
        "Offset": "+06:30"
    },
    {
        "Abbreviation": "MSK",
        "Time zone name": "Moscow Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "MST",
        "Time zone name": "Malaysia Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "MST",
        "Time zone name": "Mountain Standard Time (North America)",
        "Offset": "-07"
    },
    {
        "Abbreviation": "MUT",
        "Time zone name": "Mauritius Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "MVT",
        "Time zone name": "Maldives Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "MYT",
        "Time zone name": "Malaysia Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "NCT",
        "Time zone name": "New Caledonia Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "NDT",
        "Time zone name": "Newfoundland Daylight Time",
        "Offset": "-02:30"
    },
    {
        "Abbreviation": "NFT",
        "Time zone name": "Norfolk Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "NPT",
        "Time zone name": "Nepal Time",
        "Offset": "+05:45"
    },
    {
        "Abbreviation": "NST",
        "Time zone name": "Newfoundland Standard Time",
        "Offset": "-03:30"
    },
    {
        "Abbreviation": "NT",
        "Time zone name": "Newfoundland Time",
        "Offset": "-03:30"
    },
    {
        "Abbreviation": "NUT",
        "Time zone name": "Niue Time",
        "Offset": -11
    },
    {
        "Abbreviation": "NZDT",
        "Time zone name": "New Zealand Daylight Time",
        "Offset": "+13"
    },
    {
        "Abbreviation": "NZST",
        "Time zone name": "New Zealand Standard Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "OMST",
        "Time zone name": "Omsk Time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "ORAT",
        "Time zone name": "Oral Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "PDT",
        "Time zone name": "Pacific Daylight Time (North America)",
        "Offset": "-07"
    },
    {
        "Abbreviation": "PET",
        "Time zone name": "Peru Time",
        "Offset": "-05"
    },
    {
        "Abbreviation": "PETT",
        "Time zone name": "Kamchatka Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "PGT",
        "Time zone name": "Papua New Guinea Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "PHOT",
        "Time zone name": "Phoenix Island Time",
        "Offset": "+13"
    },
    {
        "Abbreviation": "PHT",
        "Time zone name": "Philippine Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "PKT",
        "Time zone name": "Pakistan Standard Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "PMDT",
        "Time zone name": "Saint Pierre and Miquelon Daylight time",
        "Offset": "-02"
    },
    {
        "Abbreviation": "PMST",
        "Time zone name": "Saint Pierre and Miquelon Standard Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "PONT",
        "Time zone name": "Pohnpei Standard Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "PST",
        "Time zone name": "Pacific Standard Time (North America)",
        "Offset": "-08"
    },
    {
        "Abbreviation": "PST",
        "Time zone name": "Philippine Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "PYST",
        "Time zone name": "Paraguay Summer Time (South America)[7]",
        "Offset": "-03"
    },
    {
        "Abbreviation": "PYT",
        "Time zone name": "Paraguay Time (South America)[8]",
        "Offset": "-04"
    },
    {
        "Abbreviation": "RET",
        "Time zone name": "Réunion Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "ROTT",
        "Time zone name": "Rothera Research Station Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "SAKT",
        "Time zone name": "Sakhalin Island time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "SAMT",
        "Time zone name": "Samara Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "SAST",
        "Time zone name": "South African Standard Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "SBT",
        "Time zone name": "Solomon Islands Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "SCT",
        "Time zone name": "Seychelles Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "SGT",
        "Time zone name": "Singapore Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "SLST",
        "Time zone name": "Sri Lanka Standard Time",
        "Offset": "+05:30"
    },
    {
        "Abbreviation": "SRET",
        "Time zone name": "Srednekolymsk Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "SRT",
        "Time zone name": "Suriname Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "SST",
        "Time zone name": "Samoa Standard Time",
        "Offset": -11
    },
    {
        "Abbreviation": "SST",
        "Time zone name": "Singapore Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "SYOT",
        "Time zone name": "Showa Station Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "TAHT",
        "Time zone name": "Tahiti Time",
        "Offset": -10
    },
    {
        "Abbreviation": "THA",
        "Time zone name": "Thailand Standard Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "TFT",
        "Time zone name": "Indian/Kerguelen",
        "Offset": "+05"
    },
    {
        "Abbreviation": "TJT",
        "Time zone name": "Tajikistan Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "TKT",
        "Time zone name": "Tokelau Time",
        "Offset": "+13"
    },
    {
        "Abbreviation": "TLT",
        "Time zone name": "Timor Leste Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "TMT",
        "Time zone name": "Turkmenistan Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "TRT",
        "Time zone name": "Turkey Time",
        "Offset": "+03"
    },
    {
        "Abbreviation": "TOT",
        "Time zone name": "Tonga Time",
        "Offset": "+13"
    },
    {
        "Abbreviation": "TVT",
        "Time zone name": "Tuvalu Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "ULAST",
        "Time zone name": "Ulaanbaatar Summer Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "ULAT",
        "Time zone name": "Ulaanbaatar Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "USZ1",
        "Time zone name": "Kaliningrad Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "",
        "Time zone name": "Coordinated Universal Time",
        "Offset": "±00"
    },
    {
        "Abbreviation": "UYST",
        "Time zone name": "Uruguay Summer Time",
        "Offset": "-02"
    },
    {
        "Abbreviation": "UYT",
        "Time zone name": "Uruguay Standard Time",
        "Offset": "-03"
    },
    {
        "Abbreviation": "UZT",
        "Time zone name": "Uzbekistan Time",
        "Offset": "+05"
    },
    {
        "Abbreviation": "VET",
        "Time zone name": "Venezuelan Standard Time",
        "Offset": "-04"
    },
    {
        "Abbreviation": "VLAT",
        "Time zone name": "Vladivostok Time",
        "Offset": "+10"
    },
    {
        "Abbreviation": "VOLT",
        "Time zone name": "Volgograd Time",
        "Offset": "+04"
    },
    {
        "Abbreviation": "VOST",
        "Time zone name": "Vostok Station Time",
        "Offset": "+06"
    },
    {
        "Abbreviation": "VUT",
        "Time zone name": "Vanuatu Time",
        "Offset": "+11"
    },
    {
        "Abbreviation": "WAKT",
        "Time zone name": "Wake Island Time",
        "Offset": "+12"
    },
    {
        "Abbreviation": "WAST",
        "Time zone name": "West Africa Summer Time",
        "Offset": "+02"
    },
    {
        "Abbreviation": "WAT",
        "Time zone name": "West Africa Time",
        "Offset": "+01"
    },
    {
        "Abbreviation": "WEST",
        "Time zone name": "Western European Summer Time",
        "Offset": "+01"
    },
    {
        "Abbreviation": "WET",
        "Time zone name": "Western European Time",
        "Offset": "±00"
    },
    {
        "Abbreviation": "WIT",
        "Time zone name": "Western Indonesian Time",
        "Offset": "+07"
    },
    {
        "Abbreviation": "WST",
        "Time zone name": "Western Standard Time",
        "Offset": "+08"
    },
    {
        "Abbreviation": "YAKT",
        "Time zone name": "Yakutsk Time",
        "Offset": "+09"
    },
    {
        "Abbreviation": "YEKT",
        "Time zone name": "Yekaterinburg Time",
        "Offset": "+05"
    }
]

const result = {}

for (const property in timezones) {
    const offset = timezones[property]['Offset'] + ""
    const offsetParts = offset.split(":")

    const offsetHoursPart = offsetParts[0] | 0
    const sign = offsetHoursPart < 0 ? -1 : 1
    let offsetMinutsPart = 0
    if (offsetParts.length > 1) {
        offsetMinutsPart = offsetParts[1] | 0
        //console.log(`${timezones[property]['Time zone name']} Hours: ${offsetHoursPart} Minutes: ${offsetMinutsPart}`)
    } 

    const totalMinutes = (offsetHoursPart * 60) + (offsetMinutsPart + sign)

    // console.log(`${timezones[property]['Time zone name']} Hours: ${offsetHoursPart} Minutes: ${offsetMinutsPart} TotalMinutes: ${totalMinutes}` )
    timezones[property]["offsetInMinutes"] = totalMinutes
    result[timezones[property]["Abbreviation"]] = timezones[property]
}
console.log(JSON.stringify(result))