pipeline {
    agent any
    environment {
        CI = "true"
        AWS_DEFAULT_REGION = 'us-east-1'
        CREDS = credentials('demoUser-aws-creds')
    }
    tools {
        nodejs "node"
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat '.\\jenkins\\scripts\\test.sh'
            }
        }
        stage('Deploy') {
            steps {
                bat 'aws s3 sync ./build s3://demoforjenkins'
                mail bcc: '', body: 'Sample email on success or failure', cc: '', from: 'taslu5678@gmail.com', replyTo: '', subject: 'Jenkins Node CI pipeline notification', to: 'tasleemtmohammad1@gmail.com'
            }
        }
    }
}
