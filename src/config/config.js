module.exports = {
    mongoURI: "mongodb://localhost:27017/notification_system",
    kafkaBroker: "localhost:9092",
    elasticsearchNode: "http://localhost:9200",
    emailService: {
        service: 'gmail',
        auth: {
          user: 'sarveshmishra05061999@gmail.com',
          pass: 'oktb qdmt orhe et'
        }
    },
    smsApi: "https://mock-sms-service.com/send",
    pushApi: "https://mock-push-service.com/send",
};
