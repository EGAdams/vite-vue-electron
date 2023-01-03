
/** require windows 10 linux subsystem server and start it */
const LinuxSubsystemServer = require( '../../out/typescript_source/concrete/LinuxSubsystemServer' );
linuxServer = new LinuxSubsystemServer.default();
linuxServer.start();
