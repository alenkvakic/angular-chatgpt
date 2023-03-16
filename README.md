# Angular ChatGPT
Angular ChatGPT is a simple and easy-to-use starting point for Angular developers who want to interact with the OpenAI ChatGPT API. This app provides a convenient way to experiment with the API without having to implement it from scratch.

![Angular ChatGPT](https://user-images.githubusercontent.com/20193574/225767028-f275589a-d222-4873-a64b-a96af84cf69e.jpg)

## Motivation
The main purpose of creating this app is to provide a foundation for Angular developers to build upon when working with the ChatGPT API. Implementing an API can be time-consuming, and there are not many repositories available that suit this specific use case. With this app, developers can begin testing and integrating the API into their projects right away.

## Response Behavior
The ChatGPT API provides the option to set stream=true for streaming responses, where the text appears word by word or character by character as the AI generates it. However, in this app, the stream option is not enabled by default. The reason behind this design choice is to provide a more seamless user experience, where the API response only shows up in the chat when it's complete. This ensures that the conversation flows smoothly without any interruptions caused by partial responses.

## Getting Started
To get started with Angular ChatGPT, simply clone this repository and follow the instructions provided in the installation section.

To set up your API key, create a file named 'environment.ts' in the 'src/environments' folder.
The file should have the following content:
 
 ```
export const environment = {
 production: false,
 hatGptApiKey: 'YOUR_API_KEY_HERE',
};
```
Get your API Key from https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key

## Installation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Feel free to use this app as a starting point for your own projects, and customize it according to your requirements. Happy coding!
