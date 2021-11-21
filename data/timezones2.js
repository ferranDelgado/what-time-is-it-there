const timeZones = [
    {
        "Abbreviation": "ACDT",
        "Time zone name": "Australian Central Daylight Savings Time",
        "Offset": "+10:30",
        "offsetInMinutes": 631
    },
    {
        "Abbreviation": "ACST",
        "Time zone name": "Australian Central Standard Time",
        "Offset": "+09:30",
        "offsetInMinutes": 571
    },
    {
        "Abbreviation": "ACT",
        "Time zone name": "Acre Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "ACT",
        "Time zone name": "ASEAN Common Time",
        "Offset": "+06:30 - +09",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "ADT",
        "Time zone name": "Atlantic Daylight Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "AEDT",
        "Time zone name": "Australian Eastern Daylight Savings Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "AEST",
        "Time zone name": "Australian Eastern Standard Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "AFT",
        "Time zone name": "Afghanistan Time",
        "Offset": "+04:30",
        "offsetInMinutes": 271
    },
    {
        "Abbreviation": "AKDT",
        "Time zone name": "Alaska Daylight Time",
        "Offset": "-08",
        "offsetInMinutes": -481
    },
    {
        "Abbreviation": "AKST",
        "Time zone name": "Alaska Standard Time",
        "Offset": "-09",
        "offsetInMinutes": -541
    },
    {
        "Abbreviation": "AMST",
        "Time zone name": "Amazon Summer Time (Brazil)[1]",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "AMT",
        "Time zone name": "Amazon Time (Brazil)[2]",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "AMT",
        "Time zone name": "Armenia Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "ART",
        "Time zone name": "Argentina Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "AST",
        "Time zone name": "Arabia Standard Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "AST",
        "Time zone name": "Atlantic Standard Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "AWST",
        "Time zone name": "Australian Western Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "AZOST",
        "Time zone name": "Azores Summer Time",
        "Offset": "±00",
        "offsetInMinutes": 1
    },
    {
        "Abbreviation": "AZOT",
        "Time zone name": "Azores Standard Time",
        "Offset": "-01",
        "offsetInMinutes": -61
    },
    {
        "Abbreviation": "AZT",
        "Time zone name": "Azerbaijan Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "BDT",
        "Time zone name": "Brunei Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "BIOT",
        "Time zone name": "British Indian Ocean Time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "BIT",
        "Time zone name": "Baker Island Time",
        "Offset": -12,
        "offsetInMinutes": -721
    },
    {
        "Abbreviation": "BOT",
        "Time zone name": "Bolivia Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "BRST",
        "Time zone name": "Brasilia Summer Time",
        "Offset": "-02",
        "offsetInMinutes": -121
    },
    {
        "Abbreviation": "BRT",
        "Time zone name": "Brasilia Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "Bangladesh Standard Time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "Bougainville Standard Time[3]",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "BST",
        "Time zone name": "British Summer Time (British Standard Time from Feb 1968 to Oct 1971)",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "BTT",
        "Time zone name": "Bhutan Time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "CAT",
        "Time zone name": "Central Africa Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "CCT",
        "Time zone name": "Cocos Islands Time",
        "Offset": "+06:30",
        "offsetInMinutes": 391
    },
    {
        "Abbreviation": "CDT",
        "Time zone name": "Central Daylight Time (North America)",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "CDT",
        "Time zone name": "Cuba Daylight Time[4]",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "CEST",
        "Time zone name": "Central European Summer Time (Cf. HAEC)",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "CET",
        "Time zone name": "Central European Time",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "CHADT",
        "Time zone name": "Chatham Daylight Time",
        "Offset": "+13:45",
        "offsetInMinutes": 826
    },
    {
        "Abbreviation": "CHAST",
        "Time zone name": "Chatham Standard Time",
        "Offset": "+12:45",
        "offsetInMinutes": 766
    },
    {
        "Abbreviation": "CHOT",
        "Time zone name": "Choibalsan Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "CHOST",
        "Time zone name": "Choibalsan Summer Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "CHST",
        "Time zone name": "Chamorro Standard Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "CHUT",
        "Time zone name": "Chuuk Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "CIST",
        "Time zone name": "Clipperton Island Standard Time",
        "Offset": "-08",
        "offsetInMinutes": -481
    },
    {
        "Abbreviation": "CIT",
        "Time zone name": "Central Indonesia Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "CKT",
        "Time zone name": "Cook Island Time",
        "Offset": -10,
        "offsetInMinutes": -601
    },
    {
        "Abbreviation": "CLST",
        "Time zone name": "Chile Summer Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "CLT",
        "Time zone name": "Chile Standard Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "COST",
        "Time zone name": "Colombia Summer Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "COT",
        "Time zone name": "Colombia Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "Central Standard Time (North America)",
        "Offset": "-06",
        "offsetInMinutes": -361
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "China Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "ACST",
        "Time zone name": "Central Standard Time (Australia)",
        "Offset": "+09:30",
        "offsetInMinutes": 571
    },
    {
        "Abbreviation": "ACDT",
        "Time zone name": "Central Summer Time (Australia)",
        "Offset": "+10:30",
        "offsetInMinutes": 631
    },
    {
        "Abbreviation": "CST",
        "Time zone name": "Cuba Standard Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "CT",
        "Time zone name": "China time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "CVT",
        "Time zone name": "Cape Verde Time",
        "Offset": "-01",
        "offsetInMinutes": -61
    },
    {
        "Abbreviation": "CWST",
        "Time zone name": "Central Western Standard Time (Australia) unofficial",
        "Offset": "+08:45",
        "offsetInMinutes": 526
    },
    {
        "Abbreviation": "CXT",
        "Time zone name": "Christmas Island Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "DAVT",
        "Time zone name": "Davis Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "DDUT",
        "Time zone name": "Dumont d'Urville Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "DFT",
        "Time zone name": "AIX specific equivalent of Central European Time[5]",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "EASST",
        "Time zone name": "Easter Island Summer Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "EAST",
        "Time zone name": "Easter Island Standard Time",
        "Offset": "-06",
        "offsetInMinutes": -361
    },
    {
        "Abbreviation": "EAT",
        "Time zone name": "East Africa Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "ECT",
        "Time zone name": "Eastern Caribbean Time (does not recognise DST)",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "ECT",
        "Time zone name": "Ecuador Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "EDT",
        "Time zone name": "Eastern Daylight Time (North America)",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "AEDT",
        "Time zone name": "Eastern Summer Time (Australia)",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "EEST",
        "Time zone name": "Eastern European Summer Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "EET",
        "Time zone name": "Eastern European Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "EGST",
        "Time zone name": "Eastern Greenland Summer Time",
        "Offset": "±00",
        "offsetInMinutes": 1
    },
    {
        "Abbreviation": "EGT",
        "Time zone name": "Eastern Greenland Time",
        "Offset": "-01",
        "offsetInMinutes": -61
    },
    {
        "Abbreviation": "EIT",
        "Time zone name": "Eastern Indonesian Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "EST",
        "Time zone name": "Eastern Standard Time (North America)",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "AEST",
        "Time zone name": "Eastern Standard Time (Australia)",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "FET",
        "Time zone name": "Further-eastern European Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "FJT",
        "Time zone name": "Fiji Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "FKST",
        "Time zone name": "Falkland Islands Summer Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "FKT",
        "Time zone name": "Falkland Islands Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "FNT",
        "Time zone name": "Fernando de Noronha Time",
        "Offset": "-02",
        "offsetInMinutes": -121
    },
    {
        "Abbreviation": "GALT",
        "Time zone name": "Galapagos Time",
        "Offset": "-06",
        "offsetInMinutes": -361
    },
    {
        "Abbreviation": "GAMT",
        "Time zone name": "Gambier Islands",
        "Offset": "-09",
        "offsetInMinutes": -541
    },
    {
        "Abbreviation": "GET",
        "Time zone name": "Georgia Standard Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "GFT",
        "Time zone name": "French Guiana Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "GILT",
        "Time zone name": "Gilbert Island Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "GIT",
        "Time zone name": "Gambier Island Time",
        "Offset": "-09",
        "offsetInMinutes": -541
    },
    {
        "Abbreviation": "GMT",
        "Time zone name": "Greenwich Mean Time",
        "Offset": "±00",
        "offsetInMinutes": 1
    },
    {
        "Abbreviation": "GST",
        "Time zone name": "South Georgia and the South Sandwich Islands",
        "Offset": "-02",
        "offsetInMinutes": -121
    },
    {
        "Abbreviation": "GST",
        "Time zone name": "Gulf Standard Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "GYT",
        "Time zone name": "Guyana Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "HADT",
        "Time zone name": "Hawaii-Aleutian Daylight Time",
        "Offset": "-09",
        "offsetInMinutes": -541
    },
    {
        "Abbreviation": "HAEC",
        "Time zone name": "Heure Avancée d'Europe Centrale francised name for CEST",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "HAST",
        "Time zone name": "Hawaii-Aleutian Standard Time",
        "Offset": -10,
        "offsetInMinutes": -601
    },
    {
        "Abbreviation": "HKT",
        "Time zone name": "Hong Kong Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "HMT",
        "Time zone name": "Heard and McDonald Islands Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "HOVST",
        "Time zone name": "Khovd Summer Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "HOVT",
        "Time zone name": "Khovd Standard Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "ICT",
        "Time zone name": "Indochina Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "IDT",
        "Time zone name": "Israel Daylight Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "IOT",
        "Time zone name": "Indian Ocean Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "IRDT",
        "Time zone name": "Iran Daylight Time",
        "Offset": "+04:30",
        "offsetInMinutes": 271
    },
    {
        "Abbreviation": "IRKT",
        "Time zone name": "Irkutsk Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "IRST",
        "Time zone name": "Iran Standard Time",
        "Offset": "+03:30",
        "offsetInMinutes": 211
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Indian Standard Time",
        "Offset": "+05:30",
        "offsetInMinutes": 331
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Irish Standard Time[6]",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "IST",
        "Time zone name": "Israel Standard Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "JST",
        "Time zone name": "Japan Standard Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "KGT",
        "Time zone name": "Kyrgyzstan time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "KOST",
        "Time zone name": "Kosrae Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "KRAT",
        "Time zone name": "Krasnoyarsk Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "KST",
        "Time zone name": "Korea Standard Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "LHST",
        "Time zone name": "Lord Howe Standard Time",
        "Offset": "+10:30",
        "offsetInMinutes": 631
    },
    {
        "Abbreviation": "LHST",
        "Time zone name": "Lord Howe Summer Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "LINT",
        "Time zone name": "Line Islands Time",
        "Offset": "+14",
        "offsetInMinutes": 841
    },
    {
        "Abbreviation": "MAGT",
        "Time zone name": "Magadan Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "MART",
        "Time zone name": "Marquesas Islands Time",
        "Offset": "-09:30",
        "offsetInMinutes": -511
    },
    {
        "Abbreviation": "MAWT",
        "Time zone name": "Mawson Station Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "MDT",
        "Time zone name": "Mountain Daylight Time (North America)",
        "Offset": "-06",
        "offsetInMinutes": -361
    },
    {
        "Abbreviation": "MET",
        "Time zone name": "Middle European Time Same zone as CET",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "MEST",
        "Time zone name": "Middle European Summer Time Same zone as CEST",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "MHT",
        "Time zone name": "Marshall Islands",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "MIST",
        "Time zone name": "Macquarie Island Station Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "MIT",
        "Time zone name": "Marquesas Islands Time",
        "Offset": "-09:30",
        "offsetInMinutes": -511
    },
    {
        "Abbreviation": "MMT",
        "Time zone name": "Myanmar Standard Time",
        "Offset": "+06:30",
        "offsetInMinutes": 391
    },
    {
        "Abbreviation": "MSK",
        "Time zone name": "Moscow Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "MST",
        "Time zone name": "Malaysia Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "MST",
        "Time zone name": "Mountain Standard Time (North America)",
        "Offset": "-07",
        "offsetInMinutes": -421
    },
    {
        "Abbreviation": "MUT",
        "Time zone name": "Mauritius Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "MVT",
        "Time zone name": "Maldives Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "MYT",
        "Time zone name": "Malaysia Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "NCT",
        "Time zone name": "New Caledonia Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "NDT",
        "Time zone name": "Newfoundland Daylight Time",
        "Offset": "-02:30",
        "offsetInMinutes": -91
    },
    {
        "Abbreviation": "NFT",
        "Time zone name": "Norfolk Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "NPT",
        "Time zone name": "Nepal Time",
        "Offset": "+05:45",
        "offsetInMinutes": 346
    },
    {
        "Abbreviation": "NST",
        "Time zone name": "Newfoundland Standard Time",
        "Offset": "-03:30",
        "offsetInMinutes": -151
    },
    {
        "Abbreviation": "NT",
        "Time zone name": "Newfoundland Time",
        "Offset": "-03:30",
        "offsetInMinutes": -151
    },
    {
        "Abbreviation": "NUT",
        "Time zone name": "Niue Time",
        "Offset": -11,
        "offsetInMinutes": -661
    },
    {
        "Abbreviation": "NZDT",
        "Time zone name": "New Zealand Daylight Time",
        "Offset": "+13",
        "offsetInMinutes": 781
    },
    {
        "Abbreviation": "NZST",
        "Time zone name": "New Zealand Standard Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "OMST",
        "Time zone name": "Omsk Time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "ORAT",
        "Time zone name": "Oral Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "PDT",
        "Time zone name": "Pacific Daylight Time (North America)",
        "Offset": "-07",
        "offsetInMinutes": -421
    },
    {
        "Abbreviation": "PET",
        "Time zone name": "Peru Time",
        "Offset": "-05",
        "offsetInMinutes": -301
    },
    {
        "Abbreviation": "PETT",
        "Time zone name": "Kamchatka Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "PGT",
        "Time zone name": "Papua New Guinea Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "PHOT",
        "Time zone name": "Phoenix Island Time",
        "Offset": "+13",
        "offsetInMinutes": 781
    },
    {
        "Abbreviation": "PHT",
        "Time zone name": "Philippine Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "PKT",
        "Time zone name": "Pakistan Standard Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "PMDT",
        "Time zone name": "Saint Pierre and Miquelon Daylight time",
        "Offset": "-02",
        "offsetInMinutes": -121
    },
    {
        "Abbreviation": "PMST",
        "Time zone name": "Saint Pierre and Miquelon Standard Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "PONT",
        "Time zone name": "Pohnpei Standard Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "PST",
        "Time zone name": "Pacific Standard Time (North America)",
        "Offset": "-08",
        "offsetInMinutes": -481
    },
    {
        "Abbreviation": "PST",
        "Time zone name": "Philippine Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "PYST",
        "Time zone name": "Paraguay Summer Time (South America)[7]",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "PYT",
        "Time zone name": "Paraguay Time (South America)[8]",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "RET",
        "Time zone name": "Réunion Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "ROTT",
        "Time zone name": "Rothera Research Station Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "SAKT",
        "Time zone name": "Sakhalin Island time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "SAMT",
        "Time zone name": "Samara Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "SAST",
        "Time zone name": "South African Standard Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "SBT",
        "Time zone name": "Solomon Islands Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "SCT",
        "Time zone name": "Seychelles Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "SGT",
        "Time zone name": "Singapore Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "SLST",
        "Time zone name": "Sri Lanka Standard Time",
        "Offset": "+05:30",
        "offsetInMinutes": 331
    },
    {
        "Abbreviation": "SRET",
        "Time zone name": "Srednekolymsk Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "SRT",
        "Time zone name": "Suriname Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "SST",
        "Time zone name": "Samoa Standard Time",
        "Offset": -11,
        "offsetInMinutes": -661
    },
    {
        "Abbreviation": "SST",
        "Time zone name": "Singapore Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "SYOT",
        "Time zone name": "Showa Station Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "TAHT",
        "Time zone name": "Tahiti Time",
        "Offset": -10,
        "offsetInMinutes": -601
    },
    {
        "Abbreviation": "THA",
        "Time zone name": "Thailand Standard Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "TFT",
        "Time zone name": "Indian/Kerguelen",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "TJT",
        "Time zone name": "Tajikistan Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "TKT",
        "Time zone name": "Tokelau Time",
        "Offset": "+13",
        "offsetInMinutes": 781
    },
    {
        "Abbreviation": "TLT",
        "Time zone name": "Timor Leste Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "TMT",
        "Time zone name": "Turkmenistan Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "TRT",
        "Time zone name": "Turkey Time",
        "Offset": "+03",
        "offsetInMinutes": 181
    },
    {
        "Abbreviation": "TOT",
        "Time zone name": "Tonga Time",
        "Offset": "+13",
        "offsetInMinutes": 781
    },
    {
        "Abbreviation": "TVT",
        "Time zone name": "Tuvalu Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "ULAST",
        "Time zone name": "Ulaanbaatar Summer Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "ULAT",
        "Time zone name": "Ulaanbaatar Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "USZ1",
        "Time zone name": "Kaliningrad Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "",
        "Time zone name": "Coordinated Universal Time",
        "Offset": "±00",
        "offsetInMinutes": 1
    },
    {
        "Abbreviation": "UYST",
        "Time zone name": "Uruguay Summer Time",
        "Offset": "-02",
        "offsetInMinutes": -121
    },
    {
        "Abbreviation": "UYT",
        "Time zone name": "Uruguay Standard Time",
        "Offset": "-03",
        "offsetInMinutes": -181
    },
    {
        "Abbreviation": "UZT",
        "Time zone name": "Uzbekistan Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    },
    {
        "Abbreviation": "VET",
        "Time zone name": "Venezuelan Standard Time",
        "Offset": "-04",
        "offsetInMinutes": -241
    },
    {
        "Abbreviation": "VLAT",
        "Time zone name": "Vladivostok Time",
        "Offset": "+10",
        "offsetInMinutes": 601
    },
    {
        "Abbreviation": "VOLT",
        "Time zone name": "Volgograd Time",
        "Offset": "+04",
        "offsetInMinutes": 241
    },
    {
        "Abbreviation": "VOST",
        "Time zone name": "Vostok Station Time",
        "Offset": "+06",
        "offsetInMinutes": 361
    },
    {
        "Abbreviation": "VUT",
        "Time zone name": "Vanuatu Time",
        "Offset": "+11",
        "offsetInMinutes": 661
    },
    {
        "Abbreviation": "WAKT",
        "Time zone name": "Wake Island Time",
        "Offset": "+12",
        "offsetInMinutes": 721
    },
    {
        "Abbreviation": "WAST",
        "Time zone name": "West Africa Summer Time",
        "Offset": "+02",
        "offsetInMinutes": 121
    },
    {
        "Abbreviation": "WAT",
        "Time zone name": "West Africa Time",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "WEST",
        "Time zone name": "Western European Summer Time",
        "Offset": "+01",
        "offsetInMinutes": 61
    },
    {
        "Abbreviation": "WET",
        "Time zone name": "Western European Time",
        "Offset": "±00",
        "offsetInMinutes": 1
    },
    {
        "Abbreviation": "WIT",
        "Time zone name": "Western Indonesian Time",
        "Offset": "+07",
        "offsetInMinutes": 421
    },
    {
        "Abbreviation": "WST",
        "Time zone name": "Western Standard Time",
        "Offset": "+08",
        "offsetInMinutes": 481
    },
    {
        "Abbreviation": "YAKT",
        "Time zone name": "Yakutsk Time",
        "Offset": "+09",
        "offsetInMinutes": 541
    },
    {
        "Abbreviation": "YEKT",
        "Time zone name": "Yekaterinburg Time",
        "Offset": "+05",
        "offsetInMinutes": 301
    }
]