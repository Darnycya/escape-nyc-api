const db = require('../db/connection')
const Player = require('../models/player')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const players =
  [
    {
    "name": "Dak Prescott",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Dak_Prescott_4_c5tdat.png",
    "position": "Quarterback",
    "jerseyNumber": 4,
    },
    {
    "name": "Aldon Smith",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357343/Aldon_Smith_58_tbs7v1.png",
    "position": "Defensive End",
    "jerseyNumber": 58,

    },
    {
   
    "name": "Amari Cooper",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357342/Amari_Cooper_19_hunerg.png",
    "position": "Wide Receiver",
    "jerseyNumber": 19,
    
    },
    {
 
    "name": "Andy Dalton",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357345/Andy_Dalton_14_wr2vcm.png",
    "position": "Quarterback",
    "jerseyNumber": 14,
    
    },
    {
   
    "name": "Anthony Brown",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Anthony_Brown_30_zgmoky.png",
    "position": "Cornerback",
    "jerseyNumber": 30,
    
    },
    {
  
    "name": "Antwaun Woods",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357335/Antwaun_Woods_99_q3edcv.png",
    "position": "Defensive Tackle",
    "jerseyNumber": 99,
    
    },
    {
    
    "name": "Azur Kamara",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Azur_Kamara_43_w0y73l.png",
    "position": "Linebacker",
    "jerseyNumber": 43,
    
    },
    {
    
    "name": "Ben DiNucci",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357338/Ben_DiNucci_7_zlbdnd.png",
    "position": "Quarterback",
    "jerseyNumber": 7,
    
    },
    {
    
    "name": "Blake Bell",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/Blake_Bell_80_bg0rpp.png",
    "position": "Tight End",
    "jerseyNumber": 80,
    
    },
    {
    
    "name": "Blake Jarwin",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357345/Blake_Jarwin_89_wkdlsl.png",
    "position": "Tight End",
    "jerseyNumber": 89,
    
    },
    {
   
    "name": "Bradlee Anae",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Bradlee_Anae_56_ia4z7y.png",
    "position": "Defensive End",
    "jerseyNumber": 56,
    
    },
    {
    
    "name": "Brandon Knight",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357334/Brandon_Knight_69_iokhid.png",
    "position": "Tackle",
    "jerseyNumber": 69,
    
    },
    {
    
    "name": "C.J. Goodwin",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/C.J._Goodwin_29_z2ciws.png",
    "position": "Cornerback",
    "jerseyNumber": 29,
    
    },
    {
    
    "name": "Cameron Erving",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357345/Cameron_Erving_75_vzogvw.png",
    "position": "Tackle",
    "jerseyNumber": 75,
    
    },
    {
    
    "name": "Cedrick Wilson",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Cedrick_Wilson_11_iguo6v.png",
    "position": "Wide Receiver",
    "jerseyNumber": 11,
    
    },
    {
    
    "name": "CeeDee Lamb",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/CeeDee_Lamb_88_exi54d.png",
    "position": "Wide Receiver",
    "jerseyNumber": 88,
    
    },
    {
    
    "name": "Chidobe Awuzie",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357338/Chidobe_Awuzie_24_uysha9.png",
    "position": "Cornerback",
    "jerseyNumber": 24,
   
    },
    {
    
    "name": "Chris Jones",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/Chris_Jones_6_mxhphh.png",
    "position": "Punter",
    "jerseyNumber": 6,
    
    },
    {
    
    "name": "Chris Westry",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357338/Chris_Westry_31_pnwy3t.png",
    "position": "Cornerback",
    "jerseyNumber": 31,
   
    },
    {
    
    "name": "Conner McGovern",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Connor_McGovern_66_oaiuwv.png",
    "position": "Guard",
    "jerseyNumber": 66,
    
    },
    {
   
    "name": "Conner Williams",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Connor_Williams_52_qyrfqu.png",
    "position": "Guard",
    "jerseyNumber": 52,
    
    },
    {
    
    "name": "Dalton Schultz",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/Dalton_Schultz_86_pd3ywe.png",
    "position": "Tight End",
    "jerseyNumber": 86,
    
    },
    {
    
    "name": "Deante Burton",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357345/Deante_Burton_33_szeqih.png",
    "position": "Cornerback",
    "jerseyNumber": 33,
    
    },
    {
    
    "name": "DeMarcus Lawrence",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357343/DeMarcus_Lawrence_90_ugveyd.png",
    "position": "Defensive End",
    "jerseyNumber": 90,
    
    },
    {
    
    "name": "Donovan Wilson",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Donovan_Wilson_37_lvi9ow.png",
    "position": "Safety",
    "jerseyNumber": 37,
    
    },
    {
    
    "name": "Dorance Armstrong",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357335/Dorance_Armstrong_92_tlyryb.png",
    "position": "Defensive End",
    "jerseyNumber": 92,
    
    },
    {
   
    "name": "Eli Ankou",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357342/Eli_Ankou_95_ff5mtt.png",
    "position": "DT",
    "jerseyNumber": 95,
    
    },
    {
    
    "name": "Ezekiel Elliot",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357342/Ezekiel_Elliot_21_qn9rlv.png",
    "position": "Running Back",
    "jerseyNumber": 21,
   
    },
    {
    
    "name": "Franscis Bernard",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357334/Francis_Bernard_44_qamjv8.png",
    "position": "Linebacker",
    "jerseyNumber": 44,
   
    },
    {
   
    "name": "Garrett Gilbert",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Garrett_Gilbert_3_wv3itk.png",
    "position": "Quarterback",
    "jerseyNumber": 3,
   
    },
    {
    
    "name": "Greg Senat",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357343/Greg_Senat_64_svnajf.png",
    "position": "Tackle",
    "jerseyNumber": 64,
   
    },
    {
   
    "name": "Greg Zuerlein",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357342/Greg_Zuerlein_2_bxmnvt.png",
    "position": "Kicker",
    "jerseyNumber": 2,
    
    },
    {
   
    "name": "Hunter Niswander",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357343/Hunter_Niswander_1_goqsfh.png",
    "position": "Punter",
    "jerseyNumber": 1,
    
    },
    {
    
    "name": "Jaylon Smith",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Jaylon_Smith_54_pno25o.png",
    "position": "Linebacker",
    "jerseyNumber": 54,
    
    },
    {
   
    "name": "Joe Looney",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/Joe_Looney_73_eyxhrs.png",
    "position": "Center",
    "jerseyNumber": 73,
    
    },
    {
    
    "name": "Joe Thomas",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357335/Joe_Thomas_48_phlg7k.png",
    "position": "Linebacker",
    "jerseyNumber": 48,
    
    },
    {
    
    "name": "Jourdan Lewis",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Jourdan_Lewis_26_zfd8oj.png",
    "position": "Cornerback",
    "jerseyNumber": 26,
   
    },
    {
    
    "name": "Justin March",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357343/Justin_March_59_vvh8wg.png",
    "position": "Linebacker",
    "jerseyNumber": 59,
    
    },
    {
   
    "name": "L.P. Ladouceur",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357334/L.P._Ladouceur_91_k8umu0.png",
    "position": "Long Snapper",
    "jerseyNumber": 91,
    
    },
    {
    
    "name": "La'el Collins",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357338/La_el_Collins_71_npymim.png",
    "position": "Tackle",
    "jerseyNumber": 71,
    
    },
    {
   
    "name": "Leighton Vander Esch",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Leighton_Vander_Esch_55_xvu1ti.png",
    "position": "Linebacker",
    "jerseyNumber": 55,
   
    },
    {
   
    "name": "Luke Gifford",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Luke_Gifford_57_fewfip.png",
    "position": "Linebacker",
    "jerseyNumber": 57,
    
    },
    {
    
    "name": "Malik Turner",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357342/Malik_Turner_17_fskhum.png",
    "position": "Wide Receiver",
    "jerseyNumber": 17,
    
    },
    {
    
    "name": "Michael Gallup",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Michael_Gallup_13_f9llcv.png",
    "position": "Wide Receiver",
    "jerseyNumber": 13,
    
    },
    {
    
    "name": "Mitch Hyatt",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Mitch_Hyatt_65_psuecx.png",
    "position": "Tackle",
    "jerseyNumber": 65,
    
    },
    {
    
    "name": "Neville Gallimore",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Neville_Gallimore_96_vxfxwe.png",
    "position": "Defensive Tackle",
    "jerseyNumber": 96,
    
    },
    {
    
    "name": "Noah Brown",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Noah_Brown_85_jsdyx1.png",
    "position": "Wide Reciever ",
    "jerseyNumber": 85,
   
    },
    {
   
    "name": "Randy Gregory",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357341/Randy_Gregory_94_qycv2c.png",
    "position": "Defensive End",
    "jerseyNumber": 94,
    
    },
    {
    
    "name": "Rashard Robinson",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Rashard_Robinson_28_wzbh8q.png",
    "position": "Defensive Back",
    "jerseyNumber": 28,
    
    },
    {
   
    "name": "Reggie Robsinson ll",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Reggie_Robinson_ll_41_uohlu4.png",
    "position": "Cornerback",
    "jerseyNumber": 41,
   
    },
    {
    
    "name": "Rico Dowdle",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357339/Rico_Dowdle_34_wviyr8.png",
    "position": "Running Back",
    "jerseyNumber": 34,
    
    },
    {
    
    "name": "Ron'Dell Carter",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357341/Ron_Dell_Carter_97_atv2rc.png",
    "position": "Defensive End",
    "jerseyNumber": 97,
    
    },
    {
   
    "name": "Saivion Smith",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357333/Saivion_Smith_32_enboi9.png",
    "position": "Cornerback",
    "jerseyNumber": 32,
    
    },
    {
   
    "name": "Sean Lee",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357334/Sean_Lee_50_pse8im.png",
    "position": "Linebacker",
    "jerseyNumber": 50,
   
    },
    {
    
    "name": "Sean McKeon",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Sean_McKeon_84_wisj1r.png",
    "position": "Tight End",
    "jerseyNumber": 84,
    
    },
    {
    
    "name": "Steven Parker",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Steven_Parker_40_hsrs0r.png",
    "position": "Defensive Back",
    "jerseyNumber": 40,
   
    },
    {
    
    "name": "Terence Steele",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357344/Terence_Steele_78_rac7uj.png",
    "position": "Tackle",
    "jerseyNumber": 78,
   
    },
    {
    
    "name": "Tony Pollard",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357340/Tony_Pollard_20_gobh7j.png",
    "position": "Running Back",
    "jerseyNumber": 20,
   
    },
    {
    
    "name": "Trevon Diggs",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357334/Trevon_Diggs_27_t3bn1f.png",
    "position": "Cornerback",
    "jerseyNumber": 27,
    
    },
    {
  
    "name": "Trysten Hill",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357337/Trysten_Hill_72_kibz8k.png",
    "position": "Defesnive Tackle",
    "jerseyNumber": 72,
    
    },
    {
    
    "name": "Tyler Biadasz",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357336/Tyler_Biadasz_fcqi63.png",
    "position": "Center",
    "jerseyNumber": 63,
    
    },
    {
    
    "name": "Tyron Smith",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357335/Tyron_Smith_77_ea3hbz.png",
    "position": "Tackle",
    "jerseyNumber": 77,
    
    },
    {
    
    "name": "Tyrone Crawford",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357338/Tyrone_Crawford_98_oiatpz.png",
    "position": "Defensive Lineman",
    "jerseyNumber": 98,
    
    },
    {
    
    "name": "Xavier Woods",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357335/Xavier_Woods_25_xqi1rs.png",
    "position": "Safety",
    "jerseyNumber": 25,
   
    },
    {
   
    "name": "Zack Martin",
    "image": "https://res.cloudinary.com/darnycya/image/upload/v1615357341/Zack_Martin_70_mlmbas.png",
    "position": "Guard",
    "jerseyNumber": 70,
    
    }
    ]


    await Player.insertMany(players)
    console.log("Created players!")
}
const run = async () => {
  await main();
  db.close();
};

run();