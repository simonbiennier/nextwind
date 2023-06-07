$files = @("src/constant/meta.ts", "package.json")
$json = Get-Content "package.json" -Raw | ConvertFrom-Json
$from = $json.name
$to = $args[0]

foreach ($f in $files) {
  $fileContent = Get-Content $f -Raw
  $updatedContent = $fileContent -replace $from, $to
  $updatedContent | Set-Content $f
}

exit 0
