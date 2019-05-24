
Param(

  [Parameter(ParameterSetName='case')]

  [string]$CaseNumber

)

$CaseNumber=$CaseNumber.ToUpper()
$CaseType,$CaseNo,$CaseYear=$CaseNumber.split("/")
$nip="123456789"

$xml_case="case_" + $CaseType + "_" + $CaseNo + "_" + $CaseYear 
$xml_case_file_name="case_data.xml"

$d = Get-Date

$xml_path="C:\Temp\"


$xml_case=$nip + "_" + $xml_case
$case_path = $xml_path + "\"+$xml_case

If(!(test-path $case_path)) {new-item -path $case_path -itemtype directory}

$xml_case_full_name = $case_path + "\$xml_case_file_name"

Write-host "tworzę  $xml_full_name"

Set-Content -Encoding UTF8 "$xml_case_full_name" "<case_data>`n`n" 
Add-Content -Encoding UTF8 "$xml_case_full_name" $d.ToUniversalTime()
Add-Content -Encoding UTF8 "$xml_case_full_name" "</case_data>"

Write-Host "koniec pracy"