
const homeCarousel=require('./jsonforHome/homecarousel.json');
const navBarItems=require('./jsonforHome/navItems.json');
const catNavData=require('./jsonforHome/CatNavData.json');

module.exports=
{
carousel:(req , res)=>{
res.status(200).json(homeCarousel)
},

navbar:(req , res)=>{
res.status(200).json(navBarItems)

},

catNavData:(req, res)=>{
res.status(200).json(catNavData)}

}
