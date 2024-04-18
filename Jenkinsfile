pipeline {
  agent any 
  stages {
    stage('E2E Tests') {
      steps {
        sh 'docker run -v $PWD -w /e2e cypress/included:10.0.0'
      }
    }
  }
}


/*pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/included:12.12.0'
    }
  }

  stages {
    stage('E2E Tests') {
      steps {
        sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
      }
    }
  }
}*/