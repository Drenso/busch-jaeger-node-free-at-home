import { FreeAtHomeApi, DatapointIds, ParameterIds } from './freeAtHomeApi';
import { NodeState, FreeAtHomeChannelInterface, FreeAtHomeOnOffDelegateInterface } from './freeAtHomeDeviceInterface';
import { DeviceType } from '.';

export class FreeAtHomeOnOffChannel implements FreeAtHomeChannelInterface {
    deviceType: DeviceType = DeviceType.switchingActuator;
    serialNumber: string;
    name: string;
    channelNumber: number;
    freeAtHome: FreeAtHomeApi;
    delegate: FreeAtHomeOnOffDelegateInterface;

    constructor(freeAtHome: FreeAtHomeApi, channelNumber: number, serialNumber: string, name: string, delegate: FreeAtHomeOnOffDelegateInterface) {
        this.freeAtHome = freeAtHome;
        this.channelNumber = channelNumber;
        this.serialNumber = serialNumber;
        this.name = name;

        this.delegate = delegate;
    }

    setDatapoint(freeAtHome: FreeAtHomeApi, datapointId: DatapointIds, value: string) {
        const { channelNumber, serialNumber } = this;
        freeAtHome.setDatapoint(serialNumber, channelNumber, datapointId, value);
    }

    dataPointChanged(channel: number, id: DatapointIds, value: string): void {
        const { delegate, freeAtHome } = this;

        switch (<DatapointIds>id) {
            case DatapointIds.switchOnOff: {
                switch (value) {
                    case "1": {
                        delegate.setOn(true);
                        this.setDatapoint(freeAtHome, DatapointIds.infoOnOff, value);
                        break;
                    }
                    case "0": {
                        delegate.setOn(false);
                        this.setDatapoint(freeAtHome, DatapointIds.infoOnOff, value);
                        break;
                    }
                }
                break;
            }
        }
    }

    parameterChanged(id: ParameterIds, value: string): void {
    }
}