export enum PairingIds {
    AL_SWITCH_ON_OFF = 0x0001,	//	Switch On/Off
    AL_TIMED_START_STOP = 0x0002,	//	Timed Start/Stop
    AL_FORCED = 0x0003,	//	Force-position
    AL_SCENE_CONTROL = 0x0004,	//	Scene Control
    AL_TIMED_MOVEMENT = 0x0006,	//	Movement under consideration of brightness
    AL_TIMED_PRESENCE = 0x0007,	//	Presence
    AL_RELATIVE_SET_VALUE_CONTROL = 0x0010,	//	Relative Set Value
    AL_ABSOLUTE_SET_VALUE_CONTROL = 0x0011,	//	Absolute Set Value
    AL_NIGHT = 0x0012,	//	Night
    AL_RESET_ERROR = 0x0013,	//	invalid string id
    AL_RGB = 0x0015,	//	RGB color
    AL_COLOR_TEMPERATURE = 0x0016,	//	Color Temperature
    AL_HSV = 0x0017,	//	HSV
    AL_COLOR = 0x0018,	//	HUE
    AL_SATURATION = 0x0019,	//	Saturation
    AL_MOVE_UP_DOWN = 0x0020,	//	Move Up/Down
    AL_STOP_STEP_UP_DOWN = 0x0021,	//	Adjust Up/Down
    AL_SET_ABSOLUTE_POSITION_BLINDS_PERCENTAGE = 0x0023,	//	Set Absolute Position Blinds
    AL_SET_ABSOLUTE_POSITION_SLATS_PERCENTAGE = 0x0024,	//	Set Absolute Position Slats
    AL_WIND_ALARM = 0x0025,	//	Wind Alarm
    AL_FROST_ALARM = 0x0026,	//	Frost Alarm
    AL_RAIN_ALARM = 0x0027,	//	Rain Alarm
    AL_FORCED_UP_DOWN = 0x0028,	//	Force-position blind
    AL_WINDOW_DOOR_POSITION = 0x0029,	//	Window/Door position
    AL_ACTUATING_VALUE_HEATING = 0x0030,	//	Actuating Value Heating
    AL_FAN_COIL_LEVEL = 0x0031,	//	Fan Level Heating
    AL_ACTUATING_VALUE_COOLING = 0x0032,	//	Actuating Value Cooling
    AL_SET_POINT_TEMPERATURE = 0x0033,	//	Set Value Temperature
    AL_RELATIVE_SET_POINT_TEMPERATURE = 0x0034,	//	Relative Set Point Temperature
    AL_WINDOW_DOOR = 0x0035,	//	Window/Door
    AL_STATE_INDICATION = 0x0036,	//	Status indication
    AL_FAN_MANUAL_ON_OFF = 0x0037,	//	Fan Manual Heating On/Off
    AL_CONTROLLER_ON_OFF = 0x0038,	//	Controller On/Off
    AL_RELATIVE_SET_POINT_REQUEST = 0x0039,	//	Relative Set Point Request
    AL_ECO_ON_OFF = 0x003A,	//	Eco mode On/Off Request
    AL_COMFORT_TEMPERATURE = 0x003B,	//	Comfort Temperature
    AL_FAN_STAGE_REQUEST = 0x0040,	//	Fan Level Request
    AL_FAN_MANUAL_ON_OFF_REQUEST = 0x0041,	//	Fan Manual On/Off Request
    AL_CONTROLLER_ON_OFF_REQUEST = 0x0042,	//	Controller On/Off Request
    AL_ECO_ON_OFF_INDICATION = 0x0044,	//	Eco mode On/Off Request
    AL_INFO_ON_OFF = 0x0100,	//	Info On/Off
    AL_INFO_FORCE = 0x0101,	//	Force-position info
    AL_SYSAP_INFO_ON_OFF = 0x0105,	//	SysAP-InfoOnOff
    AL_SYSAP_INFO_FORCE = 0x0106,	//	SysAP-InfoForce
    AL_INFO_ACTUAL_DIMMING_VALUE = 0x0110,	//	Info Actual Dimming Value
    AL_INFO_ERROR = 0x0111,	//	Info Error
    AL_SYSAP_INFO_ACTUAL_DIMMING_VALUE = 0x0115,	//	SysAP-InfoCurrentDimmingValue
    AL_SYSAP_INFO_ERROR = 0x0116,	//	SysAP-InfoError
    AL_INFO_COLOR_TEMPERATURE = 0x0118,	//	Info Color Temperature
    AL_SYSAP_INFO_COLOR_TEMPERATURE = 0x011A,	//	SysAP-Info Color Temperature
    AL_INFO_HSV = 0x011B,	//	Info HSV
    AL_SYSAP_INFO_HSV = 0x011C,	//	SysAP Info HSV
    AL_INFO_COLOR_MODE = 0x011D,	//	Info Color Mode
    AL_SYSAP_INFO_COLOR_MODE = 0x011E,	//	SysAP Info Color Mode
    AL_INFO_MOVE_UP_DOWN = 0x0120,	//	Info Move Up/Down
    AL_CURRENT_ABSOLUTE_POSITION_BLINDS_PERCENTAGE = 0x0121,	//	Current Absolute Position Blinds Percentage
    AL_CURRENT_ABSOLUTE_POSITION_SLATS_PERCENTAGE = 0x0122,	//	Current Absolute Position Slats Percentage
    AL_SYSAP_INFO_MOVE_UP_DOWN = 0x0125,	//	SysAP-InfoMoveUpDown
    AL_SYSAP_CURRENT_ABSOLUTE_POSITION_BLINDS_PERCENTAGE = 0x0126,	//	SysAP-InfoCurrentAbsoluteBlindsPercentage
    AL_SYSAP_CURRENT_ABSOLUTE_POSITION_SLATS_PERCENTAGE = 0x0127,	//	SysAP-InfoCurrentAbsoluteSlatsPercentage
    AL_MEASURED_TEMPERATURE = 0x0130,	//	Measured Temperature
    AL_INFO_VALUE_HEATING = 0x0131,	//	Info Value Heating
    AL_INFO_VALUE_COOLING = 0x0132,	//	Info value cooling
    AL_HEATING_COOLING = 0x0135,	//	Switchover heating/cooling
    AL_ACTUATING_FAN_STAGE_HEATING = 0x0136,	//	Actuating Fan Stage Heating
    AL_INFO_ABSOLUTE_SET_POINT_REQUEST = 0x0140,	//	Absolute setpoint temperature
    AL_INFO_ACTUATING_VALUE_ADD_HEATING = 0x0141,	//	Additional heating value info
    AL_INFO_ACTUATING_VALUE_ADD_COOLING = 0x0142,	//	Additional cooling value info
    AL_ACTUATING_VALUE_ADD_HEATING = 0x0143,	//	Control value additional heating
    AL_ACTUATING_VALUE_ADD_COOLING = 0x0144,	//	Control value additional cooling
    AL_INFO_FAN_ACTUATING_STAGE_HEATING = 0x0145,	//	Info Actuating Fan Stage Heating
    AL_INFO_FAN_MANUAL_ON_OFF_HEATING = 0x0146,	//	Info Actuating Fan Manual On/Off Heating
    AL_ACTUATING_FAN_STAGE_COOLING = 0x0147,	//	Actuating Fan Stage Cooling
    AL_INFO_FAN_ACTUATING_STAGE_COOLING = 0x0149,	//	Info Fan Stage Cooling
    AL_INFO_FAN_MANUAL_ON_OFF_COOLING = 0x014A,	//	Info Fan Manual On/Off Cooling
    AL_HEATING_ACTIVE = 0x014B,	//	Heating active
    AL_COOLING_ACTIVE = 0x014C,	//	Cooling active
    AL_HEATING_DEMAND = 0x014D,	//	Heating demand
    AL_COOLING_DEMAND = 0x014E,	//	Cooling demand
    AL_INFO_HEATING_DEMAND = 0x014F,	//	Heating demand feedback signal
    AL_INFO_COOLING_DEMAND = 0x0150,	//	Cooling demand feedback signal
    AL_HUMIDITY = 0x0151,	//	Humidity
    AL_AUX_ON_OFF_REQUEST = 0x0152,	//	Aux On/Off request
    AL_AUX_ON_OFF_RESPONSE = 0x0153,	//	Aux On/Off response
    AL_HEATING_ON_OFF_REQUEST = 0x0154,	//	Heating On/Off request
    AL_COOLING_ON_OFF_REQUEST = 0x0155,	//	Cooling On/Off request
    AL_INFO_OPERATION_MODE = 0x0156,	//	Operation mode
    AL_INFO_SWING_MODE = 0x0157,	//	Swing H/V
    AL_SUPPORTED_FEATURES = 0x0158,	//	Supported features
    AL_EXTENDED_STATUS = 0x0159,	//	Extended Status Indication
    AL_EXTENDED_STATUS_US = 0x015A,	//	Extended Status Indication
    AL_AUX_HEATING_ON_OFF_REQUEST = 0x015B,	//	Aux Heating On Off Request
    AL_EMERGENCY_HEATING_ON_OFF_REQUEST = 0x015C,	//	Emergency Heating On Off Request
    AL_RELATIVE_FAN_SPEED_CONTROL = 0x0160,	//	Relative fan speed control
    AL_ABSOLUTE_FAN_SPEED_CONTROL = 0x0161,	//	Absolute fan speed control
    AL_INFO_ABSOLUTE_FAN_SPEED = 0x0162,	//	Info absolute fan speed
    AL_SYSAP_INFO_ABSOLUTE_FAN_SPEED = 0x0163,	//	SysAP-InfoActualFanSpeed
    AL_NOTIFICATION_FLAGS = 0x01A0,	//	Notification flags
    AL_BOOL_VALUE_1 = 0x0280,	//	Power RC
    AL_BOOL_VALUE_2 = 0x0281,	//	Power RH
    AL_BOOL_VALUE_3 = 0x0282,	//	Proximity status
    AL_SCALING_VALUE_1 = 0x0290,	//	Brightness sensor
    AL_SCALING_VALUE_2 = 0x0291,	//	Last touch
    AL_SCALING_VALUE_3 = 0x0292,	//	LED backlight night mode
    AL_LOCATOR_BEEP = 0x02C0,	//	Locator beep
    AL_SWITCH_TEST_ALARM = 0x02C1,	//	Switch test alarm
    AL_FIRE_ALARM_ACTIVE = 0x02C3,	//	Fire alarm active
    AL_OUTDOOR_TEMPERATURE = 0x0400,	//	Outside temperature
    AL_WIND_FORCE = 0x0401,	//	Wind force
    AL_BRIGHTNESS_ALARM = 0x0402,	//	Brightness alarm
    AL_BRIGHTNESS_LEVEL = 0x0403,	//	Lux value
    AL_WIND_SPEED = 0x0404,	//	Wind speed
    AL_RAIN_SENSOR_ACTIVATION_PERCENTAGE = 0x0405,	//	Rain detection
    AL_RAIN_SENSOR_FREQUENCY = 0x0406,	//	Rain sensor frequency
    AL_MEDIA_PLAY = 0x0440,	//	Play
    AL_MEDIA_PAUSE = 0x0441,	//	Pause
    AL_MEDIA_NEXT = 0x0442,	//	Next
    AL_MEDIA_PREVIOUS = 0x0443,	//	Previous
    AL_MEDIA_PLAY_MODE = 0x0444,	//	Play mode
    AL_MEDIA_MUTE = 0x0445,	//	Mute
    AL_RELATIVE_VOLUME_CONTROL = 0x0446,	//	Relative volume control
    AL_ABSOLUTE_VOLUME_CONTROL = 0x0447,	//	Absolute volume control
    AL_GROUP_MEMBERSHIP = 0x0448,	//	Group membership
    AL_PLAY_FAVORITE = 0x0449,	//	Play favorite
    AL_PLAY_NEXT_FAVORITE = 0x044A,	//	Play next favorite
    AL_PLAYBACK_STATUS = 0x0460,	//	Playback status
    AL_INFO_MEDIA_CURRENT_ITEM_METADATA = 0x0461,	//	Current item metadata info
    AL_INFO_MUTE = 0x0462,	//	Info mute
    AL_INFO_ACTUAL_VOLUME = 0x0463,	//	Info actual volume
    AL_ALLOWED_PLAYBACK_ACTIONS = 0x0464,	//	Allowed playback actions
    AL_INFO_GROUP_MEMBERSHIP = 0x0465,	//	Info group membership
    AL_INFO_PLAYING_FAVORITE = 0x0466,	//	Info playing favorite
    AL_ABSOLUTE_GROUP_VOLUME_CONTROL = 0x0467,	//	Absolute Group Volume Control
    AL_INFO_ABSOLUTE_GROUP_VOLUME = 0x0468,	//	Info Absolute Group Volume
    AL_INFO_CURRENT_MEDIA_SOURCE = 0x0469,	//	Media source
    AL_SOLAR_POWER_PRODUCTION = 0x04A0,	//	Solar power production
    AL_INVERTER_OUTPUT_POWER = 0x04A1,	//	Inverter output power
    AL_SOLAR_ENERGY_TODAY = 0x04A2,	//	Solar energy (today)
    AL_INJECTED_ENERGY_TODAY = 0x04A3,	//	Injected energy (today)
    AL_PURCHASED_ENERGY_TODAY = 0x04A4,	//	Purchased energy (today)
    AL_NOTIFICATION_RUN_STANDALONE = 0x04A5,	//	Inverter alarm
    AL_SELF_CONSUMPTION = 0x04A6,	//	Self-consumption
    AL_SELF_SUFFICIENCY = 0x04A7,	//	Self-sufficiency
    AL_HOME_POWER_CONSUMPTION = 0x04A8,	//	Home power consumption
    AL_POWER_TO_GRID = 0x04A9,	//	Power to grid
    AL_CONSUMED_ENERGY_TODAY = 0x04AA,	//	Consumed energy (today)
    AL_NOTIFICATION_METER_COMMUNICATION_ERROR_WARNING = 0x04AB,	//	Meter alarm
    AL_SOC = 0x04AC,	//	Battery level
    AL_BATTERY_POWER = 0x04AD,	//	Battery power
    AL_BOOST_ENABLE_REQUEST = 0x04B0,	//	Boost
    AL_STOP_CHARGING_SESSIONS_REQUEST = 0x04B1,	//	Stop charging request
    AL_STOP_ENABLE_CHARGING_REQUEST = 0x04B2,	//	Enable charging request
    AL_INFO_BOOST = 0x04B3,	//	Info boost
    AL_INFO_WALLBOX_STATUS = 0x04B4,	//	Info wallbox status
    AL_INFO_CHARGING = 0x04B5,	//	Info charging
    AL_INFO_CHARGING_ENABLED = 0x04B6,	//	Info charging enabled
    AL_INFO_INSTALLED_POWER = 0x04B7,	//	Info installed power
    AL_INFO_ENERGY_TRANSMITTED = 0x04B8,	//	Info transmitted energy
    AL_INFO_CAR_RANGE = 0x04B9,	//	Info car range
    AL_INFO_START_OF_CHARGING_SESSION = 0x04BA,	//	Info charging duration
    AL_INFO_LIMIT_FOR_CHARGER = 0x04BB,	//	Info current limit
    AL_INFO_LIMIT_FOR_CHARGER_GROUP = 0x04BC,	//	Info current limit for group
    AL_INFO_ALBUM_COVER_URL = 0x04BD,	//	Album cover URL
    AL_INFO_CURRENT_SOLAR_POWER = 0x04BE,
    AL_INFO_CURRENT_INVERTER_OUTPUT_POWER = 0x04BF,
    AL_INFO_CURRENT_HOME_POWER_CONSUMPTION = 0x04C0,
    AL_INFO_CURRENT_POWER_TO_GRID = 0x04C1,
    AL_INFO_CURRENT_BATTERY_POWER = 0x04C2,
    AL_INFO_TOTAL_ENERGY_FROM_GRID = 0x04C3,
    AL_INFO_TOTAL_ENERGY_TO_GRID = 0x04C4,
    AL_MEASURED_CURRENT_POWER_CONSUMED = 0x04C5,
    AL_MEASURED_CONSUMED_ENERGY_TODAY = 0x04C6,        
    AL_MEASURED_PROVIDED_ENERGY_TODAY = 0x04C7,
    AL_MEASURED_TOTAL_ENERGY_CONSUMED = 0x04C8,
    AL_MEASURED_TOTAL_ENERGY_PROVIDED = 0x04C9,
    AL_DISARM_SYSTEM = 0x0501,	//	secure@home Central Unit
    AL_DISARM_COUNTER = 0x0502,	//	DomusDisarmCounter
    AL_INFO_INTRUSION_ALARM = 0x0504,	//	Intrusion Alarm
    AL_INFO_SAFETY_ALARM = 0x0505,	//	Safety Alarm
    AL_INFO_ERROR_STATUS = 0x0507,	//	InfoConfigurationStatus
    AL_ENABLE_CONFIGURATION = 0x0508,	//	Enable configuration
    AL_DOMUS_ZONE_CONTROL = 0x0509,	//	Disarming LED
    AL_DOMUS_KEY_INFO = 0x050A,	//	AES Key
    AL_ZONE_STATUS = 0x050B,	//	Zone status
    AL_DOMUS_DISARM_DELAY_TIME = 0x050E,	//	Time
    AL_START_STOP = 0x0600,	//	Start / Stop
    AL_PAUSE_RESUME = 0x0601,	//	Pause / Resume
    AL_SELECT_PROGRAM = 0x0602,	//	Select program
    AL_DELAYED_START_TIME = 0x0603,	//	Delayed start time
    AL_INFO_STATUS = 0x0604,	//	Info status
    AL_INFO_REMOTE_START_ENABLED = 0x0605,	//	Info remote start enabled
    AL_INFO_PROGRAM = 0x0606,	//	Info program
    AL_INFO_FINISH_TIME = 0x0607,	//	Info finish time
    AL_INFO_DELAYED_START_TIME = 0x0608,	//	Info delayed start
    AL_INFO_DOOR = 0x0609,	//	Info door
    AL_INFO_DOOR_ALARM = 0x060A,	//	Info door alarm
    AL_SWITCH_SUPERCOOL = 0x060B,	//	Switch supercool
    AL_SWITCH_SUPERFREEZE = 0x060C,	//	Switch superfreeze
    AL_INFO_SWITCH_SUPERCOOL = 0x060D,	//	Info switch supercool
    AL_INFO_SWITCH_SUPERFREEZE = 0x060E,	//	Info switch superfreeze
    AL_CURRENT_TEMPERATURE_APPLIANCE_1 = 0x060F,	//	Measured Temperature
    AL_CURRENT_TEMPERATURE_APPLIANCE_2 = 0x0610,	//	Measured Temperature
    AL_SETPOINT_TEMPERATURE_APPLIANCE_1 = 0x0611,	//	Set Value Temperature
    AL_SETPOINT_TEMPERATURE_APPLIANCE_2 = 0x0612,	//	Set Value Temperature
    AL_CHANGE_OPERATION = 0x0613,	//	Change operation
    AL_INFO_VERBOSE_STATUS = 0x0614,	//	Detailed status info
    AL_INFO_REMAINING_TIME = 0x0615,	//	Info remaining time
    AL_INFO_STATUS_CHANGED_TIME = 0x0616,	//	Time of last status change (start, finish, etc.)
    AL_LOCK_UNLOCK_COMMAND = 0x0618,	//	Lock/Unlock door command
    AL_INFO_LOCK_UNLOCK_COMMAND = 0x0619,	//	Info Locked / Unlocked
    AL_INFO_PRESSURE = 0x061A,  // Info Air Pressure
    AL_INFO_CO_2 = 0x061B,  // Info CO2 Value
    AL_INFO_CO = 0x061C,    // Info CO Value
    AL_INFO_NO_2 = 0x061D,  // Info NO2 Value
    AL_INFO_O_3 = 0x061E,   // Info O3 Value
    AL_INFO_PM_10 = 0x061F, // Info PM 10 Value
    AL_INFO_PM_2_5 = 0x0620,    // Info PM 2.5 Value
    AL_INFO_VOC = 0x0621,   // Info VOC Value
    AL_TIME_OF_DAY = 0xF001,	//	Time
    AL_DATE = 0xF002,	//	Date
    AL_MESSAGE_CENTER_NOTIFICATION = 0xF003,	//	Notification
    AL_SWITCH_ENTITY_ON_OFF = 0xF101,	//	Switch entity On/Off
    AL_INFO_SWITCH_ENTITY_ON_OFF = 0xF102,	//	Info switch entity On/Off
    AL_CONSISTENCY_TAG = 0xF104,	//	Consistency Tag
    AL_BATTERY_STATUS = 0xF105,	//	Battery Status
    AL_STAY_AWAKE = 0xF106,	//	Stay awake!
    AL_PROXY_1_TO_6_BIT = 0xF107,	//	Proxy switch
    AL_PROXY_1_BYTE = 0xF108,	//	Proxy, 1 byte
    AL_PROXY_2_BYTE = 0xF109,	//	Proxy, 2 byte
    AL_PROXY_4_BYTE = 0xF10A,	//	Proxy, 4 byte
    AL_CYCLIC_SLEEP_TIME = 0xF10B,	//	Cyclic sleep time
    AL_SYSAP_PRESENCE = 0xF10C,	//	Presence
    AL_SYSAP_TEMPERATURE = 0xF10D,	//	Measured temperature 1
    AL_STANDBY_STATISTICS = 0xF10E,	//	Standby Statistics
    AL_HEARTBEAT_DELAY = 0xF10F,	//	Heartbeat delay
    AL_INFO_HEARTBEAT_DELAY = 0xF110,	//	Info heartbeat delay
    AL_MEASURED_TEMPERATURE_1 = 0xFF01,	//	Measured temperature 1
    AL_MEASURED_TEMPERATURE_2 = 0xFF02,	//	Measured temperature 2
    AL_MEASURED_TEMPERATURE_3 = 0xFF03,	//	Measured temperature 3
    AL_MEASURED_TEMPERATURE_4 = 0xFF04,	//	Measured temperature 4

}