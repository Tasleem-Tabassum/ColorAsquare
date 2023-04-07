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
                //mail bcc: '', body: 'Sample email notification on success or failure', cc: '', from: 'taslu5678@gmail.com', replyTo: '', subject: 'Jenkins Node CI pipeline notification', to: 'tasleemtmohammad1@gmail.com'
            }
        }
    }
    post {
        always{
            echo 'Post stage'
        }
        success{
            mail bcc: '', body: "<b>Project Status - Your project pipeline ran successfully.</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: 'taslu5678@gmail.com', mimeType: 'text/html', replyTo: '', subject: "Success: Project Successfully builded", to: "tasleemtmohammad1@gmail.com";
        }
        failure{
            mail bcc: '', body: "<b>Project Status - Your project pipeline has failed.</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: 'taslu5678@gmail.com', mimeType: 'text/html', replyTo: '', subject: "ERROR: Project pipeline failed", to: "tasleemtmohammad1@gmail.com";
        }
    }
}
