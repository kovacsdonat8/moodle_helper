# moodle_helper

## `helper.js`
### Overview
The `helper.js` script is designed to automate the process of generating responses for Moodle quiz questions using OpenAI's API. This tool can be especially useful for those students who have not prepared for their Moodle test, do not know the answers, or are unsure of their own answers.

### Features
- **OpenAI Integration:** Utilizes OpenAI's GPT-4 model (or GPT-3.5-turbo) to generate responses based on provided prompts.
- **Automated Question Processing:** Iterates through Moodle quiz questions and fetches AI-generated answers.
- **Customizable Settings:** Allows adjustment of token limits and creativity levels for the AI responses.

### Usage
1. **API Key Configuration:** Replace `"YOUR_API_KEY"` in the `fetchFromOpenAI` function with your actual OpenAI API key.
2. **Model Selection:** Change the `MODEL_NAME` variable to switch between different OpenAI models (`gpt-4` or `gpt-3.5-turbo`).
3. **Include in Moodle:** Integrate the script with your Moodle platform by ensuring it runs on pages where quiz questions are formulated. Open your browser console and copy the script.
4. **Run the Script:** The script will automatically iterate through quiz questions, send them to OpenAI, and log the responses to the console.

### License
This project is licensed under the MIT License.
