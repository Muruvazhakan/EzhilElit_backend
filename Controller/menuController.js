
const MenuItem =[
    {
        title:'Home',
        url:'/',
        cName:'nav-link',
        display:'menu',
        user_display:1
    },
    {
        title:'Makeup',
        url:'BridalMakeup',
        cName:'nav-link',
        display:'menu',
        user_display:1
    },
    
    {
        title:'Hairstyle',
        url:'Hairstyle',
        cName:'nav-link',
        display:'side',
        user_display:1
    },
    {
        title:'Saree Drapping',
        url:'SareeDrapping',
        cName:'nav-link',
        display:'side',
        user_display:1
    },
    {
      title:'Ezhil Accessories',
      url:'EzhilAccessories',
      cName:'nav-link',
      display:'menu',
      user_display:1
    },
  ];

  const getMenuData = (req,res,next) =>{
   
      res.status(200).json(MenuItem);
  
  }

  const getUserData = (req,res,next) =>{
   
    res.status(200).json("getUserData");

}

module.exports.getMenuData = getMenuData;
module.exports.getUserData = getUserData;