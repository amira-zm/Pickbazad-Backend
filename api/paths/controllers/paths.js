'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pages:async function  pages(ctx){
    const paths = await strapi.query('paths').find({ _limit: '-1' })
    const url = paths.map(item => item["url"]);
  
    let unique=[];
    for(let i=0;i<url.length;i++){
      let nb=0;
      for(let j=0;j<url.length;j++){
        if(url[i]==url[j])
        nb++;
      }
      let prop = {
        'url': url[i],
        'nb':nb
        
      }    
    if(prop.url != '/close'&& prop.url!='/checkout')
    {const x = unique.push(prop)}}
    var resArr = [];
    unique.filter(function(item){
      var i = resArr.findIndex(x => (x.url == item.url  ));
      if(i <= -1){
            resArr.push(item);
      }
    });
    return (resArr);
       
   },

    visitors:async function  visitors(ctx){
        const paths = await strapi.query('paths').find({ _limit: '-1' })
        const userAgent = paths.map(item => item["userAgent"]);
        const ipAddress = paths.map(item => item["ipAddress"]);
        const updated_at =paths.map(item => item["updated_at"]);
        let unique=[];
        for(let i=0;i<ipAddress.length;i++){let prop = {
            'ipAddress': ipAddress[i],
            'userAgent': userAgent[i],
            'date':updated_at[i]   
        }
        const x = unique.push(prop)}
        var resArr = [];
        unique.filter(function(item){
          var i = resArr.findIndex(x => (x.ipAddress == item.ipAddress && x.userAgent== item.userAgent ));
          if(i <= -1){
                resArr.push(item);
          }
        });
        return (resArr);
           
       },

    dis:async function  dis(ctx){
        const relatedActivities = await strapi.query('paths').find({ _limit: '-1' })
        const userAgent = relatedActivities.map(item => item["userAgent"]);
        const ipAddress = relatedActivities.map(item => item["ipAddress"]);
        let unique=[];
        for(let i=0;i<ipAddress.length;i++){let prop = {
            'ipAddress': ipAddress[i],
            'userAgent': userAgent[i],
            
        }
        const x = unique.push(prop)}
        var resArr = [];
        unique.filter(function(item){
          var i = resArr.findIndex(x => (x.ipAddress == item.ipAddress && x.userAgent== item.userAgent ));
          if(i <= -1){
                resArr.push(item);
          }
        });
        return (resArr);
           
       },
    
};

