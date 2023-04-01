export const formatURL = (type, format, paras, sentences, lorem) =>{
    let URL = 'https://baconipsum.com/api/';
    URL += `?type=${type}`;

    if(!!paras && !sentences)
        URL += `&paras=${paras}`;
    if(!!sentences)
        URL += `&sentences=${sentences}`;
    if(!!lorem)
        URL += `&start-with-lorem=${lorem}`;
    if(!!format)
        URL += `&format=${format}`;

    return URL;
};