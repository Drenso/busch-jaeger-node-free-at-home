import { FreeAtHomeApi, DatapointIds, ParameterIds } from './freeAtHomeApi';
import { FreeAtHomeChannelInterface, FreeAtHomeRawDelegateInterface } from './freeAtHomeDeviceInterface';
import { DeviceType } from '.';

export class FreeAtHomeRawChannel implements FreeAtHomeChannelInterface {
    deviceType: DeviceType;
    serialNumber: string;
    name: string;
    channelNumber: number;
    freeAtHome: FreeAtHomeApi;
    delegate: FreeAtHomeRawDelegateInterface;

    constructor(freeAtHome: FreeAtHomeApi, channelNumber: number, serialNumber: string, name: string, deviceType: DeviceType, delegate: FreeAtHomeRawDelegateInterface, ) {
        this.freeAtHome = freeAtHome;
        this.channelNumber = channelNumber;
        this.serialNumber = serialNumber;
        this.name = name;
        this.deviceType = deviceType;

        this.delegate = delegate;

        delegate.on("datapointChanged", this.delegateDatapointChanged.bind(this));
    }

    delegateDatapointChanged(datapointId: DatapointIds, value: string): void {
        const { delegate, channelNumber, serialNumber } = this;
        this.freeAtHome.setDatapoint(serialNumber, channelNumber, datapointId, value);
    }

    dataPointChanged(channel: number, id: DatapointIds, value: string): void {
        const { delegate } = this;
        console.log("datapoint changed %s %s", channel, id);
        delegate.dataPointChanged(channel, id, value);
    }

    parameterChanged(id: ParameterIds, value: string): void {
        const { delegate } = this;
        console.log("debug: %s %s", id, value);
        delegate.parameterChanged(id, value);
    }
}