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
            // allure([
            //     includeProperties: false, jdk: '', results: [[path: './allure-results']]
            // ])
            archiveArtifacts artifacts: 'allure-results/*.*'
        }

    }
}