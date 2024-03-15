
export const youtubeoptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '34cfee01d7msh7e579f9f6df3bdbp1e4ac4jsn3505035d58a1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const FeatchData = async (url, options) =>{
    const data = await fetch(url, options);
    const jsonData = await data.json();
    return jsonData;
}