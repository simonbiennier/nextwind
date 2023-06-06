$files = @("src/constant/meta.ts", "package.json")
$json = Get-Content "package.json" -Raw | ConvertFrom-Json
$from = $json.name
echo $from
$to = $args[0]
echo $to

foreach ($f in $files) {
  $fileContent = Get-Content $f -Raw
  $updatedContent = $fileContent -replace $from, $to
  $updatedContent | Set-Content $f
}

exit 0
