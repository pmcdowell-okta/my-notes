## Poor mans JWT decode.. (Not Verify)

This is the code I use to decode a JWT from 64encoded to object in PHP

```
<?php

$token="eyJraWQiOiJkZFBVRER5VXBIMk41d0dTWHZucVFaeS1PbVRGU1Z1NVBZYW5zanBzb0FzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MjM1NDA4MDIsImV4cCI6MTUyMzU0NDQwMiwianRpIjoiSUQuamZWUXhUM1NnZ3MxSy1RZ1hOelpySzZrYk11LWNkcVJqVFN5X3NlVk1HayIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUyMzU0MDc5MywiYXRfaGFzaCI6IllCanFoYjhfXzFGcDNLVWh5eEg0OFEifQ.IbWJRtrDWYlXqHwIQPqh7US2wyivk5s7d7jH0B02bFEv2wTr4Oe85iT3lE1jTNyjMsgO23eLlLcJC-7FyMZppIVf7huQ-xIhy3K4jEU1qMg1EkbkvCCxTGiydkIpR5-Z9AM65m0JqsOaswW_8arc5XSfrLlQMpfIork7uLwPQtBevU3OwOGoRcLBJTz3krRs3edlrFRhYWUD5qcE7ijnVAvbIK4wuoBcsOlY3F2ue7YyYb5Lpw8KYPW9v5Fy5fuGxwwkzt1j5E6O626PZpXkgUY0dSn1rM0eA7V07i83PyNL-sjjl31BM_U4gCo8ADxT7gHSZqKYGqMO9hc0d4reYg";

$tokenSegments = explode(".", $token);

echo "<b>Middle Segment !</b>";

echo $tokenSegments[1]; echo "<br/><br/>";

$tokenDecoded= base64_decode($tokenSegments[1]);

echo "<b>JSON !</b><br/><br/>";
echo $tokenDecoded;

$tokenObject = json_decode($tokenDecoded);

echo "<br/><br/><b>Object !</b><br/><br/>";
echo $tokenObject->preferred_username;

?>

```
