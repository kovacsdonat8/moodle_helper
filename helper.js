async function fetchFromOpenAI(prompt) {
  const API_KEY = "YOUR_API_KEY";
  const MODEL_NAME = "gpt-4"; // Change to 'gpt-3.5-turbo' if needed

  const url = "https://api.openai.com/v1/chat/completions";

  const messages = [
    { role: "system", content: "You are an AI assistant helping with Moodle quiz questions." },
    { role: "user", content: prompt }
  ];

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: messages,
        max_tokens: 1000, // Adjust token limit as needed
        temperature: 0.7, // Adjust for creativity
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching from OpenAI API: ${response.statusText}`);
    }

    const responseJson = await response.json();
    const generatedText = responseJson.choices[0].message.content;
    return generatedText;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Iterate through the quiz questions and fetch responses using OpenAI
$(".formulation").each(async function (index, formulation) {
  const question = $(".qtext", formulation).text();
  const answer = $(".answer", formulation).text();
  const context = `${question}\n${answer}`;

  // Increment index by 1 to start from 1 instead of 0
  const adjustedIndex = index + 1;

  // Fetch the response from OpenAI
  const openAIAnswer = await fetchFromOpenAI(context);
  console.log(`${adjustedIndex}: ${openAIAnswer}`);
});
