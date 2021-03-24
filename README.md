# Rationale

This app uses Node.js with the Express framework. This is an API that identifies whether a given incoming HTTP request is valid or not or whether it is malicious.  If the request is malicious then that is handled in the response of the request. When provided a payload with a specified JSON structure utilizing the HTTP POST method to allow the client to send a request it returns the correct response.  As cyber attackers often send in crafted HTTP requests to launch attacks, following my interest in secure coding the purpose of this project was to be able to detect whether the incoming HTTP request is malicious or not using a defined set of rules aka json schema.  


# Advice for Reviewers & Testing Notes

- Clone/download this repo 
- Run the following locally: `npm run dev` OR `nodemon`
- To test expected input/output use postman or curl

# Screenshots

<img width="879" alt="Screen Shot 2021-03-08 at 3 50 50 pm" src="https://user-images.githubusercontent.com/37126943/110278908-4802ee00-802c-11eb-9080-a30b27d6a4be.png">

<img width="478" alt="Screen Shot 2021-03-08 at 3 51 44 pm" src="https://user-images.githubusercontent.com/37126943/110278940-56510a00-802c-11eb-9179-1658ac5565d1.png">

<img width="398" alt="Screen Shot 2021-03-08 at 3 52 04 pm" src="https://user-images.githubusercontent.com/37126943/110278968-636df900-802c-11eb-9ebb-6031573928de.png">

# dependencies 

- body-parser
- nodemon
- jsonschema
- dotenv
