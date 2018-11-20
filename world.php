<?php
$host = getenv('IP');

$username = getenv('C9_USER');

$password = '';

$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$country= $_GET['country'];

$allcountries=$_GET['all'];

if ($allcountries==true)
{
    $stmt = $conn->query("SELECT * FROM countries");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
else 
{
    $stmt = $conn->query("SELECT * FROM countries WHERE name Like '%$country%';");
	//print $stmt;
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
echo '<ul>';

foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] .$allcountries. '</li>';
}
echo '</ul>';