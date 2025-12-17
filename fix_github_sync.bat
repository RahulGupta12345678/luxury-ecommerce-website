@echo off
echo Pulling latest changes from GitHub...
git pull origin main --rebase
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ---------------------------------------------------------------------
    echo Error pulling changes. This might be due to conflicts or login requirements.
    echo If conflicts occurred, please resolve them in VS Code.
    echo ---------------------------------------------------------------------
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Pushing your changes...
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ---------------------------------------------------------------------
    echo Error pushing changes. Please check your internet or credentials.
    echo ---------------------------------------------------------------------
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Successfully synced with GitHub!
pause
