#  Chat Assistant

## Summary

- [Introduction](#introduction)
- [Installation](#installation)
- [Features](#features)
- [API Key Access](#api-key-access)
- [Contributions](#contributions)
- [Next steps and future improvements](#Next-steps-and-future-improvements)


## Introduction

Hi 👋 !

This project was born out of my desire to explore the functionalities of the OpenAI API. Inspired by the simplicity and efficiency of ChatGPT, I conceived this project in the form of a chatbot.
 
Simply ask a question, and you'll receive a prompt, pertinent reply.

## Installation

1. Clone the project on your local machine:

   ```bash
   git clone git@github.com:Zengry10/chatbot-openai.git

2. Once the project has been cloned, install the necessary dependencies according to your preferences:

   ```bash
   npm install 
   yarn
   pnpm install
   ```
## Features

- Integration with gpt-3.5-turbo-1106. 

I chose this specific version because of the possibility, under certain conditions, of running queries free of charge with a maximum usage of $5. However, it's important to note that this version is not the most powerful and is not recommended for large-scale projects with high performance expectations. If your project requires faster response and optimal performance, it would be wise to explore other versions of the OpenAI API.

## API Key Access

If you create an account less than 3 months old, you will be able to get an api user key. This key offers a $5 allocation for queries, and it's important to note that the cost of queries varies according to the length of your prompts and the size of API responses, charged at $0.0010 per 1,000 tokens. If you don't receive a response, this could be due to exhaustion of the available token allocation.

you will need to add the following environment variables to your .env file

`REACT_APP_API_TOKEN`

## Contribution

I strongly encourage collaboration on this project to make it even better. If you would like to contribute, follow these simple steps:

1. Fork the Project
2. Create your Feature Branch : ```git checkout -b feature/amazing_feature```
3. Commit your Changes : ```git commit -m 'Add some amazing feature'```
4. Push to the Branch : ```git push origin feature/amazing_feature```
5. Open a Pull Request


## Next steps and future improvements :
This project is intended to evolve over time. At present, I'm limiting myself to simple requests to the API to obtain answers. However, in the future, I'd like to implement more advanced features, enabling a real conversation based on each response, and many other exciting improvements!

If you have any ideas for improving the project or any other suggestions, don't hesitate to open an issue for discussion! 🚀



👋