const got = require('got');
const handleReceivedResponse = (response) => {
   const responseObject =JSON.parse(response.body);
  console.log(responseObject);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleReceivedResponse);


