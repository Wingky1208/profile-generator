

// Create Team Profile
const createProfile = team => {

    // Create Manager Profile
    const createManager = manager => {
        return `
      <div class="card employee-card manager-card mx-5"  style="width: 18rem;">
          <div class="card-header text-center">
              <h2 class="card-title">${manager.getName()}</h2>
              <h4 class="card-title">Title: ${manager.getRole()}</h4>
          </div>
          <div class="card-body bg-primary">
              <ul class="list-group text-dark">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
      `;

    };


    // Create Engineer Profile
    const createEngineer = engineer => {
        return `
      <div class="card employee-card engineer-card mx-5"  style="width: 18rem;">
          <div class="card-header text-center">
              <h2 class="card-title">${engineer.getName()}</h2>
              <h4 class="card-title">Title: ${engineer.getRole()}</h4>
          </div>
          <div class="card-body bg-primary">
              <ul class="list-group text-dark">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
              </ul>
          </div>
      </div>
      `;
    };

    // Create Intern Profile
    const createIntern = intern => {
        return `
      <div class="card employee-card intern-card mx-5"  style="width: 18rem;">
          <div class="card-header text-center">
              <h2 class="card-title">${intern.getName()}</h2>
              <h4 class="card-title">Title: ${intern.getRole()}</h4>
          </div>
          <div class="card-body bg-primary">
              <ul class="list-group ">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
          </div>
      </div>
      `;
    };

    const finalHtml = []

    finalHtml.push(team.filter(member => member.getRole() === 'Manager').map(manager => createManager(manager)));
    finalHtml.push(team.filter(member => member.getRole() === 'Intern').map(intern => createIntern(intern)));
    finalHtml.push(team.filter(member => member.getRole() === 'Engineer').map(engineer => createEngineer(engineer)));

    return finalHtml.join('')

}



// Export function to generate HTML page
module.exports = team => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Team Profile Generator</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div class="jumbotron-fluid bg-primary">
          
                  <h1 class="text-center">The Dream Team</h1>  
      </div>
      <div class="container">
          <div class="row d-flex justify-content-center">
             
                  ${createProfile(team)}
              
          </div>
      </div>
  </body>
  </html>
  `;
};