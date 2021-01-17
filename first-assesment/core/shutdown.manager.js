const { CONNECTION_CLOSING_TIME, WAIT_TIME_BEFORE_FORCE_SHUTDOWN } = require('./config');
function autoManage(server) {
        let connections = [];

        const shutDown = () => {
                console.log(`Trying a graceful shutdown`);
                server.close(() => {
                        console.log(`Closed out remaining connections, bye bye`);
                        process.exit(0);
                });
                connections.forEach(conn => conn.end());

                setTimeout(() => {
                        connections.forEach(conn => conn.destroy());
                }, CONNECTION_CLOSING_TIME);

                setTimeout(() => {
                        console.log(`Could not close all connections, forcefully shutting down`);
                        process.exit(1);
                }, WAIT_TIME_BEFORE_FORCE_SHUTDOWN);
        };

        process.on('SIGINT', shutDown);
        process.on('SIGTERM', shutDown);

        server.on('connection', (connection) => {
                connections.push(connection);
                console.log(`${connections.length} connections are open right now`);
                connection.on('close', () => {
                        connections = connections.filter(conn => conn !== connection);
                })
        });
}

module.exports = {
        autoManage
};