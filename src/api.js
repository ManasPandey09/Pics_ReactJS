import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Bmyz5lyMntRaxuzAlbKaD_MjXvYFQK6ELdJbSdii4lk',
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
