const mongooes = require("mongoose");

const schema = mongooes.Schema;

const services = new schema({
    screenname:{type:String, require:true},
    topLine:{type:String, require:true},
    Display_No:{type:Number, require:true},
    lightBg:{type:Boolean, require:false},
    lightText:{type:Boolean, require:false},
    lightTextDesc:{type:Boolean, require:false},
    user_display:{type:String, require:true},
    alt:{type:String, require:true},
    label:{type:String, require:true},
    title:{type:String, require:true},
    imgStart:{type:String, require:false},
    img:{type:String, require:false},
    imgcount:{type:Number, require:true},
    imgurl:{type:String, require:false},
    titleimage:{type:String, require:true},
    alt1:{type:String, require:false},
    autoplay:{type:String, require:false},
    buttonLabel:{type:String, require:false},
    url:{type:String, require:false},
    types:{type:Array, require:false}
});

module.exports = mongooes.model('Service',services);
// {
//     // screen: 'SubScreen',
//     screenname:'BridalMakeup',
//     topLine:'BridalMakeup',
    
//     Display_No:1,
//     lightBg:  true,
//   lightText: false,
//   lightTextDesc: false,
//   user_display:'1',
//   alt: 'Bridal Makeup',   
//   label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',
//   title:'Be Special on you Big-Day!',
//   imgStart: 'end',
//   img: 'images/svg-1.svg',
//   imgcount:12,
//   imgurl:`/BridalMakeup/`,
//   titleimage:`/BridalMakeup/8.jpg`,
//   alt1: 'Bridal Makeup',
//   autoplay:"true",
//   buttonLabel:"View More",
//   url:"BridalMakeup",
//   // types:["Bridal Makeup","Puberty Makeup","Baby Shower"],
//   types:[{topLine:"Bridal Makeup",subscreenname:"BridalMakeup",Sub_Display_No:1,Sub_TitleImage:`/BridalMakeup/2.jpg`,subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
//   // {topLine:"Puberty Makeup",titleimage:`/MainSlide/7.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
//   {topLine:"Puberty Makeup",subscreenname:"PubertyMakeup",Sub_Display_No:2,Sub_TitleImage:`/BridalMakeup/8.jpg`,subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
//   {topLine:"Baby Shower",subscreenname:"BabyShower",Sub_Display_No:3,Sub_TitleImage:`/BridalMakeup/9.jpg`,subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',}]
//   },