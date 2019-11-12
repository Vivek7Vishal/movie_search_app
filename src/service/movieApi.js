const baseUrl = 'http://www.omdbapi.com/?';
const apiKey = '6c3a2d45';
const defaultPageNumber = '1';
const getMovieNameByTitle = async (title, pageNumber) => {
  let response;
  let page =  pageNumber ? pageNumber : defaultPageNumber;
  try {
    let url = baseUrl + 'apiKey=' + apiKey + '&s=' + title +'&page='+ page;
    let result = await fetch(url);
    response = await result.json();
  } catch (e) {
    window.console.log(e)
  }
  return response;
}

export default getMovieNameByTitle;
