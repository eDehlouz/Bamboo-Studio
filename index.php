<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <title>Bamboo Studio</title>

    <!-- BOOTSTRAP CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- CUSTOM STYLESHEET -->
    <link rel="stylesheet" href="css/styles.css">
    <!-- FONT AWESOME -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500&display=swap" rel="stylesheet">
  </head>
  <body>

    <nav class=" navbar navbar-expand-lg ">
      <div class="container">
      <a class="navbar-brand" href="#">
        <img src="img/branding/logo-blue.png" height="30" alt="">
      </a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item ">
        <a class="nav-link" href="index.html">home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="project.html">projects</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="studio.html">studio</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="contact.html">contact<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div class="title-content contact">
  <img src="img/branding/line-blue-crop.png" class="lines-paranaque"alt="">
  <div class=" container">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="paranaque-title"><b>get in touch</b></h1>
        <h3 class="paragraph-text about-intro">we at bamboo would love to hear from you about possible future collaborations</h3>
      </div>
      <div class="col-lg-6">
        <div class="contact-form">
          <form action="php/contact.php" method="post">
            <input type="text" id="name" placeholder="Name">
            <input type="text" id="email" placeholder="Email Address">
            <input type="text" id="subject" placeholder="Subject">
            <textarea id="message" placeholder="Message" rows="8" cols="80"></textarea>
            <button type="submit" class="btn" name="submit">SEND</button>
          </form>
        </div>

      </div>
    </div>
  </div>
  </div>




    <!-- BOOTSTRAP minified JavaScript -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <!-- Bootstrap core JavaScript -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
  </body>

</html>
