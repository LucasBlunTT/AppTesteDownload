@echo off
:: AQUI ABAIXO ESCOLHA A PORTA QUE IRÁ RODAR O APP
set PORTA=8081
echo Iniciando servidor na porta %PORTA%

:: Adiciona nodejs portátil ao PATH temporariamente
set PATH=%CD%\nodejs;%PATH%

:: Inicia o servidor
node server.js %PORTA%

pause
