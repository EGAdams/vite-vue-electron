/** @class ServerLedData */
import IMonitorLedData from "../abstract/IMonitorLedData";
class ServerLedData implements IMonitorLedData {
    constructor() { console.log( "constructing ServerLedData..." ); } // hush warning.

    ledText = "checking server status...";
    classObject = {
        background_color: "yellow",
        text_align: "left",
        margin_top: "4px" };
}

export default ServerLedData;
