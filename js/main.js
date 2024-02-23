const apiKey = "AIzaSyA1odmkSTDP1wqMuNxS1UGM9F_qtY2WluY"
const projectId = "hip-service-392409";

const input = document.getElementById("input");
const button = document.getElementById("button");
const results = document.getElementById("results");

button.addEventListener("click", async () => {
  const keyword = input.value;

  const client = new google.ads.googleads.v11.services.KeywordPlanService({
    apiKey,
    projectId,
  });

  const response = await client.generateKeywordIdeas({
    keyword: {
      text: keyword,
    },
  });

  const keywords = response.keywordIdeas.map((keyword) => keyword.text);

  results.innerHTML = keywords.join("<br />");
});
