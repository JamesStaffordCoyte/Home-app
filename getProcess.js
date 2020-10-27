const spawn = require("child_process").spawn;

const getProcess = () => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python',["gui.py"])
        let processes;
        pythonProcess.stdout.on('data', (data) => {
            processes = JSON.parse(data.toString());
        });
        pythonProcess.on('close', function(code) {
            resolve(processes);
        })
        pythonProcess.on('exit', function(code) {
            resolve(processes);
        })
        pythonProcess.on('error', function(err) {reject(err)})
    })
    
}
// getProcess()
module.exports = {
    getProcess
}