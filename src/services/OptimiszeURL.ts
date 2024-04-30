

function OptimizeURL(url:string){
    if(!url){
      return '';    
    }
    const indexOfMedida = url.indexOf("media/") + 'media/'.length;
    const slicedUrl =  url.slice(0,indexOfMedida) + 'crop/600/400/'+ url.slice(indexOfMedida)
    return slicedUrl
};

export default OptimizeURL;
