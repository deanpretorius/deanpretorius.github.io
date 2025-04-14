@echo off
echo Converting Word to Markdown...
pandoc -f docx -t markdown "%~1" -o "_posts\%~n1.md"
echo Done! File saved to _posts\%~n1.md
pause 