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
                try{
                    bat 'npm test'
                }
                catch(err){
                    echo err
                }
            }
        }
    }
}
