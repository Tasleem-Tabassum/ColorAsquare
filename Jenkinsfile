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
