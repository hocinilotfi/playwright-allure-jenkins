pipeline {
    agent none
    stages {
        stage('build and install') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.51.0-noble'
                }
            }
            
                steps {
                        script{
                            sh 'npm ci'
                            sh 'npx playwright test --reporter=line,allure-playwright'
                                stash name: 'allure-results', includes: 'allure-results/*'
                        }
                }
            

        }

    // stage('Install Allure Commandline') {
    //     steps {
    //         sh 'npm install --prefix ./node_modules allure-commandline --save-dev'
    //     }
    // }
    }
    post {
        always {
            unstash 'allure-results' //extract results
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
