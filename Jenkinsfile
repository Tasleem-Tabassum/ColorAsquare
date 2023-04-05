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
                bat '.\\jenkins\\scripts\\test.sh'
            }
        }
        stage('Deploy') {
            steps {
                bat '.\\jenkins\\scripts\\deploy.sh'
                // input message: 'Finished using the web site? (Click "Proceed" to continue)'
                // bat '.\\jenkins\\scripts\\kill.sh'
            }
        }
    }
}
