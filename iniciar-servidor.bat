@echo off
:: Configura a porta do servidor
set PORTA=8081
echo Iniciando servidor na porta %PORTA%

:: Inicia o servidor chamando diretamente o node.exe
"%CD%\nodejs\node.exe" server.js %PORTA%

pause
