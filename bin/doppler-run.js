const { spawn } = require('child_process')
spawn('doppler', ['run', '--', 'npm', 'start'])