pipeline {
    agent any
    tools {
        nodejs "node"
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat './jenkins/scripts/test.sh'
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm run build'
                bat 'npm start'
            }
        }
    }
}
