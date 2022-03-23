/*
 *  interface IMonitoredObjectRow
 */
interface IMonitoredObjectRow {
  id: number;
  command_name: string;
  command_args: string;
  command_stringified: string;
}

export default IMonitoredObjectRow;
