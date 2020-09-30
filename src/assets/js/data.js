export const accessControl = { 
    title:'区政府大门出入',
    text:'A-D类人才可获得区政府大院出入资格。通过技术对接大院闸机系统，实现扫码进闸，人才刷码即可入院。',
    img: require('@/assets/image/accessControl.png'),
    btnText: '立即刷码'
};

export const hotelOffers = { 
    title:'酒店优惠',
    list:[
        {
          img:require('../image/newcareIcon.png'),  
          header:'杭州绿城尊蓝钱江精选酒店(钱江新城店）',
          tip:'杭州市江干区钱江新城望江东路52号最多显示2行…',
          km:'2.6'
        },
        {
          img:require('../image/newcareIcon.png'),  
          header:'杭州绿城尊蓝钱江精选酒店(钱江新城店）',
          tip:'杭州市江干区钱江新城望江东路52号最多显示2行…',
          km:'2.6'
          },
    ]
};

export const hotelOffersDetail = {  //酒店优惠详情 
    title:'酒店优惠',
    img: require('@/assets/image/hotelDetail.png'),
    tabName:['服务说明','酒店介绍'],
    tab1:'针对人才用户，我们提供低于市场价的优惠价格，A/B/C类人才：客房按当天携程门市价的9折结算D/E类人才：客房按当天携程门市价的95折结算',
    tab2:
    [
      {
        title:'富阳开元森泊度假酒店',
        address:'地址：中山南路363号，近鼓楼美食街',
        tel:'电话：85002888',
        hotelIcon: require('@/assets/image/hotelIcon1.png'),
      },
      {
        title: '酒店介绍',
        text: '杭州开元森泊度假酒店以“大自然”为原点，创新衍生出“精品度假”与“奇趣游乐”两大核心板块，是集住宿、游乐、餐饮、商务为一体的全天候一站式休闲度假综合体。',
        img: require('@/assets/image/hotelDetail.png'),
        hotelIcon: require('@/assets/image/hotelIcon2.png'),
      }
    ]
};


export const TourismServices = {  
    title:'旅游服务',
    list:[
        {
          img:require('../image/newcareIcon.png'),  
          header:'黄公望隐居地',
          tip:'浙江省杭州市富阳区馆驿里8号',
          km:'2.6'
        },
        {
          img:require('../image/newcareIcon.png'),  
          header:'杭州龙门古镇',
          tip:'中山南路363号，近鼓楼美食街',
          km:'2.6'
          },
    ]
};

export const TourismServicesDetail = {  //旅游服务详情  
    title:'黄公望隐居地',
    img: require('@/assets/image/hotelDetail.png'),
    tabName:['服务说明','酒店介绍'],
    tab1:'针对人才用户，我们提供低于市场价的优惠价格，A/B/C类人才：客房按当天携程门市价的9折结算D/E类人才：客房按当天携程门市价的95折结算',
    tab2:
    [
      {
        title:'富阳开元森泊度假酒店',
        address:'地址：中山南路363号，近鼓楼美食街',
        tel:'电话：85002888',
        hotelIcon: require('@/assets/image/hotelIcon1.png'),
      },
      {
        title: '酒店介绍',
        text: '杭州开元森泊度假酒店以“大自然”为原点，创新衍生出“精品度假”与“奇趣游乐”两大核心板块，是集住宿、游乐、餐饮、商务为一体的全天候一站式休闲度假综合体。',
        img: require('@/assets/image/hotelDetail.png'),
        hotelIcon: require('@/assets/image/hotelIcon2.png'),
      }
    ]
};


export const medicalService = {  //医疗服务选择页
    title:'医疗服务',
    list:[
        {
          img:require('../image/medicalBg1.png'),  
          name:'保健联系人'
        },
        {
          img:require('../image/medicalBg2.png'),  
          name:'体检预约'
          },
    ]
};

