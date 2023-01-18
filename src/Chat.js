// Import necessary libraries
const axios = require('axios');

// Define the ChatGPT class
class ChatGPT {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.chatgptEndpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
  }

  async sendMessage(prompt, temperature = 0.5, maxTokens = 100) {
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(this.chatgptEndpoint, {
        prompt,
        temperature,
        max_tokens: maxTokens
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        }
      });

      // Return the response message
      return response.data.choices[0].text;
    } catch (error) {
      // Uncle Bob says: "Don't let the error bubble up, handle it here and be specific"
      if (error.response) {
        throw new Error(`ChatGPT API error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        throw new Error(`ChatGPT API error: ${error.message}`);
      }
    }
  }
}

// Example usage:
// const chatgpt = new ChatGPT("YOUR_API_KEY_HERE");
// chatgpt.sendMessage("Hello, I am a new software engineer.")
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.log("Oh no, something went wrong!", error.message);
//   });
