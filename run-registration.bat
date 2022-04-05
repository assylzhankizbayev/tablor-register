call cd C:\tablo-register

#call start chrome http://localhost:3030/

call start chrome --start-fullscreen --app=http://localhost:3030/

if not exist "node_modules" call npm install

call npm start
