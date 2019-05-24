
$xml_case_file_name="case_list.xml"

$d = Get-Date

$xml_path="C:\Temp\"

$case_path = $xml_path + "\"+$xml_case

If(!(test-path $case_path)) {new-item -path $case_path -itemtype directory}

$xml_case_full_name = $case_path + "\$xml_case_file_name"

Write-host "tworzę  $xml_full_name"

Set-Content -Encoding UTF8 "$xml_case_full_name" "<case_list>`n`n" 
Add-Content -Encoding UTF8 "$xml_case_full_name" $d.ToUniversalTime()
Add-Content -Encoding UTF8 "$xml_case_full_name" "</case_list>"

Write-Host "koniec pracy"