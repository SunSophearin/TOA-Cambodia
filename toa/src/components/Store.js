import { ref } from "vue";

export const isFilter=ref(false)
export const clickback=ref(true);
export const openSlide=ref(false)
export const openPopup=ref(false)

export const dataDetail=ref([
    {
        'data-cate_id':'',
        'data-pid':'',
        'data-title':'',
        'data-using':'',
        'data-grade':'',
        'data-ptype':'',
        'data-ftype':'',
        'data-img':'',
        'data-qty':'',
        'data-des':''
    }
])
export const searchDataProducts=ref('')
export const filterGrade=ref([])
export const filterUsing=ref([])
export const filterFtype=ref([])
export const filterProducts_type=ref([])
export const slideList=ref([
    {
        id:'1',
        img:'/assets/img/slide_1.jpg'
    },
    {
        id:'2',
        img:'/assets/img/slide_2.jpg'
    },
    {
        id:'3',
        img:'/assets/img/slide_3.jpg'
    }
])
export const subMenu=ref([
    {
        'data-id':"1",
        'data-name':"Decorative Coating",
        'data-name_link':"Decorative-Coating",
        'data-background':'background-color:#DC7633'
        
    },
    {
        'data-id':"2",
        'data-name':"Construction Chemicals",
        'data-name_link':"Construction-Chemicals",
        'data-background':'background-color:#B2BABB'

    },
    {
        'data-id':"3",
        'data-name':"Special Paint",
        'data-name_link':"Special-Paint",
        'data-background':'background-color:#C39BD3'
    },
    {
        'data-id':"4",
        'data-name':"Wood Coating",
        'data-name_link':"Wood-Coating",
        'data-background':'background-color:#7DCEA0'
    },
    {
        'data-id':"5",
        'data-name':"Heavy Duty Coating",
        'data-name_link':"Heavy-Duty-Coating",
        'data-background':'background-color:#CD6155'
    },
    {
        'data-id':"7",
        'data-name':"Metal Coating",
        'data-name_link':"Metal-Coating",
        'data-background':'background-color:#333'
    }
])
export const grade=ref([
    {
        'data-id':'1',
        'data-name':'Ultra Premium',
        'status':false
    },
    {
        'data-id':'2',
        'data-name':'Premium',
        'status':false
    },
    {
        'data-id':'3',
        'data-name':'Medium',
        'status':false
    },
    {
        'data-id':'4',
        'data-name':'Economy',
        'status':false
    },
    
]);
export const using=ref([
    {
        'data-id':'5',
        'data-name':'Interior',
    },
    {
        'data-id':'6',
        'data-name':'Exterior',
    },
    {
        'data-id':'14',
        'data-name':'Interior and Exterior',
    },
])
export const product_type=ref([
    {
        'data-id':'7',
        'data-name':'Skim Coat',
    },
    {
        'data-id':'8',
        'data-name':'Primer',
    },
    {
        'data-id':'9',
        'data-name':'Topcoat',
    },
])
export const film_type=ref([
    {
        'data-id':'10',
        'data-name':'Gloss',
    },
    {
        'data-id':'11',
        'data-name':'Flatt & Matt',
    },
    {
        'data-id':'12',
        'data-name':'Semi Gloss',
    },
    {
        'data-id':'13',
        'data-name':'Sheen',
    },
])
export const product=ref([
    {
        'data-cate_id':'1',
        'data-pid':'90',
        'data-title':'SuperShield Duraclean Matt',
        'data-using':'Interior',
        'data-grade':'Ultra Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        // 'data-link':''
        'data-img':'/assets/img/duraclean-matt.jpg',
        'data-qty':'1 GL., 2.5 GL., 5 GL.',
        'data-des':'SuperShield Duraclean™ is Ultra-Premium interior paint. 100% high performance pure acrylic waterborne. Superior washable and scrub resistance. anti-bacterial for lifetime. Low odor and safe for resident. For interior, Suitable for areas that require highly hygienic ex. Bedroom, Hospital, Kindergarten or areas require extra low odor ready for moving in within an hour ex hotel, corridor. Type : 100% Pure Acrylic Emulsion Paint Color : Wide range of colors.Please refer to colour card.Film Appearance : Matt100% Pure acrylic waterborne & Life time hygienic '
    },
    {
        'data-cate_id':'1',
        'data-pid':'97',
        'data-title':'TOA Shield-1 For Exterior (Semi-Gloss)',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Semi Gloss',
        'data-img':'/assets/img/shield-1-primer-2022.jpg',
        'data-qty':'1 GL., 2.5 GL., 5 GL',
        'data-des':'Super Premium grade emulsion paint, durable for more than 10 years, stain protection by Dirt Shield Technology, the latest technology from Germany. Superior protection against all stains, resistant to algae and fungus x2 and excellent heat reflection up to 96.2%*. ',

    },
    {
        'data-cate_id':'1',
        'data-pid':'43',
        'data-title':'4 SEASONS Emulsion Paint (Semi Gloss)',
        'data-using':'Interior and Exterior',
        'data-grade':'Medium',
        'data-ptype':'Topcoat',
        'data-ftype':'Semi Gloss',
        'data-img':'/assets/img/4ss-02.jpg',
        'data-qty':'1/4 GL., 1 GL., 2.5 GL., 5 GL.',
        'data-des': '4 SEASONS Semi-Gloss Emulsion Paint for exterior and interior is based on a 100% acrylic emulsion and the light fasted pigment that give excellent outdoor durability for tropical climate. It gives performance of washability, UV protection and gives performance of scrub resistance'
    },
    {
        'data-cate_id':'1',
        'data-pid':'114',
        'data-title':'MANDARIN DUCK Contact Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/mandarin-duck-contact-primer87e756c5651a4ac88d07717d1540475e.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':' MD Contact Primer is based on high quality acrylic. It is clear pigment and easily penetrate into chalky film. It is characterized with quick drying, good flow and strong adhesion.'
    },
    {
        'data-cate_id':'1',
        'data-pid':'113',
        'data-title':'MANDARIN DUCK BRAND Alkali Resisting Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/mandarin-duck-primer9d7170c52cbf4a8c92dd66a4f0b5b954.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',

    },
    {
        'data-cate_id':'1',
        'data-pid':'112',
        'data-title':'MANDARIN DUCK BRAND Matt Interior Emulsion Paint',
        'data-using':'Interior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/mandarin-duck-matt3380d820a75b48988ba1832de62a4270.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'38',
        'data-title':'TOA ROOF PAINT',
        'data-using':'Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Semi Gloss',
        'data-img':'/assets/img/638e99e5afdad_roof-paint.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'85',
        'data-title':'TOA GROUT GP',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6392acc2722e8_toa-grout-gp.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'82',
        'data-title':'TOA GROUT GP',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6392ab7669908_3d_toa_premium_grout_plus_500x500.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'83',
        'data-title':'TOA PREMIUM GROUT',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6392aaf60bf70_3d_toa_premium_grout_[toa_ezy_fix]_white_500x500.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'82',
        'data-title':'TOA PREMIUM GROUT',
        'data-using':'Interior and Exterior',
        'data-grade':'Medium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6392aa446cd82_toa-protile.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'2',
        'data-pid':'81',
        'data-title':'TOA PREMIUM GROUT',
        'data-using':'Interior and Exterior',
        'data-grade':'Medium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6392aa446cd82_toa-protile.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'142',
        'data-title':'TOA Thinner No.74N for TOA Gold Paint',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396a1e4c4ec6_toa-thinner-74n.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'141',
        'data-title':'TOA GOLD Enamel Paint',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396a10f61625_toa-gold-enamel-topcoat.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'140',
        'data-title':'TOA GOLD Acrylic Lacquer Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Primer',
        'data-ftype':'Semi Gloss',
        'data-img':'/assets/img/63969f9feb2ac_toa-gold-acrylic-lacquer-primer.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'139',
        'data-title':'TOA GOLD Acrylic Lacquer Paint',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63969eb3013f3_toa-gold-acrylic-lacquer-topcoat.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'138',
        'data-title':'TOA GOLD Waterbase Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Primer',
        'data-ftype':'Sheen',
        'data-img':'/assets/img/63969e3f43f43_toa-gold-waterbase-primer.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'3',
        'data-pid':'137',
        'data-title':'TOA GOLD Waterbase Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/63969e3f43f43_toa-gold-waterbase-primer.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'4',
        'data-pid':'283',
        'data-title':'TOA Super Coloring',
        'data-using':'Interior and Exterior',
        'data-grade':'Medium',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63febfdc64023_toa-coloring-stain.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'4',
        'data-pid':'234',
        'data-title':'Chaindrite',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6398366827984_cd04.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'4',
        'data-pid':'233',
        'data-title':'Chaindrite Stedfast 40 EC',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63982d831fcbc_cd03.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'4',
        'data-pid':'232',
        'data-title':'Chaindrite Stedfast 30 SC',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63982cc585236_cd02.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'4',
        'data-pid':'230',
        'data-title':'SHARK Polyurethane Thinner No.88',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63982ae17b185_toa-thinner-pu1k-88.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'281',
        'data-title':'TOA Polyurethane Thinner No.41',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63f6c0252f446_toa_thiner_41.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'280',
        'data-title':'KOBE Premium Colors Spray',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/639fc052996ae_kobe-premium-colors-spray (1).jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'279',
        'data-title':'KOBE Heat-Resistant Silicone Spray',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/639fbff915a90_kobe-heat-resiistant-silicone-spray126d7604ba104fd8b40bb7e9ba281091.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'278',
        'data-title':'KOBE Fluorescent Colors Spray',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/639fbf6e1dcde_kobe-fluorescent-colors-spray.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'277',
        'data-title':'KOBE Original Colors For Motorcycle',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/639fbe3b2325a_kobe-original-colors-for-motorcycle-spray.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'5',
        'data-pid':'276',
        'data-title':'KOBE Acrylic Lacquer Spray For All Purposes',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Topcoat',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/639fbd53e9964_kobe-acrylic-lacquer-spray96d656b52e21420b9d5f7f52966bb4dd.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'282',
        'data-title':'4 SEASONS High Gloss Enamel',
        'data-using':'Interior and Exterior',
        'data-grade':'Medium',
        'data-ptype':'Topcoat',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/63fc1ff188acf_4seasons-high-gloss-enamel.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'174',
        'data-title':'TOA Thinner No. 39',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396ec0914232_toa-thinner-39.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'173',
        'data-title':'TOA Thinner No. 31',
        'data-using':'Interior and Exterior',
        'data-grade':'Premium',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396eb235d2f7_thinner-no.-31.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'172',
        'data-title':'TOA Lacquer Thinner No.71',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396e9a4258bc_toa-lacquer-thinner-71.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'171',
        'data-title':'TOA Thinner No.21',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Gloss',
        'data-img':'/assets/img/6396e88963f2d_thinner-21-02.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },
    {
        'data-cate_id':'7',
        'data-pid':'170',
        'data-title':'SHARK Grey Primer',
        'data-using':'Interior and Exterior',
        'data-grade':'Economy',
        'data-ptype':'Primer',
        'data-ftype':'Flatt & Matt',
        'data-img':'/assets/img/6396e7fe69ac5_shark-grey-primer.jpg',
        'data-qty':'1GL, 5GL',
        'data-des':'MD Alkali Resisting Primer is based on emulsion paint. Formulated with fungus and mould resistance with no lead and mercury added. It is ideal for the protection and decoration of all the usual exterior and interior masonry substrates such as plaster, concrete, brick, gypsum board.',
    },




])

