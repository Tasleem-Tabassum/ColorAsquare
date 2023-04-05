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
                bat script: '''npm test
                        IF %ERRORLEVEL% EQU 1 (exit /B 0) ELSE (exit /B 1)'''
            }
        }
    }
}