export const healthContact = {  
    title:'保健联系人',
    img: require('@/assets/image/newcarepeopleBg.png'),
    list:[{
      name:'赵医师',
      src:require('../image/tel.png'),  
      lists:[
            {
             img:require('../image/newcareIcon.png'),  
             header:'杭州第一人民医院',
             tip:'4号楼3楼303室（综合保健门诊）',
             km:'2.6'
           },
           {
             img:require('../image/newcareIcon.png'),  
             header:'邵逸夫医院',
             tip:'杭州市江干区庆春东路3号',
             km:'2.6'
           }]
           },
            {
              name:'赵医师',
              src:require('../image/tel.png'),  
              lists:[
                 {
                   img:require('../image/newcareIcon.png'),  
                   header:'杭州第一人民医院',
                   tip:'4号楼3楼303室（综合保健门诊）',
                   km:'2.6'
                 },
                 {
                    img:require('../image/newcareIcon.png'),  
                    header:'邵逸夫医院',
                    tip:'杭州市江干区庆春东路3号',
                    km:'2.6'
               }]
           }]
};

export const healthContactDetail = {  //保健联系人详情
    title:'保健联系人',
    text:'杭州市第一人民医院是一所综合性三级甲等医院，位于杭州市浣纱路261号。2018年12月4日，被国家卫健委公布为首批肿瘤多学科诊疗试点医院。人才前往医院就医，展示人才码即可获得优先就诊服务。',
    img: require('@/assets/image/newcarepeopleDetail.png'),
    btnText: '立即咨询',
    address:'4号楼3楼303室（综合保健门诊）',
    time: '9:00 ~ 17:00',
    tel:'0571-56006612'
};

export const medicalAppointment = {  //体检预约 
    title:'体检预约',
    img: require('@/assets/image/medicalBg.png'),
    tabName:['预约说明','联系医院'],
    tab1:'我们为杭州高级人才提供保健联系人和省级、市级医院联系人的服务。若您有医疗保健、就诊就医方面的问题，欢迎使用电话联系。',
    tab2:
    [
      {
        img:require('../image/newcareIcon.png'),  
        header:'杭州第一人民医院',
        tip:'4号楼3楼303室（综合保健门诊）',
        telIcon:require('@/assets/image/tel.png'),
      },
      {
        img:require('../image/newcareIcon.png'),  
        header:'邵逸夫医院',
        tip:'杭州市江干区庆春东路3号',
        telIcon:require('@/assets/image/tel.png'),
      },
    ]
};

export const venuevBooking = {  //场地预约 
    title:'场地预约',
    img: require('@/assets/image/medicalBg.png'),
    tabName:['预约说明','场地列表'],
    tab1:'我们为杭州高级人才提供保健联系人和省级、市级医院联系人的服务。若您有医疗保健、就诊就医方面的问题，欢迎使用电话联系。',
    tab2:
    [
      {
        header:'区影剧院',
        telIcon:require('@/assets/image/tel.png'),
      },
      {
        header:'富春山馆',
        telIcon:require('@/assets/image/tel.png'),
      },
      {
        header:'大学生创业“梦工厂”',
        telIcon:require('@/assets/image/tel.png'),
      },
    ]
};

export const Transportation = { 
    title:'交通出行',
    text:'A-D类人才可获得区政府大院出入资格。通过技术对接大院闸机系统，实现扫码进闸，人才刷码即可入院。',
    img: require('@/assets/image/trasitonBg.png'),
    btnText: '去使用',
    itemList: [   
        {
           type: ['A','B','C'],   
           icon:  require('@/assets/image/free.png'), 
           header: '全年免费',
           tip:'无需花钱，享受人才出行福利'
        },
        {
           type: ['A','B','C'],   
           icon:  require('@/assets/image/codeIcon.png'), 
           header: '无需购票',
           tip:'手机刷码即可便携乘公交'
        },
        {
           type: ['D','E'],   
           icon:  require('@/assets/image/discount.png'), 
           header: '每月发放定额优惠',
           tip:'30元/月，月底清零，记得使用'
       },
       {
           type: ['D','E'],   
           icon:  require('@/assets/image/codeIcon.png'), 
           header: '无需购票',
           tip:'手机刷码即可便携乘公交'
       },
       {
           type: ['F'],   
           icon:  require('@/assets/image/discount.png'), 
           header: '每月发放定额优惠',
           tip:'20元/月，月底清零，记得使用'
       },
       {
           type: ['F'],   
           icon:  require('@/assets/image/codeIcon.png'),  
           header: '无需购票',
           tip:'手机刷码即可便携乘公交'
       },
       ]
};