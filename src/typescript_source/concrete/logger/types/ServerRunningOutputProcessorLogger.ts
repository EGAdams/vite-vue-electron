import { MonitoredObject } from "monitored-object-ts";
import IMonitoredObjectConfig from "../../../abstract/IMonitoredObjectConfig";

/**
 *  @class ServerRunningOutputProcessorLogger
 * 
 *  @description
 *  a logger for the ServerRunningOutputProcessor.
 * 
 */
 export default class ServerRunningOutputProcessorLogger extends MonitoredObject {

	constructor( config :IMonitoredObjectConfig ) { super( config ); }
}
