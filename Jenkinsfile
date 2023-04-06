pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        CI = "true"
        AWS_DEFAULT_REGION = 'us-east-1'
        CREDS = credentials('demoUser-aws-creds')
    }
    stages {
        stage('Build') {
            steps {
                sh '''aws --version'''
            }
        }
    }
}








// pipeline {
//     agent any
//     tools {
//         nodejs "node"
//         }
//     environment {
//             CI = 'true'
//         }
//     stages {
//         stage('Build') {
//             steps {
//                 bat 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 bat '.\\jenkins\\scripts\\test.sh'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 bat '.\\jenkins\\scripts\\deploy.sh'
//                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
//                 bat '.\\jenkins\\scripts\\kill.sh'
//             }
//         }
//     }
// }
