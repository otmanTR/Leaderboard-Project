const takingId = async () => {
  const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'game of Onepiece',
    }),
  };
  const takeId = await fetch(apiUrl, action);
  const result = await takeId.json();
  const answer = await result.result;
  console.log(answer)
  return answer;
  return apiUrl;
};

export default takingId;