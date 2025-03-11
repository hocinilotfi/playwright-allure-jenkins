 pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }
    stages {
   

        // stage('Install Allure Commandline') {
        //     steps {
        //         sh 'npm install --prefix ./node_modules allure-commandline --save-dev'
        //     }
        // }

        stage('Run Playwright install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=line,allure-playwright'
            }
        }

        
    }
    post{
        always {
            // unstash 'allure-results' //extract results
            script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
            }
        }

    }
}