<?php
  /* Create connection with MySQL connection */
  $conn = mysqli_connect("localhost", "root", "", "db_pizzahut");

  /* Check if connection throws an error */
  if(mysqli_connect_errno()) {
    echo "Failed attempt at connecting with database" . mysqli_connect_error();
  }
?>